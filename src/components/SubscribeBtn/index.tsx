import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeBtnProps{
  priceId:string;
}

export function SubscribeBtn({priceId} : SubscribeBtnProps){
  const {data: session} = useSession();

  async function handleSubscribe(){
    if(!session) {
      signIn('github')
      return
    }

    try{
      const response = await api.post('/checkout')
      const { sessionId } = response.data

      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({sessionId: sessionId})
      
console.log(sessionId)

    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button type="button" className={styles.subscribeBtn} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}