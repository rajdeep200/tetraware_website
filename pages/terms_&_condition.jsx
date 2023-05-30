/* eslint-disable react/no-unescaped-entities */
import Base from "@layouts/Baseof";
import config from "@config/config.json";

// for all regular pages
const PrivacyPolicy = ({ data }) => {
  const { title } = config.site;
  return (
    <Base title={title}>
      <div className="m-3">
        <h3 className="py-3 text-center">Terms and Conditions</h3>
        <p>Effective Date: 01/01/2023</p>
        <p className="text-md my-3 text-justify text-black">
          Please read these Terms and Conditions ("Terms") carefully before
          using our website. By accessing or using our website, you agree to be
          bound by these Terms. If you do not agree with any part of these
          Terms, you may not access or use our website.
        </p>
        <ul>
          <li className="mb-5">
            <h5>Intellectual Property:</h5> All content on our website,
            including text, graphics, logos, images, and software, is the
            property of Tetraware Technologies or its licensors and is protected
            by intellectual property laws. You may not reproduce, distribute,
            modify, or exploit any content without prior written consent from
            Tetraware Technologies.
          </li>
          <li className="mb-5">
            <h5>Website Use:</h5>
            You agree to use our website for lawful purposes and in a manner
            that does not infringe upon the rights of others or restrict or
            inhibit their use of the website. You shall not engage in any
            activity that could damage, disable, or impair the website's
            functionality or interfere with other users' access to the website.
          </li>
          <li className="mb-5">
            <h5>User Accounts:</h5>
            Some features of our website may require you to create a user
            account. You are responsible for maintaining the confidentiality of
            your account credentials and for all activities that occur under
            your account. You agree to provide accurate and complete information
            when creating your account and to notify us immediately of any
            unauthorized use of your account.
          </li>
          <li className="mb-5">
            <h5>Third-Party Links:</h5>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Tetraware Technologies. We have
            no control over, and assume no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services. You acknowledge and agree that Tetraware Technologies
            shall not be liable, directly or indirectly, for any damage or loss
            caused by or in connection with the use of or reliance on any
            content, products, or services available on or through any
            third-party websites or services.
          </li>
          <li className="mb-5">
            <h5>Limitation of Liability:</h5>
            To the fullest extent permitted by law, Tetraware Technologies shall
            not be liable for any direct, indirect, incidental, special,
            consequential, or exemplary damages, including but not limited to
            damages for loss of profits, goodwill, use, data, or other
            intangible losses, resulting from your access to or use of our
            website or any content therein.
          </li>
          <li className="mb-5">
            <h5>Indemnification:</h5>
            You agree to indemnify and hold Tetraware Technologies, its
            affiliates, officers, directors, employees, agents, and licensors
            harmless from any claims, losses, damages, liabilities, and
            expenses, including reasonable attorneys' fees, arising out of your
            use of our website, violation of these Terms, or infringement of any
            intellectual property or other rights of any person or entity.
          </li>
          <li className="mb-5">
            <h5>Modifications to Terms and Website:</h5>
            Tetraware Technologies reserves the right, at its sole discretion,
            to modify or replace these Terms at any time without prior notice.
            We also reserve the right to modify or discontinue our website or
            any part thereof without liability or obligation. Your continued use
            of our website after the posting of any changes to these Terms
            constitutes your acceptance of those changes.
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
            <h5>Governing Law and Jurisdiction:</h5>
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes arising out of or in connection with
            these Terms shall be subject to the exclusive jurisdiction of the
            courts of India.
          </li>
          <li>
            <h5>Contact Us:</h5>
            If you have any questions, concerns, or feedback regarding these
            Terms, please contact us at info@tetraware.co.in.
          </li>
        </ul>
        <p className="text-md my-3 text-justify text-black">
          By accessing or using our website, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </p>
      </div>
    </Base>
  );
};
export default PrivacyPolicy;
