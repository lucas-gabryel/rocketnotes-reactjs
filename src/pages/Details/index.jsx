import { Container } from "./style"
import { Button } from "../../components/Button"

export function Details(){
  return(
    <Container>
      <h1>Hello, World!</h1>
      <span>Lucas Gabryel</span>
      <Button title="Entrar"/>
      <Button title="Saiba mais"/>
    </Container>
  )
}