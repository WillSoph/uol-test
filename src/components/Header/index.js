import logoImg from '../../assets/uol_logo.png'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="uol" />
            </Content>
        </Container>
    )
}