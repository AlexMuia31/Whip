import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

export const DrawerData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        icon: <HomeIcon />
    },
    {
        id: 2,
        title: 'Lyrics',
        path: '/lyrics',
        icon: <LibraryMusicIcon />
    },
    {
        id: 3,
        title: 'About',
        path: '/about',
        icon: <InfoIcon />
    },


]