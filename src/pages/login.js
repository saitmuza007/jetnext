import jwtDecode from "jwt-decode";
import json from "jsonwebtoken"
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router'
// import Link from 'next/link'
// import AuthService from "./service/auth.service";
// import { useRouter } from 'next/router'
// import {useFormik} from "formik"
// import { loginSchema } from "./schema/login";

// const initialValues={

//   email:"",
//   password:""

// };
const Login=()=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const router = useRouter()
    async  function signin()
    {
        
        let item={email,password}
        
        let result=await fetch("https://jetapi-production.up.railway.app/api/dataAccess",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        let rs=result
        if(rs.status===200)
        {
            alert("Logged In Successfully")
            result=await result.json()
            localStorage.setItem("user", JSON.stringify(result.accessToken));
                  const dataw =  JSON.parse(localStorage.getItem("user"));
                //   const user=jwtDecode(dataw.[1])
                console.log(dataw)
                console.log(json.decode(dataw))
                  router.push('/restrictedcontent')

           
            
            

            
            
            

        }
        else
        {
            result=await result.json()
            alert(result.message)
        }
        
    }
            

    

        return(
            <>
     <Head>
<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>JETransit</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
    rel="stylesheet"
  />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
</>
     </Head>
     <Navbar></Navbar>
     <section className="vh-100" style={{ backgroundColor: "#eee",height:"200px"}}>
  <div className="container" style={{ backgroundColor: "#eee",height:"200px"}}>
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5" style={{height:"100vh"}}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    {/* <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div> */}
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    {/* <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                    </div> */}
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button href="/register"  type="button" className="btn btn-primary btn-lg"  onClick={signin}>
                      Login

                    </button>
                    
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
          
          </>
        )


       }
export default Login
