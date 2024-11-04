import { FooterStyles } from 'layoutStyles';

export default function Footer() {
    return (
        <footer className={FooterStyles.Footer}>
            <p>© {new Date().getFullYear()} Authy. All rights reserved.</p>
        </footer>
    );
}
