import Head from 'next/head';
import { ClientOnlyColorModeSwitch } from '@app/shared/components/color-mode/ColorMode';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  // Add custom props here
};

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline dark:text-cyan-950 text-green-400">
          {t('description')}
        </h1>
        <ClientOnlyColorModeSwitch />
      </main>
    </>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});
