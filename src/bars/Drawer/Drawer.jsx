import React from 'react'
import { Drawer, Hidden } from '@material-ui/core'
import { DrawerStyle } from './DrawerStyle'
import DrawerDesign from './DrawerDesign'

const LeftDrawer = ({ isMobile, funcSetIsMobile }) => {
    const classes = DrawerStyle()
    return (
        <div>
            <nav className={classes.drawer}>
                <Hidden xsDown implementation='css'>
                    <Drawer
                        variant='permanent'
                        open
                        anchor='left'
                        classes={{ paper: classes.drawerPaper }}

                    >
                        <DrawerDesign />
                    </Drawer>
                </Hidden>
                <Drawer
                    variant='temporary'
                    open={isMobile}
                    anchor='left'
                    classes={{ paper: classes.drawerPaper }}
                    onClick={funcSetIsMobile}
                >
                    <DrawerDesign />
                </Drawer>
            </nav>

        </div>
    )
}

export default LeftDrawer
