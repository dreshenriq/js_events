dog.onmouseover = () => {
  dog.setAttribute("src","images/smooth.jpg");
}

dog.onmouseleave = () => {
  dog.setAttribute("src","images/long.jpg");
}

const behavior = document.querySelector('#behavior');

behavior.onclick = () => {
   behavior.style.display = 'none';
   div.style.display = 'block';
};
