
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBF5LuvQwINxVylw2aGG8q16FMsFFxQCfE",
      authDomain: "kwitterdatabase-19946.firebaseapp.com",
      projectId: "kwitterdatabase-19946",
      storageBucket: "kwitterdatabase-19946.appspot.com",
      messagingSenderId: "567978834620",
      appId: "1:567978834620:web:c76a300b9f840ce1492eb9",
      measurementId: "G-68PJLE38X7"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
 console.log("Room Name - " + Room_name);
 row = "< div class='rooom_name'id="+Room_name+" onclick='redirectToRoomName(this.id)' >3"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data ['name'];
      message = message_data['like'];
      name_with_tag ="<h4> "+ name +"<img class='user_tick src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + "</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
      });
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
