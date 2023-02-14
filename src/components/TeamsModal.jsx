import React, { useState } from 'react'
import _img from '../assets/4.jpg'

const colors = [
    "#1e88e5",
    "#26c6da ",
    "#7460ee",
    "#fc4b6c",
    "#ffb22b",
]

export const TeamsModal = ({}) => {

    return (
        <div 
            className="modal fade" 
            id="teamsModal" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="teamsModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="teamsModalLabel">
                            Equipos
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <div className="modal-body row">

                        {/* <TeamItem value={2} />
                        <TeamItem value={3} />
                        <TeamItem value={4} />
                        <TeamItem value={5} />
                        <TeamItem value={6} />
                        <TeamItem value={7} />
                        <TeamItem value={8} />
                        <TeamItem value={9} />
                        <TeamItem value={10} /> */}

                        <TeamListItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamItem = ({value}) => {
    
    const color = colors[Math.floor(Math.random() * colors.length)]

    return (
        <div className="col-md-6 col-lg-4">
            <div class="tm-box">
                <div class="box-body">
                    <div class="text-center my-2">
                        <div class="title" style={{color: color}}>{value}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamListItem = ({members}) => {
    
    const color = colors[Math.floor(Math.random() * colors.length)]

    return (
        <div class="col-md-6 col-lg-6">
            <div class="tl-box">
				<div class="box-header with-border">
                    <h5 class="box-title">Equipo 1</h5>
				</div>

				<div class="box-body p-0 list-group">
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <span class="mb-1">David Ledezma</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <span class="mb-1">David Ledezma</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <span class="mb-1">David Ledezma</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <span class="mb-1">David Ledezma</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <span class="mb-1">David Ledezma</span>
                        </div>
                    </a>
				</div>
            </div>
        </div>
    )
}
