var createQuote = function() {
  axios.post('http://quote-deploy.cloudapp.net/Configit/Quote/api/QuoteQL', { query: 'mutation { quotes { create(title: "test") { documentId title } } }' }, { withCredentials: true } )
  .then(function (response) {
    var createdDocumentId = response.data.data.quotes.create.documentId;
    $('#createQuoteButton').html(createdDocumentId);
  })
  .catch(function (error) {
    console.log(error);
  });
}

var $inputButton = $('<button/>', { id: 'createQuoteButton' });
$inputButton.click(() => createQuote() );
$inputButton.html("Click Me");
$inputButton.appendTo($("#top"));
