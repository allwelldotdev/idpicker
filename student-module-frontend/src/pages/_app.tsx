import { appWithTranslation } from 'next-i18next';
import { Providers } from "@/components/providers";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(MyApp);
