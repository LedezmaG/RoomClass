import React from "react";
import { ErrorMessage, Field } from "formik";

export const FieldController = ({ label, type, options = [], ...props }) => {
    if (type === "text") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    type="text"
                    className="form-control"
                />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "email") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    type="text"
                    className="form-control"
                />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "password") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    type="password"
                    className="form-control"
                />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "number") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    type="number"
                    className="form-control"
                />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "textarea") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    as="textarea"
                    className="form-control"
                />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "select") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    as="select"
                    className="form-select"
                >
                    <option value="" disabled>
                        Seleccione una opción
                    </option>
                    {options.length > 0 ? (
                        options.map((op) => <option value={op}>{op}</option>)
                    ) : (
                        <option value="" disabled>
                            Sin opciónes disponibles
                        </option>
                    )}
                </Field>
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "switch") {
        return (
            <div className="form-check form-switch">
                <label className="form-check-label">
                    <Field
                        name={props.name}
                        readOnly={props.readonly}
                        type="checkbox"
                        role="switch"
                        className="form-check-input"
                    />
                    <span> {label} </span>
                </label>
                <br />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </div>
        );
    }
    if (type === "checkbox") {
        return (
            <>
                <label className="form-check-label">
                    <Field
                        name={props.name}
                        readOnly={props.readonly}
                        type="checkbox"
                        className="form-check-input"
                    />
                    <span> {label} </span>
                </label>
                <br />
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
    if (type === "select") {
        return (
            <>
                {label && <label htmlFor={props.name}>{label}</label>}
                <Field
                    name={props.name}
                    readOnly={props.readonly}
                    as="select"
                    className="form-select"
                >
                    <option value="">
                        Seleccione una opción
                    </option>
                    {options.length > 0 ? (
                        options.map((option) => option )
                    ) : (
                        <option value="" disabled>
                            Sin opciónes disponibles
                        </option>
                    )}
                </Field>
                <ErrorMessage
                    className="error-msg"
                    name={props.name}
                    component="span"
                />
            </>
        );
    }
};
