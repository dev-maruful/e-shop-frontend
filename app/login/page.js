"use client";

import loginBackground from "@/assets/images/login-bg.svg";
import eShopLogo from "@/assets/logos/e-shop-logo.svg";
import TextInputField from "@/components/forms/TextInputField";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [backendErrors, setBackendErrors] = useState({});

  const handleChange = () => {
    console.log("state changing");
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <Image
        src={loginBackground}
        alt="Gradient Image"
        className="absolute w-full -z-10"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center w-full">
        <div className="px-8 pt-10 pb-8 bg-white rounded-2xl w-[514px]">
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

            <div>
              <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded-md appearance-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
