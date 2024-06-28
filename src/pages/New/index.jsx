import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

export function New(){
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    
                    <Input placeholder="Título"/>

                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://www.rocketseat.com.br/"/>
                        <NoteItem placeholder="Nova nota" isNew/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem placeholder="Nova nota" isNew/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}