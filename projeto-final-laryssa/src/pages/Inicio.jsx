import { Student, BracketsCurly, AddressBook } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
    return (
        <>
            <Header text="Meu site pessoal" image={homeImg} />
            <div className={styles.homeContainer}>
                <div className={styles.cardContainer}>
                    <Student size={150} color="#d180bd" weight="thin" />
                    <h2 className={styles.cardTitle}>Vida</h2>
                    <p className={styles.cardText}>Conto um pouco sobre mim, minha formação, a minha história de carreira, gostos e curiosidades</p>
                </div>
                <div className={styles.cardContainer}>
                    <BracketsCurly size={150} color="#d180bd" weight="thin" />
                    <h2 className={styles.cardTitle}>Código</h2>
                    <p className={styles.cardText}>Mostro meu portfólio. E outros projetos aos quais já foram desenvolvido por mim</p>
                </div>
                <div className={styles.cardContainer}>
                    <AddressBook size={150} color="#d180bd" weight="thin" />
                    <h2 className={styles.cardTitle}>Contato</h2>
                    <p className={styles.cardText}>Entre em contato comigo. Pode ser para entrevista e até mesmo para trocamos ideias</p>
                </div>
            </div>
        </>
    )
}