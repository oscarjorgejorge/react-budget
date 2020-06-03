import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1HhvJY9vGNgoFIo2LfDYI0KV1lXoKxxo",
  authDomain: "login-app-31ba6.firebaseapp.com",
  databaseURL: "https://login-app-31ba6.firebaseio.com",
  projectId: "login-app-31ba6",
  storageBucket: "login-app-31ba6.appspot.com",
  messagingSenderId: "355669092178",
  appId: "1:355669092178:web:695209850a154a6c107c8b",
  measurementId: "G-J6RGZZP0TB",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

// setTimeout(() => {
//   database.ref("expenses").push({
//     description: "Water Bills",
//     note: "",
//     amount: 300,
//     createdAt: 999646848646,
//   });

//   database.ref("expenses").push({
//     description: "gas Bills",
//     note: "",
//     amount: 800,
//     createdAt: 5464645498646,
//   });

//   database.ref("expenses").push({
//     description: "Rent Bills",
//     note: "",
//     amount: 1000,
//     createdAt: 5464646848646,
//   });
// }, 6000);

// setTimeout(() => {
//   database.ref("expenses").push({
//     description: "Water Bills",
//     note: "",
//     amount: 300,
//     createdAt: 999646848646,
//   });

//   database.ref("expenses").push({
//     description: "gas Bills",
//     note: "",
//     amount: 800,
//     createdAt: 5464645498646,
//   });

//   database.ref("expenses").push({
//     description: "Rent Bills",
//     note: "",
//     amount: 1000,
//     createdAt: 5464646848646,
//   });
// }, 10000);

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// child_remove
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("value", (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  console.log(expenses);
});
// database.ref("notes").set(notes);
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     let value = snapshot.val();
//     console.log(
//       `The name is ${value.name} is a ${value.job.title} at ${value.job.company}`
//     );
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(27);
// }, 4000);

// setTimeout(() => {
//   database.ref("name").set("Jorge JOrge");
// }, 7000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 11000);

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 15000);

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(snapshot);
//     console.log(val);
//   });

// database
//   .ref()
//   .set({
//     name: "Oscar Jorge",
//     age: 31,
//     job: {
//       title: "Sofware developer",
//       company: "Google",
//     },
//     stressLevel: 6,
//     location: {
//       city: "Madrid",
//       country: "Spain",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("this failed ", e);
//   });

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Valencia",
//   })
//   .then(() => {
//     console.log("Data is updated!");
//   });
// database.ref("isSingle").set(null);

// database.ref().update({
//   job: "Manager",
//   "location/city": "Barcelona",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("remove completed");
//   })
//   .catch((e) => {
//     console.log("something went wrong");
//   });
