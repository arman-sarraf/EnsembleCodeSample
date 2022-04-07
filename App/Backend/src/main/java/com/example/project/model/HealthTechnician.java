package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

public class HealthTechnician {
    ArrayList<Animal> animals;
    User healthTechnician;
    UserDB userDB;
    JDBCConnect jdbcConnect;
    AnimalDatabase animalDatabase;

    public HealthTechnician(User user) throws SQLException {
        healthTechnician = user;
        animals = new ArrayList<>();
        userDB = new UserDB();
        jdbcConnect = new JDBCConnect();
        jdbcConnect.createConnection();
        animalDatabase = new AnimalDatabase();
    }


    public void changeAnimalStatus(int id, String status) throws SQLException {
        userDB.changeAnimalStatus(id, status);
        animalDatabase.initializeDatabase();

    }

}
