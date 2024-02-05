import $ from 'jquery';

const searchMovie = () => {
  $('#movie-list').html('');
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
      apikey: '7b9ce12a',
      s: $('#search-input').val(),
    },
    success: (result) => {
      if (result.Response === 'True') {
        const movies = result.Search;
        $.each(movies, (i, data) => {
          $('#movie-list').append(
            `
            <style>
            </style>

            <div class="col-md-4 col-lg-3 d-flex mb-10 justify-content-center">
              <div class="card-deck">
                <div class="card mb-3 bg-dark text-white ">
                  <img src="${data.Poster}" class="card-img-top min-vh-75" >
                    <div class="card-body">
                      <h6 class="card-title ">${data.Title}</h6>
                      <a class="btn btn-outline-secondary text-light m-120" type="button" href="https://www.imdb.com/title/${data.imdbID}">Go to imdb.com</a>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          `
          );
        });
        $('#search-input').val('');
      } else {
        $('#movie-list').html(
          `
        <div class="col">
          <h1 class="text-center">${result.Error}</h1>
        </div>
        `
        );
      }
    },
  });
};

$('#search-button').on('click', () => searchMovie());

$('#search-input').on('keyup', (event) => {
  if (event.keyCode === 13) {
    searchMovie();
  }
});