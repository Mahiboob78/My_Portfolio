const firebaseConfig = {
  apiKey: "AIzaSyCz_gJrcEQabQhdf79rstXf5AKCQ_lmG6c",
  authDomain: "contactform-c8836.firebaseapp.com",
  databaseURL: "https://contactform-c8836-default-rtdb.firebaseio.com",
  projectId: "contactform-c8836",
  storageBucket: "contactform-c8836.appspot.com",
  messagingSenderId: "572229037158",
  appId: "1:572229037158:web:361fd8b895dfa4947c91a7"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let ratingV;

const starIcons = document.querySelectorAll('.rating i');
starIcons.forEach(starIcon => {
  starIcon.addEventListener('click', () => {
    const feed = starIcon.getAttribute('value');
    ratingV = feed;
    });
});

//*************************** USERS DATA ****************************************** */
function submitData() {
  var name = getElementVal("username");
  var mobNum = getElementVal("mobNum");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");
  saveMessages(name, mobNum, emailid, msgContent);
  alert("Data Sent Successfully");
  // reset the form
  document.getElementById("userdata").reset();
}

const saveMessages = (name, mobNum, emailid, msgContent) => {
  db.collection("users").add({
    name: name,
    mobile_num: mobNum,
    emailid: emailid,
    msgContent: msgContent,
  })

};

//******************************** FEEDBACK ************************************** */
function sendData() {
  var nameV = getElementVal("name");
  saveFeedback(nameV, ratingV);
  alert("Feedback Submitted Successfully");
  // reset the form
  document.getElementById("feedbackform").reset();
}

const saveFeedback = (nameV, ratingV) => {
  db.collection("feedback").add({
    Name: nameV,
    Rating: ratingV,
  })
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
