import { Meta } from '../layouts/Meta';
import { Banner } from '../templates/Banner';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import siteMetadata from 'data/siteMetadata';

export default function Index () {
  return (
    <div className="text-gray-600 antialiased">
      <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
      <Meta title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
    </div>
  );
}
