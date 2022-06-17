fetch('http://localhost:3000/getTimeStories')
.then( res => res.json() )
.then(response => {
 console.log(response);
 var mainContainer = document.getElementById("stories");
       for (var i = 0; i < response.length; i++) {
       //  var list = document.createElement("li");
        // list.innerHTML = response[i.title]
        var row = `
        <li class="list">
        <a href=${response[i].link} target="_blank"> ${response[i].title}</a>
        </li>

        `
         mainContainer.innerHTML += row;
         
       }
 

  //  document.getElementById('testId').innerHTML = data[0][0][0];
}) 
.catch(error => console.error('Error:', error));
