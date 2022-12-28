$('form').on('submit', function (e) {
    e.preventDefault();

    const addNewItem = $('#addItem').val();
    const newItem = $('<li></li>');
    $(`<div> ${addNewItem} </div>`).appendTo(newItem);
    $(newItem).appendTo('ul');

    $('#addItem').val('');

    $('div').on('click', function () {
        $(this).css('text-decoration', 'line-through')
    })
})

