import styles from "./FeaturesBar.module.css";

export default function FeaturesBar() {
  const items = [
    { title: "FREE DELIVERY",        subtitle: "Within 5 to 7 Working Days" },
    { title: "SHOP NOW, PAY LATER",  subtitle: "Upto 12 Interest-Free Installments" },
    { title: "500K+",                subtitle: "Happy Customers" },
    { title: "MADE IN THE UAE",      subtitle: "Crafted Locally, Customized for you." },
  ];

  return (
    <section className={styles.section} aria-label="Store advantages">
      <div className={styles.grid}>
        {items.map((it, i) => (
          <div key={it.title} className={styles.item}>
            <img
              src="https://www.asgharfurniture.ae/wp-content/uploads/2025/10/Truck.svg"
              alt=""
              className={styles.icon}
              width={50}
              height={50}
              loading="lazy"
            />
            <h3 className={styles.title}>{it.title}</h3>
            <p className={styles.subtitle}>{it.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
