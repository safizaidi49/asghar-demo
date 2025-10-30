import "./privacy.css";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Asghar Furniture",
  description:
    "How Asghar Furniture collects, uses, and protects your information across our websites and mobile apps.",
};

function Crumb({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="pp-crumb">
      <Link href={href} prefetch={false}>{children}</Link>
      <span className="pp-crumb-sep">›</span>
    </li>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pp">
      {/* HERO / BREADCRUMBS */}
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <h1>Privacy Policy</h1>
          <ul className="pp-bc">
            <Crumb href="/">Home</Crumb>
            <li className="pp-crumb current">Privacy Policy</li>
          </ul>
        </div>
      </section>

      {/* INTRO – OUTSIDE BOX */}
      <section className="pp-wrap">
        <div className="pp-intro pp-body">
          <p>
            This Privacy Policy is designed to help you understand how Asghar Furniture
            and its affiliated brands collects and processes the information that you
            share when you use this and any of our websites (together, the “Site”) and
            our mobile application (the “App,” and together with the Site, the “Service”).
          </p>
          <p>
            Before submitting information to the Service, please review this Privacy
            Policy carefully. By using or accessing the Service, you accept the
            practices described in this Privacy Policy. If you prefer that we not collect
            and process information about you, please do not provide it to us and do not
            access the Service.
          </p>
          <p>
            We do not knowingly collect any Personal Information from children under 13
            without prior verifiable parental consent. If Asghar Furniture learns that a
            child under the age of 13 has submitted Personal Information (defined below)
            online without parental consent, we will take all reasonable measures to delete
            the information as soon as possible and to not use such information for any
            purpose, except where necessary to protect the safety of the child or others
            as required or allowed by law. If you believe a child under 13 has provided
            us with Personal Information, please contact us <Link href="/contact" prefetch={false}>here</Link>.
          </p>
        </div>

        {/* FULL BORDER BOX */}
        <section className="pp-box pp-body">
          {/* 1. Information We Collect */}
          <div className="pp-block">
            <h2>Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> such as your name, phone number,
                email address, billing/shipping address, and payment details.
              </li>
              <li>
                <strong>Account Information:</strong> when you register or interact with
                your account on our Site/App.
              </li>
              <li>
                <strong>Transaction Information:</strong> purchase history, product
                preferences, order details.
              </li>
              <li>
                <strong>Device and Technical Information:</strong> IP address, browser type,
                operating system, and usage data collected through cookies and similar
                technologies.
              </li>
              <li>
                <strong>Communication Data:</strong> messages you send via email, WhatsApp,
                live chat, or social media platforms.
              </li>
              <li>
                <strong>Children’s Data:</strong> We do not knowingly collect Personal
                Information from children under 13 without parental consent. If we learn
                that we have collected such information, we will delete it promptly.
              </li>
            </ul>
          </div>

          <hr className="pp-divider" />

          {/* 2. How We Use Your Information */}
          <div className="pp-block">
            <h2>How We Use Your Information</h2>
            <p>We process your information to:</p>
            <ul>
              <li>Fulfill orders, process payments, and deliver products.</li>
              <li>Provide customer service and respond to inquiries.</li>
              <li>Send order updates, invoices, and important service communications.</li>
              <li>
                Personalize your shopping experience, including product recommendations.
              </li>
              <li>Improve our Site, App, and customer experience.</li>
              <li>Conduct analytics, marketing campaigns, and promotions.</li>
              <li>Comply with legal, regulatory, or fraud-prevention obligations.</li>
            </ul>
          </div>

          <hr className="pp-divider" />

          {/* 3. Sharing & Disclosure */}
          <div className="pp-block">
            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information in the following cases:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With third-party logistics, courier,
                payment processors, IT support, and marketing service providers.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of a merger, acquisition, or
                sale of assets.
              </li>
              <li>
                <strong>Legal Requirements:</strong> To comply with applicable law,
                government requests, or to protect rights, property, and safety.
              </li>
              <li>
                <strong>Affiliates &amp; Partners:</strong> With affiliated companies and
                trusted partners who support our operations.
              </li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>
          </div>

          <hr className="pp-divider" />

          {/* 4. Third-Party Links */}
          <div className="pp-block">
            <h2>Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible
              for their privacy practices. Please review their policies before providing
              personal information.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 5. Cookies */}
          <div className="pp-block">
            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Enable essential site functions (shopping cart, checkout).</li>
              <li>Measure website performance and analytics.</li>
              <li>Deliver targeted advertising and promotions.</li>
              <li>Improve overall user experience.</li>
            </ul>
            <p>
              You may disable cookies in your browser settings, but some features may not
              work properly.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 6. Marketing */}
          <div className="pp-block">
            <h2>Marketing and Communications</h2>
            <ul>
              <li>
                We may send you promotional emails, SMS, or WhatsApp updates if you have
                opted in.
              </li>
              <li>
                You may opt out of marketing communications at any time by clicking
                “unsubscribe” in emails or contacting us directly.
              </li>
            </ul>
          </div>

          <hr className="pp-divider" />

          {/* 7. Retention */}
          <div className="pp-block">
            <h2>Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfill the
              purposes outlined in this policy, or as required by law. After this period,
              we securely delete or anonymize the data.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 8. Security */}
          <div className="pp-block">
            <h2>Information Security</h2>
            <p>We implement industry-standard security measures, including:</p>
            <ul>
              <li>Secure Sockets Layer (SSL) encryption for transactions.</li>
              <li>Restricted access to personal data for authorized employees only.</li>
              <li>Regular system monitoring for potential vulnerabilities.</li>
            </ul>
            <p>
              While we take strong precautions, no system is 100% secure. You are
              responsible for safeguarding your login credentials.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 9. Your Rights */}
          <div className="pp-block">
            <h2>Your Rights (subject to applicable law)</h2>
            <ul>
              <li>Access, correct, or update your personal data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent to processing.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@asgharfurniture.ae">info@asgharfurniture.ae</a>.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 10. International Transfers */}
          <div className="pp-block">
            <h2>International Transfers</h2>
            <p>
              If you are accessing our services from outside the UAE, please note that
              your data may be processed in countries with different data protection laws.
            </p>
          </div>

          <hr className="pp-divider" />

          {/* 11. Changes */}
          <div className="pp-block">
            <h2>Policy Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted
              on this page with the “Last Updated” date. We encourage you to review it
              periodically.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
