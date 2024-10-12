import Link from "next/link";

import SearchForm from "../forms/search-form/searchForm";
import s from "./header.module.sass";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.mask}>
        <div className={s.logo}>
          <div className="wrapper">
            Лого
          </div>
        </div>
        <nav className={s.nav}>
          <div className="wrapper">
            <ul className={s.nav__list}>
              <li className={s.nav__item}>
                <Link className={s.nav__link} href={''}>О нас</Link>
              </li>
              <li className={s.nav__item}>
                <Link className={s.nav__link} href={''}>Как это работает</Link>
              </li>
              <li className={s.nav__item}>
                <Link className={s.nav__link} href={''}>Отзывы</Link>
              </li>
              <li className={s.nav__item}>
                <Link className={s.nav__link} href={''}>Контакты</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="wrapper">
          <div className={s.banner}>
            <div className={s.banner__left}>
              <div className={s.slogan}>
                Вся жизнь - <b>путешествие!</b>
              </div>
            </div>
            <div className={s.banner__right}>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}