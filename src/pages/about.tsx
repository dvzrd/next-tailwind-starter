import React, { useState } from 'react';

import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Switch } from '../components/Switch';
import { Text } from '../components/Text';
import { PageTemplate } from '../templates/Page';

const About = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <PageTemplate
      title="About"
      description="This is the about page"
      heading="This is the about page"
      subheading="This is an optional subheading in case you need to say more stuff about the about page."
      heroProps={{ color: 'primary' }}
    >
      <Section>
        <Text as="h4" is="title" className="my-4 md:my-5 xl:my-6">
          About page title
        </Text>
        <p className="mb-4 md:mb-5 xl:mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
        <div className="flex flex-row flex-wrap space-x-4">
          <Button className="my-4 md:my-5 xl:my-6">Button</Button>
          <Button className="my-4 md:my-5 xl:my-6" color="primary">
            Primary Button
          </Button>
          <Button className="my-4 md:my-5 xl:my-6" color="secondary">
            Secondary Button
          </Button>
        </div>
        <hr className="my-4" />
        <Text as="h5" is="subtitle">
          Switch
        </Text>
        <Switch checked={switchOn} onChange={() => setSwitchOn(!switchOn)} />
      </Section>
    </PageTemplate>
  );
};

export default About;
