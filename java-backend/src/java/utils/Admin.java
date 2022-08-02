/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package utils;

import parent.User;
import utils.DataStructure;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Random;
/**
 *
 * @author Paul
 */
public class Admin extends User{

    @Override
    public String login(String password, String username) {
        String userType = "";
      
        
        try {
            
            LinkedHashMap<Integer, UserData> user = DataStructure.getInstance().getData();
            for (Map.Entry<Integer, UserData> entry : user.entrySet()) {
                
                     
                    UserData currentUser = entry.getValue();  
                   // return currentUser.getFname();
                    if (username.equals(currentUser.getUsername()) && password.equals(currentUser.getUserPassword())) {
                        return currentUser.getUserType();
//                        userType =  currentUser.getUserRole();  
//                        User.setUserType(userType);
//                        return "Admin";
//
                    } else {
                       return null;
                   }  
               
            }
           
            userType = User.getUserType();
            
        }catch(Exception e){
            userType = e.getMessage();           
        }
      return userType;

    }

    @Override
    public LinkedHashMap signup(UserData user){
       LinkedHashMap<Integer, UserData> newUser  = DataStructure.getInstance().getData();
       newUser.put(new Random().nextInt(47), user);
      
       return newUser;
    }
    
}
