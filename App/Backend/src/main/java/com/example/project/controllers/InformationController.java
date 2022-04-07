package com.example.project.controllers;

import com.example.project.model.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.io.Console;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin
@RestController
public class InformationController {

    UserDB userDB = new UserDB();

    public InformationController() throws SQLException {
    }

    @GetMapping("/allusers")
    public ArrayList<User> userArrayList() throws SQLException {
        Admin admin = new Admin(new User(1, 3333), userDB);
        return admin.getUsers();
    }

    @GetMapping("/reqAnimalList")
    public ArrayList<Animal> requestedList() throws SQLException {
        CareAttendant careAttendant = new CareAttendant(new User(5, 7788));
        return careAttendant.getRequestedAnimals();
    }

    @GetMapping("/studentlist")
    public ArrayList<User> studentArrayList() throws SQLException {
        TeachingTechnician teachingTechnician = new TeachingTechnician(new User(3, 1561), userDB);
        return teachingTechnician.getUsers();
    }


    @GetMapping("/studentblocklist")
    public ArrayList<User> blockedStudentList() throws SQLException {
        TeachingTechnician teachingTechnician = new TeachingTechnician(new User(3, 1561), userDB);
        return teachingTechnician.getBlocklist();
    }

    @GetMapping("/allusersBlockList")
    public ArrayList<User> blockedUserList() throws SQLException {
        Admin admin = new Admin(new User(1, 3333), userDB);
        return admin.getBlocklist();
    }


    @PutMapping(
            value = "/removestudent/{userID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> removeStudent(@PathVariable("userID") int userID, @RequestBody HashMap<String, String> animalStatus) throws SQLException {
        TeachingTechnician teachingTechnician = new TeachingTechnician(new User(3, 1561), userDB);
        teachingTechnician.removeStudent(userID);
        return null;
    }


    @PutMapping(
            value = "/blockstudent/{userID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> blockStudent(@PathVariable("userID") int userID, @RequestBody HashMap<String, String> animalStatus) throws SQLException {
        TeachingTechnician teachingTechnician = new TeachingTechnician(new User(3, 1561), userDB);
        teachingTechnician.blockStudent(userID);
        return null;
    }


    @PutMapping(
            value = "/blockUsers/{UserID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> updateStatus(@PathVariable("UserID") int userId, @RequestBody HashMap<String, String> animalStatus) throws SQLException {
        Admin admin = new Admin(new User(1, 3333), userDB);
        admin.blockUser(userId);
        return null;
    }


    @RequestMapping("/searchAnimal")
    public ArrayList<Animal> searchAnimal(@RequestBody HashMap<String, String> userInfo) throws SQLException {
        ArrayList<Animal> searchedAnimal = new ArrayList<>();
        AnimalDatabase animalDatabase = new AnimalDatabase();

        String id = userInfo.get("id");
        String name = userInfo.get("name");
        if (!id.equals(""))
            searchedAnimal.add(animalDatabase.findAnimal(Integer.parseInt(id)));
        if (!name.equals(""))
            searchedAnimal = (animalDatabase.findAnimalByName(name));
        return searchedAnimal;
    }

    @RequestMapping("/searchStudent")
    public ArrayList<User> searchStudent(@RequestBody HashMap<String, String> userInfo) throws SQLException {
        ArrayList<User> users = new ArrayList<>();
        Admin admin = new Admin(new User(1, 3333), userDB);

        String id = userInfo.get("id");
        String name = userInfo.get("name");
        if (!name.equals("")) {
            users = admin.searchUserByName(name);
        }
        if (!id.equals("")) {
            if (admin.searchUserByid(Integer.parseInt(id)).getPermission().equals("Student"))
                users.add(admin.searchUserByid(Integer.parseInt(id)));
        }

        return users;
    }

    @RequestMapping("/searchUser")
    public ArrayList<User> searchUser(@RequestBody HashMap<String, String> userInfo) throws SQLException {
        ArrayList<User> users = new ArrayList<>();
        Admin admin = new Admin(new User(1, 3333), userDB);

        String id = userInfo.get("id");
        String name = userInfo.get("name");


        if (!name.equals("")) {
            users = admin.searchUserByName(name);

        }
        if (!id.equals("")) {
            users.add(admin.searchUserByid(Integer.parseInt(id)));

        }

        return users;
    }

    @PutMapping(
            value = "/getUserInfo/{UserID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public User getUserInfo(@PathVariable("UserID") int userId, @RequestBody HashMap<String, String> animalStatus) throws SQLException {
        Admin admin = new Admin(new User(1, 3333), userDB);
        return admin.getOneUserInfo(userId);
    }

    @PutMapping(
            value = "/updateUserInfo/{UserID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public boolean updateUserInfo(@PathVariable("UserID") int userId, @RequestBody HashMap<String, String> animalStatus) throws SQLException {


        String userID = String.valueOf(userId);
        String fName = animalStatus.get("FName_edit");
        String lName = animalStatus.get("LName_edit");
        String phone = animalStatus.get("phoneNumber_edit");
        String birthD = animalStatus.get("birthdate_edit");
        String email = animalStatus.get("email_edit");
        Admin admin = new Admin(new User(1, 3333), userDB);
        admin.updateUserStatus(userID, fName, lName, email, phone, birthD);
        return true;
    }

    @RequestMapping("/addUser")
    public Boolean addUser(@RequestBody HashMap<String, String> userInfo) throws SQLException {

        String FName = userInfo.get("FName");
        String LName = userInfo.get("LName");
        String email = userInfo.get("email");
        String phoneNumber = userInfo.get("phoneNumber");
        String permission = userInfo.get("permission");
        String activatedate = userInfo.get("activatedate");
        String password = userInfo.get("password");
        String birthday = userInfo.get("birthday");
        String gender = userInfo.get("gender");

        Admin admin = new Admin(new User(1, 3333), userDB);
        admin.addNewUser("Active", password, LName, FName, phoneNumber, email,
                gender, birthday, activatedate,
                permission);
        return true;

    }

    @RequestMapping("/addStudent")
    public Boolean addStudent(@RequestBody HashMap<String, String> userInfo) throws SQLException {

        String FName = userInfo.get("FName");
        String LName = userInfo.get("LName");
        String email = userInfo.get("email");
        String phoneNumber = userInfo.get("phoneNumber");
        String permission = userInfo.get("permission");
        String activatedate = userInfo.get("activatedate");
        String password = userInfo.get("password");
        String birthday = userInfo.get("birthday");
        String gender = userInfo.get("gender");

        Admin admin = new Admin(new User(1, 3333), userDB);
        admin.addNewUser("Active", password, LName, FName, phoneNumber, email, gender, birthday, activatedate,
                permission);
        return true;
    }

    @RequestMapping("/editUser")
    public Boolean editUser(@RequestBody HashMap<String, String> userInfo) throws SQLException {

        String FName = userInfo.get("FName");
        String LName = userInfo.get("LName");
        String email = userInfo.get("email");
        String phoneNumber = userInfo.get("phoneNumber");
        String permission = userInfo.get("permission");
        String activatedate = userInfo.get("activatedate");
        String password = userInfo.get("password");
        String birthday = userInfo.get("birthday");
        String gender = userInfo.get("gender");

        return true;

    }

}
