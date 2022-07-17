import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'
import { getPrismicCliente } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts(){
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.posts}>
          <a href="#">
            <time>2022</time>
            <strong>Teste</strong>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dolore nostrum rem facilis. Quas, magnam expedita omnis enim ducimus, a at officiis laudantium adipisci eaque nisi, ut tempore atque. </p>
          </a>

          <a href="#">
            <time>2022</time>
            <strong>Teste</strong>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dolore nostrum rem facilis. Quas, magnam expedita omnis enim ducimus, a at officiis laudantium adipisci eaque nisi, ut tempore atque. </p>
          </a>


          <a href="#">
            <time>2022</time>
            <strong>Teste</strong>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dolore nostrum rem facilis. Quas, magnam expedita omnis enim ducimus, a at officiis laudantium adipisci eaque nisi, ut tempore atque. </p>
          </a>
        </article>
      </main>
    </>
  )

}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicCliente()
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ],{
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response);
  
  return {
    props: {}
  }
}