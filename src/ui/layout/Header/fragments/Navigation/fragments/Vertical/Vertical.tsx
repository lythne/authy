'use client';
import { useState } from 'react';
import { VerticalStyles } from 'fragmentsStyles';
import Image from 'next/image';

const imageStyles = {
    width: '24px',
    height: 'auto',
};

export default function Vertical({ children }: Children) {
    const [navigation, setNavigation] = useState<boolean>(false);
    function triggerNavigation() {
        setNavigation(!navigation);
    }
    return (
        <div className={VerticalStyles.Vertical}>
            <div
                className={VerticalStyles.VerticalTrigger}
                onClick={triggerNavigation}>
                <Image
                    height={24}
                    width={24}
                    src={navigation ? '/icons/close.svg' : '/icons/open.svg'}
                    alt="Close Icon"
                />
            </div>
            {navigation ? (
                <div className={VerticalStyles.VerticalNavigation}>
                    {children}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
