import { FC } from "react";
import SignUp from "../components/SignUp";
import RocketIcons from "../components/Icons";

const SignUpForm: FC = () => {
  return (
    <div className="flex flex-col antialiased items-center">
      <RocketIcons />
      <h1 className="text-3xl">Gotham City </h1>
      <p className="text-xl text-gray-400 mt-2 tracking">
        Create an account to buy Bat Mobile
      </p>
      <SignUp />
    </div>
  );
};

export default SignUpForm;

