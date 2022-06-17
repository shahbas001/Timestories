fetch("http://localhost:3000/getTimeStories")
  .then(res => res.json())
  .then(response => {
    var mainContainer = document.getElementById("stories");
    for (var i = 0; i < response.length; i++) {
      var row = `
        <li class="list">
        <a href=${response[i].link} target="_blank"> ${response[i].title}</a>
        </li>
        `;
      mainContainer.innerHTML += row;
    }
  })
  .catch(error => console.error("Error:", error));
