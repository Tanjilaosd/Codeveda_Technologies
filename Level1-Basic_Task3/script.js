fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {

  const usersDiv = document.getElementById("users");

  data.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p>${user.phone}</p>
    `;

    usersDiv.appendChild(card);
  });

})
.catch(error => console.log(error));