import { Container, Links } from "./style"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  return(
    <Container>
      <Header/>

      <ButtonText title="Excluir nota"/>

      <Section title="Links úteis">
      <Links>
        <li><a href="#">www.rocketseat.com.br</a></li>
        <li><a href="#">www.rocketseat.com.br</a></li>
      </Links>
      </Section>

      <Section title="Marcadores">
      <Tag title="Express"></Tag>
      <Tag title="Node"></Tag>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}