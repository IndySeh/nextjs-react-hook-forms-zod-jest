"use client";

import { FC, FormEvent, useEffect, useState } from "react";
import InputField from "../components/Inputfield";
import { useForm } from "react-hook-form";
import { FormDataProps, UserSchema } from "@/lib/types";
import Button from "../components/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
    setError,
    reset,
  } = useForm<FormDataProps>({ resolver: zodResolver(UserSchema) });

  /**
   * Attention: React-Hook-Forms docs Suggests
   * - Using Reset using useEffect.
   */
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);
  const onSubmit = async (data: FormDataProps) => {
    try {
      const response = await axios.post("/api/signup", data);
      setIsSubmitSuccessful(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-between p-10 h-80  rounded-xl mt-8 md:w-96 bg-neutral-950 backdrop-blur-3xl"
    >
      <InputField
        type="text"
        placeholder="Username"
        name="username"
        register={register}
        error={errors.username}
      />
      <InputField
        type="email"
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <InputField
        type="password"
        placeholder="Password"
        name="password"
        register={register}
        error={errors.password}
      />
      <Button onClick={handleSubmit(onSubmit)} isDisabled={false}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
