import * as Yup from "yup"

export const signupSchema=Yup.object({
    firstName:Yup.string().min(2).max(25).required("Please Enter a Valid First Name"),
    lastName:Yup.string(),
    email:Yup.string().email().required("Please Enter a Valid Email"),
    password:Yup.string().min(6).max(12).required("Please Enter a Valid Password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Passwords Must Match")

})