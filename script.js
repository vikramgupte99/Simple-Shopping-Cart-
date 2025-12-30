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

//Function to update total
var updateTotal = function () {
    total = 0;
    $('.subtotal').each( function () {
        total += parseFloat($(this).text());
    });
    $('.total span').html(total.toFixed(2));
};

//Function to add new item
$(document).on('submit','.addNewItem',function (event) {
        event.preventDefault();
        
        var newItemName = $('.newItem').val();
        var newPrice = $('.newPrice').val();
    
        $('tbody').append('<tr>' +
        '<td class="item">' + newItemName + '</td>' +
        '<td class="price">' + newPrice + '</td>' +
        '<td class="quantity"><input class="mx-1" type="number" value="0" min="0" max="20"><button class="btn btn-sm btn-success mx-1 add">Add 🛒</button><button class="btn btn-sm btn-danger mx-1 px-1 remove">Remove</button></td>' +
        '<td class="subtotal">0</td>' +
        '</tr>'
        );
        updateTotal();
        $('.newItem').val('');
        $('.newPrice').val('');
       });

