import React from 'react';

import { Section } from '../components/Section';
import { ContactForm } from '../containers/Form/Contact';
import { PanelTemplate } from '../templates/Panel';

const Contact = () => (
  <PanelTemplate
    title="Contact"
    description="Contact form and/or information goes here"
    heading="This is the contact page"
    subheading="This is an optional subheading in case you need to say more stuff about the about page."
  >
    <Section is="main" color="primary">
      <ContactForm />
    </Section>
  </PanelTemplate>
);

export default Contact;
