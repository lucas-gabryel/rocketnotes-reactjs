import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/lucas-gabryel.png" alt="foto de perfil do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Lucas Gabryel</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}