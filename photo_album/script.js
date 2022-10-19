
$(document).load(function(){
    $('#border1','#border2','#border3').hover(
        function() {$(this).addClass(".hover");},
        function() {$(this).removeClass(".hover");}
    );
    })



function validate() {
    let username = $('#username').val();
    let image_title = $('#image-title').val();
    let comment = $('#comment').val();

    if (username === '') {
        alert('Please Enter a Username.');
        return;
    }
    if (username.length < 6) {
        alert('Username must be at least 6 characters');
        return;
    }
    if (image_title === '') {
        alert('Please Enter an Image Title.');
        return;
    }
    if (comment === '') {
        alert('Please Enter your comments.');
        return;
    }

    alert('Thank You! We have submitted your form')
    return;
}


