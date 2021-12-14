import React, { useState } from 'react'
import { LayoutStyle } from './LayoutStyle'
import LeftDrawer from '../bars/Drawer/Drawer';
import Appbar from '../bars/Appbar/Appbar';

const Layout = ({ children }) => {
    const classes = LayoutStyle();
    const [isMobile, setIsmobile] = useState(false);
    const funcSetIsMobile = () => {
        setIsmobile(!isMobile)
    }
    return (
        <div className={classes.root}>
            <LeftDrawer isMobile={isMobile} funcSetIsMobile={funcSetIsMobile} />
            <Appbar funcSetIsMobile={funcSetIsMobile} />

            <main>
                <div className={classes.topbarWidth} />
                {children}
            </main>
        </div>
    )
}

export default Layout
