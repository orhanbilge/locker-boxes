import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("* Required")
  });

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  return (
    <div>
      {loginStatus === "USER_ERROR" ? (
        <div role="alert">
          <span>Incorrect user information</span>
        </div>
      ) : null}

      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login({ email: values.email }));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Your email address"
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <button type="submit">Log in</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
