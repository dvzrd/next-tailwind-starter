import { useEffect } from 'react';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { AppConfig } from '../config/AppConfig';
import { ThemeProvider } from '../contexts/Theme';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) =>
      gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: AppConfig.locale,
          url: AppConfig.url,
          site_name: AppConfig.site_name,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
