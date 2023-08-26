function loadApiData(){
  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => showComments(json))
}

function showComments(comments){
  const ul = document.getElementById('comments-container');
  
for(const comment of comments){
  // console.log(comment.email);
  const liEmail = document.createElement('li');
  liEmail.innerText = comment.email;
  ul.appendChild(liEmail);
}
}