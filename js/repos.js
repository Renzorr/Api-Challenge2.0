const url = "https://api.github.com/users/Renzorr/repos";

async function loadRepos() {
  try {
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
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
  data.forEach((repos) => {
    repo += `   
      <div class="repos">
        <h1 class="repo-name">${repos.name}</h1>
        <a href="${repos.html_url}" class="repo-link" target="_blank" ><i class="fa-sharp fa-solid fa-link"></i>Link</a>
        <span class="repo-language">${repos.language}</span>
      </div>`;
  });

  document.getElementById("container").innerHTML = repo;
}

function transition() {
  setTimeout(() => {
    document
      .querySelector(".repos-container")
      .setAttribute("style", "transform: translateX(0%);");
  }, 2000);

  setTimeout(() => {
    document.querySelector("header").setAttribute("style", "left: 0");
  }, 1000);
}

transition();

loadRepos();
