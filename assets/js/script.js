$("#optionsRadios1,#optionsRadios2,#optionsRadios3,#checkbox1,#checkbox2,#checkbox3").click(function() {
        $("button").attr('disabled', false);
})


var s = document;
s.onchange = function() { 
    var n = $('[type="checkbox"], [type="radio"]'),
    itog = 0;
    for(var j=0; j<n.length; j++)
        n[j].checked ? itog += parseFloat(n[j].value) : itog;
    var protsent = (itog*100/6).toFixed(2);
    document.getElementById('rezultat').innerHTML = '<h3>' + itog + ' з 6 ' + '<br><br>' + protsent + '% правильних відповідей!' + '</h3>';
}


$("#button1").click(function() {
    $("#s1").css("display", "none");
    $("#s2").css("display", "block");
    $("button").attr('disabled', true);
    $('h1').css('opacity','0');
});

$("#button2").click(function() {
    $("#s2").css("display", "none");
    $("#s3").css("display", "block");
    $("button").attr('disabled', true);
});

$("#button3").click(function() {
    $("#s3").css("display", "none");
    $("#s4").css("display", "block");
    $("button").attr('disabled', true);
});

$("#button4").click(function() {
    $("#s4").css("display", "none");
    $("#s5").css("display", "block");
    $("button").attr('disabled', true);
});

$("#button5").click(function() {
    $("#s5").css("display", "none");
    $("#s6").css("display", "block");
    $("button").attr('disabled', true);
});

$("#button6").click(function() {
    $("#s6").css("display", "none");
    $("#s7").css("display", "block");
    $("button").attr('disabled', true);
});

/*
var i=1;
$("#button"+[i]).click(function() {
            i++;
});

$("#button"+[i]).click(function() {
    $("#s"+[i]).css("display", "none");
    $("#s"+[i+1]).css("display", "block");
    $("button").attr('disabled', true);
});

*/


