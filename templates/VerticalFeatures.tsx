import { VerticalFeatureRow } from '../components/VerticalFeatureRow';
import { Section } from '../layouts/Section';

const VerticalFeatures = () => (
  <Section
    title="Tag Line"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  >
    <VerticalFeatureRow
      title="Tag 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      image="/assets/network-group.svg"
      imageAlt="Tag 1"
    />
    <VerticalFeatureRow
      title="Tag 2"
      description="With a well-orchestrated approach backed by 15+ years of industry experience, we ensure that our development processes are streamlined and optimized, resulting in the swift and efficient delivery of code that exemplifies excellence."
      image="/assets/wrench.svg"
      imageAlt="Tag 2"
      reverse
    />
    <VerticalFeatureRow
      title="Tag 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      image="/assets/trophy.svg"
      imageAlt="Tag 3"
    />
  </Section>
);

export { VerticalFeatures };