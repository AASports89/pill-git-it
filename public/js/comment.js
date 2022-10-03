async function commentFormHandler(event) {
    event.preventDefault();
  
    const image = document.querySelector('input[name="file"]').value.trim();
    const type = document.querySelector('input[name="post-type"]').value.trim();
    const color = document.querySelector('input[name="post-color"]').value.trim();
    const imprint = document.querySelector('input[name="post-imprint"]').value.trim();
    const description = document.querySelector('input[name="post-description"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (image && type && color && imprint && description) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          image,
          type,
          color,
          imprint,
          description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);