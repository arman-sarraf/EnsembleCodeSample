package com.example.project.model;

import java.sql.*;
import java.util.ArrayList;

public class JDBCConnect {

    private Connection dbConnect;

    public void createConnection() {
        try {
            // You may have to enter your own SQL password below to make this work

            dbConnect = DriverManager.getConnection("jdbc:mysql://localhost/VETMEDICINARYDB", "root", "9788");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ArrayList<Animal> animalFullGetStatement() throws SQLException {
        ArrayList<Animal> animalList = new ArrayList<Animal>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt.executeQuery("SELECT * FROM ANIMAL;");

            while (results.next()) {
                int animalId = results.getInt("Animal_ID");
                String breed = results.getString("Breed");
                String city = results.getString("City");
                String dateBirth = results.getString("Date_B");
                String name = results.getString("Name");
                String sex = results.getString("Sex");
                String status = results.getString("Status");
                int tattoo = results.getInt("Tattoo");
                String type = results.getString("Type");
                int userID = results.getInt("User_ID");

                Animal myAnimal = new Animal(animalId, breed, city,
                        dateBirth, name, sex,
                        status, tattoo, type, userID);
                animalList.add(myAnimal);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return animalList;
    }

    public String animalGetStatement(int animalID, String trait) throws SQLException {
        StringBuffer animalInfo = new StringBuffer();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt.executeQuery("SELECT * FROM ANIMAL WHERE Animal_ID = \"" + animalID + "\";");

            while (results.next()) {
                animalInfo.append(results.getString(trait));
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return animalInfo.toString();
    }

    public void animalSetStatement(int animalID, String column, String change) throws SQLException {
        StringBuffer animalInfo = new StringBuffer();
        try {
            Statement myStmt = dbConnect.createStatement();
            myStmt.executeUpdate(
                    "UPDATE ANIMAL SET " + column + " = \"" + change + " \" WHERE Animal_ID = \"" + animalID + "\";");
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public ArrayList<AnimalPrescription> animalGetPrescriptions(int animalID) throws SQLException {
        StringBuffer animalInfo = new StringBuffer();
        ArrayList<AnimalPrescription> animalPrescriptions = new ArrayList<AnimalPrescription>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt
                    .executeQuery("SELECT * FROM ANIMAL_PRESCRIPTION WHERE Animal_ID = \"" + animalID + "\";");

            while (results.next()) {

                int scriptRecord = results.getInt("Script_Record");
                String drugName = results.getString("Drug_Name");
                String deliveryMethod = results.getString("Delivery_Method");
                int userId = results.getInt("User_ID");
                String date = results.getString("Date");
                int dosage = results.getInt("Dosage");
                String instructions = results.getString("Instructions");
                String treatmentMethod = results.getString("Treatment_Method");
                int animalId = results.getInt("Animal_ID");
                ;

                AnimalPrescription myPrescription = new AnimalPrescription(scriptRecord, drugName, deliveryMethod,
                        userId, date, dosage, instructions, treatmentMethod, animalId);
                animalPrescriptions.add(myPrescription);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return animalPrescriptions;
    }

    public ArrayList<AnimalProblem> animalGetProblems(int animalId1) throws SQLException {
        ArrayList<AnimalProblem> animalProblems = new ArrayList<AnimalProblem>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt
                    .executeQuery("SELECT * FROM ANIMAL_PROBLEM WHERE Animal_ID = \"" + animalId1 + "\";");

            while (results.next()) {
                int animalId2 = results.getInt("Animal_ID");
                String disease = results.getString("Disease");
                String description = results.getString("Description");

                AnimalProblem myProblem = new AnimalProblem(animalId2, disease, description);
                animalProblems.add(myProblem);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return animalProblems;
    }

    public ArrayList<AnimalHistory> animalGetHistory(int animalId1) throws SQLException {
        ArrayList<AnimalHistory> animalHistory = new ArrayList<AnimalHistory>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt.executeQuery("SELECT * FROM HISTORY WHERE Animal_ID = \"" + animalId1 + "\";");

            while (results.next()) {

                int recordId = results.getInt("Record_ID");
                String date = results.getString("Date");
                String measurement = results.getString("Measurement");
                int value = results.getInt("Value");
                String userId = results.getString("User_ID");
                String vaccination = results.getString("Vaccination");
                int animalId = results.getInt("Animal_ID");

                AnimalHistory myHistory = new AnimalHistory(recordId, date, measurement, value, userId, vaccination,
                        animalId);
                animalHistory.add(myHistory);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return animalHistory;
    }

    public ArrayList<AnimalHistoryComments> animalGetComment(int recordID) throws SQLException {
        ArrayList<AnimalHistoryComments> animalComment = new ArrayList<AnimalHistoryComments>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt
                    .executeQuery("SELECT * FROM HISTORY_COMMENTS WHERE Record_ID = \"" + recordID + "\";");

            while (results.next()) {
                int recordId = results.getInt("Record_ID");
                int commentId = results.getInt("Comment_ID");
                String description = results.getString("Description");

                AnimalHistoryComments myComment = new AnimalHistoryComments(recordId, commentId, description);
                animalComment.add(myComment);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return animalComment;
    }

    public ArrayList<AnimalHistoryPhotos> animalGetPhoto(int recordID) throws SQLException {
        ArrayList<AnimalHistoryPhotos> animalPhoto = new ArrayList<AnimalHistoryPhotos>();
        try {
            Statement myStmt = dbConnect.createStatement();
            ResultSet results = myStmt
                    .executeQuery("SELECT * FROM HISTORY_PHOTOS WHERE Record_ID = \"" + recordID + "\";");

            while (results.next()) {
                int recordId = results.getInt("Record_ID");
                int imageId = results.getInt("Image_ID");
                String fileName = results.getString("File_Name");
                String type = results.getString("Type");

                AnimalHistoryPhotos myPhoto = new AnimalHistoryPhotos(recordId, imageId, fileName, type);
                animalPhoto.add(myPhoto);
            }
            myStmt.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return animalPhoto;
    }

    public void addAnimalProblem(int animalId, String disease, String description) throws SQLException {
        String query = "INSERT INTO ANIMAL_PROBLEM (Animal_ID, Disease, Description) values (?, ?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setInt(1, animalId);
        preparedStmt.setString(2, disease);
        preparedStmt.setString(3, description);

        preparedStmt.execute();
    }

    public void addAnimalPrescription(String drugName, String deliveryMethod,
                                      String userId, String date, String dosage, String instructions,
                                      String treatmentMethod, int animalId) throws SQLException {
        String query = "INSERT INTO ANIMAL_PRESCRIPTION (Drug_Name, " +
                "Delivery_Method, User_ID, Date, Dosage, Instructions, Treatment_Method, Animal_ID) values (?, ?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setString(1, drugName);
        preparedStmt.setString(2, deliveryMethod);
        preparedStmt.setInt(3, Integer.parseInt(userId));
        preparedStmt.setString(4, date);
        preparedStmt.setInt(5, Integer.parseInt(dosage));
        preparedStmt.setString(6, instructions);
        preparedStmt.setString(7, treatmentMethod);
        preparedStmt.setInt(8, animalId);

        preparedStmt.execute();
    }

    public void addAnimalHistory(String date, String measurement,
                                 String value, String userId, String vaccination,
                                 int animalId) throws SQLException {
        String query = "INSERT INTO HISTORY (Date, Measurement, Value, User_ID, Vaccination, Animal_ID) values (?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setString(1, date);
        preparedStmt.setString(2, measurement);
        preparedStmt.setInt(3, Integer.parseInt(value));
        preparedStmt.setString(4, userId);
        preparedStmt.setString(5, vaccination);
        preparedStmt.setInt(6, animalId);

        preparedStmt.execute();
    }

    public void addAnimalPhoto(int recordId, String fileName, String type) throws SQLException {
        String query = "INSERT INTO HISTORY_PHOTOS (Record_ID, File_Name, Type) values (?, ?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setInt(1, recordId);
        preparedStmt.setString(2, fileName);
        preparedStmt.setString(3, type);

        preparedStmt.execute();
    }

    public void addAnimalComment(int recordId, String description) throws SQLException {
        String query = "INSERT INTO HISTORY_COMMENTS (Record_ID, Description) values (?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setInt(1, recordId);
        preparedStmt.setString(2, description);

        preparedStmt.execute();
    }

    public void addAnimal(String status, String tattoo,
                          String dateBirth, String city, String breed,
                          String type, String name, String sex, String userID) throws SQLException {
        String query = "INSERT INTO ANIMAL (Status, Tattoo, Date_B, City, Breed, Type, Name, Sex, User_ID) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt = dbConnect.prepareStatement(query);
        preparedStmt.setString(1, status);
        preparedStmt.setInt(2, Integer.parseInt(tattoo));
        preparedStmt.setString(3, dateBirth);
        preparedStmt.setString(4, city);
        preparedStmt.setString(5, breed);
        preparedStmt.setString(6, type);
        preparedStmt.setString(7, name);
        preparedStmt.setString(8, sex);
        preparedStmt.setInt(9, Integer.parseInt(userID));

        preparedStmt.execute();
    }

}
