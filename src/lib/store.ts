import { readable, writable } from 'svelte/store';

export const introCompleted = writable(false);
export const isMagicMouseInit = writable(false);
export const isLoading = writable(false);

export const projects = readable([
    {
        figure: '/shots/glasshub.jpeg',
        title: 'GlassHUB',
        slug: 'glasshub',
        desc: 'A platform revolutionizing supply chain regulations, management, and solutions.',
        tags: [
            {
                label: 'NodeJS',
                slug: 'nodejs',
            },
            {
                label: 'Vue',
                slug: 'vue',
            },
            {
                label: 'Postgres',
                slug: 'postgres',
            },
        ],
    },
    {
        figure: '/shots/bokdoc.jpg',
        title: 'BokDoc',
        slug: 'bokdoc',
        desc: 'The first platform in Egypt and the MENA region for medical procedures and surgeries.',
        tags: [
            {
                label: 'Laravel',
                slug: 'laravel',
            },
            {
                label: 'Vue',
                slug: 'vue',
            },
            {
                label: 'MariaDB',
                slug: 'mysql',
            },
        ],
    },
    {
        figure: '/shots/appbear.png',
        title: 'AppBear',
        slug: 'appbear',
        desc: 'A no-code WordPress to customizable mobile app builder.',
        tags: [
            {
                label: 'WordPress',
                slug: 'wp',
            },
            {
                label: 'PHP',
                slug: 'php',
            },
            {
                label: 'MySQL',
                slug: 'mysql',
            },
        ],
    },
]);
