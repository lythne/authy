import localFont from 'next/font/local';

export const workSans = localFont({
    src: [
        {
            path: '../../fonts/variable/Work_Sans/Normal.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/variable/Work_Sans/Italic.ttf',
            style: 'italic',
        },
    ],
});

export const albertSans = localFont({
    src: [
        {
            path: '../../fonts/variable/Albert_Sans/Normal.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/variable/Albert_Sans/Italic.ttf',
            style: 'italic',
        },
    ],
});
