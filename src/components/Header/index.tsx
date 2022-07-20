import { FaGithub } from 'react-icons/fa'
import { ActiveLink } from '../ActiveLink'
import { SignInBtn } from './SignInBtn'
import styles from './styles.module.scss'

export function Header() {
  
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a> 
          </ActiveLink>
        </nav>
        <SignInBtn />
      </div>
    </header>
  )
}