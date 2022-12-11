import { Header } from "../components/Header";
import { Github } from './Github'
import portifolioImg from '../assets/portifolio.svg'

import styles from '../styles/pages/portifolio.module.css'

export function Portifolio() {
    return (
        <>
            <Header text="Meus projetinhos" image={portifolioImg} />
            <div>
                <h2 className={styles.projectsTitle}>Favoritos</h2>
                <div class={styles.cardsContainer}>
                    <div class={styles.card}>
                        <h1 className={styles.projectsContainer}>carzinho</h1>
                        <img class={styles.cardImage} src="https://media.giphy.com/media/j5WLPN5pofMBurAynh/giphy.gif" />
                        <p className={styles.projectsContainer}>Uma aplicação com HTML/CSS para fazer um cardzinho com codigo NFT</p>
                        <a class={styles.cardLink} href="https://cardzinho.netlify.app/" target="_blank" rel="noreferrer">Ver projeto</a>
                    </div>
                    <div class={styles.card}>
                        <h1 className={styles.projectsContainer}>Jogo do Cavaleiro</h1>
                        <img class={styles.cardImage} src="https://media.giphy.com/media/e9AQhFdtkF7UEfexbB/giphy.gif" />
                        <p className={styles.projectsContainer}>Um jogo em JavaScript com obstáculos onde se movimenta pelas setas do teclado do computador e tem um cavaleiro não pode enconstar nos monstro</p>
                        <a class={styles.cardLink} href="https://jogodocavaleiro.netlify.app/" target="_blank" rel="noreferrer">Ver projeto</a>
                    </div><div class={styles.card}>
                        <h1 className={styles.projectsContainer}>Meu Portfolio</h1>
                        <img class={styles.cardImage }src="https://media.giphy.com/media/VUpOoIMiubYJnsujSD/giphy.gif" />
                        <p className={styles.projectsContainer}>Um site em react para demonstrar meu portfolio</p>
                        <a class={styles.cardLink} href="https://pretalab-projeto-final.vercel.app/" target="_blank" rel="noreferrer">Ver projeto</a>
                    </div>
                </div>
                <h2 className={styles.projectsTitle}>Meus projetos no Github</h2>
                <Github></Github>
            </div>
        </>
    )

}