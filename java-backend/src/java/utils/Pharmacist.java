/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package utils;

import utils.DataStructure;
import parent.User;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Random;

/**
 *
 * @author Paul
 */
public class Pharmacist extends User {

    @Override
    public String login(String username, String password){
      String userType = "";
        try {
            
            LinkedHashMap<Integer, UserData> user = DataStructure.getInstance().getData();
            for (Map.Entry<Integer, UserData> entry : user.entrySet()) {
                     
                    UserData currentUser = entry.getValue();                
                    if (username.equals(currentUser.getUsername()) && password.equals(currentUser.getUserPassword())) {
                        userType =  currentUser.getUserType();
                        User.setUserType(userType);
                        break;


                    } else {
                        return null;
                    }  
               
            }
           
            //userType = User.getUserType();
            
        }catch(Exception e){
            System.out.print(e.getMessage());
        }
      return userType;
    }

    @Override
    public LinkedHashMap<Integer, UserData> signup(UserData user){
        LinkedHashMap<Integer, UserData> newUser  = DataStructure.getInstance().getData();
       newUser.put(new Random().nextInt(47), user);
      
       return newUser;
    }
    
}
