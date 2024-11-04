import Link from 'next/link';
import { ButtonStyles } from 'sharedStyles';

export default function Button({ url, name }: UrlName) {
    return (
        <Link
            className={ButtonStyles.Button}
            href={url}
        >
            {name}
        </Link>
    );
}
