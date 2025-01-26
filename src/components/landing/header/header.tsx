import Logo from "@/components/shared/logo/logo";
import Mask from "@/components/shared/mask/mask";
import Nav from "@/components/shared/nav/nav";
import Wrapper from "@/components/shared/wrapper/wrapper";

import SearchForm from "../search-form/searchForm";
import s from "./header.module.sass";

export default function Header() {
  return (
    <header className={s.header}>
      <Mask>
        <Logo />
        <Nav />
        <Wrapper>
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
        </Wrapper>
      </Mask>
    </header>
  );
}