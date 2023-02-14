import React from 'react'
import { GroupSettingsModal } from '../../components/GroupSettingsModal'
import { StudenItem } from '../../components/StudenItem'
import { StudenSettingsModal } from '../../components/StudenSettingsModal'
import { TeamsListModal } from '../../components/TeamsListModal'
import { TeamsModal } from '../../components/TeamsModal'

export const Group = () => {
    return (
        <div className="row">
            <GroupSettingsModal isEdit />
            <StudenSettingsModal isEdit />
            <TeamsModal />
            <TeamsListModal />
            <div className="col-12 center-center">
                <h1>Grupo</h1>
                <div>
                    <button className="btn btn-primary mx-1">
                        <i class="fa-solid fa-user" /> Aleatorio
                    </button>
                    <button className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#teamsListModal">
                        <i class="fa-solid fa-users" /> Equipos
                    </button>
                    <button className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#settingsStuden" >
                        <i class="fa-solid fa-user-plus" /> Agregar
                    </button>
                    <button className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#settingsGroup" >
                        <i className="fa-solid fa-gear" /> Ajustes
                    </button>
                </div>
            </div>

            <div className="row mt-5">
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                <StudenItem name={'David'} condition={{state: 1, icon:"fa-circle-check"}} />
                
            </div>
        </div>
    )
}
