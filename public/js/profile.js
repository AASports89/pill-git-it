const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#shape");
    const needed_funding = document.querySelector("#color");
  
    if (shape && color) {
      const response = await fetch(`/api/pills`, {
        method: "POST",
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to create project");
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/pills/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete pills");
      }
    }
  };
  
  document
    .querySelector(".new-pill-form")
    .addEventListener("submit", newFormHandler);
  
  document
    .querySelector(".pill-list")
    .addEventListener("click", delButtonHandler);
  