console.log("::index with async");

const fetchCall = async (postId) => {
  const responseData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const responseJson = await responseData.json();
  console.log("::reponseJson ", responseJson);
  return responseJson;
};

window.onload = async () => {
  for (let i = 1; i <= 100; i++) {
    const response = await fetchCall(i);
    const dataContainer = document.querySelector(".data-container");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${i}-->${response.title}`;
    dataContainer.appendChild(paragraph);
  }
};
