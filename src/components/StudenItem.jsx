import React, { useState } from 'react'
import _img from '../assets/4.jpg'

export const StudenItem = ({name, condition}) => {

    const [state, setState] = useState( condition )

    const handleState = () => {
        if (state.state === 1) {
            setState({state: 2, icon:"fa-circle-exclamation"})
        } else if (state.state === 2) {
            setState({state: 3, icon:"fa-circle-xmark"})
        }else if (state.state === 3) {
            setState({state: 1, icon:"fa-circle-check"})
        }
    }

    return (
        <div className="col-md-6 col-lg-2">
            <div className="st-box">
                <div className="box-float">

                    <div className="box-float-start">
                        <button type="button" className="btn btn-light" onClick={handleState}>
                            <i className={`fa-solid ${state.icon}`} />
                        </button>
                        {/* <i class="fa-solid fa-circle-xmark"></i> */}
                        {/* <i class="fa-regular fa-star-exclamation"></i>*/}
                        {/* <i class="fa-solid fa-circle-exclamation"></i> */}
                    </div>
                    <div className="box-float-end">
                        <button type="button" className="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                        <ul className="dropdown-menu">
                            <li><span className="dropdown-item" href="#">Editar</span></li>
                            <li><span className="dropdown-item" href="#">Eliminar</span></li>
                        </ul>
                    </div>
                </div>
                <div className="box-body text-center pt-1 pb-1">
                    <div>
                        <img className="avatar" src={_img} />
                    </div>
                    <h5 className="mt-3 mb-1">
                        {name}
                    </h5>
                </div>
            </div>
        </div>
    )
}
