package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;

public class AnimalPrescription {
    private int scriptRecord;
    private String drugName;
    private String deliveryMethod;
    private int userId;
    private String date;
    private int dosage;
    private String instructions;
    private String treatmentMethod;
    private int animalId;

    public AnimalPrescription(int scriptRecord, String drugName, String deliveryMethod,
                              int userId, String date, int dosage, String instructions,
                              String treatmentMethod, int animalId) {
        this.scriptRecord = scriptRecord;
        this.drugName = drugName;
        this.deliveryMethod = deliveryMethod;
        this.userId = userId;
        this.date = date;
        this.dosage = dosage;
        this.instructions = instructions;
        this.treatmentMethod = treatmentMethod;
        this.animalId = animalId;
    }

    public int getScriptRecord() {
        return scriptRecord;
    }

    public void setScriptRecord(int scriptRecord) {
        this.scriptRecord = scriptRecord;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getDosage() {
        return dosage;
    }

    public void setDosage(int dosage) {
        this.dosage = dosage;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getTreatmentMethod() {
        return treatmentMethod;
    }

    public void setTreatmentMethod(String treatmentMethod) {
        this.treatmentMethod = treatmentMethod;
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    @Override
    public String toString() {
        return "AnimalPrescription{" +
                "scriptRecord=" + scriptRecord +
                ", drugName='" + drugName + '\'' +
                ", deliveryMethod='" + deliveryMethod + '\'' +
                ", userId=" + userId +
                ", date='" + date + '\'' +
                ", dosage=" + dosage +
                ", instructions='" + instructions + '\'' +
                ", treatmentMethod='" + treatmentMethod + '\'' +
                ", animalId=" + animalId +
                '}' + '\n';
    }
}
