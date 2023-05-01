import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const Login = () => {
  const departments = [
    {
      value: "EEE",
      label: "electrical",
    },
    {
      value: "MECH",
      label: "mechnical",
    },
    {
      value: "CIVIL",
      label: "civil",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="container">
        <div className="box my-3">
          <h3 className="my-3">Form with validations  </h3>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-danger">Email is required </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                id="exampleFormControlInput2"
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-danger">Password is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="text-danger">Password min 6 characters </p>
              )}
            </div>
            <div className="">
              <label>Select the interest of departments</label>
              <Controller
                name="department"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} /*isMulti */ options={departments} />
                )}
              />
              {errors.department && (
                <p className="text-danger">this is required field </p>
              )}
            </div>
            <div className="form-check mb-3">
              <div className="">
                <div className="py-3">
                  <label>Select Gender</label>
                </div>
                <div className="radioBox">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="male"
                      name="male"
                      id="flexCheckDefault1"
                      {...register("gender",{
                        required:"Select Gender"
                      })}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="female"
                      id="flexCheckDefault2"
                      name="female"
                      {...register("gender")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault2"
                    >
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="others"
                      name="others"
                      id="flexCheckDefault3"
                      {...register("gender")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault3"
                    >
                      Others
                    </label>
                  </div>
                </div>
                {errors.gender && (<p className="text-danger ">Please select gender </p>)}
              </div>
            </div>
            <div className="mb-3">
              <label> Select your skill</label>
              <div className="checkBox py-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="java script"
                    name="java script"
                    id="flexCheckDefault4"
                    {...register("skill",{
                      required: "Select at-Least one Skill "
                    })}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault4"
                  >
                    Java Script
                  </label>
                  
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="react js"
                    name="react Js"
                    id="flexCheckDefault5"
                    {...register("skill")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault5"
                  >
                    React js
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Node Js"
                    name="Node Jst"
                    id="flexCheckDefault6"
                    {...register("skill")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault6"
                  >
                    Node Js 
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="angular Js"
                    name="angular Js"
                    id="flexCheckDefault7"
                    {...register("skill")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault7"
                  >
                    Angulat Js 
                  </label>
                </div>
                {errors.skill && (<p className="text-danger">Select at-least one skill</p>)}
              </div>
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
