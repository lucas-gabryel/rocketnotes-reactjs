import { Container, Links, Content } from "./style"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h2>Introdução ao React</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse magni sint dolorem accusantium blanditiis facilis iste quibusdam illum repellat consequatur ut iusto ipsa hic exercitationem, optio libero possimus nesciunt?</p>

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
        </Content>
      </main>
    </Container>
  )
}