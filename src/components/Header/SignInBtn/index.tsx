import { FaGithub } from 'react-icons/fa'
import { FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn,signOut ,useSession } from 'next-auth/react'

export function SignInBtn() {
  const {data: session, status} = useSession();

  return session 
  ? (
    <button type="button" className={styles.signInBtn} onClick={() => signOut()}>
      <FaGithub color='#04d361' />
        {session.user.name}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInBtn} onClick={() => signIn('github') }>
      <FaGithub color='#eba417' />
        Sign In with Github
    </button>
  ) 
} 