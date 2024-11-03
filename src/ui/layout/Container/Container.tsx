import { ContainerStyles } from '@/exports/styles/layout';

export default function Container({ children }: Children) {
    return <div className={ContainerStyles.Container}>{children}</div>;
}
