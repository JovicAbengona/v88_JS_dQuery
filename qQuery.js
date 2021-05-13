function $(element){
    const object = {
        thisElement: document.querySelectorAll(element),
        click: function(callback){
            /*
                TODO: callback parameter is the actual function or set of functions that is going to be executed when the element is clicked.
                TODO: object.thisElement[x] is used to loop through each element that is taken by querySelectorAll
            */
            for(let x = 0; x < object.thisElement.length; x++)
                object.thisElement[x].addEventListener("click", callback);
        },
        show: function(){
            for(let x = 0; x < object.thisElement.length; x++)
                object.thisElement[x].style.display = "block";
        },
        hide: function(){
            for(let x = 0; x < object.thisElement.length; x++)
                object.thisElement[x].style.display = "none";
        }
    }

    return object;
}

//clicking on h1 should hide all the h1
$("h1").click(function(){
    console.log("h1 is clicked!");
    $("h1").hide();
});

//clicking on p should hide all the paragraphs
$('p').click(function(){
    console.log('p is clicked');
    $('p').hide();
});

//clicking on #show_all should show both h1 and p
$('#show_all').click(function(){
    console.log('#show_all is clicked');
    $('h1').show();
    $('p').show();
});

//clicking on #hide_all should hide both h1 and p
$('#hide_all').click(function(){
    console.log('#hide_all is clicked');
    $('h1').hide();
    $('p').hide();
});
