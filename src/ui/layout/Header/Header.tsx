import { Brand } from 'fragmentsUI';
import { HeaderStyles } from 'layoutStyles';

export default function Header() {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
        </header>
    );
}
