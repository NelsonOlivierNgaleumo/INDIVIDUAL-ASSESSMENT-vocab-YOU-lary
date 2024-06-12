import { deleteSingleVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import showVocab from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#store').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A VOCAB CARD
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(user).then(showVocab);
        });
      }
    }
    // CLICK EVENT EDITING/UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((bookObj) => addVocabForm(bookObj));
    }
  });
};

export default navigationEvents;
