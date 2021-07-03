import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyC-u0aVblJojRmVueWVf2r64ljxUStWzjk",
  authDomain: "school-attendence-app-870cb.firebaseapp.com",
  databaseURL: "https://school-attendence-app-870cb-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-870cb",
  storageBucket: "school-attendence-app-870cb.appspot.com",
  messagingSenderId: "715952873009",
  appId: "1:715952873009:web:6f3249774f3aaab357bf10"
};

 // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database();
