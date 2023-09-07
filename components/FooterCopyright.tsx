import siteMetadata from "data/siteMetadata";

const FooterCopyright = () => (
  <div className="footer-copyright text-primary-500 hove:underline">
    © Copyright {new Date().getFullYear()} {siteMetadata.title}. 
  </div>
);

export { FooterCopyright };