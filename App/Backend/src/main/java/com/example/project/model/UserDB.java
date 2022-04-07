package com.example.project.model;

import java.sql.*;

public class UserDB {

    private Connection connection = DriverManager.getConnection("jdbc:mysql://localhost/VETMEDICINARYDB", "root", "9788");

    ResultSet rs;

    public UserDB() throws SQLException {
    }

    public int validateUser(int username, int pass) throws SQLException {
        int flag = -1;
        try {

            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery(
                    "SELECT * FROM USER WHERE Password = \"" + pass + "\" AND UserID = \"" + username + "\";"); // query
            // from
            // DB

            if (rs.next())
                flag = 1;
            else
                flag = 0;

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return flag;
    }

    public String getUserInfo(int username, int pass, String column) throws SQLException {
        StringBuffer userInformation = new StringBuffer();

        try {

            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery(
                    "SELECT * FROM USER WHERE Password = \"" + pass + "\" AND UserID = \"" + username + "\";");


            if (rs.next())
                userInformation.append(rs.getString(column));

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userInformation.toString();
    }

    public String getOneUserInfo(int username) throws SQLException {
        StringBuffer userInformation = new StringBuffer();

        try {

            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery(
                    "SELECT * FROM USER WHERE UserID = \"" + username + "\";");
            if (rs.next())

                userInformation.append(rs.getString("UserID"));
            userInformation.append(" ");

            userInformation.append(rs.getString("Password"));

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userInformation.toString();
    }

    public String getPermissionType(int username) throws SQLException {
        String permissionType = "";

        try {
            Statement myStmt = connection.createStatement();
            String[] permissionList = {"Admin", "TEACHER_TECHNICIAN", "CARE_ATTENDANT", "HEALTH_TECHNICIAN",
                    "STUDENT"};
            for (String permission : permissionList) {
                rs = myStmt.executeQuery("SELECT * FROM " + permission + " WHERE UserID = \"" + username + "\";");
                if (rs.next()) {

                    permissionType = rs.getString("Permission");
                    break;
                }
            }

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return permissionType;
    }

    public String adminAccessGetUser() throws SQLException {
        StringBuffer result = new StringBuffer();
        try {
            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery("SELECT * FROM USER ;");

            while (rs.next())
                result.append(rs.getString("userID") + " " + rs.getString("Password") + "\n");

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.toString();
    }


    public String adminAccessGetAnimal() throws SQLException {
        StringBuffer result_animal = new StringBuffer();
        try {
            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery("SELECT * FROM ANIMAL ;");

            while (rs.next())
                result_animal.append(rs.getString("Animal_ID") + "\n");

            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result_animal.toString();
    }

    public void updateUserInfo(String username, String pass, String column, String update) throws SQLException {
        try {
            Statement myStmt = connection.createStatement();

            myStmt.executeUpdate("UPDATE USER SET " + column + " = \"" + update + " \" WHERE UserID = " + username
                    + " AND Password = " + pass + ";");

            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }


    public void removeUser(String pass) throws SQLException {
        try {
            Statement myStmt = connection.createStatement();
            myStmt.executeUpdate("UPDATE USER SET " + "Status = \"" + "Removed" + " \" WHERE Password = " + pass + ";");

            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void blockUser(String pass) throws SQLException {
        try {
            Statement myStmt = connection.createStatement();
            myStmt.executeUpdate("UPDATE USER SET " + "Status = \"" + "Blocked" + " \" WHERE Password = " + pass + ";");

            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void updateUser(String userID, String fName, String lName, String email, String phone, String birthD)
            throws SQLException {
        try {
            Statement myStmt = connection.createStatement();


            myStmt.executeUpdate("UPDATE USER SET " + "Lname = \"" + lName + "\" " + ", Fname = \"" + fName + "\" , Phone = \"" + phone + "\" , Email = \"" + email + "\" , Date_B = \"" + birthD + "\" WHERE UserID = " + userID + ";");


            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void addUserToDB(String status, String password, String lName, String fName, String phone, String email,
                            String sex, String dateB, String activationDate, String permission) throws SQLException {
        String query = " insert into USER (Status, Password, Lname, Fname, Phone , Email, Sex, Date_B, ActivationDate) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt = connection.prepareStatement(query);
        preparedStmt.setString(1, status);
        preparedStmt.setInt(2, Integer.parseInt(password));
        preparedStmt.setString(3, lName);
        preparedStmt.setString(4, fName);
        preparedStmt.setString(5, phone);
        preparedStmt.setString(6, email);
        preparedStmt.setString(7, sex);
        preparedStmt.setString(8, dateB);
        preparedStmt.setString(9, activationDate);
        preparedStmt.execute();
        preparedStmt.close();

        StringBuffer stringBuffer = new StringBuffer();
        String ab = "";

        try {
            Statement myStmt = connection.createStatement();
            rs = myStmt.executeQuery("SELECT MAX(UserID) userID FROM USER" + ";");
            if (rs.next())
                ab = rs.getString("userID");

        } catch (Exception e) {
            e.printStackTrace();
        }

        if (permission.equals("Admin")) {
            String queryy = " INSERT INTO ADMIN (UserID, Permission) values (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(queryy);
            preparedStatement.setString(1, ab);
            preparedStatement.setString(2, permission);
            preparedStatement.execute();
            preparedStatement.close();
        }

        if (permission.equals("Health")) {
            String queryy = " INSERT INTO HEALTH_TECHNICIAN (UserID, Permission) values (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(queryy);
            preparedStatement.setString(1, ab);
            preparedStatement.setString(2, permission);
            preparedStatement.execute();
            preparedStatement.close();
        }

        if (permission.equals("Care")) {
            String queryy = " INSERT INTO CARE_ATTENDANT (UserID, Permission) values (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(queryy);
            preparedStatement.setString(1, ab);
            preparedStatement.setString(2, permission);
            preparedStatement.execute();
            preparedStatement.close();
        }

        if (permission.equals("Teacher")) {
            String queryy = " INSERT INTO TEACHER_TECHNICIAN (UserID, Permission) values (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(queryy);
            preparedStatement.setString(1, ab);
            preparedStatement.setString(2, permission);
            preparedStatement.execute();
            preparedStatement.close();
        }

        if (permission.equals("Student")) {
            String queryy = " INSERT INTO STUDENT (UserID, Permission, StudentID) values (?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(queryy);
            preparedStatement.setString(1, ab);
            preparedStatement.setString(2, permission);
            preparedStatement.setString(3, "10232125");
            preparedStatement.execute();
            preparedStatement.close();
        }
        preparedStmt.close();
    }


    public void updateAnimalStatusToRequested(int id) throws SQLException {
        try {
            Statement myStmt = connection.createStatement();

            myStmt.executeUpdate(
                    "UPDATE ANIMAL SET " + "Status = \"" + "Requested" + " \" WHERE Animal_ID = " + id + ";");

            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void changeAnimalStatus(int id, String status) throws SQLException {
        try {
            Statement myStmt = connection.createStatement();

            myStmt.executeUpdate("UPDATE ANIMAL SET " + "Status = \"" + status + " \" WHERE Animal_ID = " + id + ";");

            myStmt.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
