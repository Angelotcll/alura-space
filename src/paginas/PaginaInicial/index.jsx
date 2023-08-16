import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";

import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>

        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
