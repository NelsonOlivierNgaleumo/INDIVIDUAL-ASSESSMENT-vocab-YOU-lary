import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showVocab = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;" id="cardBR">
      <div class="card-body" id="cardBody">
        <h5 class="card-title" id="cardTitle">${item.title}</h5>
        <h6 class="cardSubtitle" id="langauge2">${item.language_id}</h6>
        <p>${item.description}</p>
        <hr>
        <i class="btn1" id="edit-vocab--${item.firebaseKey}">Edit Card</i>
        <i class="btn2" id="delete-vocab--${item.firebaseKey}">Delete Card</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showVocab;
