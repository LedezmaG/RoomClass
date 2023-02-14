import React from 'react'
import { GroupItem } from '../../components/GroupItem'
import { GroupSettingsModal } from '../../components/GroupSettingsModal'

export const Groups = () => {
    return (
        <div className="row">
            <GroupSettingsModal isNew />
            <div className="col-12 center-center">
                <h1>Grupos</h1>
                <div>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#settingsGroup">
                        <i className="fa-solid fa-plus" /> Nuevo Grupo
                    </button>
                </div>
            </div>
            <div className="row mt-5">
                <GroupItem id={1} shortName="Level 6" name="Proulex 5 - 7" />
                <GroupItem id={1} shortName="Level 6" name="Proulex 5 - 7" />
                <GroupItem id={1} shortName="Level 6" name="Proulex 5 - 7" />
            </div>
        </div>
    )
}
