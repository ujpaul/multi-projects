/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import com.google.gson.Gson;
import utils.*;

import utils.PasswordChecker;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedHashMap;
import java.util.stream.Collectors;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Paul
 */
@WebServlet(name = "Signup", urlPatterns = {"/Signup"})
 public class Signup extends HttpServlet {
  
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void handleSubmit(HttpServletRequest req, HttpServletResponse response)
            throws ServletException, IOException {
                response.addHeader("Access-Control-Allow-Origin", "*");
                //response.setContentType("application/json");
                  PrintWriter apiResponse;
                 apiResponse = response.getWriter();

             try {
      
               
		LinkedHashMap<Integer, UserData> userHashmap = new LinkedHashMap<Integer, UserData>();
                
                String jsonString = req.getReader().lines().collect(Collectors.joining());                         
            
                UserData userData = new Gson().fromJson(jsonString, UserData.class);  
               
                System.out.print(jsonString);
                String message = "Server works"+jsonString +userData.getLname();    
                          
                       String password =  String.valueOf(userData.getUserPassword());
                       if(userData.getUserType().equalsIgnoreCase("admin")){
                            if(PasswordChecker.getInstance().isPasswordValid(password, 8) == true){
                                Admin admin = new Admin();
                                userHashmap = admin.signup(userData);
                                message = "User created as " + userData.getUserType();
                            } else {
                                message="Provide 8 characters for password";
                                                 
                            }
                     } else if(userData.getUserType().equalsIgnoreCase("Patient")){
                         
                         if(PasswordChecker.getInstance().isPasswordValid(password, 7) == true){
                           Patient patient = new Patient();
                          userHashmap = patient.signup(userData);  
                           message = "User created as " + userData.getUserType();
                         } else {                             
                              message = "Provide 7 characters for password";
                              
                         }
                     }else if(userData.getUserType().equalsIgnoreCase("Physician")){
                     
                         if(PasswordChecker.getInstance().isPasswordValid(password, 6) == true){
                          Physician physician = new Physician();
                          userHashmap = physician.signup(userData);  
                            message = "User created as " + userData.getUserType();
                         }else {                             
                             message =  "Provide 6 characters for password";   
                         }
                     
                     }else if(userData.getUserType().equalsIgnoreCase("pharmacist")){
                         
                         if(PasswordChecker.getInstance().isPasswordValid(password, 5) == true){
                           Pharmacist pharmacist = new Pharmacist();
                          userHashmap = pharmacist.signup(userData);  
                           message = "User created as " + userData.getUserType();
                         }else {                           
                             message = "Provide 5 characters for password";
                         }
                     }
                
                 apiResponse.print(message);

               } catch (Exception e) {
		    e.printStackTrace();
                   apiResponse.print(e.getMessage());
	        }
       
    }
   @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response)
            throws ServletException, IOException {
        handleSubmit(req, response);
        
	

    }
   
   
}
