var firebaseConfig = {
    apiKey: "AIzaSyBF2qqgKmoaWaanzjbiUuA3dQ6d8wqRz9s",
    authDomain: "chatappjs-2ae1c.firebaseapp.com",
    databaseURL: "https://chatappjs-2ae1c-default-rtdb.firebaseio.com",
    projectId: "chatappjs-2ae1c",
    storageBucket: "chatappjs-2ae1c.appspot.com",
    messagingSenderId: "772412106971",
    appId: "1:772412106971:web:812deb6aa10452922c44fe",
    measurementId: "G-17GQV6K7R0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function add(){
    name1 = document.getElementById("namebox").value;
    firebase.database().ref("/").child(name1).set({
        name: "ahaanjain",
        grade: 5
    });
    message = document.getElementById("messagebox").value;
    firebase.database().ref("/").child(name1).push({
        pushExample: message
    });
    firebase.database().ref("/").child(name1).on("value", function(snapshot){
        console.log(snapshot.val());
    });
  }