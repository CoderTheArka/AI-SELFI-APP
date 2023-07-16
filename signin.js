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

function signUp(){

  setTimeout(() => {
    if(document.getElementById('hide').innerHTML != 'Ok.'){
      get_name = document.getElementById('name12').value ;
      if(document.getElementById('name12').value != ''){
      firebase.database().ref('users/').child(get_name + '/').update({
        username : get_name,
      
      });
      alert('YOUR NAME IS SAVED TO OUR RECORDS')
      }else{
        alert('YOU CANT MAKE USERNAME A EMPTY STRING');
      }
  
    }else{
      alert('USERNAME ALREADY EXIT TRY ANOTHER NAME');
      window.location = 'signup.html'
    }
    
  }, 5000)


}


function signin(){

}