import { useRouter } from 'next/router'
import React from 'react'

export default function DetailProductPage() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product: {query.id}</p>
    </div>
  )
}

/**
 * Catatan:
 * query.id mengikuti nama filenya
 * jika nama file [product].tsx maka menjadi query.product
 */

/**
 * Lalu bagaimana jika url menjadi seperti ini 
 * url: product/electronic/tv/lg
 * url tersebut sangat panjang, bahkan bisa lebih dari itu. Kebayang bagaimana ketika membuat routing yg mana kita harus membuat nested folder yg sangat banyak
 * oleh karena itu, dengan kehebatan next js ini kita bisa menyelesaikan permasalahan tersebut
 * 
 * cukup kita beri spread operator pada nama file
 * [...product].tsx
 * Iya, cuma itu aja wkwk. sangat kocak next js ini
 * kita contohkan pada halaman article
 * */
