import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const colors = [
    "#1e88e5",
    "#26c6da ",
    "#7460ee",
    "#fc4b6c",
    "#ffb22b",
]
export const GroupItem = ({ id, shortName, name }) => {

    const color = colors[Math.floor(Math.random() * colors.length)]

    return (
        <div className="col-xl-3 col-md-6 col-6" >
            <div className="gp-box" style={{backgroundColor: color}}>
                <div className="inner">
                    <h3>{shortName}</h3>
                    <p>{name}</p>
                </div>
                <div className="icon">
                    <i className="fa fa-users-rectangle"></i>
                </div>
                <Link to={`/groups/${1}`} className="gp-box-footer"> 
                    Ver mas <i className="fa fa-arrow-right" />
                </Link>
            </div>
        </div>
    )
}
