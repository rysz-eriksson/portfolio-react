import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#FFEBED",

    },
    media: {
        paddingTop: '56.25%',
    }, 
    chipContainer: {
        margin: '1em 0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%'
    },
    chipItem: {
        margin: '0.3em 0.2em',
        backgroundColor: "#EACDC2",
    },
    buttonContainer: {
        padding: "1em"
    }
  });

export default (props) => {
    const classes = useStyles();
    const { project } = props
    return (
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={project.imageUrl}
            title={project.title}
            />
            <CardContent>
            <Typography variant="h6" color="secondary">{project.title}</Typography>
            <Typography variant="body2" color="secondary">{project.description}</Typography>
            <div className={classes.chipContainer}>{project.technologies.map(item => {
                return <Chip
                key={item}
                label={item}
                size="medium"
                className={classes.chipItem}
                />
            })}</div>
        </CardContent>
            <CardActions className={classes.buttonContainer}>
                <Button color="secondary" variant="contained" href={project.pageUrl} disabled={project.title === 'Portfolio'} target="_blank">Go to page</Button>
                <Button color="secondary" variant="contained" href={project.codeUrl} target="_blank">See code</Button>
            </CardActions>
        </Card>
    )
}