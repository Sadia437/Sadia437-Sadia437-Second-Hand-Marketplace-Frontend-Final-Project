import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import toast from "react-hot-toast";


const SignUp = () => {
  const { createUser, saveUser, getToken, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  const handleSignUp = async (data) => {
    try {
      await createUser(data.email, data.password); 
      await saveUser(data.name, data.email, data.userType); 
      await getToken(data.email); 
      toast.success("Account created successfully!");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google SignIn
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      await saveUser(user.displayName, user.email, 'buyer'); 
      toast.success("Logged in with Google!");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // GitHub SignIn
  const handleGithubLogin = async () => {
    try {
      const result = await githubLogin();
      const user = result.user;
      await saveUser(user.displayName, user.email, 'buyer'); 
      await getToken(user.email);
      toast.success("Logged in with GitHub!");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Facebook SignIn
  const handleFacebookLogin = async () => {
    try {
      const result = await facebookLogin();
      const user = result.user;
      await saveUser(user.displayName, user.email, 'buyer'); 
      await getToken(user.email);
      toast.success("Logged in with Facebook!");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignUp)} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is Required" })}
              className="input w-full"
              placeholder="Name"
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is Required" })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <label className="label">User Type</label>
            <select
              {...register("userType", { required: "User Type is Required" })}
              className="select select-primary w-full mt-1"
              defaultValue="buyer"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.userType && <span className="text-red-500">{errors.userType.message}</span>}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: { value: 6, message: "Password should be at least 6 characters" },
                pattern: {
                  value: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                  message: "Password must contain one uppercase, one number, and one special character"
                }
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            <div className="flex justify-between mt-2">
              <Link to="/sign-in" className="link link-hover">
                Already Have an Account? Please Login
              </Link>
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primary mt-4 w-full"
            />
          </form>

          <div className="flex gap-5 justify-between mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary w-full"
            >
              Continue By Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-primary w-full"
            >
              Continue By Github
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn btn-primary w-full"
            >
              Continue By Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
