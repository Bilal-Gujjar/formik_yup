import { useFormik } from 'formik'
import React from 'react'
import * as yup from'yup'
function FormikForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        onSubmit: (values) => {
            console.log(values);


        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required.'), 
            password: yup.string()
                .min(6, 'Password is too short.')
                .max(12, 'Password is too long.')
                .required('This field is required.')
        })
      
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
