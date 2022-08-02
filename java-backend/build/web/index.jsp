<%@page import="com.pharmacy.model.UserModel"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> Codeland Challenge</title>
      <link href="WEB-INFO/css/styles.css" rel="stylesheet">
      <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
      <style>
             <%@include file="/WEB-INF/css/styles.css"%>
      </style>
   </head>
   <body>
      <!-- TODO: WRITE FORM VALIDATE PASSWORD WITH JAVASCRIPT THEN SUBMIT INFO TO Backend -->
      <div class="container">
         <div class="title">
            <h2>Responsive Registration Form</h2>
         </div>
          <%
            Object error = request.getAttribute("error");
            Object checkError=  error !=null ?"Ooops"+error:" ";
            //TODO: retrieve data from session to show on form fields so that user don't need to retype
            Object fname = request.getAttribute("fname");  
            Object lname = request.getAttribute("lname");
            Object username = request.getAttribute("username");
            Object phoneNumber = request.getAttribute("phoneNumber");
            Object age = request.getAttribute("age");

           // Object username = request.getAttribute("username");


          %>   
          <small class="danger">
               <%=           checkError  +"" + request.getAttribute("fname")    %>
          </small>
          
           
            <form  method="POST" action="Signup">
            <div class="grid">
               <div class="grid-col-2">
                  <span> <i aria-hidden="true" class="fa fa-user"></i> </span>
                  <input type="text" name="fname" required placeholder="First Name" class="md" value="<%= (fname !=null) ? fname:" "%>" />
               </div>
               <div class="grid-col-2 ml">
                  <span> <i aria-hidden="true" class="fa fa-user"></i> </span>
                  <input type="text" name="lname" required placeholder="Last Name" class="md" value="<%= (lname !=null) ? lname:" "%>" />
               </div>
            </div>
            <div class="grid-col-2">
               <span><i class="fa fa-user"></i></span>
               <input type="text" placeholder="Username" name="username" value="<%= (username !=null) ? username:" "%>"  />
            </div>
            <div class="grid-col-2">
               <span><i class="fa fa-user"></i></span>
               <input type="number" placeholder="age" name="age" required value="<%= (age !=null) ? age:" "%>"  />
            </div>
            <div class="grid-col-2">
               <span><i aria-hidden="true" class="fa fa-mobile "></i></span>
               <input type="text" placeholder="phone Number" name="phoneNumber"  value="<%= (phoneNumber !=null) ? phoneNumber:"phone Number"%>"  />
            </div>
            <div class="grid-col-2">
               <span><i aria-hidden="true" class="fa fa-lock"></i></span>
               <input type="password"  id="usr_password" placeholder="password" name="password" />               

            </div>
                
            <div class="grid-col-2">
               <span><i aria-hidden="true" class="fa fa-lock"></i></span>
               <input type="password" name="retype_password" id="conf_password"
                  placeholder="Re-type Password" />
            </div>
            <div class="input-container mt">
               <input type="radio" name="gender" value="male" id="male" /> <label for="male">Male</label>
               <input type="radio" name="gender"  value="female" id="female" /> <label
                  for="female">Female</label>
            </div>
            <div class="input-container">
               <select  id="usertype" name="usertype">
                   
                  <option>Select User Type</option>
                  <option value="admin">Admin</option>
                  
                  <option value="Patient">Patient</option>
                  <option value="Physician">Physician</option>
                   <option value="pharmacist">Pharmacist</option>

                  
                  
               </select>
            </div>
            <div class="checkboxes">
               <input type="checkbox" id="terms"><label for="terms">I agree with terms and conditions</label>   <br />  
               <input type="checkbox" id="newsletter"><label for="newsletter"> I want to receive newsletter </label>  
            </div>
            <div>
               <input class="btn" type="submit"  value="Register" />
            </div>
           
         </form>
          
      </div>
       
   </body>
</html>
