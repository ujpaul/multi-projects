/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import com.google.gson.Gson;
import utils.UserData;
import java.io.BufferedReader;
import utils.DataStructure;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import parent.User;
import utils.Admin;
import utils.Patient;
import utils.Pharmacist;
import utils.Physician;

/**
 *
 * @author Paul
 */
@WebServlet(name = "Signin", urlPatterns = {"/Signin"})
public class Signin extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(req, response);
        response.addHeader("Access-Control-Allow-Origin", "*");
        PrintWriter out;
        out = response.getWriter();
        
         UserData ud = new UserData();
         LinkedHashMap<Integer, UserData> hashMap = new LinkedHashMap<Integer, UserData>();

          String jsonString = req.getReader().lines().collect(Collectors.joining());                            
          UserData myObject = new Gson().fromJson(jsonString, UserData.class);         
           
        System.out.println("username==>"+ myObject.getUsername()+ "password==>"+myObject.getUserPassword());
           hashMap = DataStructure.getInstance().getData(); 
           
            ArrayList<UserData> users = new ArrayList<>();           
           
           for (Map.Entry<Integer, UserData> entry : hashMap.entrySet()) {   
               UserData userdata = entry.getValue();
               users.add(userdata);           
		}
           System.out.println(users.size());
           boolean userFound = false;
           for(UserData user: users){
               if(user.getUsername().equals(myObject.getUsername()) && user.getUserPassword() == myObject.getUserPassword()){
                   out.print(user.getUserType()); 
                    userFound = true;

               } 
           }
           if(userFound == false){
               out.print("Incorrect Username or Password");
           }

	}

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
}