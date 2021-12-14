import React from 'react'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { AppbarStyle } from './AppbarStyle'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';

const Appbar = ({ funcSetIsMobile }) => {
    const classes = AppbarStyle()
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar className={classes.appbar}>
                    <IconButton
                        className={classes.appbarContent}
                        onClick={funcSetIsMobile}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.appbarContent}>
                        Whip Music
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar
