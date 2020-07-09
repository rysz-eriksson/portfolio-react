import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import projectInfo from '../data/projectsInfo';
import PortfolioItem from './PortfolioItem';

const useStyles = makeStyles({
    root: {
        paddingBottom: '80px'
    }, 
  });
export default () => {
    const [ projectData ] = useState([...projectInfo])
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
        {projectData.map(item => {
            return (
            <Grid item xs={6} key={item.title}>
                <PortfolioItem project={item} key={item.title} color="secondary" />
            </Grid>
            )
        })}
        </Grid>
    )
}