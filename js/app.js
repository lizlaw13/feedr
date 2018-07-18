/*
  Please add all Javascript code to this file.
*/
let apiKey = '7934a4fdec7d43b4b539fa21aa4592e3';

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7934a4fdec7d43b4b539fa21aa4592e3';
// retreiving api
$.get(url).then(function(data){
    console.log('data:', data)
    // template for title and featured picture 
    let articleContent = ``;
    data.articles.forEach(function(article){

      // use data attributes - thank you jessica she hella helped me 
      articleContent +=  `
      <article class="article" data-title="${article.title}" data-description="${article.description}" data-link="${article.url}" data-source="${article.source[1]}">
      <section class="featuredImage">
        <img src="${article.urlToImage}"alt="" />
      </section>
      <section class="articleContent">
          <a href="#"><h3>${article.title}</h3></a>
          <h6>${article.author}</h6>
      </section>
      <section class="impressions">
        526
      </section>
      <div class="clearfix"></div>
      </article> 
      `
    });

    // need parent of container and add template to the html element 
    $('#main').html(articleContent);
});



// click on title to show pac man loader, hide pac man loader, and insert title, description, and link
$('#main').on('click','.article', function() {
  console.log('this is running')
  $('#popUp').removeClass('hidden');
  $('#popUp').removeClass('loader');

// create variables for each data attribute
  let title = $(this).data('title');
  let description = $(this).data('description');
  let link = $(this).data('link');
  $('.container > h1').text(title);
  $('.container > p').text(description);
  $('.container > a').attr('href', link);
});


//click search icon to expand input
$('#search').on('click','img', function(){
  $('#search').toggleClass('active');
});



// click on x to get rid of the modal 
$('.closePopUp').on("click",function(){
  $('#popUp').addClass('hidden');
});

// integrate new API and populate on click but the article on click does not work because i did not do it
$('#source1').on('click', function(){
url2 = 'https://content.guardianapis.com/search?api-key=25e5a0d6-5139-46a6-9214-da95627cc11e'

$.get(url2).then(function(data2){
  console.log('data:', data2)
  console.log('hey!' , data2.response.results);

  let articleContentTwo = ``;
    data2.response.results.forEach(function(r){
      articleContentTwo +=  `
      <article class="article">
      <section class="featuredImage">
        <img src="${r.sectionName}"alt="" />
      </section>
      <section class="articleContent">
          <a href="#"><h3>${r.webTitle}</h3></a>
          <h6>${r.pillarName}</h6>
      </section>
      <section class="impressions">
        526
      </section>
      <div class="clearfix"></div>
      </article> 
      `
});
$('#main').html(articleContentTwo);
});
});

