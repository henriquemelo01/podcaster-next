import { Header } from "../Components/Header";
import "../styles/globals.scss";

import styles from "../styles/app.module.scss";
import { Player } from "../Components/Player";

// Ao mudar de página na aplicação, esta página é carregada. Assim não é interessante por exemplo definir a fonte neste arquivo, mesmo que este esta ao redor de todas as páginas. Entretanto, no _app podemos colocar componentes que serão exibidos em todas as rotas da aplicação.

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appContainer}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default MyApp;
