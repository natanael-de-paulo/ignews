import Head from 'next/head';
import styles from './style.module.scss';

export default function Posts(){
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main>
        <div>
          <a href="">
            <time>2022</time>
            <strong>Teste</strong>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dolore nostrum rem facilis. Quas, magnam expedita omnis enim ducimus, a at officiis laudantium adipisci eaque nisi, ut tempore atque. </p>
          </a>
        </div>
      </main>
    </>
  )

}
