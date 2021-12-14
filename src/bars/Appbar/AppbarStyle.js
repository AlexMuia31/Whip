import { makeStyles } from "@material-ui/core";

export const AppbarStyle = makeStyles(theme => ({
    appbar: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '200px',
        },

        backgroundColor: '#23508B'
    },
    appbarContent: {
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))