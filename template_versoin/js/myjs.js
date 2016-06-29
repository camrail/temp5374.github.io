$(function(){

  // Number Conversion
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Variables a
  var auctions = 54688;
  var totalling = 1190800;
  var ecommerce = 41;


// Print to page
  $('#auctions').text(numberWithCommas(auctions) + " Auctions");
  $('#totalling').text("Totalling: $" + numberWithCommas(totalling) + " (USD)");
  $('#ecommercea').text(ecommerce);



});
