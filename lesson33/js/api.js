let url = null;
let _name = null;
let _type = null;

function setUrl(name, type) {
    url = `https://www.omdbapi.com/?apikey=92fe95ad&s=${name}&type=${type}`;
    _name = name;
    _type = type;
}

function setPage(number) {
    url = `https://www.omdbapi.com/?apikey=92fe95ad&s=${_name}&type=${_type}&page=${number}`

}

function setFilm(id) {
    url = `https://www.omdbapi.com/?apikey=92fe95ad&i=${id}`

}


function ajaxCall(callback, pageItems) {
    $.ajax({
        url,
        dataType: 'json',
        success: function (data) {
            if (callback) {
                callback(data);
                if (pageItems) {
                    pageItems(data);
                }

            }
        },
        error: handleError
    });
}


function handleError() {
    console.error('Something wrong!');
}