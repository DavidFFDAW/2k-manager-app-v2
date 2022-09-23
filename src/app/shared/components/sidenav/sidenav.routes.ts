export interface SidenavRouterType {
    link: string;
    name: string;
    icon: string;
    isAuth: boolean;
}

export const SidenavRouter = [
    {
        link: '/home',
        name: 'Home',
        icon: 'home',
        isAuth: false
    },
    {
        link: '/auth/login',
        name: 'Login',
        icon: 'login',
        isAuth: false
    },
    {
        link: '/404',
        name: 'Error Page',
        icon: 'error',
        isAuth: false
    },
    {
        link: '/champions',
        name: 'Campeones',
        icon: 'military_tech',
        isAuth: true
    },
    {
        link: '/teams',
        name: 'Equipos',
        icon: 'groups',
        isAuth: false
    },
];