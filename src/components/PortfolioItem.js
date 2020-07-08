import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

// const useStyles = makeStyles({
//     media: {
//     },
//   });

export default (props) => {
    // const classes = useStyles();
    const { project } = props
    return (
        <Card>
            <CardMedia
            style={{height: '80px', paddingTop: '56.25%'}}
            image={project.imageUrl}
            title={project.title}
            />
            <CardContent>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Grid container justify="space-evenly" spacing={3}>{project.technologies.map(item => {
                return <Chip
                key={item}
                label={item}
                size="medium"
                clickable
                />
            })}</Grid>
        </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" href={project.pageUrl} target="_blank">Go to page</Button>
                <Button color="primary" variant="contained" href={project.codeUrl} target="_blank">See code</Button>
            </CardActions>
        </Card>
    )
}