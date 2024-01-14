import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.comingFrom || "/";

  const { signInWithCredential, signInWithGoogle } = useAuth();

  const onSubmit = async (values) => {
    try {
      await signInWithCredential(values.email, values.password);
      navigate(comingFrom, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Enter a valid email").required("Required"),
      password: Yup.string().min(8).required("Required"),
    }),
    onSubmit,
  });

  return (
    <div className="reserve-table">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing up" : "Sign up"}
        </button>

        {/* divider */}
        <divider>
          <p>OR</p>
        </divider>
        {/* sign in with google button */}
        <button
          onClick={handleSignInWithGoogle}
        >
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="30px"
                height="30px"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </span>
            continue with google
          </div>
        </button>
      </form>
    </div>
  );
};

export default Order;
