import { NavigationItem } from 'fragmentsUI';
import { Container, Footer, Header, Main } from 'layoutUI';
import { Button } from 'sharedUI';

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
                <Button
                    url="/login"
                    name="Sign In"
                />
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </>
    );
}
