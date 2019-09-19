$ok=false;
$(function() {

    //read keyboard
    $(document).keydown(function(e){
        e.preventDefault();

        switch (e.keyCode) {
            case 37://left arrow
            case 38://up arrow
            case 39://right arrow
            case 40://down arrow
                $("#input").removeClass("selected");
                break;
            case 91: //windpws
            case 46://delete
            case 9: //tab
            case 16://shift
            case 17://ctrl
            case 18://alt
            case 20://capslock
            case 93://menu
            case 112://F1
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
            case 123://F12
            case 192://Umlaut
                break;
            case 8://backspace
                if($('#input').hasClass("selected"))
                    $('#input').text("");
                else
                    $('#input').text($('#input').text().substring(0,$('#input').text().length-1));
                $("#input").removeClass("selected");
                break;
            case 13: //enter
                inputCheck($('#path').text(),$('#input').text());
                $("html").scrollTop($("html").prop("scrollHeight"));
                break;
            default:
                if($('#input').hasClass("selected"))
                    $('#input').text(e.key);
                else if(e.key!="Dead")
                    $("#input").append(e.key);
                $("#input").removeClass("selected");
                break;
        }
        //if ctral+a we add selected class for simulate a selection of words
        if(e.ctrlKey && e.keyCode==65) {
            $("#input").addClass("selected");
        }
        //console.log('key code is: ' + e.which + ' ' + (e.ctrlKey ? 'Ctrl' : '') + ' ' + (e.shiftKey ? 'Shift' : '') + ' ' + (e.altKey ? 'Alt' : ''));
    });

    function history($path, $string) {
        if($string=="cls") {
            $("#history").text("Allez chez nos ennemis qui nous regardent d'en haut. Je suis monochrome, vous devrez utiliser votre téléphone pour me lire.\n");
            $("#history").append("<br>");
        }
        else
            $("#history").append($path + " " + $string + "<br/>");
        $("#input").text("");
    }

    function inputCheck($path,$string) {

        history($path,$string);
        console.log($string.toUpperCase());
        if($string=="ip 10.229.37.109")
        {
            $("#path").text("10.229.37.109's Password: ");
            $ok=true;
        }
        else if($ok==true && $string.toUpperCase()=="I LOVE POUTINE")
        {
            $("#line").remove();
            $("#history").text("");
            $("#history").append("Mince, ce PC n'a pas accès au réseau extérieur! <br><br>Il faut que j'aille à la salle serveur pour utiliser l'ordinateur URSS, si je me rappelle bien la salle se nomme C111. Elle se situe au rez-de-chaussée.");
            $("#history").append("<br><br>Il ne faut pas que j'oublie l'adresse du serveur US - 10.229.37.109!");
            $("#path").text("");
        }
        else
        {
            history("","<br>Données incorrectes veuillez re-essayer<br>");
            $ok=false;
            $("#path").text("C:\\>");
        }

    }
});

