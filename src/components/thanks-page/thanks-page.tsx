import { Container } from "@/components/container/container";
import { classnames } from "@/utility/classnames";
import style from "./thanks-page.module.scss";

export const ThanksPage = () => {
  return (
    <Container className={style.thanks_page}>
      <img className={style.icon} src="/icon-thank-you.svg" />
      <h1 className={classnames("title", style["title--margin"])}>
        Thank you!
      </h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Container>
  );
};
