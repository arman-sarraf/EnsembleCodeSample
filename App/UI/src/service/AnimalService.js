import axios from 'axios'
import React, {useState} from 'react';

const ANIMAL_REST_API_URL = 'http://localhost:8080/animal';

class AnimalService {

    getAnimalById(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/' + animalId);
    }

    getAnimalProblems(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/problems/' + animalId);
    }

    getAnimalComments(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/comments/' + animalId);
    }

    getAnimalPrescriptions(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/prescriptions/' + animalId);
    }

    getAnimalPhotos(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/photos/' + animalId);
    }

    getAnimalHistory(animalId) {
        return axios.get(ANIMAL_REST_API_URL + '/history/' + animalId);
    }

    UpdateAnimalStatus(animalId, status) {
        return axios.put(ANIMAL_REST_API_URL + '/updateStatus/' + animalId, status);
    }

}

export default new AnimalService();