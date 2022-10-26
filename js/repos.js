const url = "https://api.github.com/users/Renzorr/repos";

async function loadRepos() {
  try {
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      data.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        } else {
          return true;
        }
      });

      console.log(data);
      render(data);
    } else {
      console.log("Something wrong happened");
    }
  } catch (error) {
    console.log(error);
  }
}

function render(data) {
  let repo = "";

  for (let i = 0; i < data.length; i++) {
    if (i == 0) {
      repo += `   
    <div class="repos" id="new">
      <h1 class="repo-name">${data[i].name}</h1>
      <a href="${data[i].html_url}" class="repo-link" target="_blank" ><i class="fa-sharp fa-solid fa-link"></i>Link</a>
      <span class="repo-language">${data[i].language}</span>
      <span class="new-txt">NEW!</span>
    </div>`;
    }  
      repo += `   
    <div class="repos">
      <h1 class="repo-name">${data[i].name}</h1>
      <a href="${data[i].html_url}" class="repo-link" target="_blank" ><i class="fa-sharp fa-solid fa-link"></i>Link</a>
      <span class="repo-language">${data[i].language}</span>
    </div>`;
    
  }

  document.getElementById("container").innerHTML = repo;
}

function transition() {
  setTimeout(() => {
    document
      .querySelector(".repos-container")
      .setAttribute("style", "transform: translateX(0%);");
  }, 2000);

  setTimeout(() => {
    document
      .querySelector(".items-container")
      .setAttribute("style", "left: 0; width: 100%");
    document.querySelector("header").setAttribute("style", "left: 0");
  }, 1000);
}

transition();

loadRepos();
