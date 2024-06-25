import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) { // icon: Icon = recebeu como icon mas vai passar como Icon
    return (
        <Container>
            {Icon && <Icon size={20}/>} {/* só vai renderizar o icon se realmente tiver icon e for true */}
            <input {...rest}/>
        </Container>
    )
};