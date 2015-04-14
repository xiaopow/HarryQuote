$(document).ready(function(){

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  // Get all quotes in quotes collection
  function getAllQuote() {
    var newRequest = new Request();
    newRequest['type'] = "GET";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes";
    newRequest["success"] = function(response){
      $('.return-content').text('');
      if (response.length > 0) {
          $.each(response, function(index){
            $('.return-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response[index]["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response[index]["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response[index]["author"]+'</div> \
              <button class="update btn btn-primary">Update</button> \
              <button class="delete btn btn-primary">Delete</button> \
            </div>'
            );
          });
        } else if (response.length === 1){
          $('.return-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response["author"]+'</div> \
              <button class="update btn btn-primary">Update</button> \
              <button class="delete btn btn-primary">Delete</button> \
            </div>'
          );
        } else {
          $('.return-content').append("No results found.");
        }
    }

    $.ajax(newRequest);
  }

  // Search quotes collection with keyword
  function search(keyword) {
    var newRequest = new Request();
    newRequest['type'] = "GET";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes/search/"+keyword; 
    newRequest["success"] = function(response){
      $('.return-content').text('');
      if (response.length > 0) {
          $.each(response, function(index){
            $('.return-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response[index]["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response[index]["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response[index]["author"]+'</div> \
              <button class="update btn btn-primary">Update</button> \
              <button class="delete btn btn-primary">Delete</button> \
            </div>'
            );
          });
        } else if (response.length === 1){
          $('.return-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response["author"]+'</div> \
              <button class="update btn btn-primary">Update</button> \
              <button class="delete btn btn-primary">Delete</button> \
            </div>'
          );
        } else {
          $('.return-content').append("No results found.");
        }
    }

    $.ajax(newRequest);
  }

  $(document).on('click','#search',function(){
    search($('#search-term').val());
  });

  // Add a quote in quotes collection
  function addQuote() {
    var newRequest = new Request();
    newRequest['type'] = "POST";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes";
    newRequest['data'] = {
      'quote': {
        'quote': $('#new-quote').val(),
        'author': $('#author').val()
      }
    }
    newRequest["success"] = function(response){
      getAllQuote();
      $('#new-quote').val('');
      $('#author').val('');
    }

    $.ajax(newRequest);
  }

  $(document).on('click','#add',function(){
    addQuote();
  });

  // update a quote in quotes collection
  $(document).on('click','.update',function(){
    var newRequest = new Request;
    newRequest['type'] = "PUT";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes/" + $(this).siblings('.id').text();
    newRequest['data'] = {
      'quote': {
        'quote': $(this).siblings('.quote').text(),
        'author': $(this).siblings('.author').text()
      }
    }
    newRequest["success"] = function(response){
      getAllQuote();
    }

    $.ajax(newRequest);
  });

  // delete a quote in quotes collection
  $(document).on('click','.delete',function(){
    var newRequest = new Request;
    newRequest['type'] = "DELETE";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes/" + $(this).siblings('.id').text();
    newRequest["success"] = function(response){
      getAllQuote();
    }

    $.ajax(newRequest);
  });  

  $(document).on('click','#get-all-quotes',function(){
    getAllQuote();
  })

  getAllQuote();

  //----------------------------------- New Quotes Tab -------------------------------------------------
  // Get all quotes in new quotes collection
  function getAllNewQuote() {
    var newRequest = new Request();
    newRequest['type'] = "GET";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/newQuotes";
    newRequest["success"] = function(response){
      $('.return-new-content').text('');
      if (response.length > 0) {
          $.each(response, function(index){
            $('.return-new-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response[index]["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response[index]["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response[index]["author"]+'</div> \
              <button class="add btn btn-primary">Add</button> \
              <button class="delete-new btn btn-primary">Delete</button> \
            </div>'
            );
          });
        } else if (response.length === 1){
          $('.return-new-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response["author"]+'</div> \
              <button class="add btn btn-primary">Add</button> \
              <button class="delete-new btn btn-primary">Delete</button> \
            </div>'
          );
        } else {
          $('.return-new-content').append("No results found.");
        }
    }

    $.ajax(newRequest);
  }

  // add a new quote to quotes collection
  $(document).on('click','.add',function(){
    var thisA = this
    var newRequest = new Request;
    newRequest['type'] = "POST";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes";
    newRequest['data'] = {
      'quote': {
        'quote': $(this).siblings('.quote').text(),
        'author': $(this).siblings('.author').text()
      }
    }
    newRequest["success"] = function(response){
      getAllQuote();
      $(thisA).siblings('.delete-new').click();
    }

    $.ajax(newRequest);
  });

  // delete a new quote from newQuotes collection
  $(document).on('click','.delete-new',function(){
    var newRequest = new Request;
    newRequest['type'] = "DELETE";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/newQuotes/" + $(this).siblings('.id').text();
    newRequest["success"] = function(response){
      getAllNewQuote();
    }

    $.ajax(newRequest);
  });

  $(document).on('click','#get-all-new-quotes',function(){
    getAllNewQuote();
  })

  getAllNewQuote();

})