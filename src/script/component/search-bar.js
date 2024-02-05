import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
    body{
      background-color: #9dc183;
    }
    .container {
      background-color: #9dc183;
      color: white;
      text-align: center;
    }
    #movie-list{
      margin-bottom:100px;
      align-items-stretch;
    }
  </style>
  <div class="container">
    <div class="row mt-3 justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">List Movie</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Title" id="search-input" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary text-light" type="button" id="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row align-items-stretch" id="movie-list"></div>
  </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);