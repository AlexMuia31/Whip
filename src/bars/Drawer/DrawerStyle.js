import { makeStyles } from "@material-ui/core";

export const DrawerStyle = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: '200px'
        }

    },
    drawerPaper: {
        width: '200px',
        color: "white",
        backgroundColor: '#23508B'
    },
    logo: {
        borderBottom: "1px solid #004d40",
        padding: theme.spacing(4)
    },
    active: {
        backgroundColor: '#004d40',
        borderBottom: '1px solid #004d40'
    },
    notActive: {
        borderBottom: '1px solid #004d40'
    },
    linkIcon: {
        color: '#FFFFFF'
    }
}))