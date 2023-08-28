import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import AppShell from './components/Layouts/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </Fragment>
  )
}
