import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="section card-content grey-text text-darken-3">
            <h4 className="card-title">{project.title}</h4>
            <p>{project.content}</p>
            <p className="grey-text">Nov 30, 2019</p>
        </div>
    )
}

export default ProjectSummary;