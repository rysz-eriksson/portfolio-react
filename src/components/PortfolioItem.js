import React from 'react';

export default (props) => {
    const { project } = props
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>{project.technologies.map(item => {
                return <span>{item}</span>
            })}</div>
            <button><a href={project.pageUrl}>Go to page</a></button>
            <button><a href={project.codeUrl}>See code</a></button>
        </div>
    )
}