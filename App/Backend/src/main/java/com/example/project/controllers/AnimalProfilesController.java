package com.example.project.controllers;

import com.example.project.model.*;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.crypto.Data;
import java.time.LocalDateTime;

@CrossOrigin
@RestController
public class AnimalProfilesController {

    AnimalDatabase myDatabase = new AnimalDatabase();
    JDBCConnect myJDBC = new JDBCConnect();

    public AnimalProfilesController() throws SQLException {
    }

    //All Animals
    @GetMapping("/allAnimals")
    public ArrayList<Animal> getAllAnimals() throws SQLException {
        return myDatabase.getAnimals();
    }

    //Animal Info
    @GetMapping("/animal/{animalID}")
    public Animal getAnimal(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        return myAnimal;
    }


    @GetMapping("/animal/photos/{animalID}")
    public AnimalHistoryPhotos getAnimalPhotos(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        int size = 0;
        ArrayList<AnimalHistoryPhotos> allPhotos = new ArrayList<AnimalHistoryPhotos>();
        for (AnimalHistory h : myAnimal.getAnimalHistory()) {
            ArrayList<AnimalHistoryPhotos> myPhotos = h.getAnimalHistoryPhotos();
            for (AnimalHistoryPhotos c : myPhotos) {
                allPhotos.add(c);
            }
        }
        if (allPhotos.size() == 0) {
            size = 0;
            return null;
        } else {
            size = allPhotos.size() - 1;
        }

        AnimalHistoryPhotos myPhoto = allPhotos.get(size);
        return myPhoto;
    }


    //Animal Problems
    @GetMapping("/animal/problems/{animalID}")
    public ArrayList<AnimalProblem> getAnimalProblem(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        return myAnimal.getAnimalProblems();
    }

    //Animal Prescriptions
    @GetMapping("/animal/prescriptions/{animalID}")
    public ArrayList<AnimalPrescription> getAnimalPrescriptions(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        return myAnimal.getAnimalPrescriptions();
    }

    //Animal History
    @GetMapping("/animal/history/{animalID}")
    public ArrayList<AnimalHistory> getAnimalHistory(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        return myAnimal.getAnimalHistory();
    }

    //Animal Comments
    @GetMapping("/animal/comments/{animalID}")
    public ArrayList<AnimalHistoryComments> getAnimalComments(@PathVariable("animalID") int animalId) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        ArrayList<AnimalHistoryComments> allComments = new ArrayList<AnimalHistoryComments>();
        for (AnimalHistory h : myAnimal.getAnimalHistory()) {
            ArrayList<AnimalHistoryComments> myComments = h.getAnimalHistoryComments();
            for (AnimalHistoryComments c : myComments) {
                allComments.add(c);
            }
        }
        return allComments;
    }

    @PutMapping(
            value = "/animal/updateStatus/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> updateStatus(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalStatus) throws SQLException {
        Animal myAnimal = myDatabase.findAnimal(animalId);
        myAnimal.updateStatus(animalId, animalStatus.get("Status"));
        myDatabase.initializeDatabase();
        return null;
    }

    @PostMapping(
            value = "/animal/addProblem/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addProblem(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalProblem) throws SQLException {
        myJDBC.createConnection();
        myJDBC.addAnimalProblem(animalId, animalProblem.get("disease"), animalProblem.get("description"));
        myDatabase.initializeDatabase();
        return null;
    }


    @PostMapping(
            value = "/animal/addPrescription/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addPrescription(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalPrescription) throws SQLException {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = myDateObj.format(myFormatObj);
        myJDBC.createConnection();
        myJDBC.addAnimalPrescription(animalPrescription.get("drugName"), animalPrescription.get("deliveryMethod"),
                animalPrescription.get("userId"), formattedDate,
                animalPrescription.get("dosage"), animalPrescription.get("instructions"),
                animalPrescription.get("treatmentMethod"), animalId);
        myDatabase.initializeDatabase();
        return null;
    }

    @PostMapping(
            value = "/animal/addHistory/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addHistory(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalHistory) throws SQLException {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = myDateObj.format(myFormatObj);
        myJDBC.createConnection();
        myJDBC.addAnimalHistory(formattedDate, animalHistory.get("measurement"),
                animalHistory.get("value"), animalHistory.get("userId"),
                animalHistory.get("vaccination"), animalId);
        myDatabase.initializeDatabase();
        return null;
    }


    @PostMapping(
            value = "/animal/addAnimal",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addAnimal(@RequestBody HashMap<String, String> animalInfo) throws SQLException {
        myJDBC.createConnection();
        myJDBC.addAnimal(animalInfo.get("status"), animalInfo.get("tattoo"),
                animalInfo.get("dateBirth"), animalInfo.get("city"), animalInfo.get("breed"),
                animalInfo.get("type"), animalInfo.get("name"), animalInfo.get("sex"), animalInfo.get("userID"));
        myDatabase.initializeDatabase();
        return null;
    }


    @PostMapping(
            value = "/animal/addPhoto/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addPhoto(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalInfo) throws SQLException {
        int recordId = myDatabase.getHistoryNumber(animalId);
        myJDBC.createConnection();
        myJDBC.addAnimalPhoto(recordId, animalInfo.get("fileName"), animalInfo.get("type"));
        myDatabase.initializeDatabase();
        return null;
    }

    @PostMapping(
            value = "/animal/addComment/{animalID}",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap> addComment(@PathVariable("animalID") int animalId, @RequestBody HashMap<String, String> animalInfo) throws SQLException {
        int recordId = myDatabase.getHistoryNumber(animalId);
        myJDBC.createConnection();
        myJDBC.addAnimalComment(recordId, animalInfo.get("Comment"));
        myDatabase.initializeDatabase();
        return null;
    }

}
