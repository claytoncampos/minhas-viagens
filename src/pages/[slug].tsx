import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GetStaticProps } from 'next'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading
  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
}

//gera as urls das páginas
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

//getStaticPaths (gerar url em build time /about/trip/guarulhos)
//getStaticProps (buscar os dados da página (props) estático
//getServerSideProps (buscar os dados da página (props) run time - toda requisão (bundle fica no server)
//getInitialProps (buscar os dados da página (props) run time - toda requisão (bundle tambem vem para o client)
