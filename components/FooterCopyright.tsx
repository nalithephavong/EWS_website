import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright text-primary-500 hove:underline">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. 
  </div>
);

export { FooterCopyright };