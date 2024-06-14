import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg mb-5" id="navbarStyle">
    <div class="container-fluid" id="containerFluid">
        <a class="navbar-brand title" href="" id="logo2">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="unorderedList">
            <li class="nav-item active">
              <button class="nav-link" href="#" id="show-all-cards">
                All Cards <span class="sr-only">(current)</span>
              </button>
            </li>
            <li class="nav-item active">
              <button class="nav-link" href="#" id="security">
                SECURITY <span class="sr-only">(current)</span>
              </button>
            </li>
            <li class="nav-item active">
              <button class="nav-link" href="#" id="network">
                NETWORK <span class="sr-only">(current)</span>
              </button>
            </li>
            <li class="nav-item active">
              <button class="nav-link" href="#" id="create-entry">
                CREATE ENTRY <span class="sr-only">(current)</span>
              </button>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button">
            <button type="button" class="btn btn-danger">Log Out</button>
            </div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
