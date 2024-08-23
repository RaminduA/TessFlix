function loadAllNames(){
    $('#search').empty();
    $('#search').append(new Option("Search here...", ""));
    for (var i in movieDB){
        let ttl=movieDB[i].title;
        $('#search').append(new Option(ttl, ttl));
    }
}

var images=["sm1","sm2","sm3","sm4","sm5"];

window.onload = function() {
    loadAllNames();
};

$('#search').on('change', function() {
    var ttl = $(this).val();

    if(ttl!==""){
        shuffleArray(images);
        $('#img1').attr('src', "assets/images/"+images[0]+".png");
        $('#img2').attr('src', "assets/images/"+images[1]+".png");
        $('#img3').attr('src', "assets/images/"+images[2]+".png");
        $('#img4').attr('src', "assets/images/"+images[3]+".png");
        $('#img5').attr('src', "assets/images/"+images[4]+".png");

        var genres=searchForGenre(ttl);
        checkSimilarMovies(genres);
    }
});

function checkSimilarMovies(array){
    var index=0;
    for(var i=0; i<array.length; i++){
        for(var j=0; j<5; j++){
            if(movieDB[index].genres.includes(array[i])){
                console.log(movieDB[index].title);
            }
            index++;
        }
    }
}

function searchForGenre(ttl) {
    var genres;
    for (let i = 0; i < movieDB.length; i++) {
        if(movieDB[i].title===ttl){
            genres=movieDB[i].genres.split("|");
        }
    }
    return genres;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}