import styles from "./styles.module.scss";

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="playing.svg" />
        <strong className={styles.playing}>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.playerWrapper}>
        <div className={styles.progressContainer}>
          <span>00:00</span>
          <div className={styles.progressBar}></div>
          <span>00:00</span>
        </div>
        <div className={styles.player}>
          <button>
            <img src="shuffle.svg" alt="shuffle" />
          </button>
          <button>
            <img src="play-previous.svg" alt="play-previous" />
          </button>
          <button className={styles.playBtn}>
            <img src="play.svg" alt="play" />
          </button>
          <button>
            <img src="play-next.svg" alt="play-next" />
          </button>
          <button>
            <img src="repeat.svg" alt="repeat" />
          </button>
        </div>
      </footer>
    </div>
  );
}
