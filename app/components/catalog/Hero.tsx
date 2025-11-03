"use client";
import Image from "next/image";
import Link from "next/link";

type HeroProps = { title: string; heroSrc: string };

export default function Hero({ title, heroSrc }: HeroProps) {
  return (
    <div className="cat-hero">
      <Image
        src={heroSrc}
        alt={`${title} hero`}
        width={1920}
        height={600}
        className="cat-hero-img"
        priority
      />
      <div className="cat-hero-content">
        <div className="cat-hero-inner">
          <div className="cat-breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Shop Catalog</span>
          </div>
          <h1 className="cat-hero-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}
