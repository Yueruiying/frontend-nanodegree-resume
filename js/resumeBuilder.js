/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$('#main').append('YueRuiying');

// var firstName = 'YueRuiying';
 //var age = 25;
 //console.log(firstName);

 //var awesomeThoughts = 'I am YueRuiying and I am AWESOME.';

 //console.log(awesomeThoughts);

//var awesomeThoughts = 'I am YueRuiying and I am AWESOME.';

//var funThoughts = awesomeThoughts.replace('AWESOME','FUN');

//console.log(awesomeThoughts);
//console.log(funThoughts);
//$('#main').append(funThoughts);



var name = 'YueRuiying';
var formattedName = HTMLheaderName.replace('%data%',name);
$('#header').append(formattedName);
var role = 'Front-end engineers'
var formattedRole = HTMLheaderRole.replace('%data%',role);

$('#header').append(formattedRole);
