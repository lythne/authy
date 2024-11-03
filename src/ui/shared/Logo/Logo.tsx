import Image from 'next/image';
import { LogoStyles } from 'sharedStyles';

export default function Logo() {
    return (
        <Image
            className={LogoStyles.Logo}
            src={'/logo.svg'}
            alt="Logo"
            width={32}
            height={32}
        />
    );
}
