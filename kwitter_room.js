// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQ5KABdcthJ-6YjQChZtzyM6PMFSUSbDw",
    authDomain: "dfghjk-e6054.firebaseapp.com",
    databaseURL: "https://dfghjk-e6054-default-rtdb.firebaseio.com",
    projectId: "dfghjk-e6054",
    storageBucket: "dfghjk-e6054.appspot.com",
    messagingSenderId: "55773051324",
    appId: "1:55773051324:web:65da326a669ffc5ada13b9",
    measurementId: "G-VGQT2H1NG6"
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
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}