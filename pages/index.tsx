import Head from 'next/head';
import { ClientOnlyColorModeSwitch } from '@app/shared/components/color-mode/ColorMode';
import type { GetStaticProps } from 'next';
import { US, VN } from 'country-flag-icons/react/3x2';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SelectController from '@app/shared/components/form/select/SelectController';
import Tag from '@app/shared/components/tag/Tag';

type Props = {
  // Add custom props here
};

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

const schema = yup
  .object({
    testppppp: yup.mixed().nonNullable(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function Home() {
  const { t } = useTranslation('common');

  const {
    control,
    handleSubmit,
    formState: { isValid, errors: formErrors },
  } = useForm<FormData>({
    defaultValues: {
      testppppp: people[0],
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ClientOnlyColorModeSwitch />

          <SelectController
            data={people}
            control={control}
            defaultValue={people[0]}
            name="testppppp"
            placehoder="Please select"
          />
          <br />
          <input
            type="submit"
            className={`bg-slate-50 cursor-pointer'  ${
              !isValid ? 'bg-gray-400 pointer-events-none' : ''
            }`}
          />
        </form>
        <US title="United States" className="w-6" />
        <VN title="Viet nam" className="w-12" />
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
