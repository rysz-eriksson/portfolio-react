import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import projectInfo from '../data/projectsInfo';
import PortfolioItem from './PortfolioItem';

export default () => {
    const [ projectData ] = useState([...projectInfo])

    return (
        <Grid container spacing={3}>
        {projectData.map(item => {
            return (
            <Grid item xs={6} key={item.title}>
                <PortfolioItem project={item} key={item.title}/>
            </Grid>
            )
        })}
        </Grid>
    )
}