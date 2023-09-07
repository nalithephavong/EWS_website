import Link from 'next/link';

import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { Section } from '../layouts/Section';
import siteMetadata from '../data/siteMetadata';

const Banner = () => (
  <Section>
    <CTABanner
      title="Call to action."
      subtitle="Sub title."
      button={
        <>
          <Link href={`mailto:${siteMetadata.email}`}>
            <Button 
            >
              Contact Us
            </Button>
          </Link>
        </>
      }
    />
  </Section>
);

export { Banner };