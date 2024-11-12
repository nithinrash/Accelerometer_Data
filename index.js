// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCjOfVeknGmtOr9LnRbSvmWNARMzoVV4hw",
    authDomain: "trial3-6e298.firebaseapp.com",
    databaseURL: "https://trial3-6e298-default-rtdb.firebaseio.com",
    projectId: "trial3-6e298",
    storageBucket: "trial3-6e298.firebasestorage.app",
    messagingSenderId: "665240996623",
    appId: "1:665240996623:web:9a09c622a4208d737b4c7a",
    measurementId: "G-JEL97GBLLV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
//   function save() {
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//     var username = document.getElementById('username').value
//     var say_something = document.getElementById('say_something').value
//     var favourite_food = document.getElementById('favourite_food').value
   
  
//     database.ref('users/' + username).set({
//       email : email,
//       password : password,
//       username : username,
//       say_something : say_something,
//       favourite_food : favourite_food
//     })
  
//     alert('Saved')
//   }
  
//   function get() {
//     var username = document.getElementById('username').value
    
//     var user_ref = database.ref('users/' + username)
//     user_ref.on('value', function(snapshot) {
//       var data = snapshot.val()
      
//       alert(data.email)
//       console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
//       console.log(data.favourite_food);
  
//     })
//     alert(data.email)
    
//   }
  
  function update() {
    var username = 1

  
    var updates = {
      fall_Detected : username,
    
    }
  
    database.ref('fall/' ).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
