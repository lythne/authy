import { Brand, Navigation } from 'fragmentsUI';
import { HeaderStyles } from 'layoutStyles';

export default function Header({ children }: Children) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}
