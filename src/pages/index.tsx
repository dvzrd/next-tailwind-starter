import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Text } from '../components/Text';
import { useTheme } from '../contexts/Theme';
import { PageTemplate } from '../templates/Page';

const Index = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <PageTemplate
      title="Next Starter"
      description="Next Starter lets you skip the boring parts of setting up your architecture and lets you get right to the code."
      heading="Introducing the next best thing..."
      heroProps={{ caption: { align: 'center' } }}
      layout="content"
    >
      <div
        style={
          theme === 'dark' ? { filter: 'invert(1)' } : { filter: 'invert(0)' }
        }
      >
        <Image
          alt="Next Starter Logo"
          layout="responsive"
          src={`${router.basePath}/assets/images/logo.png`}
          width={1200}
          height={630}
        />
      </div>
      <Text as="h2" is="hero" className="text-center">
        Next Starter is a good option for building your own site or app using
        Next JS and React.
      </Text>
    </PageTemplate>
  );
};

export default Index;
