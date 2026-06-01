import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext"; 
import toast from "react-hot-toast";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { signIn, getToken, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignIn = async (data) => {
    try {
      await signIn(data.email, data.password);
      await getToken(data.email);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      await getToken(result.user.email);
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await githubLogin();
      await getToken(result.user.email);
      toast.success("Logged in with GitHub!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await facebookLogin();
      await getToken(result.user.email);
      toast.success("Logged in with Facebook!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignIn)} className="fieldset">
            <label className="label">Email</label>
            <input type="email" {...register("email", { required: true })} className="input w-full" placeholder="Email"/>
            {errors.email && <span className="text-red-500">Email is Required</span>}

            <label className="label">Password</label>
            <input type="password" {...register("password", { required: true })} className="input w-full" placeholder="Password"/>
            {errors.password && <span className="text-red-500">Password is Required</span>}

            <div className="flex justify-between">
              <a className="link link-hover">Forgot password?</a>
              <Link to="/sign-up" className="link link-hover">New To Website? Create Account</Link>
            </div>

            <input value="Sign In" type="submit" className="btn btn-primary mt-4"/>
          </form>

          <div className="flex gap-5 justify-between mt-4">
            <button onClick={handleGoogleLogin} className="btn btn-primary w-full">Continue By Google</button>
            <button onClick={handleGithubLogin} className="btn btn-primary w-full">Continue By Github</button>
            <button onClick={handleFacebookLogin} className="btn btn-primary w-full">Continue By Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
