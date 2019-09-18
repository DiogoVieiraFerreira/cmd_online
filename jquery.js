$(function() {

    $(document).keydown(function(e){
        e.preventDefault();

        switch (e.keyCode) {
            case 91: //windpws
            case 9: //tab
            case 16://shift
            case 17://ctrl
            case 18://alt
            case 20://capslock
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
                $('#input').text($('#input').text().substring(0,$('#input').text().length-1));
                break;
            case 46://delete
                //$('#input').text($('#input').text().substring(1,$('#input').text().length));
                break;
            case 13:
                //$("#input"
                break;
            default:
                $("#input").removeClass("selected");
                $("#input").append(e.key);
        }
        $("#input").addClass("selected");
        console.log('key code is: ' + e.which + ' ' + (e.ctrlKey ? 'Ctrl' : '') + ' ' + (e.shiftKey ? 'Shift' : '') + ' ' + (e.altKey ? 'Alt' : ''));

    });
    //tests ctrl+a
    $(document).keypress(function(e){
        if(e.keyCode==65 || e.keyCode==17)
        {
            $("#input").append("lol");
        }
    });
});