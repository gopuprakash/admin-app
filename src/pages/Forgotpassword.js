import React from "react";
import CustomInput from "../components/CustomInput";


const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333" , minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">Please enter your registered Email Address to get the reset password url</p>
        <form action="" >
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
          />
          <div className="mb-3"  />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword