import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import { FieldController } from '../utils/FieldController';

export const GroupSettingsModal = ({isNew, isEdit}) => {
    const [formValues, setFormValues] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const formValidation = Yup.object({
        name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Campo requerido"),
        lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Campo requerido"),
        email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Campo requerido"),
        phone: Yup.number().required("Campo requerido"),
    });

    const handelEdit = (data) => {
        console.log(data);
    };

    return (
        <div 
            className="modal fade" 
            id="settingsGroup" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="settingsGroupLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="settingsGroupLabel">
                            { isNew && "Agregar nuevo grupo" }
                            { isEdit && "Grupo" }
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={formValues}
                            validationSchema={formValidation}
                            onSubmit={(values) => handelEdit(values)}
                        >
                            {() => (
                                <Form className="row">
                                    <div className="mb-3 col-12">
                                        <FieldController
                                            type="text"
                                            label="Nombre"
                                            name="name"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="mb-3 col-12">
                                        <FieldController
                                            type="text"
                                            label="Nombre corto"
                                            name="name"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="mb-3 col-12">
                                        <FieldController
                                            type="text"
                                            label="Descripcion"
                                            name="lastName"
                                        />
                                    </div>
                                    <div className="mb-3 col-12 col-md-12 text-end">
                                        <button 
                                            type="button" 
                                            className="btn btn-danger mx-1" 
                                            data-bs-dismiss="modal"
                                        >
                                            Cerrar
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-secondary"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
