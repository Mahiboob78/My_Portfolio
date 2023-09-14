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

// reference your database
var feedbackDB = firebase.database().ref("feedback");

function sendData() {
  e.preventDefault();

  var starts = getElementVall("star");
  var selct_options = getElementVall("optns");
  var comments = getElementVall("cmnt");

  saveFeedback(starts, selct_options, comments);

  alert("Feedback Submitted Successfully");

  // reset the form
  document.getElementById("feedbackform").reset();
}

const saveFeedback = (starts, selct_options, comments) => {

  firebase
  .database()
  .ref("feedback/" + starts)
  .set({
    Starts: starts,
    Select_Option: selct_options,
    Comments: comments,
  });
};

const getElementVall = (id) => {
  return document.getElementById(id).value;
};