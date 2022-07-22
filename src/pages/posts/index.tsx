import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'
import { RichText } from  'prismic-dom'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Link from 'next/link';

type Post = {
  slug: string,
  title: string,
  exerpt: string,
  updatedAt: string,
}

interface PostsProps{
  posts: Post[]
}

export default function Posts({posts} : PostsProps){
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.posts}>
          { posts.map( post => (
            <Link href={`/posts/${post.slug}`}>
              <a  key={post.slug}>
                <time> { post.updatedAt } </time>
                <strong> { post.title } </strong>
                <p> {post.exerpt } </p>
              </a>
            </Link>
          ))}
        </article>
      </main>
    </>
  )

}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ],{
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response);
  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      exerpt: post.data.content.find((content: any) => content.type === 'paragraph')?. text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',  {
        day:'2-digit',
        month:'long',
        year: 'numeric'
      })
    }
  })
  return {
    props: {
      posts
    }
  }
}