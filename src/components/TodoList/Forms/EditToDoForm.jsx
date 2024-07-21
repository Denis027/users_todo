import { React } from "react";
import "./AddToDoForm.modul.css";
import { useFormik } from "formik";
import * as yup from "yup";

const EditToDoForm = (props) => {
    const formik = useFormik({
        initialValues: {
            title: props.item.title,
            description: props.item.description,
            date: props.item.date,
        },
        validationSchema: yup.object({
            title: yup.string().required("required"),
            date: yup.string().required("required"),
        }),
        onSubmit: (authData) => {
            const id = props.item.id;
            console.log(authData);
            props.editToDoItem({ id, ...authData });
            props.setEditMode(false);
        },
    });

    return (
        <div className="toDoForm">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.submitCount > 0 && formik.errors.title && (
                        <p>{formik.errors.title}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.submitCount > 0 && formik.errors.description && (
                        <p>{formik.errors.description}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.submitCount > 0 && formik.errors.date && (
                        <p>{formik.errors.date}</p>
                    )}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditToDoForm;
