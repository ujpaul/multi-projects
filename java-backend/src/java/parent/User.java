/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package parent;

import utils.UserData;
import java.util.LinkedHashMap;

/**
 *
 * @author Paul
 */
public abstract class User {
    private static String userType;
   public  String login(String password , String username){return null;}
   
    public LinkedHashMap<Integer, UserData> signup( UserData user){ return null;}; 
    
    public static void setUserType(String userType){
        User.userType = userType;
     }
    public static String getUserType(){
        return User.userType;
    }


}
