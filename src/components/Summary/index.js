import userImg from '../../assets/user.png'

import { Container } from "./styles";

export function Summary() {

    return (
        <Container>
            <div>
                <header>
                    <img src={userImg} alt="Entradas" />
                    <h2>Painel de clientes</h2>
                </header>
            </div>
        </Container>
    )
}