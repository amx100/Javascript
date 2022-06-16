const getQuotes = async (page = 1) => {
  try {
    const response = await fetch(" https://api.imgflip.com/get_memes");

    const result = await response.json();

    return result.data.memes;
  } catch (error) {
    console.log(error);
  }
};

let page = 1;
const contentDiv = document.getElementById("content");
const pageInput = document.getElementById("page");

// const createCard = (name, url) => {
//   return `<div
//    style="
//      width: 400px;
//      min-height: 100px;
//      border: 1px solid black;
//      margin: 10px;
//      padding: 20px;
//    "
//   >
//    <p>
//      ${name}
//    </p>
//    <p>By: ${url}</p>
//   </div>`;
// };

const createCard = (name, url) => {
  return `<div style="width: 500px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;">
        <h1 style="text-align: center;">${name} </h1>
        <img style="width: 100%;" src="${url}" alt="">
    </div>`;
};

getQuotes().then((result) => {
  console.log(result);
  result.forEach((data) => {
    contentDiv.innerHTML =
      contentDiv.innerHTML + createCard(data.name, data.url);
  });
});
