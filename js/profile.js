const url = "https://api.github.com/users/Renzorr";

async function loadProfile() {
  try {
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
      render(data);
    } else {
      console.log("Something wrong happened");
    }
  } catch (error) {
    console.log(error);
  }
}

function render(data) {
  const profile = `   <div class="profile">
    <img src="${data.avatar_url}" alt="profile-picture" />
    <div class="profile-content">
      <h1 class="profile-login">${data.login}</h1>
      <span class="profile-name">@${data.name}</span>
      <p class="profile-date">${data.created_at}</p>
    </div>
  </div>

  <div class="profile-details">
    <div class="details">
      <p class="type">Repos</p>
      <span class="type">${data.public_repos}</span>
    </div>
    <div class="details">
      <p class="type">Followers</p>
      <span class="type">${data.followers}</span>
    </div>
    <div class="details">
      <p class="type">Following</p>
      <span class="type">${data.following}</span>
    </div>
  </div>`;

  document.getElementById("container").innerHTML = profile;
}

function transition() {
  setTimeout(() => {
    document.querySelector("header").setAttribute("style", "left: 0");
  }, 1000);

  setTimeout(() => {
    document
      .querySelector(".container")
      .setAttribute("style", "transform: translate(0%,0%);");
  }, 2000);
}

transition();
loadProfile();
