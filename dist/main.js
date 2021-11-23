
$('#search-btn').on('click', function () {
    $('#recipes').empty()
    let input = $('input').val()

    $.get(`/recipes/${input}`, function (data) {
        handle(data)
    })
})

