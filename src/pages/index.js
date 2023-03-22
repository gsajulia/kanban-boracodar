import Head from "next/head";
import { Poppins } from "next/font/google";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";
import boardIcon from "../../public/boardIcon.svg";
import teamIcon from "../../public/teamIcon.svg";
import reportIcon from "../../public/reportIcon.svg";
import adjustIcon from "../../public/adjustIcon.svg";
import penIcon from "../../public/penIcon.svg"

const font = Poppins({ subsets: ["latin"], weight: ["900"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.aside}>
        <Image className={styles.logo} src={logo} width={50} height={56} />
        <nav>
          <div className={styles.navigation}>
            <Image
              src={boardIcon}
              alt="smartphone icon"
              width={20}
              height={20}
            />
            <span>Boards</span>
          </div>
          <div>
            <Image src={teamIcon} alt="team icon" width={20} height={20} />
            <span>Equipes</span>
          </div>
          <div>
            <Image src={reportIcon} alt="paper icon" width={20} height={20} />
            <span>Relatórios</span>
          </div>
          <div>
            <Image src={adjustIcon} alt="gear icon" width={20} height={20} />
            <span>Ajustes</span>
          </div>
        </nav>
      </div>
      <div className={styles.main}>
        <div className={styles.headMain}>
          <h1>Meu Kanban</h1>
          <Image
          src={penIcon}
          alt="pen icon" />
        </div>
        <div className={styles.cards}>
        <div className={styles.toDo}>
          <h4>A fazer</h4>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
        </div>
        <div></div>
        <div className={styles.doing}>
          <h4>Fazendo</h4>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
        </div>
        <div className={styles.finish}>
          <h4>Feito</h4>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.card}>
            <h6>title</h6>
            <p>text</p>
            <div className={styles.tags}>tags</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
