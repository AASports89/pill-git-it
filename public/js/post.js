const submitCommentHandler = async (event) => {
  event.preventDefault();
  const cld = new Cloudinary({cloud: {cloudName: 'dhqsixgmo'}});
  const comment = document.querySelector(".comment-input").value.trim();
  const myImage = cld.image('docs/models');
  const photo_Url = document.createElement('#photo_Url');
document.body.appendChild(photo_Url);
photo_Url.src = myImage.toURL();
  const type = document.querySelector("#type-input");
  const color = document.querySelector("#color-input");
  const imprint = document.querySelector("#imprint-input");
  const shape = document.querySelector("#description-input");
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