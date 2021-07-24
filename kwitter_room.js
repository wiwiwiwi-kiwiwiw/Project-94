//ADD YOUR FIREBASE LINKS HERE



var firebaseConfig = {
    apiKey: "AIzaSyD2VSA3RvN8g1uksWdarnAB7PHkzLNZLq0",
    authDomain: "projectkwitter93.firebaseapp.com",
    projectId: "projectkwitter93",
    storageBucket: "projectkwitter93.appspot.com",
    messagingSenderId: "293463439266",
    appId: "1:293463439266:web:37b604f259d2c9a25164fb",
    measurementId: "G-GTX9JD5T7L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();