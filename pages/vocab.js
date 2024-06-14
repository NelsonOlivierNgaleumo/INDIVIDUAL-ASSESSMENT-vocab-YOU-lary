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
        <p>${item.description}</p>
        <h6 class="cardSubtitle" id="category">${item.category}</h6>
        <hr>
        <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"> Edit</i>
        <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showVocab;
