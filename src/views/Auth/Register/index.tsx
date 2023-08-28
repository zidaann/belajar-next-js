import React from 'react'
import Link from 'next/link'
import styles from './Register.module.css'

export default function RegisterViews() {
  return (
    <div className={styles.register}>
      <h1>Ini halaman Register</h1>
      <Link href={'/auth/login'}>Kunjungi Login</Link>
      <p className='mt-5 text-lg text-cyan-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis.</p>
    </div>
  )
}
