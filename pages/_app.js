import * as React from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ForceTheme from '../components/force-theme'
import Meta from '@hackclub/meta'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ForceTheme theme="dark" />
        <Component {...pageProps} />
        <Meta title="Choose The Prompt For Epoch" />
      </ThemeProvider>
    )
  }
}
