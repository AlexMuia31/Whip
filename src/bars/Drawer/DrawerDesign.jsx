import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { DrawerStyle } from './DrawerStyle'
import { DrawerData } from './DrawerData'
import { useNavigate, useLocation } from 'react-router-dom';

const DrawerDesign = () => {
    const classes = DrawerStyle()
    const navigate = useNavigate();
    const location = useLocation()

    return (
        <div>
            <Typography variant="h6" noWrap className={classes.logo}>
                Whip Music
            </Typography>
            {
                DrawerData.map(item => (
                    <ListItem
                        button
                        key={item.id}
                        onClick={() => navigate(item.path)}
                        className={location.pathname === item.path ? classes.active : classes.notActive}
                    >
                        <ListItemIcon className={classes.linkIcon}>{item.icon}</ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                    </ListItem>
                ))
            }
        </div>
    )
}

export default DrawerDesign
