package com.example.project.model;

import java.sql.SQLException;
import java.util.ArrayList;

public class AnimalDatabase {
    private ArrayList<Animal> animalDatabase;

    private JDBCConnect myJDBC;

    public AnimalDatabase() throws SQLException {
        myJDBC = new JDBCConnect();
        myJDBC.createConnection();
        this.initializeDatabase();
    }

    public void initializeDatabase() throws SQLException {
        this.animalDatabase = myJDBC.animalFullGetStatement();
    }

    public ArrayList<Animal> getAnimals() {
        return animalDatabase;
    }

    public void setAnimals(ArrayList<Animal> animals) {
        this.animalDatabase = animals;
    }

    public int getHistoryNumber(int animalID) {
        int recordId = 0;
        for (Animal a : this.animalDatabase) {
                for(AnimalHistory h: a.getAnimalHistory()) {
                    if (h.getRecordId() >= recordId) {
                        recordId = h.getRecordId();
                    }

            }
        }
        recordId += 1;
        return recordId;
    }

    public Animal findAnimal(int animalID) {
        for (Animal a : this.animalDatabase) {
            if (a.getAnimalId() == animalID) {
                return a;
            }
        }
        return null;
    }

    public ArrayList<Animal> findAnimalByName(String animalName) {
        ArrayList<Animal> animals = new ArrayList<>();
        for (Animal a : this.animalDatabase) {
            if (a.getName().equals(animalName)) {
                animals.add(a);
            }
        }
        return animals;
    }
}
