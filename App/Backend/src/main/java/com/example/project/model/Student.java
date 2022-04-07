package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

public class Student {
    ArrayList<Animal> animals;
    User student;
    UserDB userDB;
    JDBCConnect jdbcConnect;

    public Student(User user) throws SQLException {
        student = user;
        animals = new ArrayList<>();
        userDB = new UserDB();
        jdbcConnect = new JDBCConnect();
        jdbcConnect.createConnection();
    }

    public Animal searchAnimalByName(String name) throws SQLException {
        for (Animal animal : animals)
            if (animal.getName().equals(name)) return animal;
        return null;
    }

    public Animal searchAnimalByID(int id) throws SQLException {
        for (Animal animal : animals)
            if (animal.getAnimalId() == id) return animal;
        return null;
    }

    public String userName() {
        return student.getFname();
    }

}

