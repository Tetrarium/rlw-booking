import Link from "next/link";
import { FC } from "react";

import FacebookIcon from "@/icons/facebook";
import GooglePlusIcon from "@/icons/googleplus";
import LinkedIn from "@/icons/linkedin";
import SkypeIcon from "@/icons/skype";
import TwitterIcon from "@/icons/twitter";
import YouTubeIcon from "@/icons/youtube";
import SendButton from "@/UI/buttons/sendButton";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { IconButton, Link as SocialLink, LinkProps, SvgIconProps, TextField } from "@mui/material";

import s from "./footer.module.sass";

const iconProps: SvgIconProps = {
  sx: {
    fontSize: 30,
  }
};

const socialsLinkProps: LinkProps = {
  sx: {
    fontSize: 30,
    lineHeight: 1,
    color: '#E5E5E5',
    width: 'auto',
    ":hover": {
      color: '#FFCA62'
    }
  }
};

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
                  <LocalPhoneIcon {...iconProps} />
                  <Link
                    href={'tel: 80000000000'}
                    className={s.contacts__text}
                    target="_blank"
                  >
                    8 (800) 000 00 00
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <EmailIcon {...iconProps} />
                  <Link
                    href={'mail: inbox@mail.ru'}
                    className={s.contacts__text}
                    target="_blank"
                  >
                    inbox@mail.ru
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <SkypeIcon {...iconProps} />
                  <Link
                    href={'skype: tu.train.tickets'}
                    className={s.contacts__text}
                    target="_blank"
                  >
                    tu.train.tickets
                  </Link>
                </li>
                <li className={s.contacts__item}>
                  <PlaceIcon {...iconProps} />
                  <Link
                    href={'#'}
                    className={s.contacts__text}
                    target="_blank"
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
              <div className={s.subscribes__row}>
                <TextField
                  label="e-mail"
                  className={s.subscribes__input}
                  variant="outlined"
                  slotProps={{
                    input: {
                      sx: {
                        fontSize: 24,
                        py: 0,
                        height: '60px',
                      }
                    },
                    inputLabel: {
                      sx: {
                        fontSize: 24,
                      }
                    }
                  }}
                />
                <SendButton>Отправить</SendButton>
              </div>
            </div>
            <div className={s.socials}>
              <h3 className={s.title}>Подписывайтесь на нас</h3>
              <ul className={s.socials__items}>
                <li className={s.socials__item}>
                  <SocialLink {...socialsLinkProps} href='#'>
                    <YouTubeIcon />
                  </SocialLink>
                </li>
                <li className={s.socials__item}>
                  <SocialLink {...socialsLinkProps} href='#'>
                    <LinkedIn />
                  </SocialLink>
                </li>
                <li className={s.socials__item}>
                  <SocialLink  {...socialsLinkProps} href='#'>
                    <GooglePlusIcon />
                  </SocialLink>
                </li>
                <li className={s.socials__item}>
                  <SocialLink {...socialsLinkProps} href='#'>
                    <FacebookIcon />
                  </SocialLink>
                </li>
                <li className={s.socials__item}>
                  <SocialLink {...socialsLinkProps} href='#'>
                    <TwitterIcon />
                  </SocialLink>
                </li>
              </ul>
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