import { useFormik } from 'formik'
import React from 'react'

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        onSubmit: (values) => {
            console.log(values);


        },
        validate: (values) => {
            let error = {};
            if (!values.email)
                error.email = "Email is Required"
            if (!values.password)
                error.password = "Passward Required"
            return error;
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter the Email
                    <input type="text" id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : ""}
                </label>
                <br>
                </br><br></br>
                <label>
                    Enter the Password
                    <input type="password" id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : ""}
                    <br />

                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormikForm
