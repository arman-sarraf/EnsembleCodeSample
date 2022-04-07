package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;

public class AnimalProblem {

    private int animalId;
    private String disease;
    private String description;

    public AnimalProblem(int animalId, String disease, String description) {
        this.animalId = animalId;
        this.disease = disease;
        this.description = description;
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "AnimalProblem{" +
                "animalId=" + animalId +
                ", disease='" + disease + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
