import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/Frame.png";
import PageImage from "../assets/Image-page.png";
import googleIcon from "../assets/Google.svg";

export default function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-regular fa-eye-slash");
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const handleClick = () => {
    if (type === "password") {
      setIcon("fa-regular fa-eye");
      setType("text");
    } else {
      setIcon("fa-regular fa-eye-slash");
      setType("password");
    }
  };
  return (
    <section className="login p-4">
      <div className="col-6">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo" />
          <p className="m-0 ms-2">PNFT Market</p>
        </div>
        <div className="content pt-5 pb-5 ">
          <div className="container">
            <div className="form d-flex align-items-center justify-content-center flex-column">
              <div className="info d-flex align-items-start flex-column pb-1">
                <h2 className="fw-bold">NFT Access</h2>
                <p className="mb-3">
                  Please fill your detail to access your account.
                </p>
              </div>
              <form>
                <div className="email mb-3 p-relative">
                  <label className="d-block text-start mb-1" htmlFor="email">
                    email
                  </label>
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="example@example.com"
                  />
                  <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div className="password mb-1">
                  <label className="d-block text-start mb-1" htmlFor="pass">
                    password
                  </label>
                  <input
                    className="d-block"
                    id="pass"
                    type={type}
                    placeholder="••••••••"
                  />
                  <span onClick={handleClick}>
                    <i className={icon}></i>
                  </span>
                </div>
                <div className="options d-flex justify-content-between align-items-center mb-4">
                  <div className="checkbox d-flex justify-content-center align-items-center">
                    <input className="me-1" type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#">Forgot Password?</a>
                </div>
                <button className="btn-sign">Sign in</button>
                <button className="btn-google mb-3">
                  <img
                    className="img-fluid"
                    src={googleIcon}
                    alt="google icon"
                  />
                  Sign in with Google
                </button>
                <p className="text-center">
                  Don’t have an account? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="image">
          <img className="img-fluid" src={PageImage} alt="Content Image"></img>
        </div>
      </div>
    </section>
  );
}
