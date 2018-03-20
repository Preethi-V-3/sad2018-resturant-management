# SAD2018-Restaurant-Management
Delicious Food point.
Rangolee.de - Authentic Indian Cuisine Restaurant

Follow the below steps to configure this project:
1. Install angular-cli using https://angular.io/guide/quickstart and follow the steps in it.
2. Install all the below packages in the project folder:
    npm install --save firebase angularfire2 //to use firebase database functionality
    npm install --save @angular/material @angular/cdk //to use angular material components
    npm install --save classlist.js
    npm install -g firebase-tools //to use firebase hosting and functions - follow the steps mentioned in the link to setup project in firebase and link it with the app https://firebase.google.com/
    * firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword" to use functions
3. After installing firebase tools traverse to functions directory and run *npm install --save sendgrid* to use sendgrid in firebase    functions. Sendgrid is used to send emails to user and admin from contactus and reservenow forms.
4. *firebase deploy* command is used to deploy the functions and hosting in firebase.
5. *ng serve* cmd is used to run application in localhost