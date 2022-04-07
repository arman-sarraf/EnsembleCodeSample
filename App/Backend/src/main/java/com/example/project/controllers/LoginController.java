package com.example.project.controllers;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.project.model.LoginChecker;
import com.example.project.model.User;
import com.example.project.model.UserDB;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class LoginController {


    @RequestMapping("/login")
    public HashMap<String, String> authentication(@RequestBody HashMap<String, Integer> userInfo) throws SQLException {
        int name = userInfo.get("name");
        int password = userInfo.get("password");
        LoginChecker loginChecker = new LoginChecker(name, password);
        User result = loginChecker.checkUsernamePassword();
        if (result == null) {
            return null;
        } else {
            HashMap<String, String> out = new HashMap<String, String>();
            out.put("username", String.valueOf(result.getUsername()));
            out.put("FName", result.getFname());
            out.put("lastName", result.getLname());
            out.put("permission", result.getPermission());
            out.put("phoneNumber", result.getPhoneNumber());
            out.put("email", result.getEmail());
            out.put("birthDate", result.getBirthDate());
            out.put("password", String.valueOf(result.getPassword()));
            System.out.println(out);
            return out;
        }
    }
}
