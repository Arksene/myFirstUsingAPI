function searchGIF() {
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?",
    type: "get",
    dataType: "json",
    data: {
      api_key: "iGkn2oQnoqThM78o85MjkgGQR7pSnD0o",
      q: $("#searchInput").val(),
      limit: "9",
    },
    success: function (result) {
      if (result.data.length > 0) {
        $("#gifList").empty();
        result.data.forEach(function (gif) {
          const gifUrl = gif.images.fixed_height.url;
          const cardTitle = gif.title;
          $("#gifList").append(
            `<div class="col-md-4 mt-3">
            <div class="card d-flex h-100">
            <img src="${gifUrl}" class="card-img-top"style="object-fit: cover; height: 200px;">
            <div class="card-body">
              <h5 class="card-title">${cardTitle}</h5>
            </div>
          </div>
          </div>`
          );
        });
      } else {
        $("#gifList").html(
          '<h1 class="text-white text-center">Gif tidak ditemukan</h1>'
        );
      }
    },
  });
}

$("#SearchButton").on("click", function () {
  searchGIF();
});

$("#searchInput").on("keyup", function (e) {
  if (e.which === 13) {
    searchGIF();
  }
});
