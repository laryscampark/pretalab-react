import { Header } from "../components/Header";
import { Github } from './Github'
import portifolioImg from '../assets/portifolio.svg'

export function Portifolio() {
    return (
        <>
            <Header text="Meus projetinhos" image={portifolioImg} />
                <div>
                    <h2>Meus projetos no Github</h2>
                    <Github></Github>
                </div>
        </>
    )

}