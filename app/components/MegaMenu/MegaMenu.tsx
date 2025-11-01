// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useMemo } from "react";
// import styles from "./MegaMenu.module.css";
// import { BEDROOM_MENU, LIVING_MENU, MEGA_TITLES, type MegaItem } from "./data";

// export type MegaSection = "bedroom" | "living";

// type Props = {
//   section: MegaSection | null;
//   onRequestClose?: () => void;
// };

// function splitInThree(items: MegaItem[]) {
//   const perCol = Math.ceil(items.length / 3);
//   return [items.slice(0, perCol), items.slice(perCol, perCol * 2), items.slice(perCol * 2)];
// }

// export default function MegaMenu({ section, onRequestClose }: Props) {
//   const items = useMemo<MegaItem[]>(() => {
//     if (section === "bedroom") return BEDROOM_MENU;
//     if (section === "living") return LIVING_MENU;
//     return [];
//   }, [section]);

//   const open = !!section;
//   const cols = useMemo(() => splitInThree(items), [items]);

//   // One heading split across two lines
//   const headingLines: [string, string] = section ? MEGA_TITLES[section] : ["", ""];
//   const aria = section ? `${headingLines[0]} ${headingLines[1]}` : "Mega menu";

//   return (
//     <div
//       className={`${styles.panel} ${open ? styles.open : ""}`}
//       aria-hidden={!open}
//       role="region"
//       aria-label={aria}
//     >
//       <div className={styles.inner}>
//         {/* ===== Heading (single title, soft line-break) ===== */}
//         {open && (
//           <div className={styles.head}>
//             <h3 className={styles.hTitle}>
//               <span>{headingLines[0]}</span>
//               <br />
//               <span className={styles.hLine2}>{headingLines[1]}</span>
//             </h3>
//             <div className={styles.hRule} />
//           </div>
//         )}

//         {/* ===== 3 equal columns ===== */}
//         <div className={styles.grid}>
//           {cols.map((col, i) => (
//             <ul className={styles.col} key={i}>
//               {col.map((it) => (
//                 <li key={it.label}>
//                   <Link href={it.href} className={styles.item} onClick={onRequestClose}>
//                     <span className={styles.iconWrap} aria-hidden>
//                       <Image
//                         src={it.icon}
//                         alt=""
//                         width={36}
//                         height={36}
//                         className={styles.icon}
//                         priority={false}
//                       />
//                     </span>
//                     <span className={styles.txt}>
//                       <span className={styles.title}>{it.label}</span>
//                       <span className={styles.desc}>{it.desc}</span>
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./MegaMenu.module.css";
import { BEDROOM_MENU, LIVING_MENU, MEGA_TITLES, type MegaItem } from "./data";

export type MegaSection = "bedroom" | "living";

type Props = {
  section: MegaSection | null;
  onRequestClose?: () => void;
};

function splitInThree(items: MegaItem[]) {
  const perCol = Math.ceil(items.length / 3);
  return [items.slice(0, perCol), items.slice(perCol, perCol * 2), items.slice(perCol * 2)];
}

export default function MegaMenu({ section, onRequestClose }: Props) {
  const items = useMemo<MegaItem[]>(() => {
    if (section === "bedroom") return BEDROOM_MENU;
    if (section === "living") return LIVING_MENU;
    return [];
  }, [section]);

  const open = !!section;
  const cols = useMemo(() => splitInThree(items), [items]);

  const headingLines: [string, string] = section ? MEGA_TITLES[section] : ["", ""];
  const aria = section ? `${headingLines[0]} ${headingLines[1]}` : "Mega menu";

  return (
    <div
      className={`${styles.panel} ${open ? styles.open : ""}`}
      aria-hidden={!open}
      role="region"
      aria-label={aria}
    >
      <div className={styles.inner}>
        {open && (
          <div className={styles.head}>
            <h3 className={styles.hTitle}>
              <span>{headingLines[0]}</span>
              <br />
              <span className={styles.hLine2}>{headingLines[1]}</span>
            </h3>
            <div className={styles.hRule} />
          </div>
        )}

        <div className={styles.grid}>
          {cols.map((col, i) => (
            <ul className={styles.col} key={i}>
              {col.map((it) => (
                <li key={it.label}>
                  <Link href={it.href} className={styles.item} onClick={onRequestClose}>
                    <span className={styles.iconWrap} aria-hidden>
                      <Image
                        src={it.icon}
                        alt=""
                        width={36}
                        height={36}
                        className={styles.icon}
                        priority={false}
                      />
                    </span>
                    <span className={styles.txt}>
                      <span className={styles.title}>{it.label}</span>
                      <span className={styles.desc}>{it.desc}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
