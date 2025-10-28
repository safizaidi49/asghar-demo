"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./NewsBlogs.module.css";
import { demoBlogs, BlogPost } from "@/app/data/demoBlogs";

type Props = {
  posts?: BlogPost[];           // Optional override when you have real data
  viewAllHref?: string;         // Where "View all" goes
  className?: string;
  title?: string;
};

export default function NewsBlogs({
  posts = demoBlogs,
  viewAllHref = "/blog",
  className,
  title = "News and Blogs",
}: Props) {
  return (
    <section className={clsx(styles.wrap, className)} aria-labelledby="newsblogs-title">
      <div className={styles.head}>
        <h2 id="newsblogs-title" className={styles.title}>{title}</h2>
        <Link href={viewAllHref} className={styles.viewAll} aria-label="View all blog posts">
          View all
        </Link>
      </div>

      <div className={styles.grid}>
        {posts.map((p, i) => (
          <article key={p.id} className={styles.card}>
            <Link href={p.slug} className={styles.cardLink} aria-label={p.title}>
              <div className={styles.imgWrap}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 100vw, 25vw"
                  priority={i === 0}
                />
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
