const renderComponents = async () => {
  const response = await fetch("/components");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");
  if (data) {
    data.map((component) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${component.image})`;

      const name = document.createElement("h3");
      name.textContent = component.name;
      bottomContainer.appendChild(name);

      const category = document.createElement("p");
      category.textContent = "Category: " + component.category;
      bottomContainer.appendChild(category);

      const link = document.createElement("a");
      link.textContent = "More Info >";
      link.setAttribute("role", "button");
      link.href = `/components/${component.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Components Available";
    mainContent.appendChild(message);
  }
};

const renderComponent = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/components");
  const data = await response.json();

  const componentContent = document.getElementById("component-content");
  let component;
  component = data.find((component) => component.id === requestedID);
  if (component) {
    document.getElementById("image").src = component.image;
    document.getElementById("name").textContent = component.name;
    document.getElementById("category").innerHTML =
      `<span><strong>Category: </strong> ${component.category}</span>`;
    document.getElementById("description").innerHTML =
      `<span><strong>Description: </strong> ${component.description}</span>`;

    document.title = `Circuitpedia - ${component.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Components to Show";
    mainContent.appendChild(message);
  }
};

const path = window.location.pathname;

if (path === "/" || path === "/index.html") {
  renderComponents();
} else if (path.startsWith("/components/")) {
  renderComponent();
} else {
  window.location.href = "/404.html";
}
