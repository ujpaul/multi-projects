package utils;

public class UserData {
    private String fname;
    private String lname;
    private String username;
    private int userPassword;
    private String phoneNumber;
    private String  gender;
    private int confirmPassword;

    private int age;
    private String  userType;

    public String getUsername() {
        return username;
    }
 public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(int userPassword) {
        this.userPassword = userPassword;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserRole(String userType) {
        this.userType = userType;
    }
    public void SetConfirmPassword(int pass){
    this.confirmPassword = pass;
    }
    public int getConfirmaPassword(){
     return confirmPassword;
    }
}
