import { ReactNode } from 'react';

declare global {
    interface Children {
        children: ReactNode;
    }
    interface UrlName {
        url: string;
        name: string;
    }
    interface UrlNameActive extends UrlName {
        active?: boolean;
    }
}

export {};
