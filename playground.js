// // const seedpillData = () => _pillData.bulkCreate(_pillData);
//     // module.exports = seedpillData;
//     // console.log(_pillData);
//     // const _pillData = [];
//     //     // for (let i = 0; i < 10; i++) {
//     //     //     _pillData.push
//     //                 // ({
//     //                 function getPillData (color, shape, imprint) {
//     // console.log("step1");
//     //                    var queryURL ="https://rximage.nlm.nih.gov/api/rximage/1/rxnav?&resolution=full&color="+color+"&shape="+shape+"&imprint="+imprint+"";
//     //                 axios.get(queryURL)
//     //                     .then(data => {
//     //                         console.log("step2");
//     //                         // list = data["nlmRxImages"];
//     //                         console.log(data.data);
//     //                         console.log("============================")
//     //                         console.log("Pills Found: " + data["nlmRxImages"].length)
//     //                     }) .catch(err => console.log(err));
//     //                     }
//     //         getPillData("blue", "circle", "3e455");
//        //     // console.log("ID: " + list[1].id)
//         // console.log("Image Location: " + list[1].imageUrl)
//         // console.log("Manufacturer: " + list[1].labeler)
//         // console.log("Pill Name: " + list[1].name)
//         // });

//         const { faker } = require('@faker-js/faker');
// const _TYPES = ["Gel-Cap", "Pill", "Capsule", "Tablet", "Caplet"];
// const _COLORS = ["Red", "Blue", "Green", "Orange", "White", "Yellow", "Purple", "Pink"];
// const _pillData = [];
// for (let i = 0; i < 10; i++) {
//     _pillData.push
//         ({
//             type: faker.helpers.arrayElement(_TYPES),
//             color: faker.helpers.arrayElement(_COLORS),
//             imprint: faker.random.alphaNumeric(5),
//             photoUrl: faker.image.food(),
//             description: faker.commerce.productDescription(),
//         });
//     console.log(_pillData)
// };

// // list of paink relievers
// tylenol
// motrin
// advil 
// Aleve 
// ibuprofen
// aspirin
// midol


// TODO USER-ROUTES
// //DEPENDECY & IMPORT//
// const router = require("express").Router();
// const {User} = require("../../models");

// //CREATE NEW ACCOUNT//
//   router.post("/", async (req, res) => {
//       try {
//           const dbUserData = await User.create({
//               username: req.body.username,
//               email: req.body.email,
//               password: req.body.password,
//               isAdmin: req.body.is_admin,
//       });
//           req.session.save(() => {
//           req.session.loggedIn = true;
//           req.session.loggedInUserData = dbUserData;
//           return res.status(200).json(dbUserData);
//       });
//           } catch (err) {
//               console.log(err);
//                   return res.status(500).json(err);
//       }
//   });

// //LOGIN//
//   router.post("/login", async (req, res) => {
//       try {
//           const dbUserData = await User.findOne({
//               where: {
//               email: req.body.email,
//           },
//       });

//       if (!dbUserData) {
//           res.status(400).json({
//               message: "Error❗⛔ Invalid login credentials❗⛔",
//           });
//           return;
//       }
// //PASSWORD CHECK//
//   const validPassword = await dbUserData.checkPassword(req.body.password);
//       if (!validPassword) {
//           res.status(400).json({
//               message: "Error❗⛔ Invalid login credentials❗⛔",
//       });
//           return;
//       }
// //SAVE DATA SESS.//
//   req.session.save(() => {
//   req.session.loggedIn = true;
//   req.session.loggedInUserData = dbUserData;
//       console.log("💾", req.session.cookie);
//           res.status(200).json({
//               user: dbUserData,
//               message: `Success✅ Logged in as ${User} ✅`,
//           });
//   });
//       } catch (err) {
//           console.log(err);
//           res.status(500).json(err);
//       }
//   });

// //LOGOUT//
//   router.post("/logout", (req, res) => {
//       if (req.session.loggedIn) {
//           req.session.destroy(() => {
//               res.status(204).end();
//       });
//       } else {
//           res.status(404).end();
//       }
//   });

//   module.exports = router;


// TODO 404 handlebar

{/* <div class="container">
  <div class="jumbotron mt-4">
    <h1 class="display-4 text-center">404 Not Found
      <span role="img" aria-label="Not Welcome">🚫</span>
    </h1>
    <a href="/">🏠 Back To Home</a>
  </div>
</div> */}


// todo from deleted index.js in public
//GET REFERENCES --> PAGE ELEMENTS//
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// //API ROUTE METHODS --> POST, GET & DELETE//
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
// });
// },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//   });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// //REFRESH --> GET NEW --> RE-POPULATE//
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//     var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//     })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
// });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// //FORM SUBMIT --> NEW DATA//
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//    description: $exampleDescription.val().trim()
//   };

//     if (!(example.text && example.description)) {
//       alert("You must enter an example text and description!");
//       return;
//     }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// //DELETE --> REMOVE DATA//
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// //EVENT LISTENERS --> SUBMIT & DELETE//
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);