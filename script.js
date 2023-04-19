//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // DOM is loaded and ready to be manipulated here
  const pTag = document.createElement("p");
  const textNode = document.createTextNode("DOM load success");
  pTag.appendChild(textNode);
  document.body.appendChild(pTag);
});
