//Add button function
$(document).on('click','.add',function () {
    var row = $(this).closest('tr');
    var itemPrice = parseFloat(row.find('.price').text());
    var itemQuantity = parseFloat(row.find('.quantity input').val());
    var subTotal = itemPrice * itemQuantity;
   row.find('.subtotal').html(subTotal.toFixed(2));
   updateTotal();
});

//Remove button function
$(document).on('click', '.remove', function () {
    var row = $(this).closest('tr');
    row.remove();
    updateTotal();
});

var updateTotal = function () {
    total = 0;
    $('.subtotal').each( function () {
        total += parseFloat($(this).text());
    });
    $('.total span').html(total.toFixed(2));
};