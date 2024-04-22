/* eslint-disable react/no-unescaped-entities */
"use client";

import eShopLogo from "@/assets/logos/e-shop-logo.svg";
import TextInputField from "@/components/forms/TextInputField";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import facebookLogo from "@/assets/logos/facebook-logo.svg";
import googleLogo from "@/assets/logos/google-logo.svg";
import appleLogo from "@/assets/logos/apple-logo.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Button from "@/components/common/Button";

export default function RegistrationPage() {
  const [backendErrors, setBackendErrors] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const handleChange = () => {
    console.log("state changing");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200">
      <div className="flex items-center justify-center w-full ">
        <div className="px-5 md:px-8 md:my-11 py-24 md:pt-10 md:pb-8 bg-white md:rounded-2xl w-[514px]">
          <div className="flex justify-center mb-8 md:mb-[30px]">
            <Link href="/">
              <Image src={eShopLogo} alt="Shop Logo" />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 mb-6 md:mb-10">
            <h4 className="font-bold text-h4">Create an Account</h4>
          </div>

          <form>
            <div className="mb-6 space-y-4">
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="w-full">
                  <TextInputField
                    label="First name"
                    id="first_name"
                    name="first_name"
                    //   value={form.first_name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    errors={backendErrors}
                  />
                </div>
                <div className="w-full">
                  <TextInputField
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    //   value={form.first_name}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    errors={backendErrors}
                  />
                </div>
              </div>

              <div>
                <TextInputField
                  label="Email Address"
                  id="email"
                  name="email"
                  //   value={form.first_name}
                  onChange={handleChange}
                  placeholder="e.g. example@mail.com"
                  errors={backendErrors}
                />
              </div>

              <div>
                <TextInputField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  //   value={form.first_name}
                  onChange={handleChange}
                  placeholder="+880"
                  errors={backendErrors}
                />
              </div>

              <div className="relative">
                <TextInputField
                  label="Password"
                  id="password"
                  name="password"
                  //   value={form.first_name}
                  onChange={handleChange}
                  placeholder="minimum 8 characters"
                  errors={backendErrors}
                />

                <EyeIcon
                  color="#6366f1"
                  height={20}
                  width={20}
                  className={`absolute bottom-2.5 md:bottom-2 right-[16.5px] cursor-pointer ${
                    isShowPassword ? "hidden" : "visible"
                  }`}
                  onClick={() => setIsShowPassword(true)}
                />
                <EyeSlashIcon
                  color="#6366f1"
                  height={20}
                  width={20}
                  className={`absolute bottom-2.5 md:bottom-2 right-[16.5px] cursor-pointer ${
                    !isShowPassword ? "hidden" : "visible"
                  }`}
                  onClick={() => setIsShowPassword(false)}
                />
              </div>

              <div className="relative">
                <TextInputField
                  label="Confirm Password"
                  id="confirm_password"
                  name="confirm_password"
                  //   value={form.first_name}
                  onChange={handleChange}
                  placeholder="minimum 8 characters"
                  errors={backendErrors}
                />

                <EyeIcon
                  color="#6366f1"
                  height={20}
                  width={20}
                  className={`absolute bottom-2.5 md:bottom-2 right-[16.5px] cursor-pointer ${
                    isShowConfirmPassword ? "hidden" : "visible"
                  }`}
                  onClick={() => setIsShowConfirmPassword(true)}
                />
                <EyeSlashIcon
                  color="#6366f1"
                  height={20}
                  width={20}
                  className={`absolute bottom-2.5 md:bottom-2 right-[16.5px] cursor-pointer ${
                    !isShowConfirmPassword ? "hidden" : "visible"
                  }`}
                  onClick={() => setIsShowConfirmPassword(false)}
                />
              </div>

              <div>
                <TextInputField
                  label="Referral ID"
                  id="referral_id"
                  name="referral_id"
                  //   value={form.first_name}
                  onChange={handleChange}
                  placeholder="Enter referral ID"
                  errors={backendErrors}
                />
              </div>
            </div>

            <Button text="Register" />

            <div className="mt-4 text-center text-body-small md:text-body-medium">
              <p>
                Already have an account?{" "}
                <span className="font-medium text-indigo-800">
                  <Link href="/login">Login</Link>
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
