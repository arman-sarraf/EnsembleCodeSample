package com.example.project.model;

import java.sql.SQLException;

public class LoginChecker {
    UserDB userDB;
    int username;
    int password;
    int flag = -1;

    public LoginChecker(int username, int password) throws SQLException {
        userDB = new UserDB();
        this.username = username;
        this.password = password;
    }

    public User checkUsernamePassword() throws SQLException {
        flag = userDB.validateUser(username, password);
        if (flag == 1)
            return new User(username, password);
        else
            return null;
    }
}