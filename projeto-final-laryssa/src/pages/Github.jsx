import { useEffect, useState } from "react";

export function Github() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/laryscampark/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <div>
            <ul>
                {repositories.map(repository => {
                    return (
                        <li>
                            <h3>{repository.name}</h3>
                            <p>{repository.description}</p>
                            <a href={repository.html_url} target="_blank">Saiba mais</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Github;