
import Head from "next/head";
import json from "jsonwebtoken"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar=()=>
{
    const router = useRouter();
  
  const [showUserBoard, setUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);


    useEffect(()=>{
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const token= JSON.parse(localStorage.getItem("user"))
            const decode=json.decode(token)
            setUserBoard(decode)
            setShowAdminBoard(decode)
            
        //     fetch("http://13.250.43.139:8083/api/g",{
        //         method: "GET",
        //         headers: { 'Content-Type': 'application/json', Authorization: 'Bearer' + " " + token }
        //     }).then((result)=>{
    
        //     if(result.status==200)
        //     {
        //         result.json().then((daa)=>
        //         {
        //             setlinks(daa.data)
        //             console.log(daa.data)
        //         }
        //         )
        //     }
        //     else{
        //         result.json().then((resp)=>
        //         {
        //             setError(resp.message)
        //             console.log(resp)
        //         })
        //     }
        // })
    //       }

    // })
        }




    // if (user) {
    //   setCurrentUser(user);
    //   setUserBoard(user.authority.includes("USER"));
    //   setShowAdminBoard(user.authority.includes("ADMIN"));
    // }


  }, []);

  const logOut = () => {
  
  };
  
  
  
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
     





<div>

<>
  {/* ======= Top Bar ======= */}
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center">
          <a href="mailto:info@jentransit.com.au">info@jentransit.com.au</a>
        </i>
        // <i className="bi bi-phone d-flex align-items-center ms-4">
        //   // <span>+61 3 9607 8202 | +61 429 275 087</span>
        // </i>
      </div>
      // <div className="social-links d-none d-md-flex align-items-center">
      //   <a href="#" className="twitter">
      //     <i className="bi bi-twitter" />
      //   </a>
      //   <a href="#" className="facebook">
      //     <i className="bi bi-facebook" />
      //   </a>
      //   <a href="#" className="instagram">
      //     <i className="bi bi-instagram" />
      //   </a>
      //   <a href="#" className="linkedin">
      //     <i className="bi bi-linkedin" />
      //   </a>
      // </div>
    </div>
  </section>
  {/* ======= Header ======= */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      {/* <h1 class="logo"><a href="index.html">BizLand<span>.</span></a></h1> */}
      {/* Uncomment below if you prefer to use an image logo */}
      <a href="index.html" className="logo">
        <img src="./assets/images/jetransit-logo.png" alt="" />
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link href="/index.html" className="nav-link scrollto active">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <a href="about.html">
              <span>About Us</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="team.html">Our Team</a>
              </li>
              <li>
                <a href="customer.html">Customer Value</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="services.html">
              Services
            </a>
          </li>
          <li className="dropdown">
            <a href="products.html">
              <span>Products</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">PIS/CCTV</a>
              </li>
              <li>
                <a href="#">Integrated Kitchen</a>
              </li>
              <li>
                <a href="#">Wheel/Wheel Sets</a>
              </li>
              <li>
                <a href="#">Gangway</a>
              </li>
              <li>
                <a href="#">Pantograph</a>
              </li>
              <li>
                <a href="#">Connectors</a>
              </li>
              <li>
                <a href="#">Pipe Connectors</a>
              </li>
              <li>
                <a href="#">Handrails</a>
              </li>
              <li>
                <a href="#">Seats</a>
              </li>
              <li>
                <a href="#">GRP</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto " href="projects.html">
              Projects
            </a>
          </li>
          <li>
            {showUserBoard?.identity==="USER" ?<Link className="nav-link scrollto" href="/restrictedcontent">
              Restricted Content Page
            </Link>:<Link className="nav-link scrollto" href="/register">
              Downloads
            </Link>}
          </li>
          <li>
            <a className="nav-link scrollto" href="contact.htm">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>

</>


        </div>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
      </>
    )

      
     
    
}
export default Navbar;
