import { NavigationItem } from 'fragmentsUI';
import { Container, Footer, Header, Main } from 'layoutUI';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url="/"
                    name="Landing"
                    active
                />
                <NavigationItem
                    url="/"
                    name="Repository"
                />
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </>
    );
}
