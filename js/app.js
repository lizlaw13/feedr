// $("body").css("overflow", "hidden");

// click on title to show pac man loader, hide pac man loader, and insert title, description, and link
$("#main").on("click", ".article", function() {
  $("body").css("overflow", "hidden");
  $("#popUp").removeClass("hidden");
  $("#popUp").removeClass("loader");

  // create variables for each data attribute
  let title = $(this).data("title");
  let description = $(this).data("description");
  let link = $(this).data("link");
  $(".article > h1").text(title);
  $(".article > p").text(description);
  $(".article > a").attr("href", link);
});

// click on x to get rid of the modal
$(".closePopUp").on("click", function() {
  $("#popUp").addClass("hidden");
  $("body").css("overflow", "auto");
});

// generate article content for each api being passed in
function getArticleContent(url) {
  $.get(url).then(function(data) {
    console.log("data", data);

    let articleContent = ``;
    data.articles.forEach(function(article) {
      let author;
      if (article.author == null) {
        author = "Author Not Found";
      } else {
        author = article.author;
      }
      {
        articleContent += `
      <article class="article" data-title="${
        article.title
      }" data-description="${article.description}" data-link="${
          article.url
        }" data-source="${article.source[1]}">
      <section class="featuredImage">
        <img src="${article.urlToImage}"alt="" />
      </section>
      <section class="articleContent">
          <a href="#"><h3>${article.title}</h3></a>
          <h6>${author}</h6>
      </section>
      <div class="clearfix"></div>
      </article> 
      `;
      }
    });
    $("#main").html(articleContent);
  });
}

$("#source0").on("click", function() {
  $(".bc-container-fluid").hide();
  getArticleContent(
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7934a4fdec7d43b4b539fa21aa4592e3"
  );
});

$("#source1").on("click", function() {
  $(".bc-container-fluid").hide();
  getArticleContent(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7934a4fdec7d43b4b539fa21aa4592e3"
  );
});

$("#source2").on("click", function() {
  $(".bc-container-fluid").hide();
  getArticleContent(
    "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7934a4fdec7d43b4b539fa21aa4592e3"
  );
});

$("#source3").on("click", function() {
  $(".bc-container-fluid").hide();
  getArticleContent(
    "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=7934a4fdec7d43b4b539fa21aa4592e3"
  );
});
