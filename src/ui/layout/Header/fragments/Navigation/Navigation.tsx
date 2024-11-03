import { NavigationStyles } from 'fragmentsStyles';
import { Horizontal, Vertical } from 'fragmentsUI';

export default function Navigation({ children }: Children) {
    return (
        <nav className={NavigationStyles.Navigation}>
            <Horizontal>{children}</Horizontal>
            <Vertical>{children}</Vertical>
        </nav>
    );
}
