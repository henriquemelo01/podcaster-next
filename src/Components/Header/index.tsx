import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function Header(props) {
  const now = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR });
  console.log(now);
  return (
    <header className={styles.headerContainer}>
      <img src="logo.svg" alt="logo podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{now}</span>
    </header>
  );
}
