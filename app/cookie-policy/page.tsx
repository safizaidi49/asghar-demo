import "./cookie.css";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Asghar Furniture",
  description:
    "How Asghar Furniture uses cookies and similar technologies to improve your browsing experience.",
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

export default function CookiePolicyPage() {
  return (
    <main className="pp">
      {/* HERO / BREADCRUMBS */}
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <h1>Cookie Policy</h1>
          <ul className="pp-bc">
            <Crumb href="/">Home</Crumb>
            <li className="pp-crumb current">Cookie Policy</li>
          </ul>
        </div>
      </section>

      <section className="pp-wrap">
        {/* Intro (outside box) */}
        <div className="pp-intro pp-body">
          <p>
            At Asghar Furniture, we are committed to ensuring that your privacy is
            protected. This cookie policy explains how we use cookies and similar
            technologies to improve your experience on our website. By using our
            website, you agree to the use of cookies as outlined in this policy.
          </p>
        </div>

        {/* Bordered box with full content */}
        <section className="pp-box pp-body">
          <div className="pp-block">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device by websites
              that you visit. They are widely used to make websites work more
              efficiently and to provide information to the owners of the site.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Necessary for core site
                functionality such as navigation and access to secure areas.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use
                the site by collecting information anonymously to improve UX.
              </li>
              <li>
                <strong>Advertising & Targeting Cookies:</strong> Deliver ads relevant
                to your interests, limit ad frequency, and measure campaign
                effectiveness.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> Set by social media services to
                enable sharing of our content with your network and friends.
              </li>
            </ul>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Third-Party Services</h2>
            <p>
              We use third-party services that may set cookies on our behalf to improve
              your browsing experience. These include, but are not limited to, Google
              Analytics and various advertising networks.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Purpose of Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Improve user experience by remembering your preferences and settings.</li>
              <li>Personalize content based on your interests.</li>
              <li>Analyze site traffic and usage patterns to enhance performance and usability.</li>
            </ul>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>User Consent</h2>
            <p>
              We obtain your consent for the use of cookies through a cookie banner
              that appears when you first visit our site. By clicking “Accept” on the
              banner, you agree to our use of cookies as described in this policy. If
              you do not consent, you can manage your cookie preferences as described
              below.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Cookie Duration</h2>
            <p>
              Cookies on our site are set to expire after <strong>365 days</strong>,
              but you can delete them at any time through your browser settings.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Managing Cookies</h2>
            <p>
              You can accept or deny cookies and change your preferences at any time in
              your browser settings. Disabling cookies may impact some site features and
              your overall experience.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Policy Updates</h2>
            <p>
              We may update this cookie policy from time to time to reflect changes in
              our practices or for operational, legal, or regulatory reasons. We will
              notify you of any significant changes via email. Please review this
              policy periodically.
            </p>
          </div>

          <hr className="pp-divider" />

          <div className="pp-block">
            <h2>Contact Information</h2>
            <p>
              If you have any questions or concerns about our cookie policy, please
              contact us at{" "}
              <a href="mailto:info@asgharfurniture.ae">info@asgharfurniture.ae</a>.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
