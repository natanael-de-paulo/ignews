import Prismic from '@prismicio/client'

export function getPrismicCliente(){
  const prismic = Prismic.client(
    process.env.PRISMIC_ACCESS_TOKEN,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return prismic
} 