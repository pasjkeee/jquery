let col1 = 0;
let col2 = 0;
let col3 = 0;
let col4 = 255;
let col5 = 255;
let col6 = 255;


function changeIt(){
    $( "#text" ).css('color', `rgb(${col1}, ${col2}, ${col3})`);
    $( "#text" ).css('background-color', `rgb(${col4}, ${col5}, ${col6})`);
}

changeIt();

function setCol(type){
    $( "#polzunok1" ).slider({
        animate: "slow",
        range: "min",    
        value: (type == "color") ? col1 : col4,
        max: 255,
        slide : function(event, ui) { 
            (type == "color") ? col1 = ui.value : col4 = ui.value;   
            console.log(col1, type);  
            (type == "color") ?  $( "#text" ).css(type, `rgb(${col1}, ${col2}, ${col3})`) : $( "#text" ).css(type, `rgb(${col4}, ${col5}, ${col6})`)
        }
    });
    
    $( "#polzunok2" ).slider({
        animate: "slow",
        range: "min",    
        value: (type == "color") ? col2 : col5,
        max: 255,
        slide : function(event, ui) {    
            (type == "color") ? col2 = ui.value : col5 = ui.value;   
            console.log(col2, type);  
            (type == "color") ?  $( "#text" ).css(type, `rgb(${col1}, ${col2}, ${col3})`) : $( "#text" ).css(type, `rgb(${col4}, ${col5}, ${col6})`)           
        }
    });
    
    $( "#polzunok3" ).slider({
        animate: "slow",
        range: "min",    
        value: (type == "color") ? col3 : col6,
        max: 255,
        slide : function(event, ui) {    
            (type == "color") ? col3 = ui.value : col6 = ui.value;   
            console.log(col3, type);  
            (type == "color") ?  $( "#text" ).css(type, `rgb(${col1}, ${col2}, ${col3})`) : $( "#text" ).css(type, `rgb(${col4}, ${col5}, ${col6})`)         
        }
    });
}



setCol('color');

$('#btn').click(function() {
    setCol('color');
})

$('#blue-btn').click(function() {
    setCol('background-color');
})

$( "#blue-btn" ).css('background-color', `blue`);
$( "#blue-btn" ).css('color', `white`);

$('#polzunok1 .ui-widget-header').css('background-color', 'rgb(255, 0, 0)');
$('#polzunok1 .ui-slider-handle').css('border', '2px solid rgb(255, 0, 0)');
$('#polzunok2 .ui-widget-header').css('background-color', 'rgb(0, 255, 0)');
$('#polzunok2 .ui-slider-handle').css('border', '2px solid rgb(0, 255, 0)');
$('#polzunok3 .ui-widget-header').css('background-color', 'rgb(0, 0, 255)');
$('#polzunok3 .ui-slider-handle').css('border', '2px solid rgb(0, 0, 255)');