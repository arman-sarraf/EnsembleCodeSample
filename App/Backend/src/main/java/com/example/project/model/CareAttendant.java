package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

public class CareAttendant {
    ArrayList<Animal> animals;
    ArrayList<Animal> requestedAnimals;
    User careAtt;
    UserDB userDB;
    JDBCConnect jdbcConnect;
    AnimalDatabase animalDatabase;

    public CareAttendant(User user) throws SQLException {
        careAtt = user;
        animals = new ArrayList<>();
        userDB = new UserDB();
        jdbcConnect = new JDBCConnect();
        jdbcConnect.createConnection();
        animalDatabase = new AnimalDatabase();
        requestedAnimals = new ArrayList<>();
    }

    public ArrayList<Animal> getRequestedAnimals() {
        for (Animal animal:animalDatabase.getAnimals()){
            if (animal.getStatus().contains("Requested"))
                requestedAnimals.add(animal);
        }
        return requestedAnimals;
    }

    public void requestTreatment(int id) throws SQLException {
        userDB.updateAnimalStatusToRequested(id);

    }
}
