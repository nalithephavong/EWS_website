import Link from 'next/link';

import { Background } from '../components/Background';
import { Button } from '../components/Button';
import { HeroOneButton } from '../components/HeroOneButton';
import { Section } from '../layouts/Section';
import siteMetadata from '../data/siteMetadata';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section>
      <HeroOneButton
        title={
          <>
            {'Lorem ipsum dolor.\n'}
            <span className="text-primary-500">sit amet.</span>
          </>
        }
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        button={
          <Link href={`mailto:${siteMetadata.email}`}>
            <Button 
              xl
            >
                Contact Us To Get Started
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };