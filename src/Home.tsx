import React from "react";

import {
    Container, makeStyles,
    Typography
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    container: {
    }
}));


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <main>
                <div>
                    <Container maxWidth='md' className={classes.container}>
                        <Typography variant={'h2'} align={"center"} color='textPrimary' gutterBottom>
                            Home
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography variant='subtitle1' align='right' color='textSecondary'>
                            ~ Tim-Cedric Inhoff
                        </Typography>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default Home