const submitPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector(".subject-input");
    const photo_Url = cloudinary.createUploadWidget(document.querySelector("#photo_Url-input"));
    const type = document.querySelector("#type-input");
    const color = document.querySelector("#color-input");
    const imprint = document.querySelector("#imprint-input");
    const shape = document.querySelector("#description-input");
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