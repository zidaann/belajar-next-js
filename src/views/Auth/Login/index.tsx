import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './Login.module.scss'


export default function LoginViews() {
  const route = useRouter();
  const handleLogin = () => {
    route.push('/product')
  }
  return (
    <div className={styles.login}>
      <h1>Ini halaman Login</h1>
      <div>
        <button onClick={() => handleLogin()}>Go to product</button>
      </div>
      <Link href={'/auth/register'}>Kunjungi Register</Link>
    </div>
  )
}
