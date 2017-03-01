import $ from 'jquery';
//import Rx from 'rxjs/Rx';


// to override the console log
function mylog(txt)
{
	$('#root').append(txt + '<br>');
}

var console = {};
console.log = function(msg) {
	mylog(msg);
};

window.console = console;

         function sayHello()
         {
            console.log("One long process has been initiated...." );
            console.log("But I am not blocking user" );
            console.log("User can continue work on other tasks" );
            console.log("Once that long process has been completed, " );
            console.log("then you can see the message below " );
         }

         window.sayHello = sayHello;

         var worker = new Worker('bigLoop.js');
         
         worker.onmessage = function (event) {
            console.log("Notification received.." );
            console.log("Completed " + event.data + " customer transactions within 2 mins." );
         };
         
         worker.onerror = function (event) {
            console.log(event.message, event);
         };
         
