import * as Yup from "yup"

export const loginSchema=Yup.object({
   
    email:Yup.string().email().required("Please Enter a Valid Email"),
    password:Yup.string().min(5).max(14).required("Please Enter a Valid Password"),

})