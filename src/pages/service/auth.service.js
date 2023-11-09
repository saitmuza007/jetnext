// import jwtDecode from "jwt-decode";

// const SignUp =async ( firstName,lastName,email,password,company,position,countrycode,contactNumber,street,suburb,city,postcode,country) => {
//     const requestbody={
//         firstName,lastName,email,password,company,position,countrycode,contactNumber,street,suburb,city,postcode,country
//     }

//     return await fetch("http://13.250.43.139:8083/api/dataPost",{
//         method:"POST",
//         body:JSON.stringify(requestbody),
//         headers:{'Content-Type':'application/json'}
//     })
    
// };

// const login = async (email, password) => {
//     const loginbody={
//         query:`
//             query {

//                 login(email:"${email}",password:"${password}")
//                 {
                    
//                     userId
//                     token
//                     authority
//                     tokenExpiration

//                 }
//             }
        
//         `
//     }
//     return await fetch(dev.API_URL,{
//         method:"POST",
//         body:JSON.stringify(loginbody),
//         headers:{'Content-Type':'application/json'}
//     })
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

// const getCurrentUser = () => {
//   const token=localStorage.getItem("user")
//   if(token)
//   {
//   return jwtDecode(token);
//   }
//   else
//   {
//     return null;
//   }
// };

// const AuthService = {
//   SignUp,
//   login,
//   logout,
//   getCurrentUser,
// };

// export default AuthService;
