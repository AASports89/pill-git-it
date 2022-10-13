const submitCommentHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector(".comment-input").value;
  const author_id = document.querySelector(".logged-in-user-id").innerHTML;
  const post_id = document.querySelector(".current-post-id").innerHTML;
const photo_Url = "";
  if (!author_id) {
      document.location.replace("/login");
  } else {
      if (comment) {
          const response = await fetch("/api/comment/", {
              method: "POST",
              body: JSON.stringify({ comment, photo_Url, author_id, post_id }),
              headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
              document.location.replace("/post/" + post_id + "#comment-section");
                                + 
              alert(`Success✅ New comment added❕✍`);
              document.location.reload();
          } else {
              alert(
                "Failed to create post❗⛔ Please try again❗⛔" +
                      response.status +
                      ": " +
                      response.statusText
              );
          }
      } else {
          alert("Please fill out all fields ❗⛔");
      }
  }
};
//DELETE COMMENT ON CLIENT API CALL//
const deleteCommentHandler = async (event) => {
  event.preventDefault();

  const deleteCommentId = event.target.getAttribute("data-id");
  const currentPostId = document.querySelector(".current-post-id").innerHTML;
  console.log(2);
  if (deleteCommentId) {
      const response = await fetch("/api/comment/" + deleteCommentId, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
            document.location.replace("/post/" + currentPostId + "#comment-section")
                                +
            alert("Warning❗⛔ Comment deleted❗❌");
        
            document.location.reload();
      } else {
          alert(
              "Failed to delete post❗⛔ Please try again❗⛔ " +
                  response.status +
                  ": " +
                  response.statusText
          );
      }
  }
};
//************************************** PILL IMAGE MATCH *************************************//
//STORES OBJECTS FOR THE TRIPLE-LIST CASCADE//
var SList = new Object();

//LABELS FOR THE 2ND & 3RD LISTS//
var txtsl2 ='Color 🩸:';
var txtsl3 = 'Shape 🔬:';

//OPTIONS FOR THE 2ND LIST TRIGGERED BY THE 1ST-LIST//
SList.slist2 = {
"capsule": ['white', 'blue', 'red'],
 "tablet": ['white', 'blue', 'red'],
 "caplet": ['white', 'blue', 'red']
};

//OPTIONS FOR THE 3RD LIST TRIGGERED BY THE 2ND-LIST//
SList.slist3 = {
 "white": ['oblong', 'round'],
 "blue": ['ooblong', 'rectangular'],
 "red": ['oval', 'triangular'],
};

//OPTIONS FOR THE PILL-IMAGES LIST TRIGGERED BY THE 3RD-LIST//
SList.scontent = {
"oblong": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1665539675/white-cap.jpg"></img>',
"round": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1664851514/pill-git-it-images/white-tab_m8srwd.jpg"></img>',
 "ooblong": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1665536622/blue-caplt.jpg"></img>',
 "rectangular": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1665537008/rect-tab.jpg"></img>',
 "oval": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1665536898/red-cap.jpg"></img>',
 "triangular": '<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1665562544/FOR14100.jpg"></img>',
};

//RETRIEVE DROPDOWN LIST CONTENT OR IMAGE --> STAYS EMPTY UNTIL COMBINATION OF CHOICES ARE REACHED FOR IMAGE//
SList.getSelect = function(slist, option) {
 document.getElementById('scontent').innerHTML = '';

 if(SList[slist][option]) {
 //IF SELECTIONS ARE COMPLETE --> PILL IMAGE WILL DISPLAY//
 if(slist == 'scontent') document.getElementById('scontent').innerHTML = SList[slist][option];
 else {
 var addata = '<option>- - -</option>';
 for(var i=0; i<SList[slist][option].length; i++) {
 addata += '<option value="'+SList[slist][option][i]+'">'+SList[slist][option][i]+'</option>';
 }

//COMBINATIONS FOR THE OPTIONS SELECTED W/IN THE 3-LISTS//
 switch(slist) {
 case 'slist2':
 document.getElementById('slist2').innerHTML = txtsl2+' <select name="slist2" onchange="SList.getSelect(\'slist3\', this.value);">'+addata+'</select>';
 document.getElementById('slist3').innerHTML = '';
 break;
 case 'slist3':
 document.getElementById('slist3').innerHTML = txtsl3+' <select name="slist3" onchange="SList.getSelect(\'scontent\', this.value);">'+addata+'</select>';
 break;
 }
 }
 }
 else {
 //EMPTY TAGS FOR THE LISTS TO POPULATE --> CHOICES//
 if(slist == 'slist2') {
 document.getElementById('slist2').innerHTML = '';
 document.getElementById('slist3').innerHTML = '';
 }
 else if(slist == 'slist3') {
 document.getElementById('slist3').innerHTML = '';
 }
 }
}
//EVENT LISTENERS//
document
  .querySelector(".comment-submit")
  .addEventListener("click", submitCommentHandler);

const deleteLinks = document.querySelectorAll(".delete-comment");
deleteLinks.forEach((el) =>
  el.addEventListener("click", (event) => deleteCommentHandler(event))
);