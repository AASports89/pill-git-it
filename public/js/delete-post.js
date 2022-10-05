async function delButtonHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
//DELETE POST DATA//
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
//EVENT LISTENERS//
document
  .querySelector('.delete-post-btn')
  .addEventListener('click', delButtonHandler);