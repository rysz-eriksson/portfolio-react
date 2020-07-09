import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        marginBottom: '40px'
    }, 
  });

export default () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
            <Typography variant='h4' align='start' gutterBottom>Hi, I'm Ryszard,</Typography>
            <Typography variant='h6' align='justify' gutterBottom>motivated IT engineer with +5 years of experience in tech industry. Now I' focusing on developping front-end programming skills in vanilla JS and React. Here are few of my projects:</Typography>
        </div>
    )
}