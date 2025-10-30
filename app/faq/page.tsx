// app/faq/page.tsx
import Link from "next/link";
import "./faq.css";

export const metadata = {
  title: "Frequently Asked Questions | Asghar Furniture",
  description:
    "Answers about showrooms, ordering, customization, delivery/shipping, and installment plans for Asghar Furniture.",
};

type QA = { q: string; a: React.ReactNode };

function Section({
  title,
  items,
}: {
  title: string;
  items: QA[];
}) {
  return (
    <section className="faq-sec">
      <h2 className="faq-h2">
        {title}
        <span className="faq-underline" />
      </h2>

      <div className="faq-list">
        {items.map((x, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-q">{x.q}</summary>
            <div className="faq-a">{x.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function FAQPage() {
  const showrooms: QA[] = [
    {
      q: "How many showroom locations do you have across the UAE?",
      a: "We have 4 showrooms across the UAE, ready to provide you with the most luxurious in-store shopping experience you will ever have.",
    },
    {
      q: "Where can I find your showrooms?",
      a: (
        <>
          You can find our showrooms in <strong>Dubai – Al Ittihad Road</strong>,{" "}
          <strong>Abu Dhabi – Al Raha Beach</strong>, <strong>Dubai – JVC</strong>, and{" "}
          <strong>Ajman – New Industrial Area</strong>.{" "}
          <Link href="/contact#stores" className="faq-link">
            Click here for our location pins.
          </Link>
        </>
      ),
    },
    {
      q: "When can I visit your showrooms?",
      a: "You are always welcome in our showrooms from Monday to Sunday: 09:00 AM – 10:00 PM.",
    },
  ];

  const ordering: QA[] = [
    {
      q: "Are all Asghar products available online?",
      a: "Yes, all of our products are available online. It only takes a few clicks to find them.",
    },
    {
      q: "Do you provide convenient installment plans?",
      a: "Yes, you can pay for your furniture purchases in installments through Tabby, Tamara & Credit Cards.",
    },
    {
      q: "Can I cancel my order?",
      a: (
        <>
          Orders may be canceled for any reason within 1 business day without incurring any
          restocking fees or delivery costs. After this initial period, a 5% charge of the total
          invoice amount will apply. For more information, please find our{" "}
          <Link href="/policies/cancellation" className="faq-link">
            cancellation policy here
          </Link>
          .
        </>
      ),
    },
    {
      q: "Are there any limitations on your online orders?",
      a: "No, there is no limit. Feel free to order as much as you want.",
    },
    {
      q: "Do you accept any discount on Fazaa cards ?",
      a: "Yes, we accept Fazaa cards, but only for in-store purchases. The discount cannot be applied to online orders.",
    },
    {
      q: "Do you offer any discounts on cards?",
      a: "Enjoy up to 10% savings on eligible purchases made with your ADCB or Al Hilal Bank credit card.",
    },
    {
      q: "Can I track my order online?",
      a: "Currently we don’t offer an online tracking system, but our customer service team is ready to provide you with any updates or details you require.",
    },
  ];

  const customized: QA[] = [
    {
      q: "Do you provide customized furniture services?",
      a: "Absolutely! We’re proud to offer custom furniture services. We can tailor any piece to perfectly match your personal style and needs.",
    },
    {
      q: "How is the pricing determined for customized furniture?",
      a: "Charges will vary based on how the client wishes to customize the items—it depends on materials, fabrics, dimensions, etc. For more details contact our customer service team.",
    },
    {
      q: "How long will it take to receive my custom-made furniture?",
      a: "We require 5–7 working days to deliver your custom-made items.",
    },
    {
      q: "What steps are involved in ordering custom-made furniture?",
      a: "To order custom furniture, please provide us with the design specifications, pictures, and measurements.",
    },
  ];

  const delivery: QA[] = [
    {
      q: "Could you offer international shipping?",
      a: "We are not able to offer international shipping at the moment. However, we can deliver the furniture to a shipping company in the UAE.",
    },
    {
      q: "Can I change my delivery date?",
      a: "Yes of course, you can change the delivery date. Please call us at least one day before your scheduled delivery so our team can make the necessary arrangements.",
    },
    {
      q: "Do you have the COD (CASH ON DELIVERY) option?",
      a: "As all of our furniture is made on order, we do not offer a COD (Cash on Delivery) option.",
    },
    {
      q: "Do you offer free shipping and installation?",
      a: (
        <>
          Yes, we provide free delivery all across UAE, except the Western Region (where a charge of
          1000 AED will apply), the Eastern region and Hatta (where a charge of 500 AED will apply).{" "}
          <Link href="/delivery" className="faq-link">
            Visit our delivery section to know more.
          </Link>
        </>
      ),
    },
    {
      q: "When will I receive my order?",
      a: "We require 5–7 working days to deliver your item. Once it’s ready, our delivery team will contact you one day prior to the scheduled delivery to arrange the timing.",
    },
    {
      q: "What if I receive a damaged item?",
      a: "For any damages or issues, please contact us immediately, and we will resolve them promptly.",
    },
  ];

  return (
    <main className="faq">
      {/* HERO with centered, black title + breadcrumbs */}
      <section className="faq-hero">
        <img
          src="/media/banners/breadcrumbs.webp"
          alt="FAQ banner"
          className="faq-hero-img"
        />
        <div className="faq-hero-overlay">
          <h1>Frequently Asked Questions</h1>
          <ul className="faq-bc">
            <li><Link href="/">Home</Link></li>
            <li className="sep">›</li>
            <li className="current">Frequently Asked Questions</li>
          </ul>
        </div>
      </section>

      {/* Sections */}
      <Section title="Visit our Showrooms" items={showrooms} />

      <Section title="Ordering" items={ordering} />

      {/* Installments table sits inside the Ordering area but separate block */}
      <section className="faq-sec">
        <h3 className="faq-h3">What installment payment plans are available for furniture purchases?</h3>
        <div className="faq-tableWrap">
          <table className="faq-table">
            <thead>
              <tr>
                <th></th>
                <th>Tabby</th>
                <th>Tamara</th>
                <th>ADCB</th>
                <th>Al hilal</th>
                <th>Mashreq</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Installment Tenure</td>
                <td>Up to 4 Months</td>
                <td>Up to 4 Months</td>
                <td>3, 6, 12 months.</td>
                <td>3, 6, 12 months.</td>
                <td>6, 9, 12 months.</td>
              </tr>
              <tr>
                <td>Minimum Purchase</td>
                <td>AED 10</td>
                <td>AED 1</td>
                <td>AED 1000</td>
                <td>AED 1000</td>
                <td>AED 1000</td>
              </tr>
              <tr>
                <td>Processing Fee (one time)</td>
                <td>0</td>
                <td>0</td>
                <td>AED 50+Vat.</td>
                <td>AED 50+Vat.</td>
                <td>AED 29</td>
              </tr>
              <tr>
                <td>Interest Rate</td>
                <td>0%</td>
                <td>0%</td>
                <td>0%</td>
                <td>0%</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Section title="Customized furniture" items={customized} />

      <Section title="Delivery / Shipping" items={delivery} />
    </main>
  );
}
