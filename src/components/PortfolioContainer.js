import React, { useState} from 'react';
import projectInfo from '../data/projectsInfo';
import PortfolioItem from './PortfolioItem';

export default () => {
    const [ projectData ] = useState([...projectInfo])

    return (
        projectData.map(item => {
            return <PortfolioItem project={item} key={item.title}/>
        })
    )
}