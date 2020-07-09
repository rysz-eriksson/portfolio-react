import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: '80%',
        height: '100px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0 auto'
    }, 
    icon: {
        margin: '0 0.2em',
    }
  });
export default () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Link href='https://www.linkedin.com/in/ryszard-wolosiuk' target='_blank' rel="noopener" color="secondary">
                <LinkedInIcon fontSize="large" className={classes.icon}  />
            </Link>    
            <Link href='https://github.com/rysz-eriksson' target='_blank' rel="noopener" color="secondary">
                <GitHubIcon fontSize="large" className={classes.icon}/>
            </Link>    
        </div>
    )
}