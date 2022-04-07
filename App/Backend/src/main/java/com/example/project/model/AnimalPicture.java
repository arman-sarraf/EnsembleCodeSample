package com.example.project.model;

public class AnimalPicture {

    private int imageID;
    private int userID;
    private String creationDate;
    private String fileName;
    private String type;

    public AnimalPicture(int imageID, int userID, String creationDate, String fileName, String type) {
        this.imageID = imageID;
        this.userID = userID;
        this.creationDate = creationDate;
        this.fileName = fileName;
        this.type = type;
    }

    public int getImageID() {
        return imageID;
    }

    public void setImageID(int imageID) {
        this.imageID = imageID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
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
        return "AnimalPicture{" +
                "imageID=" + imageID +
                ", userID=" + userID +
                ", creationDate='" + creationDate + '\'' +
                ", fileName='" + fileName + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}