# Ensemble Code Sample
## Project App - OMDB

Project OMDB web app:

How to run the web-application:

1. Clone this repo
2. Open a CLI under path '\my-app' & run 'npm install' command and after that, run 'npm start' command. The application should start running.

Details:
* Search results comes from OMDB API
* Each search result displays poster, title, year of release. Updates to the search term updates the result list
* Additional: By Clicking on each movie, the details of the move is shown to the user. User can add any move to their favorite list by marking them as favorite.

Technology: React-axios, HTML/CSS

--------------------------------------------------------------------------------

Personal Project Code Sample (Staff & Animals Registration System):

How to run the web-application:

1. Clone this repo
1. Execute VETMEDICINARYDB.sql database script which can be found under 'App\backend' (ideally with workbench).
2. Open/import the App folder with an IDE (ideally with IntelliJ)
2. In your IDE go to '\App\Backend\src\main\java\com.example.project\model' and change database credentials based on your device for 'JDBCConnect' & 'UserDB' classes.
3. In your IDE under the previous location (under com.example.project package) there is a runnable class named 'ProjectApplication'. Please run this class (server should start & continue running).
4. Open a CLI under path '\App\UI' & run 'npm install' command and after that, run 'npm start' command.
5. The web application should be running now. Use one of the following username and password to login:
* Admin User: 1 Pass: 3333
* Teaching Technician User: 3 Pass: 1561
* Care Attendant: User: 5 Pass: 7788
* Health Technician User: 7 Pass: 1250
* Student User: 9 Password: 3020

*Note: Please make sure that 'mysql-connector-java-8.0.27' is added to the project path in your IDE and is recognized as a library.*

Technology: Java, Spring boot, MySQL, React-axios, HTML/CSS
