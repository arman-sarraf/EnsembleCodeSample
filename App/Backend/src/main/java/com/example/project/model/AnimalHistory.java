package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;
import java.util.ArrayList;

public class AnimalHistory {

    private int recordId;
    private String date;
    private String measurement;
    private int value;
    private String userId;
    private String vaccination;
    private int animalId;

    private ArrayList<AnimalHistoryComments> animalHistoryComments;
    private ArrayList<AnimalHistoryPhotos> animalHistoryPhotos;

    private JDBCConnect myJDBC;

    public AnimalHistory(int recordId, String date, String measurement, int value, String userId, String vaccination, int animalId) throws SQLException {
        myJDBC = new JDBCConnect();
        myJDBC.createConnection();
        this.recordId = recordId;
        this.date = date;
        this.measurement = measurement;
        this.value = value;
        this.userId = userId;
        this.vaccination = vaccination;
        this.animalId = animalId;
        setAnimalHistoryComments();
        setAnimalHistoryPhotos();
    }

    public ArrayList<AnimalHistoryComments> getAnimalHistoryComments() {
        return animalHistoryComments;
    }

    public void setAnimalHistoryComments() throws SQLException {
        this.animalHistoryComments = myJDBC.animalGetComment(recordId);
    }

    public ArrayList<AnimalHistoryPhotos> getAnimalHistoryPhotos() {
        return animalHistoryPhotos;
    }

    public void setAnimalHistoryPhotos() throws SQLException {
        this.animalHistoryPhotos = myJDBC.animalGetPhoto(recordId);
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMeasurement() {
        return measurement;
    }

    public void setMeasurement(String measurement) {
        this.measurement = measurement;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getVaccination() {
        return vaccination;
    }

    public void setVaccination(String vaccination) {
        this.vaccination = vaccination;
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    @Override
    public String toString() {
        return "AnimalHistory{" +
                "recordId=" + recordId +
                ", date='" + date + '\'' +
                ", measurement='" + measurement + '\'' +
                ", value=" + value +
                ", userId='" + userId + '\'' +
                ", vaccination='" + vaccination + '\'' +
                ", animalId=" + animalId +
                '}';
    }
}
