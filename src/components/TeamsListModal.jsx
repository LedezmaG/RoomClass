import React, { useState } from 'react'
import _img from '../assets/4.jpg'

const teams = [
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
    "David ledezma",
]

export const TeamsListModal = ({}) => {

    return (
        <div 
            className="modal modal-xl fade" 
            id="teamsListModal" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="teamsListModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="teamsListModalLabel">
                            Equipos
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <div className="modal-body row">
                        <TeamListItem teamNumber={1} members={teams} />
                        <TeamListItem teamNumber={2} members={teams} />
                        <TeamListItem teamNumber={3} members={teams} />
                    </div>
                </div>
            </div>
        </div>
    )
}



const TeamListItem = ({teamNumber, members}) => {

    return (
        <div class="col-md-6 col-lg-3">
            <div class="tl-box">
				<div class="box-header with-border">
                    <h5 class="box-title">Equipo {teamNumber}</h5>
				</div>

				<div class="box-body p-0 list-group">
                    {members.map( item => 
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <span class="mb-1">{item}</span>
                            </div>
                        </a>
                    )}
				</div>
            </div>
        </div>
    )
}
