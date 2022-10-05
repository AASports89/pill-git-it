    let photo_Url = "";
const submitPostHandler = async (event) => {
    event.preventDefault();
        console.log(photo_Url);

    const title = document.querySelector(".subject-input").value; 
    const type = document.querySelector("#type-input").value;
    const color = document.querySelector("#color-input").value;
    const imprint = document.querySelector("#imprint-input").value;
    const shape = document.querySelector("#description-input").value;
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;

    if (!author_id) {
        alert("Please login or signup in order to create or modify any posts ❗⛔");
    } else {
        if (title && photo_Url && type && color && imprint && shape && author_id) {
            const response = await fetch("/api/post/", {
                method: "POST",
                body: JSON.stringify({ title, photo_Url, type, color, imprint, shape, author_id }),
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
//CLOUDIARY WIDGET --> IMAGE UPLOAD VIA URL//
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