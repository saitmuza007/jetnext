import Link from 'next/link'
import AuthService from "./service/auth.service"
import Navbar from '@/components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
;

const Users=()=>{


    

    
  
    const [users,setusers]=useState([])
    const [error,setError]=useState([])
    const column=[
        {
          name:<b>FirstName</b>,
          selector:row=>row.firstName,
          sortable:true
        },
        {
          name:<b>LastName</b>,
          selector:row=>row.lastName
        },
        {
          name:<b>Email</b>,
          selector:row=>row.email 
        },
        {
          name:<b>Role</b>,
          selector:row=>row.role=="ADMIN"  ? <span style={{"color":"red","fontWeight":"bolder"}}>{row.role}</span>:<span style={{"color":"Blue","fontWeight":"bolder"}}>{row.role}</span>
        },
        {
          name:<b>View</b>,
        //   selector:row=><Link href={`/userdetails/${row._id}`} ><i class="bi bi-eye" style={{'display':'block','marginLeft':'auto','marginRight':'auto','alignItems':'center'}}></i> </Link>
          
        }
      ]
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const token= JSON.parse(localStorage.getItem("user"))
            fetch("https://jetapi-production.up.railway.app/api/getAllUsers",{
                method: "GET",
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer' + " " + token }
            }).then((result)=>{
    
            if(result.status==200)
            {
                result.json().then((daa)=>
                {
                    setusers(daa.data)
                    console.log(daa.data)
                }
                )
            }
            else{
                result.json().then((resp)=>
                {
                    setError(resp.message)
                    console.log(resp.message)
                })
            }
        })
          }

    })

    // const [firstName,setFirstName]=useState("");
    // const [lastName,setLastName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    // const [company,setCompany]=useState("");
    // const [position,setPosition]=useState("");
    // const [countrycode,setCountryCode]=useState("");
    // const [contactNumber,setContactNumber]=useState("");
    // const [street,setStreet]=useState("");
    // const [suburb,setSuburb]=useState("");
    // const [city,setCityl]=useState("");
    // const [postcode,setPostalCode]=useState("");
    // const [country,setCountry]=useState("");
    // const router = useRouter()

    // async  function signup()
    // {
    //     let item={firstName,lastName,email,password,company,position,countrycode,contactNumber,street,suburb,city,postcode,country}
    //     console.log(item)
    //     let result=await fetch("http://localhost:8083/api/dataPost",{
    //         method:'POST',
    //         body:JSON.stringify(item),
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Accept":"application/json"
    //         }
    //     });
    //     let rs=result
    //     if(rs.status===200)
    //     {
    //         console.log(result)
    //         alert("Registered Successfully")
    //         router.push('/login')
            
            
    //     }
    //     else
    //     {
    //         result=result.json()
    //         alert(result.message)
    //     }
        
    // }
   
      
    

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

      <div className='container'>
        <br>
        </br>
        <br></br>
      {error==="Resource Accessible To Admin Only !" ?<div  style={{textAlign:"center",marginTop:"150px"}} className="w3-display-middle">
  <h1 className="w3-jumbo w3-animate-top w3-center">
    <code>Access Denied</code>
  </h1>
  <hr
    className="w3-border-white w3-animate-left"
    style={{ margin: "auto", width: "50%" }}
  />
  <h3 className="w3-center w3-animate-right">
    You dont have permission to view this site due to restricted constarints
    <br></br>
    Contact the Admin
  </h3>
  <h3 className="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
  <h6 className="w3-center w3-animate-zoom">error code:403 forbidden</h6>
</div>
 :<h1></h1>}
        <div className='row'>
            {users.map((users,index)=>(

<div className='col-lg-4'>
  <br></br>
<h3>File {index}</h3>
<br></br>
<object data= {users.firstName} id="onpdf"
                
                > 
        </object> 
        <br>
        </br>
</div>
         

            ))}
       

        
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br></br>
      <Footer></Footer>

    </>
        )


       
}
export default Users
