import { getDefaultLayout } from '@app/shared/components/layout';
import ThemeProvider from '@app/shared/components/theme/ThemeProvider';
import { AppPropsWithLayout } from '@app/shared/models/PageInterface';
import '@app/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}

export default appWithTranslation(App /*, nextI18NextConfig */);
