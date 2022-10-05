let photo_Url = "";
const submitCommentHandler = async (event) => {
  event.preventDefault();
  console.log(photo_Url);
  const comment = document.querySelector(".comment-input").value.trim();


  const type = document.querySelector("#type-input").value;
  const color = document.querySelector("#color-input").value;
  const imprint = document.querySelector("#imprint-input").value;
  const shape = document.querySelector("#description-input").value;
  const author_id = document.querySelector(".logged-in-user-id").innerHTML;
  const post_id = document.querySelector(".current-post-id").innerHTML;

  if (!author_id) {
      document.location.replace("/login");
  } else {
      if (comment, photo_Url && type && color && imprint && shape) {
          const response = await fetch("/api/comment/", {
              method: "POST",
              body: JSON.stringify({ comment, photo_Url, type, color, imprint, shape, author_id, post_id }),
              headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
              document.location.replace(
                  "/post/" + post_id + "#comment-section"
              );
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
          document.location.replace(
              "/post/" + currentPostId + "#comment-section"
          );
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

//EVENT LISTENERS//
document
  .querySelector(".comment-submit")
  .addEventListener("click", submitCommentHandler);

const deleteLinks = document.querySelectorAll(".delete-comment");
deleteLinks.forEach((el) =>
  el.addEventListener("click", (event) => deleteCommentHandler(event))
);
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dhqsixgmo', 
      uploadPreset: 'dpfyatxo'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          photo_Url=result.info.url
          console.log(photo_Url);
        }
      })
document.getElementById("upload_widget").addEventListener("click", function(){
myWidget.open();
}, false);