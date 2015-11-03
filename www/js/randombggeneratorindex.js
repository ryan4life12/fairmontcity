var image_array = ["img/bg/1.jpg", "img/bg/2.jpg", "img/bg/3.jpg", "img/bg/4.jpg"];
		 
	
	var rand_path = image_array[Math.floor(Math.random() * image_array.length)]; 
    $(document).ready(function() {
	$('body').css('background-image', 'url('+rand_path+')');
		});	 
		
	setInterval(function(){ 
		
    //code goes here that will be run every 5 seconds.
	var rand_path = image_array[Math.floor(Math.random() * image_array.length)]; 
    $(document).ready(function() {
    // var a = image_array.indexOf(rand_path);
    // document.getElementById("demo").innerHTML = a;
    // image_array.splice(a, 1);
	$('body').css('background-image', 'url('+rand_path+')');
		});  
}, 5000);	
