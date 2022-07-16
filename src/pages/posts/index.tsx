import Head from 'next/head';
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
