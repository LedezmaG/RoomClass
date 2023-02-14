import React, { useState } from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FieldController } from '../utils/FieldController';

export const Account = () => {
    
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
        <div>
            <h1>Mi cuenta</h1>
            <Formik
                initialValues={formValues}
                validationSchema={formValidation}
                onSubmit={(values) => handelEdit(values)}
            >
                    {() => (
                        <Form className="row mt-5">
                            <div className="mb-3 col-12 col-md-6">
                                <FieldController
                                    type="text"
                                    label="Nombre"
                                    name="name"
                                    placeholder="example@email.com"
                                />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <FieldController
                                    type="text"
                                    label="Apellido"
                                    name="lastName"
                                />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <FieldController
                                    type="email"
                                    label="Email"
                                    name="email"
                                />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <FieldController
                                    type="number"
                                    label="Telefono"
                                    name="phone"
                                />
                            </div>
                            <div className="mb-3 col-12 col-md-12 text-end">
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                >
                                    Actualizar
                                </button>
                            </div>
                        </Form>
                    )}
            </Formik>
        </div>
    )
}
