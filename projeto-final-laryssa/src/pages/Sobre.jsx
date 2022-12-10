import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import laryImg from '../assets/lary.png'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return (
        <>
            <Header text="Minha história" image={sobreImg}/>
            <div class={styles.sobreContainer}>
                <img class={styles.bioImage} src={laryImg}/>
                <div class={styles.bioContainer}>
                    <h2 class={styles.bioTitle}>Laryssa Peçanha, prazer!</h2>
                    <p class={styles.bioText }>Sou queimadense, moro em Queimados, Rio de Janeiro, tenho 25 anos, sou apaixonada em tecnologia, moro com meus pais tenho 2 cachorros naomy e marley e outros dois de coração scooby e pedro scooby. Sou desenvolvedora em java. o e raça no mercado de tecnologia.
                    </p>
                </div>
            </div>
        </>
    )
}