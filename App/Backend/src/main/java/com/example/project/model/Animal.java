package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;
import java.util.ArrayList;

public class Animal {

    private int animalId;

    private String breed;
    private String city;
    private String dateBirth;
    private String name;
    private String sex;
    private String status;
    private int tattoo;
    private String type;
    private int userID;

    private ArrayList<AnimalProblem> animalProblems;
    private ArrayList<AnimalPrescription> animalPrescriptions;
    private ArrayList<AnimalHistory> animalHistory;

    private JDBCConnect myJDBC;

    public Animal(int animalId, String breed, String city,
                  String dateBirth, String name, String sex,
                  String status, int tattoo, String type, int userID) throws SQLException {
        myJDBC = new JDBCConnect();
        myJDBC.createConnection();
        this.animalId = animalId;
        this.breed = breed;
        this.city = city;
        this.dateBirth = dateBirth;
        this.name = name;
        this.sex = sex;
        this.status = status;
        this.tattoo = tattoo;
        this.type = type;
        this.userID = userID;
        setAnimalProblems();
        setAnimalPrescriptions();
        setAnimalHistory();
    }

    public ArrayList<AnimalProblem> getAnimalProblems() {
        return animalProblems;
    }

    public void setAnimalProblems() throws SQLException {
        this.animalProblems = myJDBC.animalGetProblems(animalId);
    }

    public ArrayList<AnimalPrescription> getAnimalPrescriptions() {
        return animalPrescriptions;
    }

    public void setAnimalPrescriptions() throws SQLException {
        this.animalPrescriptions = myJDBC.animalGetPrescriptions(animalId);
    }

    public ArrayList<AnimalHistory> getAnimalHistory() {
        return animalHistory;
    }

    public void setAnimalHistory() throws SQLException {
        this.animalHistory = myJDBC.animalGetHistory(animalId);
    }

    public void updateStatus(int animalID, String change) throws SQLException {
        myJDBC.animalSetStatement(animalID, "Status", change);
        this.setStatus(change);
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(String dateBirth) {
        this.dateBirth = dateBirth;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTattoo() {
        return tattoo;
    }

    public void setTattoo(int tattoo) {
        this.tattoo = tattoo;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setAnimalProblems(ArrayList<AnimalProblem> animalProblems) {
        this.animalProblems = animalProblems;
    }

    public void setAnimalPrescriptions(ArrayList<AnimalPrescription> animalPrescriptions) {
        this.animalPrescriptions = animalPrescriptions;
    }

    public void setAnimalHistory(ArrayList<AnimalHistory> animalHistory) {
        this.animalHistory = animalHistory;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "animalId=" + animalId +
                ", breed='" + breed + '\'' +
                ", city='" + city + '\'' +
                ", dateBirth='" + dateBirth + '\'' +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", status='" + status + '\'' +
                ", tattoo=" + tattoo +
                ", type='" + type + '\'' +
                ", userID=" + userID +
                '}';
    }
}
