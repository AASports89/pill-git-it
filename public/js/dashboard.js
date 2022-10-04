const submitPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector(".subject-input");
  const photo_Url = document.querySelector("#photo_Url");
  const type = document.querySelector("#type-input");
  const color = document.querySelector("#color-input");
  const imprint = document.querySelector("#imprint-input");
  const description = document.querySelector("#description-input");
  const author_id = document.querySelector(".logged-in-user-id").innerHTML;

  if (!author_id) {
      alert("Please login or signup in order to create or modify any posts ❗⛔");
  } else {
      if (title && photo_Url && type && color && imprint && description && author_id) {
          const response = await fetch("/api/post/", {
              method: "POST",
              body: JSON.stringify({ title, photo_Url, type, color, imprint, description, author_id }),
              headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
              document.location.replace("/dashboard");
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
//DELETE POST DATA VIA CLIENT API CALL//
const deletePostHandler = async (event) => {
  event.preventDefault();

  const deletePostId = event.target.getAttribute("data-id");
  if (deletePostId) {
      const response = await fetch("/api/post/" + deletePostId, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
          document.location.replace("/dashboard");
      } else {
          alert(
              "Failed to delete post❗⛔ Please try again❗⛔" +
                  response.status +
                  ": " +
                  response.statusText
          );
      }
  }
};

//EVENT LISTENERS//
document
  .querySelector(".submit-post")
  .addEventListener("click", submitPostHandler);

const deleteButtons = document.querySelectorAll(".delete-post");
deleteButtons.forEach((el) =>
  el.addEventListener("click", (event) => deletePostHandler(event))
);