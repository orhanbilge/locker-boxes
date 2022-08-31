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
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 w-3/12">
        <h1 className="text-3xl font-bold pb-6 text-center">Locker Boxes</h1>
        {loginStatus === "USER_ERROR" ? (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
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
                  className="px-4 block w-full py-2 font-normal border border-solid border-gray-300 rounded focus:border-gray-600 focus:outline-none"
                />
                <br />
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <button type="submit" className="px-7 py-3 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:outline-none active:bg-blue-800">Log in</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
