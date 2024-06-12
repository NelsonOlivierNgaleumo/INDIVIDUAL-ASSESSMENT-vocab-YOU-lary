import { getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import showVocab from '../pages/vocab';
import clearDom from '../utils/clearDom';
import { signOut } from '../utils/auth';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    document.querySelector('#logout-button')
      .addEventListener('click', signOut);
    // this is user entry
    if (e.target.id.includes('create-entry')) {
      addVocabForm(user);
    }
    if (e.target.id.includes('logo')) {
      clearDom();
      getVocab(user).then((vocabWords) => showVocab(vocabWords));
    }
  });
};

export default domEvents;
