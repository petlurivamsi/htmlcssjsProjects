const fetchData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      return response.json();
    })

    .catch((err) => {
      return {
        id,
        error: true,
      };
    });
};

window.onload = () => {
  let newArr = [];

  for (let i = 1; i <= 100; i++) {
    newArr.push(fetchData(i));
  }
  Promise.all(newArr).then((response) =>
    response.forEach((el, index) => {
      const dataContainer = document.querySelector(".data-container");
      const paragraph = document.createElement("p");
      paragraph.innerHTML = `${index + 1}-->${el.title}`;
      dataContainer.appendChild(paragraph);
    })
  );
};
