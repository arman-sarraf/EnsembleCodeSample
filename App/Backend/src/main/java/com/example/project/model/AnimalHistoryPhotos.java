package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;

public class AnimalHistoryPhotos {
    private int recordId;
    private int imageId;
    private String fileName;
    private String type;

    public AnimalHistoryPhotos(int recordId, int imageId, String fileName, String type) {
        this.recordId = recordId;
        this.imageId = imageId;
        this.fileName = fileName;
        this.type = type;
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "AnimalHistoryPhotos{" +
                "recordId=" + recordId +
                ", imageId=" + imageId +
                ", fileName='" + fileName + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
