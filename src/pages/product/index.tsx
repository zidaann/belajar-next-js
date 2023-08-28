import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(false)
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push('auth/login')
    }
  }, [])
  return (
    <div>Product Page</div>
  )
}
