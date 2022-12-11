import { Header } from "../components/Header";
import { Github } from './Github'
import portifolioImg from '../assets/portifolio.svg'

import styles from '../styles/pages/portifolio.module.css'

export function Portifolio() {
    return (
        <>
            <Header text="Meus projetinhos" image={portifolioImg} />
                <div>
                    <h2 className={styles.projectsTitle}>Meus projetos no Github</h2>
                    <Github></Github>
                </div>
        </>
    )

}