import 'inter-ui/inter.css'
import '@fontsource/ibm-plex-mono'

import App, { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from '@opengovsg/design-system-react'
import { theme } from '~/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  // Redirect to / for all 404 pages
  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(302, { Location: '/' })
    appContext.ctx.res.end()
  }

  return { ...appProps }
}

export default MyApp
