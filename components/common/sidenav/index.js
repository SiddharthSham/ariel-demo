import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

import S from "./style.module.css";

export const Sidenav = ({ links = [] }) => {
  const router = useRouter();

  return (
    <>
      <nav className={S.nav}>
        <div className={S.navLogo} id="logo">
          <div></div>
          <Link passHref href="/">
            <div>Ariel</div>
          </Link>
        </div>
        <ul role="list">
          {links.map((item, i) =>
            item.route ? (
              <li key={item.name}>
                <Link href={item.route}>
                  <a
                    className={`${S.navItem} ${
                      router.pathname === item.route ? S.navActive : ""
                    }`}
                  >
                    <div className={S.navIcon}></div>
                    <div>{item.name}</div>
                  </a>
                </Link>
              </li>
            ) : (
              <li key={item.name}>
                <a
                  className={`${S.navItem} ${
                    router.pathname === item.route ? S.navActive : ""
                  }`}
                >
                  <div className={S.navIcon}></div>
                  <div>{item.name}</div>
                </a>
              </li>
            )
          )}
        </ul>
        <div className={S.navProfile}>
          <div className={S.navPhoto}></div>
          <div>Jonnana Salter</div>
        </div>
      </nav>
    </>
  );
};
