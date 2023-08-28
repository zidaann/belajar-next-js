import React from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';

type AppShellProps = {
  children: React.ReactNode;
}

const disabledNavbar = ["/auth/login", "/auth/register"]

const AppShell = (props: AppShellProps) => {
  const { children } = props
  const { pathname } = useRouter()
  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  )
}

export default AppShell
