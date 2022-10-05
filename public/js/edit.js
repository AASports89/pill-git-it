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
    const post_id = document.querySelector(".current-post-id").innerHTML;

    if (!author_id) {
        alert(
          "Please login or signup in order to create or modify any posts ❗⛔"
        );
    } else {
        if (title && photo_Url && type && color && imprint && shape && author_id) {

            const response = await fetch("/api/post/" + post_id, {
                method: "PUT",
                body: JSON.stringify({ title, photo_Url, type, color, imprint, shape, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert(
                  "Failed to update post❗⛔ Please try again❗⛔" +
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

//EVENT LISTENERS//
    document
        .querySelector(".edit-submit")
        .addEventListener("click", submitPostHandler);
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