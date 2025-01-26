import Link from "next/link";
import React from "react";

import Wrapper from "../wrapper/wrapper";
import s from "./nav.module.sass";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <Wrapper>
        <ul className={s.list}>
          <li className={s.item}>
            <Link className={s.link} href={'/#about-us'}>О нас</Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href={'/#how-it-works'}>Как это работает</Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href={'/#reviews'}>Отзывы</Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href={'/#contacts'}>Контакты</Link>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Nav;