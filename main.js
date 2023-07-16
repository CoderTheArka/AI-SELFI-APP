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

var SpeechR = window.webkitSpeechRecognition;

var recognition = new SpeechR();

function start(){
    document.getElementById('textbox').innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
   var abc =  Content.toUpperCase()
    alert(abc);
    if (abc == 'TAKE MY SELFIE'){
        document.getElementById("textbox").innerHTML = abc;
        speak();
    }else{
        alert('We cant recognise what you had just said.')
    }

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "TAKEING YOUR SELFIE IN 5 SECOND";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    camera = document.getElementById("camera");
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
       },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
 });
 camera = document.getElementById("camera");
 function take_snapshot()
 {
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML += "<img id='selfie_image' src='"+data_uri+"'>";
    });
    
 }
 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
 }

