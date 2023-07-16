function start(){
    document.getElementById('select').click();
}

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

var fileText = document.getElementById("fileText");
var uploadPersentage = document.getElementById("Pres");
var process = document.getElementById("P");
var Percentval;
var fileItem;
var fileName;
var name1;
var ext;

var files = [];

function getFile(e){
 fileItem = e.target.files[0];
 console.log(fileItem);
 fileName = fileItem.name;
 document.getElementById('fileText').innerHTML = fileName;
 console.log(fileName);
  ext = GetFileExt(files[0]);
  name1 = GetFileName(files[0]);
 localStorage.setItem('ext',ext);
 localStorage.setItem('name',name1)
 console.log(localStorage.getItem('name') + localStorage.getItem('ext'));
 document.getElementById('hide').style.display = 'block';
 document.getElementById('name').value=name1;
 document.getElementById('ext').innerHTML = ext;
}
function GetFileExt(file){
    var temp = fileName.split(".");
    var ext = temp.slice(temp.lenght-1,temp.lenght);
    return '.' + ext[1];
   }
 
   function GetFileName(file){
     var temp = fileName.split('.');
     var fname = temp.slice(0,-1).join('.');
     return fname;
   }

function go(){

    if(document.getElementById('name').value != ''){
        let storageRef = firebase.storage().ref("images/" + localStorage.getItem('username') + '/' + fileName);
        let uploadTask = storageRef.put(fileItem);
    
        uploadTask.on("state_changed" , (snapshot)=>{
            console.log(snapshot);
        Percentval = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(Percentval);
        document.getElementById('Pres').innerHTML = Percentval+'%';
        document.getElementById('P').style.width=Percentval+'%';
    
        },(error)=>{
            console.log("Error is: " + error);
            alert('SomeThing Went Wrong')
        },()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            
                firebase.database().ref(localStorage.getItem('username') + '/').update({
                purpose:'Adding Room'
                });
                firebase.database().ref(localStorage.getItem('username') + '/').push({
                file:document.getElementById('name').value,
                url:url
                });
           console.log('URL IS: ' + url)
           if (url != ''){
            document.getElementById('show12').style.display = 'block';
            document.getElementById('show12').src = url;
           }
            })
        });
    }else{
        alert('Please Enter A photo name')
    }
}