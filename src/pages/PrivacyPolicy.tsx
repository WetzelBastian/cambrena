import GeometricAccent from "@/components/GeometricAccent";
import logo from "@/assets/cambrena-logo.svg";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center bg-background">
      {/* Geometric Accents */}
      <GeometricAccent />
      
      {/* Logo */}
      <Link to="/" className="absolute top-12 left-16 hover:opacity-80 transition-opacity">
        <img 
          src={logo} 
          alt="Cambrena Logo"
          className="h-24 object-contain"
        />
      </Link>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 h-[calc(100vh-260px)] overflow-y-auto mt-24">
        <div className="text-left space-y-6 pb-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h1>
          
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Who is Responsible for Data Processing?</h2>
            <p className="text-sm mb-2">Cambrena AG</p>
            <p className="text-sm mb-2">Haldenstrasse 1</p>
            <p className="text-sm mb-2">6340 Baar, Switzerland</p>
            <p className="text-sm mb-2">UID: CHE-307.299.793</p>
            <p className="text-sm mb-2">Email: <a href="mailto:hello@cambrena.net" className="hover:opacity-60 transition-opacity">hello@cambrena.net</a></p>
            <p className="text-sm mt-4">Cambrena AG is the data controller responsible for the processing of your personal data on this website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. What Personal Data Do We Collect?</h2>
            <p className="text-sm mb-2">We collect and process the following personal data:</p>
            <p className="text-sm mb-2"><strong>Identification Data:</strong> Name, email address, job title, and other personal information you provide voluntarily when you contact us, register for services, or subscribe to our newsletter.</p>
            <p className="text-sm mb-2"><strong>Technical Data:</strong> IP address, device identifiers, browser type, operating system, and usage data generated from your interactions with our website.</p>
            <p className="text-sm mb-2"><strong>Behavioral Data:</strong> Data related to how you interact with our website (e.g., pages visited, time spent on pages, clicks, and referring URLs).</p>
            <p className="text-sm mb-2"><strong>Communication Data:</strong> Content of any inquiries, contact form submissions, or customer support communications.</p>
            <p className="text-sm mb-2"><strong>Transactional Data:</strong> Information relevant to payments, contracts, and purchases (e.g., invoices, receipts, etc.).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Why Do We Process Your Data?</h2>
            <p className="text-sm mb-2">We process your personal data for the following purposes:</p>
            <p className="text-sm mb-2"><strong>Providing Services:</strong> To respond to contact forms, provide services, and fulfill contractual obligations.</p>
            <p className="text-sm mb-2"><strong>Analytics & Website Improvement:</strong> To analyze website performance, user experience, and improve our services.</p>
            <p className="text-sm mb-2"><strong>Marketing & Communication:</strong> To send newsletters, updates, and offers (only with your consent).</p>
            <p className="text-sm mb-2"><strong>Legal Obligations & Security:</strong> To comply with legal requirements, ensure the security of our website, and prevent fraud.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. What Personal Data Are Required for Our Services?</h2>
            <p className="text-sm">We collect personal data to provide our services, including your name, email address, and transaction information. Without this data, we may not be able to provide the services requested or fulfill contractual obligations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. How and From Where Do We Obtain Personal Data?</h2>
            <p className="text-sm">We collect personal data directly from you when you interact with us via the website, contact forms, emails, or other communication methods. In some cases, we may use third-party services (e.g., analytics tools, payment processors) that may also collect data on our behalf.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Who Has Access to Your Data?</h2>
            <p className="text-sm">Your personal data is accessible to Cambrena AG's staff and any third-party service providers who assist in operating our website, providing services, or analyzing user data (e.g., hosting providers, analytics tools). These third-party providers are required to process data in accordance with our instructions and applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Will We Transfer Your Data Abroad?</h2>
            <p className="text-sm">We do not transfer personal data outside Switzerland or the EEA, except in limited cases involving service providers (such as cloud services or payment processors). If data is transferred internationally, we ensure that the transfer is secure and compliant with applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Will Your Data Be Disclosed to Third Parties?</h2>
            <p className="text-sm mb-2">We may disclose your personal data to third parties only for the following purposes:</p>
            <p className="text-sm mb-2"><strong>Service Providers:</strong> Data processors who assist us in operating the website and providing services (e.g., payment processors, cloud services, analytics platforms).</p>
            <p className="text-sm mb-2"><strong>Legal Compliance:</strong> If required by law or regulation, or to protect our rights, we may disclose data to authorities or other third parties for compliance purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Do We Use Third-Party Services or Products?</h2>
            <p className="text-sm mb-2">Yes, we integrate third-party services such as:</p>
            <p className="text-sm mb-2"><strong>Google Analytics:</strong> To analyze website usage and improve our services.</p>
            <p className="text-sm mb-2"><strong>Social Media Plugins:</strong> Such as Facebook, LinkedIn, Twitter buttons that may collect data on user interactions.</p>
            <p className="text-sm mb-2"><strong>Payment Processors:</strong> To process transactions securely.</p>
            <p className="text-sm mt-2">For these services, your data may be transmitted to third parties. You can opt-out of certain data collection (e.g., by disabling cookies in your browser).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. How Long Will We Keep Your Data?</h2>
            <p className="text-sm">We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including compliance with legal obligations, resolving disputes, and enforcing our agreements. For example, personal data associated with contract performance or customer service is kept for the duration of the contractual relationship and for a period thereafter as required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">11. What Are Your Rights Regarding Your Data?</h2>
            <p className="text-sm mb-2">You have the following rights regarding your personal data:</p>
            <p className="text-sm mb-2"><strong>Access:</strong> You can request to know what personal data we hold about you.</p>
            <p className="text-sm mb-2"><strong>Correction:</strong> You can request corrections to any incorrect or incomplete data.</p>
            <p className="text-sm mb-2"><strong>Deletion:</strong> You can request the deletion of your personal data, provided it is no longer necessary for the purpose it was collected.</p>
            <p className="text-sm mb-2"><strong>Restriction of Processing:</strong> You can request the restriction of data processing under certain conditions.</p>
            <p className="text-sm mb-2"><strong>Data Portability:</strong> You have the right to request that your data be transferred to another provider in a structured, machine-readable format.</p>
            <p className="text-sm mb-2"><strong>Withdraw Consent:</strong> You can withdraw your consent to data processing at any time.</p>
            <p className="text-sm mb-2"><strong>Objection:</strong> You can object to the processing of your personal data for certain purposes, such as marketing.</p>
            <p className="text-sm mt-2">To exercise any of these rights, please contact us at <a href="mailto:hello@cambrena.net" className="hover:opacity-60 transition-opacity">hello@cambrena.net</a>. If you believe your data protection rights have been violated, you may file a complaint with the relevant supervisory authority.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">12. Cookies and Tracking Technologies</h2>
            <p className="text-sm mb-2">We use cookies and similar technologies to collect information about how users interact with our website. Cookies help us improve website performance, track user preferences, and provide a personalized experience.</p>
            <p className="text-sm">You can control cookie settings via your browser. However, please note that disabling cookies may impact your ability to use certain features of our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">13. Security of Your Data</h2>
            <p className="text-sm">We implement appropriate technical and organizational measures to ensure the security of your personal data. This includes encryption, access controls, and secure storage. However, please note that no method of online data transmission is completely secure, and we cannot guarantee 100% security of your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">14. How Can You Contact Us?</h2>
            <p className="text-sm mb-2">If you have any questions or concerns about this privacy policy or wish to exercise your rights, please contact us at:</p>
            <p className="text-sm mb-2">Cambrena AG</p>
            <p className="text-sm mb-2">Haldenstrasse 1</p>
            <p className="text-sm mb-2">6340 Baar, Switzerland</p>
            <p className="text-sm">Email: <a href="mailto:hello@cambrena.net" className="hover:opacity-60 transition-opacity">hello@cambrena.net</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">15. Changes to This Privacy Policy</h2>
            <p className="text-sm">This privacy policy may be updated from time to time. We will post the revised version on our website. We encourage you to review this policy periodically.</p>
          </section>
        </div>
      </main>

      {/* Footer Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-xs tracking-wider">
        <Link to="/imprint" className="hover:opacity-60 transition-opacity">
          Imprint
        </Link>
        <span>|</span>
        <Link to="/privacy-policy" className="hover:opacity-60 transition-opacity">
          Privacy Policy
        </Link>
        <span>|</span>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
