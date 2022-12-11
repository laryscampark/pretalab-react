import { useEffect, useState } from "react";
import styles from '../styles/pages/portifolio.module.css'

export function Github() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/laryscampark/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <div className={styles.projectsContainer}>
            <ul className={styles.cardsRepoContainer}>
                {repositories.map(repository => {
                    return (
                        <li className={styles.cardRepo}>
                            <h3 className={styles.cardRepoText}>{repository.name}</h3>
                            <p className={styles.cardRepoText}>{repository.description}</p>
                            <a href={repository.html_url} target="_blank" rel="noreferrer">Saiba mais</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Github;