import { MainStyles } from 'layoutStyles';

export default function Main({ children }: Children) {
    return <main className={MainStyles.Main}>{children}</main>;
}
