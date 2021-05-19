$(function() {

    var nombreClick = firebase.database().ref('click/');
    nombreClick.on('value',function (snap) {
        let res = snap.val().nombreClick;
        parseInt(res);

        $("#nombreClick").html(res);
    })

});