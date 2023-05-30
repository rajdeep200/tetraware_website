/* eslint-disable react/no-unescaped-entities */
import Base from "@layouts/Baseof";
import config from "@config/config.json";

// for all regular pages
const PrivacyPolicy = ({ data }) => {
  const { title } = config.site;
  return (
    <Base title={title}>
      <div className="m-3">
        <h3 className="py-3 text-center">Privacy Policy</h3>
        <p>Effective Date: 01/01/2023</p>
        <ul>
          <li className="mb-5">
            <h5>Introduction:</h5> We, Tetraware Technologies, are committed to
            protecting the privacy and confidentiality of the personal
            information you provide to us through our website. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            information. By accessing and using our website, you consent to the
            practices described in this policy.
          </li>
          <li className="mb-5">
            <h5>Information Collection:</h5>
            We may collect personal information such as your name, email
            address, contact details, and any other information you voluntarily
            provide through our website's contact forms or subscription
            features. Additionally, we may collect non-personal information,
            such as your IP address, browser type, and device information, to
            enhance and improve our website's functionality and user experience.
          </li>
          <li className="mb-5">
            <h5>Use of Information:</h5>
            We use the information collected to respond to your inquiries,
            provide requested services, send relevant communications,
            personalize your experience on our website, and improve our products
            and services. We may also use your information to analyze website
            usage trends, monitor the effectiveness of our marketing campaigns,
            and comply with legal obligations.
          </li>
          <li className="mb-5">
            <h5>Information Sharing:</h5>
            We do not sell, trade, or rent your personal information to third
            parties for their marketing purposes. However, we may share your
            information with trusted service providers who assist us in
            operating our website and delivering services to you. These
            third-party providers are obligated to maintain the confidentiality
            and security of your information.
          </li>
          <li className="mb-5">
            <h5>Data Security:</h5>
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, disclosure,
            alteration, or destruction. However, please note that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </li>
          <li className="mb-5">
            <h5>Cookies and Tracking Technologies:</h5>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience, analyze website usage, and gather
            information about your preferences. You can manage your cookie
            preferences through your browser settings.
          </li>
          <li className="mb-5">
            <h5>External Links:</h5>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review their privacy policies before
            providing any personal information.
          </li>
          <li className="mb-5">
            <h5>Children's Privacy:</h5>
            Our website is not intended for children under the age of 13. We do
            not knowingly collect or solicit personal information from children.
            If we become aware that we have collected personal information from
            a child without parental consent, we will take steps to remove that
            information from our servers.
          </li>
          <li className="mb-5">
            <h5>Updates to this Privacy Policy:</h5>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically for any updates. Your continued use of
            our website after the posting of changes constitutes your acceptance
            of the revised policy.
          </li>
          <li>
            <h5>Contact Us:</h5>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at info@tetraware.co.in.
          </li>
        </ul>
      </div>
    </Base>
  );
};
export default PrivacyPolicy;
