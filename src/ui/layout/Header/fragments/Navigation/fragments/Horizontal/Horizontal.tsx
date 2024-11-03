import { HorizontalStyles } from 'fragmentsStyles';

export default function Horizontal({ children }: Children) {
    return <div className={HorizontalStyles.Horizontal}>{children}</div>;
}
