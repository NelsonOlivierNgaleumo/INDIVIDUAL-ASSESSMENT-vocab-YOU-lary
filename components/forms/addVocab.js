import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Type Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-menu">
       <label for="category" class="category">Category</label>
        <select class="form-control" placeholder="Select Category" id="category" name="vocabCategory" value="${obj.category || ''}" required>
        <option value="">Select Category</option>
          <option value="Security" ${obj.category === 'Security' ? 'selected' : ''}>Security</option>
          <option value="Network" ${obj.category === 'Network' ? 'selected' : ''}>Network</option>

        </select>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
