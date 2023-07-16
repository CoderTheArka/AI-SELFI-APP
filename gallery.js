const firebaseConfig = {
    apiKey: "AIzaSyB2XOFoiQNa0bQUbrF3rf1urQbgQF-NxfI",
    authDomain: "mychatverification.firebaseapp.com",
    databaseURL: "https://mychatverification-default-rtdb.firebaseio.com",
    projectId: "mychatverification",
    storageBucket: "mychatverification.appspot.com",
    messagingSenderId: "54512205426",
    appId: "1:54512205426:web:cba2367fc1556c35384ceb"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref(localStorage.getItem('username') + '/').on('value', function(snapshot) { document.getElementById("Image").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var firebase_message_id = childKey;
    var message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);
file = message_data['file'];
url = message_data['url'];

image = "<span id='span'><img id="+file+" onclick='get(this.id)' src="+url+" heigth='300px' width='350px'><br><label id='label'>"+file+"</label><a style='display:none' href="+url+" download="+file+"  >BTW</a><hr><hr></span>";
document.getElementById('Image').innerHTML += image;


//End code
 } });  }); }
 getData();

 function get(name){
const url= document.getElementById(name).src;
window.location = url;
 }
 