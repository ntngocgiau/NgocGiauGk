const name = ["Cúc", "Giang", "Giàu", "Hằng"];

document.getElementById("random").onclick = () => {
  const value = Math.floor(Math.random() * 4);
  document.querySelector("h3").innerText = name[value];
};