import logoutButton from '../../components/logoutButton';
import domBuilder from '../../components/shared/domBuilder';
import navBar from '../../components/shared/navBar';
import domEvents from '../../events/domEvents';
import formEvents from '../../events/formEvents';
import navigationEvents from '../../events/navigationEvents';
import { getVocab } from '../../api/vocabData';
import showVocab from '../../pages/vocab';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all books on the DOM on App load
  getVocab(user).then((vocab) => showVocab(vocab));
};

export default startApp;
