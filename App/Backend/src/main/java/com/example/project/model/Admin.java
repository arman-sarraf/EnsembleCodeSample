package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Admin {
    ArrayList<Animal> animals;
    ArrayList<User> users;
    User admin;
    UserDB userDB;


    public Admin(User user, UserDB database) throws SQLException {
        admin = user;
        animals = new ArrayList<>();
        users = new ArrayList<>();
        userDB = database;
        addUser();
    }


    public void editUser(User user, String column, String value) throws SQLException {
        userDB.updateUserInfo(String.valueOf(user.getUsername()), String.valueOf(user.getPassword()), column, value);
        reloadUserDB();
    }

    public ArrayList<User> getUsers() {
        ArrayList<User> activeUser = new ArrayList<>();
        for (User user : users) {
            if (user.getStatus().equals("Active")) {
                activeUser.add(user);
            }
        }
        return
                activeUser;
    }

    public ArrayList<User> searchUserByName(String name) {
        ArrayList<User> users = new ArrayList<>();
        for (User user : this.users) {
            if (user.getFname().equals(name) || user.getLname().equals(name)) {
                users.add(user);
            }
        }
        return users;
    }

    public User searchUserByid(int id) {
        for (User user : users) {
            if (user.getUsername() == id) {
                return user;
            }
        }
        return null;
    }

    public void blockUser(int userID) throws SQLException {
        for (User user : users) {
            if (user.getUsername() == userID) {
                userDB.blockUser(String.valueOf(user.getPassword())); // that user will be deleted from the user
            }
        }

        reloadUserDB(); // database will be reloaded
    }

    public String userName() {
        return admin.getFname();
    }

    public void addUser() throws SQLException {
        String user = (userDB.adminAccessGetUser());
        Scanner scanner = new Scanner(user);
        while (scanner.hasNextLine()) {
            String userPass = scanner.nextLine();
            String[] a = userPass.split(" ");
            users.add(new User(Integer.parseInt(a[0]), Integer.parseInt(a[1]))); // it creates a user object for each user id, password that exist on the database
        }
        scanner.close();
    }

    public User getOneUserInfo(int userID) throws SQLException {
        String user = userDB.getOneUserInfo(userID);
        Scanner scanner = new Scanner(user);
        String userPass = scanner.nextLine();
        String[] a = userPass.split(" ");
        scanner.close();
        return (new User(Integer.parseInt(a[0]), Integer.parseInt(a[1])));
    }

    public void updateUserStatus(String userID, String fName, String lName, String email, String phone, String birthD) throws SQLException {
        userDB.updateUser(userID, fName, lName, email, phone, birthD);
        users.clear();
        addUser();
    }

    public void addNewUser(String status, String password, String lName, String fName, String phone, String email, String sex, String dateB, String actDate, String permission) throws SQLException {
        userDB.addUserToDB(status, password, lName, fName, phone, email, sex, dateB, actDate, permission); // creates a new record to the database
        reloadUserDB();

    }

    public ArrayList<User> getBlocklist() {
        ArrayList<User> blocklist = new ArrayList<>();
        for (User user : users) {
            if (!user.getStatus().equals("Active")) {
                blocklist.add(user);
            }
        }
        return blocklist;
    }

    public void reloadUserDB() throws SQLException {
        users.clear();
        addUser();
    }
}