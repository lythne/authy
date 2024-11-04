import { BrandStyles } from 'fragmentsStyles';
import { Logo } from 'sharedUI';

export default function Brand() {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>Authy</p>
        </div>
    );
}