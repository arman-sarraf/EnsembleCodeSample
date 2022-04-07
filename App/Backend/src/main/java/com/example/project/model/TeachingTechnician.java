package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

public class TeachingTechnician {
    AnimalDatabase animals;
    ArrayList<User> studentUsers;

    User teachingTechnician;
    UserDB userDB;

    public TeachingTechnician(User user, UserDB userDB) throws SQLException {
        teachingTechnician = user;
        animals = new AnimalDatabase();
        studentUsers = new ArrayList<User>();
        this.userDB = userDB;
        addUser();
    }

    public void removeStudent(int userID) throws SQLException {
        for (User user : studentUsers) {
            if (user.getUsername() == userID) {
                userDB.removeUser(String.valueOf(user.getPassword()));// Student with that username and password will be deleted from the database
                user.setStatus("Removed");
            }
        }
    }

    public void blockStudent(int userID) throws SQLException {
        for (User user : studentUsers) {
            if (user.getUsername() == userID) {
                userDB.blockUser(String.valueOf(user.getPassword()));// Student with that username and password will be deleted from the database
                user.setStatus("Blocked");

            }
        }
    }

    public ArrayList<Animal> searchAnimalByName(String name) throws SQLException {
        return animals.findAnimalByName(name);
    }

    public Animal searchAnimalByID(int id) throws SQLException {
        return animals.findAnimal(id);
    }


    public String userName() {
        return teachingTechnician.getFname();
    }

    public void addUser() throws SQLException {
        String user = (userDB.adminAccessGetUser());
        Scanner scanner = new Scanner(user);
        while (scanner.hasNextLine()) {
            String userPass = scanner.nextLine();
            String[] a = userPass.split(" ");
            if (new User(Integer.parseInt(a[0]), Integer.parseInt(a[1])).getPermission().equals("Student")) {
                studentUsers.add(new User(Integer.parseInt(a[0]), Integer.parseInt(a[1])));
            }
        }
        scanner.close();
    }

    public ArrayList<User> getUsers() {
        ArrayList<User> active = new ArrayList<>();
        for (User user : studentUsers)
            if (user.getStatus().equals("Active"))
                active.add(user);
        return active;
    }

    public ArrayList<User> getBlocklist() {
        ArrayList<User> blocked = new ArrayList<>();
        for (User user : studentUsers) {
            if (user.getStatus().equals("Blocked"))
                blocked.add(user);
        }
        return blocked;
    }

    public void requestAnimal(int id) throws SQLException {
        userDB.updateAnimalStatusToRequested(id);
        animals.initializeDatabase();

    }
}
