import { useEffect, useState } from "react";
import styles from '../styles/pages/portifolio.module.css'

export function Github() {
    const [repositories, setRepositories] = useState([])

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
                            <a href={repository.html_url} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff"
                                    viewBox="0 0 256 256"><rect width="256" height="256" fill="none">
                                    </rect>
                                    <polyline points="176 104 224 152 176 200"
                                        fill="none" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="8">
                                    </polyline><path d="M32,56a96,96,0,0,0,96,96h96" fill="none"
                                        stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
                                    </path></svg></a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Github;