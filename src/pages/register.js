import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react';
;

const Register=()=>{

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [company,setCompany]=useState("");
    const [position,setPosition]=useState("");
    const [countrycode,setCountryCode]=useState("");
    const [contactNumber,setContactNumber]=useState("");
    const [street,setStreet]=useState("");
    const [suburb,setSuburb]=useState("");
    const [city,setCityl]=useState("");
    const [postcode,setPostalCode]=useState("");
    const [country,setCountry]=useState("");
    const router = useRouter()

    async  function signup()
    {
        let item={firstName,lastName,email,password,company,position,countrycode,contactNumber,street,suburb,city,postcode,country}
        console.log(item)
        let result=await fetch("https://jetapi-production.up.railway.app/api/dataPost",{
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
            console.log(result)
            alert("Registered Successfully")
            router.push('/login')
            
            
        }
        else
        {
            result=result.json()
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

      <section className="h-100 h-custom gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div
          className="card card-registration card-registration-2"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="p-5">
                  <h3 className="fw-normal mb-5" style={{ "color": "#4835d4" }}>
                    General Infomation
                  </h3>
                 
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Examplev2"
                          name="firstName"
                          className="form-control form-control-lg"
                          value={firstName}
                          onChange={(e)=>setFirstName(e.target.value)}

                        />
                        <label className="form-label" htmlFor="form3Examplev2">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="lastName"
                          id="form3Examplev3"
                          className="form-control form-control-lg"
                          value={lastName}
                          onChange={(e)=>setLastName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Examplev3">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="company"
                          id="form3Examplev2"
                          className="form-control form-control-lg"
                          value={company}
                          onChange={(e)=>setCompany(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Examplev2">
                          Company
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Examplev3"
                          className="form-control form-control-lg"
                          name="position"
                          value={position}
                          onChange={(e)=>setPosition(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Examplev3">
                          Position
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="form3Examplev4"
                        className="form-control form-control-lg"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Examplev4">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="form3Examplev4"
                        className="form-control form-control-lg"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Examplev4">
                        Password
                      </label>
                    </div>
                  </div>
              
            <p>Already Registered ?<Link  href="/login" class="link-info">Login Here</Link></p>


              
                </div>
                
              </div>
              <div className="col-lg-6  text-white" style={{background:"#6AE4A0"}}>
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Contact Details</h3>
                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        name="street"
                        id="form3Examplea2"
                        value={street}
                        onChange={(e)=>setStreet(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Examplea2">
                        Street
                      </label>
                    </div>
                  </div>
                  {/* <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="form3Examplea3"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Examplea3">
                        Additional Information
                      </label>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          id="form3Examplea4"
                          name="suburb"
                          value={suburb}
                          onChange={(e)=>setSuburb(e.target.value)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplea4">
                          Suburb
                        </label>
                      </div>
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          id="form3Examplea5"
                          name="city"
                          value={city}
                          onChange={(e)=>setCityl(e.target.value)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplea5">
                        City
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          id="form3Examplea4"
                          value={postcode}
                          onChange={(e)=>setPostalCode(e.target.value)}
                          className="form-control form-control-lg"
                          name="postalcode"
                        />
                        <label className="form-label" htmlFor="form3Examplea4">
                          Postal Code
                        </label>
                      </div>
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          id="form3Examplea5"
                          className="form-control form-control-lg"
                          value={country}
                          onChange={(e)=>setCountry(e.target.value)}
                          name="country"
                        />
                        <label className="form-label" htmlFor="form3Examplea5">
                        Country
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          name="countrycode"
                          id="form3Examplea7"
                          className="form-control form-control-lg"
                          value={countrycode}
                          onChange={(e)=>setCountryCode(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Examplea7">
                          Code +
                        </label>
                      </div>
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                          type="text"
                          id="form3Examplea8"
                          className="form-control form-control-lg"
                          name="contactNumber"
                          value={contactNumber}
                          onChange={(e)=>setContactNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Examplea8">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mb-4">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="form3Examplea9"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Examplea9">
                        Your Email
                      </label>
                    </div>
                  </div> */}
                  <div className="form-check d-flex justify-content-start mb-4 pb-3">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="form2Example3"
                    >
                      I do accept the{" "}
                      <a href="#!" className="text-white">
                        <u>Terms and Conditions</u>
                      </a>{" "}
                      of your site.
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark"
                    onClick={signup}
                  >
                    Register
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<br></br>
<br></br>
<br></br>
<>
  <footer id="footer" style={{ backgroundColor: "#6AE4A0" }}>
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <a href="index.html">
              <img
                src="./assets/images/jetransit-logo.png"
                style={{ width: 300 }}
                alt=""
              />
            </a>
            <br />
            <br />
            <p>
              Office Address: Level 2, 32 Walker St, North Sydney, NSW 2060{" "}
              <br />
              <br />
              <strong>Phone:</strong> +61 3 9607 8202 | +61 429 275 087
              <br />
              <strong>Email:</strong> info@jentransit.au.com
              <br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="about.html">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="team.html">Our Team</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="customer.html">Customer Value</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="products.html">Products</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="adelaide.html">Adelaide EMU</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="velocity.html">V’locity DMU</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="qr.html">QR older EMU’s</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>You can reach out to us on any of the below</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-4">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span style={{ fontWeight: "bold" }}>JenTransit</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ */}
        Designed by <a href="">Genko</a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>


          </>
        )



       
}
export default Register
