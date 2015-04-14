$(document).ready(function(){

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  function getAllQuote() {
    var newRequest = new Request();
    newRequest['type'] = "GET";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes";
    newRequest["success"] = function(response){
      console.log(response);
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
            )
          });
        } else {
          $('.return-content').append('<div class="content-row col-xs-12"> \
              <div class="col-lg-2 hidden-sm hidden-xs hidden-md id">'+response["_id"]+'</div> \
              <div contentEditable="true" class="col-xs-6 col-sm-5 quote">'+response["quote"]+'</div> \
              <div contentEditable="true" class="col-xs-2 col-sm-2 author">'+response["author"]+'</div> \
              <button class="update btn btn-primary">Update</button> \
              <button class="delete btn btn-primary">Delete</button> \
            </div>'
          )
        }
    }

    $.ajax(newRequest);
  }

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
      console.log(response);
      $('#new-quote').val('');
      $('#author').val('');
    }

    $.ajax(newRequest);
  }

  $(document).on('click','#add',function(){
    addQuote();
  });

  // update a quote
  $(document).on('click','.update',function(){
    var newRequest = new Request;
    newRequest['data'] = {
      'quote': {
        'quote': $(this).siblings('.quote').text(),
        'author': $(this).siblings('.author').text()
      }
    }
    newRequest['type'] = "PUT";
    newRequest['url'] = "http://harryquotes-216807.apse1.nitrousbox.com:8080/quotes/" + $(this).siblings('.id').text();
    newRequest["success"] = function(response){
      getAllQuote();
    }

    $.ajax(newRequest);
  });

  // delete a quote
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
})