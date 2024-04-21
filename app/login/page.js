/* eslint-disable react/no-unescaped-entities */
"use client";

import loginBackground from "@/assets/images/login-bg.svg";
import eShopLogo from "@/assets/logos/e-shop-logo.svg";
import TextInputField from "@/components/forms/TextInputField";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import facebookLogo from "@/assets/logos/facebook-logo.svg";
import googleLogo from "@/assets/logos/google-logo.svg";
import appleLogo from "@/assets/logos/apple-logo.svg";

export default function LoginPage() {
  const [backendErrors, setBackendErrors] = useState({});

  const handleChange = () => {
    console.log("state changing");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-black">
      <div className="flex items-center justify-center w-full ">
        <div className="px-8 my-11 pt-10 pb-8 bg-white rounded-2xl w-[514px]">
          <div className="flex justify-center mb-[30px]">
            <Link href="/">
              <Image src={eShopLogo} alt="Shop Logo" />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h4 className="font-bold text-h4">Welcome Back!</h4>
            <p className="text-body-large">Login to your account</p>
          </div>

          <form>
            <div className="mb-4">
              <TextInputField
                label="Email or Phone Number"
                id="email_or_phone_number"
                name="email_or_phone_number"
                //   value={form.first_name}
                onChange={handleChange}
                placeholder="Enter email or phone number"
                errors={backendErrors}
              />
            </div>

            <div>
              <TextInputField
                label="Password"
                id="password"
                name="password"
                //   value={form.first_name}
                onChange={handleChange}
                placeholder="minimum 8 characters"
                errors={backendErrors}
              />
            </div>

            <div className="flex items-center justify-between mt-2 mb-6">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded-md appearance-none cursor-pointer checked:bg-blue-600"
                />
                <p className="font-medium text-gray-600">Remember me</p>
              </div>

              <p className="font-medium text-indigo-800">Forgot Password?</p>
            </div>

            <button className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-md">
              Login
            </button>

            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <span className="font-medium text-indigo-800 text-body-large">
                  Create Account
                </span>
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8 mb-5">
              <div className="h-[1px] bg-gray-300 w-full"></div>
              <span className="text-gray-600">or</span>
              <div className="h-[1px] bg-gray-300 w-full"></div>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="w-[75px] h-[52px] border border-gray-200 rounded-md flex items-center justify-center">
                  <Image src={googleLogo} alt="Google Logo" />
                </div>
                <div className="w-[75px] h-[52px] border border-gray-200 rounded-md flex items-center justify-center">
                  <Image src={facebookLogo} alt="Facebook Logo" />
                </div>
                <div className="w-[75px] h-[52px] border border-gray-200 rounded-md flex items-center justify-center">
                  <Image src={appleLogo} alt="Apple Logo" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
