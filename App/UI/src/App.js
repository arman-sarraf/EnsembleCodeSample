import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";

//Animal Profile
import AnimalProfile from './components/animalProfile/animalProfile.component';
import AnimalAddProblem from './components/animalProfile/AnimalAddProblems';
import AnimalAddHistory from './components/animalProfile/AnimalAddHistory';
import AnimalAddPrescription from './components/animalProfile/AnimalAddPrescription';
import AnimalRestrictedProfile from './components/animalRestrictedProfile/animalProfile.component';
import AnimalAddPhoto from './components/animalProfile/AnimalAddPhoto';

import SearchAnimal from './components/searchAnimal.componenet';
import AnimalService from './service/AnimalService';

// Admin
import AdminAnimalSearch from './components/admin/adminAnimalSearch.componenet';
import AdminUserList from './components/admin/adminUserList.componenet';
import AdminBlockedUserList from './components/admin/adminBlockedUserList.componenet';
import AdminAddUser from './components/admin/adminAddUser.componenet';
import AdminProfile from './components/admin/adminProfile.componenet';
import AdminAddAnimal from './components/admin/adminAddAnimal.component';
import AdminEditUser from './components/admin/adminEditUser.component';

// Animal Health Technician
import AnimalHealthTechnicianAnimalSearch from './components/animalHealthTechnician/animalHealthTechnicianAnimalSearch.componenet';
import AnimalHealthTechnicianProfile from './components/animalHealthTechnician/animalHealthTechnicianProfile.componenet';
import AnimalHealthTechAddAnimal from './components/animalHealthTechnician/animalHealthTechAddAnimal';
// Animal Care Attendance
import AnimalCareAttendanceAnimalSearch from './components/animalCareAttendance/animalCareAttendanceAnimalSearch.componenet';
import AnimalCareAttendanceAlertAnimal from './components/animalCareAttendance/animalCareAttendanceAlertAnimal.componenet';
import AnimalCareAttendanceRequestedTreatment from './components/animalCareAttendance/animalCareAttendanceRequestedTreatment.componenet.js';
import AnimalCareAttendanceProfile from './components/animalCareAttendance/animalCareAttendanceProfile.componenet';
import AnimalCareAddAnimal from './components/animalCareAttendance/animalCareAddAnimal';
// Teaching Technician
import TeachingTechnicianUserList from './components/teachingTechnician/teachingTechnicianUserList.componenet';
import TeachingTechnicianAnimalSearch from './components/teachingTechnician/teachingTechnicianAnimalSearch.componenet';
import TeachingTechnicianAddUser from './components/teachingTechnician/teachingTechnicianAddUser.componenet';
import TeachingTechnicianBlockedUserList from './components/teachingTechnician/teachingTechnicianBlockedUserList.componenet';
import TeachingTechnicianRequestedAnimal from './components/teachingTechnician/teachingTechnicianRequestedAnimal.componenet';
import TeachingTechnicianProfile from './components/teachingTechnician/teachingTechnicianProfile.componenet';
// Student
import StudentAnimalSearch from './components/student/studentAnimalSearch.componenet';
import StudentProfile from './components/student/studentProfile.componenet';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/SearchAnimal" component={SearchAnimal} />

          {/* Animal Profile */}
          <Route path="/AnimalProfile/:id" component={AnimalProfile} />
          <Route path="/AnimalProblems/:id" component={AnimalAddProblem} />
          <Route path="/AnimalPrescriptions/:id" component={AnimalAddPrescription} />
          <Route path="/AnimalHistory/:id" component={AnimalAddHistory} />
          <Route path="/AnimalRestrictedProfile/:id" component={AnimalRestrictedProfile} />
          <Route path="/AnimalAddPhoto/:id" component={AnimalAddPhoto} />


          {/* Admin */}
          <Route path="/AdminAnimalSearch" component={AdminAnimalSearch} />
          <Route path="/AdminUserList" component={AdminUserList} />
          <Route path="/AdminBlockedUserList" component={AdminBlockedUserList} />
          <Route path="/AdminAddUser" component={AdminAddUser} />
          <Route path="/AdminProfile" component={AdminProfile} />
          <Route path="/AdminAddAnimal" component={AdminAddAnimal} />
          <Route path="/AdminEditUser/:id" component={AdminEditUser} />

          {/* Animal Health Technician */}
          <Route path="/AnimalHealthTechnicianAnimalSearch" component={AnimalHealthTechnicianAnimalSearch} />
          <Route path="/AnimalHealthTechnicianProfile" component={AnimalHealthTechnicianProfile} />
          <Route path="/AnimalHealthTechAddAnimal" component={AnimalHealthTechAddAnimal} />
          {/* Animal Care  Attendance */}
          <Route path="/AnimalCareAttendanceAnimalSearch" component={AnimalCareAttendanceAnimalSearch} />
          <Route path="/AnimalCareAttendanceAlertAnimal" component={AnimalCareAttendanceAlertAnimal} />
          <Route path="/AnimalCareAttendanceProfile" component={AnimalCareAttendanceProfile} />
          <Route path="/AnimalCareAttendanceRequestedTreatment" component={AnimalCareAttendanceRequestedTreatment} />
          <Route path="/AnimalCareAddAnimal" component={AnimalCareAddAnimal} />
          {/* Teaching Technician*/}
          <Route path="/TeachingTechnicianUserList" component={TeachingTechnicianUserList} />
          <Route path="/TeachingTechnicianAnimalSearch" component={TeachingTechnicianAnimalSearch} />
          <Route path="/TeachingTechnicianAddUser" component={TeachingTechnicianAddUser} />
          <Route path="/TeachingTechnicianBlockedUserList" component={TeachingTechnicianBlockedUserList} />
          <Route path="/TeachingTechnicianRequestedAnimal" component={TeachingTechnicianRequestedAnimal} />
          <Route path="/TeachingTechnicianProfile" component={TeachingTechnicianProfile} />
          {/* Student */}
          <Route path="/StudentAnimalSearch" component={StudentAnimalSearch} />
          <Route path="/StudentProfile" component={StudentProfile} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;