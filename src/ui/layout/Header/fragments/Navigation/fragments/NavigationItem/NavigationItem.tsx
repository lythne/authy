import { NavigationItemStyles } from 'fragmentsStyles';
import Link from 'next/link';

export default function NavigationItem({ url, name, active }: UrlNameActive) {
    return (
        <Link
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
            href={url}
        >
            {name}
        </Link>
    );
}
