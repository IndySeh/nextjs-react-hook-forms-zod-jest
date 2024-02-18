import { ReactNode } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import {z, ZodType} from "zod";

export type DesignedLinkProps = {
    href: string;
    children: ReactNode;
  };

export type FormDataProps = {
    username?: string;
    email: string;
    password: string;
}

type ValidFieldNames = "username" | "email" | "password"

export type InputFieldProps<T extends FieldValues> = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<T>
    error: FieldError | undefined
    valueAsNumber?: boolean
}


/**
 * Create UserSchema, we need Z and ZodType from Zod
 * 
 */

export const UserSchema: ZodType<FormDataProps> = z.object({
    username: z.string().min(5, {message: "Minimum 5 characters"}).optional(),
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(8, {message: "Password is too short"}).max(20,{message: "Password is too long"})
})

