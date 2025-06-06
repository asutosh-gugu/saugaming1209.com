document.getElementById('submitBtn').addEventListener('click', function() {
  const input = document.getElementById('commentInput');
  const commentText = input.value.trim();

  if (commentText === '') {
    alert('Please enter a comment!');
    return;
  }

  const commentContainer = document.getElementById('commentsContainer');
  const newComment = document.createElement('div');
  newComment.className = 'comment';
  newComment.textContent = commentText;

  commentContainer.prepend(newComment); // Add comment on top
  input.value = ''; // Clear textarea
});
