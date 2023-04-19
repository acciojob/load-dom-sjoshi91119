document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML = ""; // Clear any existing content in body
  const pTag = document.createElement("p");
  const textNode = document.createTextNode("DOM load success");
  pTag.appendChild(textNode);
  document.body.appendChild(pTag);
});
