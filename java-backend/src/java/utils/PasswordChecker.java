/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package utils;

/**
 *
 * @author Paul
 */
public class PasswordChecker {

    private static final PasswordChecker instance = new PasswordChecker();

    public static PasswordChecker getInstance() {
        return instance;
    }

    public Boolean isPasswordValid(String password, int length) {
        if (password.length() != length) {
            return false;
        }
        return true;
    }

}
