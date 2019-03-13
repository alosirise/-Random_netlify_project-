$(function(){
    $('#go').click(function(){
        var keyword = $("#keyword").val();
        var url = 'http://www.omdbapi.com/?apikey=3064720e&s=' + keyword;
        $.get(url, function(data, status){
            console.log(data);
            $("#result").empty();
            for(var index in data.Search){
                var movie = data.Search[index];
                var row = '<h4>' + movie.Title + '</h4>';
                $("#result").append(row);
            }
        });        
    });
});