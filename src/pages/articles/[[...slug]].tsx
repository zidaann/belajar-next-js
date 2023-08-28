import { useRouter } from 'next/router'
import React from 'react'

export default function DetailArticlePage() {
  const { query } = useRouter()
  console.log(query.slug)
  return (
    <div>
      <div>{!query.slug ? 'Ini halaman article' : 'Ini halaman detail article'}</div>
      {
        query.slug &&
        <>
          <div className='capitalize'>Category article: {query.slug[0]}</div>
          <div className='capitalize'>Programming Language: {query.slug[1]}</div>
        </>
      }

    </div>
  )
}

/**
 * Catatan:
 * #### Baca catatan di product
 * 
 * 
 * coba pakai url http://localhost:3000/articles/programming , ini masih work
 *                http://localhost:3000/articles/programming/javascript, dan ini juga masih work
 *                                     segment 1/ segment 2/ segment 3 
 * Dinamic Routing Next Js ini sangat sakti bjir....
 * 
 * Tanpa fitur yang diberikan next js ini, kebayang jika kita punya banyak segment dalam url, kita harus membuat nested folder bjirrr...
 * 
 *  */

/** 
 * Apakah bisa kita langsung menyatukan file tanpa buat file index?
 * Jawab: Bisa, cukup tambahkan [] pada [..slug].tsx
 * maka akan menjai [[...slug]].tsx
 * 
 * Nah perlu diketahui, jika dijadikan seperti itu, maka slug menjadi optional
 * */
