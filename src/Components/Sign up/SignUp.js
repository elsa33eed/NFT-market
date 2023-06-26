import React, { useState } from "react";
import "./Sign-up.css";
import Logo from "../../assets/Frame.png";
import LogoGoogle from "../../assets/Google.svg";
import Image from "../../assets/Image-page.png";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //   state to icon password
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-regular fa-eye");

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon("fa-regular fa-eye-slash");
    } else {
      setType("password");
      setIcon("fa-regular fa-eye");
    }
  };

  return (
    <section className="sign-up">
      <div className="container-fluid">
        <div className="content d-flex align-items-center">
          <div className="form-content col-6 mb-4 ">
            <div className="logo d-flex align-items-center mb-4">
              <img src={Logo} alt="Logo" />
              <p className="m-0 ms-2">PNFT Market</p>
            </div>
            <div className="info mb-4 mt-4">
              <h2 className="fw-bold">NFT Access</h2>
              <p className="mb-3">
                Please fill your detail to access your account.
              </p>
            </div>
            <div className="form w-75 m-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="name d-flex gap-3 justify-content-center align-items-center">
                  <div className="first d-flex flex-column align-items-start">
                    <label htmlFor="first">First Name</label>
                    <input
                      type="text"
                      id="first"
                      {...register("firstName", {
                        required: true,
                        maxLength: 15,
                      })}
                      placeholder="First Name"
                    />
                    {errors.firstName?.type === "required" && (
                      <p className="errMsgN">*First name is required.</p>
                    )}
                    {errors.firstName?.type === "maxLength" && (
                      <p className="errMsgN">*First name is not valid.</p>
                    )}
                  </div>
                  <div className="last d-flex flex-column align-items-start">
                    <label htmlFor="last">Last Name</label>
                    <input
                      type="text"
                      id="last"
                      {...register("lastName", {
                        required: true,
                        maxLength: 15,
                      })}
                      placeholder="Last Name"
                    />
                    {errors.lastName?.type === "required" && (
                      <p className="errMsgN">*Last name is required.</p>
                    )}
                    {errors.lastName?.type === "maxLength" && (
                      <p className="errMsgN">*First name is not valid.</p>
                    )}
                  </div>
                </div>
                <div className="email">
                  <label className="d-block text-start" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    placeholder="example@example.com"
                  />
                  {errors.email?.type === "required" && (
                    <p className="errMsg">*Email is required.</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="errMsg">*Email is not valid.</p>
                  )}
                </div>
                <div className="password">
                  <label className="d-block text-start" htmlFor="pwd">
                    Password
                  </label>
                  <input
                    type={type}
                    {...register("pwd", { required: true, minLength: 8 })}
                    id="pwd"
                    placeholder="••••••••"
                  />
                  <span onClick={handleClick}>
                    <i class={icon}></i>
                  </span>
                  {errors.pwd?.type === "required" && (
                    <p className="errMsg">*Password is required.</p>
                  )}
                  {errors.pwd?.type === "minLength" && (
                    <p className="errMsg">*Password is not valid.</p>
                  )}
                </div>
                <div className="confirm-password">
                  <label className="d-block text-start" htmlFor="cnf-pwd">
                    Confirm Password
                  </label>
                  <input
                    className="mb-4"
                    type={type}
                    id="cnf-pwd"
                    {...register("cnfPwd", { required: true, minLength: 8 })}
                    placeholder="••••••••"
                  />
                  <span onClick={handleClick}>
                    <i class={icon}></i>
                  </span>
                  {errors.cnfPwd?.type === "required" && (
                    <p className="errMsg">*Password is required.</p>
                  )}
                  {errors.cnfPwd?.type === "minLength" && (
                    <p className="errMsg">*Password is not valid.</p>
                  )}
                </div>
                <div className="buttons">
                  <button className="btn">Sign Up</button>
                  <button className="btn-google">
                    <img src={LogoGoogle} alt="google" />
                    Sign Up With Google
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="image-content col-6 pt-3 pb-4">
            <img src={Image} alt="Image Content" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
