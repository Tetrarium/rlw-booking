import Link from "next/link";
import { FC } from "react";

import SkypeIcon from "@/icons/skype";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { Button, IconButton, TextField } from "@mui/material";

import s from "./footer.module.sass";

const Footer: FC = () => {
  return (
    <footer className={s.container}>
      <div className="wrapper">
        <div className={s.content}>
          <div className={s.column}>
            <div className={s.contacts}>
              <h3 className={s.title}>
                Свяжитесь с нами
              </h3>
              <ul className={s.contacts__list}>
                <li className={s.contacts__item}>
                  <LocalPhoneIcon className={s.contacts__icon} />
                  <Link
                    href={'tel: 80000000000'}
                    className={s.contacts__text}
                  >
                    8 (800) 000 00 00
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <EmailIcon className={s.contacts__icon} />
                  <Link
                    href={'mail: inbox@mail.ru'}
                    className={s.contacts__text}
                  >
                    inbox@mail.ru
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <SkypeIcon className={s.contacts__icon} />
                  <Link
                    href={'skype: tu.train.tickets'}
                    className={s.contacts__text}
                  >
                    tu.train.tickets
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <PlaceIcon className={s.contacts__icon} />
                  <Link
                    href={'#'}
                    className={s.contacts__text}
                  >
                    г. Москва ул. Московская 27-35 555 555
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.subscribes}>
              <h3 className={s.title}>Подписка</h3>
              <h4 className={s.subtitle}>Будте в курсе событий</h4>
              <TextField
                label="e-mail"
                className={s.subscribes__input}
                variant="outlined"
              />
              <Button>Отправить</Button>
            </div>
            <div className={s.socials}>
              <h3 className={s.title}>Подписывайтесь на нас</h3>
              Socials
            </div>
          </div>
        </div>
      </div>
      <div className={s.divider} />
      <div className="wrapper">
        <div className={s.copiright}>
          <div className={s.copiright__logo}>Лого</div>
          <IconButton
            sx={{ font: 'inherit', color: '#fff', border: '1px solid #fff' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUpOutlinedIcon fontSize="large" />
          </IconButton>
          <div className={s.copiright__text}>2018 WEB</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;