import React from "react";
import {FC} from 'react'
import {useHistory} from 'react-router-dom'
import {
    Button,
    AppBar,
    Toolbar,Typography, makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    appbar: {
        marginBottom: '20px',
    }
}));

const AppLayout: FC = ({children}) => {
    const history = useHistory()

    const classes = useStyles();

    return (
        <>
            <AppBar position='static' className={classes.appbar}>
                <Toolbar>
                    <Button onClick={() => history.push('/home')} className={classes.button}>
                        <Typography variant='h5' >Home</Typography>
                    </Button>
                    <Button onClick={() => history.push('/gabentest')} className={classes.button}>
                        <Typography variant='h5'>Gabentest</Typography>
                    </Button>
                    <Button onClick={() => history.push('/ueberuns')} className={classes.button}>
                        <Typography variant='h5'>Über uns</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            {children}
        </>
    )
}

export default AppLayout
