import { React } from "react";
import "./ToDoForm.modul.css";
import { useFormik } from "formik";
import * as yup from "yup";

const AddToDoForm = (props) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            date: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("required"),
            date: yup.string().required("required"),
        }),
        onSubmit: (authData) => {
            props.setNewToDoItem(authData);
            formik.values.title = "";
            formik.values.description = "";
            formik.values.date = "";
        },
    });

    return (
        <div className="toDoFormWrapper">
            <form className="toDoForm" onSubmit={formik.handleSubmit}>
                <div className="toDoFormTitle">
                    <label htmlFor="title">Title: </label>
                    <textarea
                        className="titleArea"
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.submitCount > 0 && formik.errors.title && (
                        <p
                            style={{
                                color: "red",
                            }}
                        >
                            {formik.errors.title}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        className="descriptionArea"
                        id="description"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input
                        className="dateInput"
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.submitCount > 0 && formik.errors.date && (
                        <p
                            style={{
                                color: "red",
                            }}
                        >
                            {formik.errors.date}
                        </p>
                    )}
                </div>
                <button type="submit">Add task</button>
            </form>
        </div>
    );
};

export default AddToDoForm;
