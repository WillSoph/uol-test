import { Container } from "./styles";

export function CustomersTitle() {

    return (
        <Container>
            <div>
                <header>
                    <div>
                        <h4>Listagem de usuários</h4>
                        <p>Escolha um cliente para visualizar os detalhes</p>
                    </div>
                    <div>
                        <button type="button">
                            Novo cliente
                        </button>
                    </div>
                </header>
            </div>
        </Container>
    )
}