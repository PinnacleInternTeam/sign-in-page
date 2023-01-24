import React from 'react';
import {

    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { set } from 'mongoose';
export default function Register() {
    const [username, setname] = useState("");
    const [useremail, setemail] = useState('');
    const [usernumber, setnumber] = useState('');
    const [userdate, setdate] = useState('');
    const [userpass, setpass] = useState('');

    const [nameerror, name_error] = useState('');
    const [emailerror, email_error] = useState('');
    const [num_error, numerror] = useState('');


    useEffect(() => {
        const name_pattern = /[A-Z][A-Z\d]+/;
        const email_pattern = /^[A-Za-z0-9+_.-]+@(.+)$/;
       
    
        if (username == "") 
        {
            name_error("");
        } 
        else
         {
            if (!username.match(name_pattern)) {
                name_error("Error found");
            }
            else
             {
                name_error("");
            }
        }
    
    }, [username])

  useEffect(() => {
        
  const email_pattern = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (useremail == "") 
    {
        email_error("");
    } 
    else
     {
        if (!useremail.match(email_pattern)) {
            email_error("Error found in email");
        }
        else
         {
            email_error("");
        }
    }

}, [useremail])


useEffect(() => {
        
    const num_patt = /^(0|91)?[6-9][0-9]{9}$/;
      if (usernumber == "") 
      {
          numerror("");
      } 
      else
       {
          if (!usernumber.match(num_patt)) {
              numerror("Error found in number");
          }
          else
           {
              numerror("");
          }
      }
  
  }, [usernumber])
  


    

function submit(){
    if(userdate == ""|| useremail == ""||username ==""||usernumber =="" || userpass == ""){
        alert("please fill the form")
    }
    else{
  axios.post('http://127.0.0.1:2020/regi/add',{
    "username" :username,
    email : useremail,
    phone : usernumber,
    date : userdate,
    password : userpass
  })
  .then(function(success){
    console.log(success.data)
  }).catch(function(error){
    console.log("error")
  });

    alert("submitted");
}
}


    return (
        <div>
            {/* form start */}
            <MDBContainer className="container">

                <MDBRow>

                    <MDBCol col='6' className="mb-5">
                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <p>Register Youself</p>

                        <label>User Name</label>
                        <MDBInput wrapperClass='mb-4'
                         onChange={(e) => {setname(e.target.value) }} id='form1' 
                         type='text' value={username} />
                         <p id='error'>{nameerror}</p>

                        <label>Email</label>
                        <MDBInput wrapperClass='mb-4' 
                         value={useremail} 
                         onChange={(e) => {setemail(e.target.value) }} id='form21' 
                         type='text' />
                         <p>{emailerror}</p>

                        <label>Phone Number</label>
                        <MDBInput wrapperClass='mb-4'
                         value={usernumber} 
                         onChange={(e) => {setnumber(e.target.value) }}   id='form22' 
                         type='text' />
                         <p>{num_error}</p>

                        <label>Date</label>
                        <MDBInput wrapperClass='mb-4' 
                         value={userdate} 
                         onChange={(e) => {setdate(e.target.value) }}  id='form23' 
                         type='date' />
                         <p>{}</p>

                        <label>password</label>
                        <MDBInput wrapperClass='mb-4'
                         value={userpass} 
                         onChange={(e) => {setpass(e.target.value) }}  
                          id='form2'
                          type='password' />
                          <p>{}</p>


                        <button className='btn btn-outline-primary' onClick={submit}>Register</button>

                    </MDBCol>
                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* form end */}

        </div>
    )
}
