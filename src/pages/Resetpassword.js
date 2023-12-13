import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Reset Password</h3>
        <p className="text-center">
          Please enter your new password
        </p>
        <form action="">
          <CustomInput
            type="password"
            label="New Password"
            id="pass"
            name="password"
          />
          <div className="mb-3" />
          <CustomInput
            type="password"
            label="Confirm Password"
            id="confpass"
            name="confpassword"
          />
          <div className="mb-3" />
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

export default Resetpassword;
