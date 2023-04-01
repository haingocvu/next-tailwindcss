import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script, { ScriptProps } from 'next/script';

import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document<ScriptProps> {
  currentLocale =
    this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  render() {
    return (
      <Html lang={this.currentLocale}>
        <Head />
        <body className="dark:bg-gray-900">
          <Script id="load-theme-config" strategy="beforeInteractive">
            {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
