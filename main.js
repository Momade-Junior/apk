			// Get the modal
var modal = document.getElementById('meumodal0');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fechar00")[0];





			a=Math.floor(Math.random()*90+1);
			d=Math.floor(Math.random()*90+1);
			s=Math.floor(Math.random()*90+1);
			w=Math.floor(Math.random()*90+1);
			x=Math.floor(Math.random()*90+1);

			visor = document.getElementById('num_aleat');
			screen = document.getElementById("screen").innerHTML="ola";
			ww = "WOW";

			function result(){
				screen = document.getElementById("screen").innerHTML="WOW!";
			}

			function show() {
				visor.style.display="block";
			}

			function reload(){
				window.location="index.html";
			}


			function main(){

				input_user_one=document.getElementById('one').value;
				input_user_two=document.getElementById('two').value;
				input_user_three=document.getElementById('three').value;
				input_user_four=document.getElementById('four').value;
				input_user_five=document.getElementById('five').value;

			
				
				
				
				if (a==input_user_one && d==input_user_two && s==input_user_three && w==input_user_four && x==input_user_five) {
							alert("!!JACKPOT!!");
				}else if(a==input_user_one && d!=input_user_two && s!=input_user_three && w!=input_user_four && x!=input_user_five){
					//verifying if one of field is true
							c = document.getElementById("content").innerHTML="Just A" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s!=input_user_three && w!=input_user_four && x!=input_user_five) {

					//verifying if one of field is true
						c = document.getElementById("content").innerHTML="Just D" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d!=input_user_two && s==input_user_three && w!=input_user_four && x!=input_user_five) {

					//verifying if one of field is true
							c = document.getElementById("content").innerHTML="Just S" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d!=input_user_two && s!=input_user_three && w==input_user_four && x!=input_user_five) {

					//verifying if one of field is true
							c = document.getElementById("content").innerHTML="Just W" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d!=input_user_two && s!=input_user_three && w!=input_user_four && x==input_user_five) {

					//verifying if one of field is true
							c = document.getElementById("content").innerHTML="Just X" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s!=input_user_three && w!=input_user_four && x!=input_user_five) {
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if(a!=input_user_one && d!=input_user_two && s!=input_user_three && w==input_user_four && x==input_user_five){
					//verifying it two,three our four number were found
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d!=input_user_two && s==input_user_three && w!=input_user_four && x!=input_user_five) {
						//VERIFYING TWO NUMBER A+S
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block"; 
				}else if (a==input_user_one && d!=input_user_two && s!=input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO NUMBER A+W
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d!=input_user_two && s!=input_user_three && w!=input_user_four && x==input_user_five) {
						//VERIFYING TWO NUMBER A+X
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s==input_user_three && w!=input_user_four && x!=input_user_five) {
						//VERIFYING TWO NUMBER D+S
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s!=input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO NUMBER D+W
						c = document.getElementById("content").innerHTML="NOT THIS TIME" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU DIDN'T LOST NOTHING TRY AGAIN";
						modal.style.display = "block";
				}else if(a!=input_user_one && d!=input_user_two && s==input_user_three && w==input_user_four && x==input_user_five){
					//verifying it two,three our four number were found
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s==input_user_three && w!=input_user_four && x!=input_user_five) {
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d!=input_user_two && s==input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO three number A+S+W
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d!=input_user_two && s!=input_user_three && w==input_user_four && x==input_user_five) {
						//VERIFYING TWO three number A+W+X
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s!=input_user_three && w!=input_user_four && x==input_user_five) {
						//VERIFYING TWO three number A+D+X
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s==input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO three number D+S+W
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s!=input_user_three && w==input_user_four && x==input_user_five) {
						//VERIFYING TWO three number D+W+X
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s!=input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO three number A+D+W
					c = document.getElementById("content").innerHTML="CONGRATALATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU WON HALF PRIZE TRY AGAIN";
						modal.style.display = "block";
				}else if(a!=input_user_one && d==input_user_two && s==input_user_three && w==input_user_four && x==input_user_five){
					//verifying it two,three our four number were D+S+W+X
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a!=input_user_one && d==input_user_two && s!=input_user_three && w!=input_user_four && x==input_user_five) {
						//VERIFYING TWO NUMBER D+X
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a!=input_user_one && d!=input_user_two && s==input_user_three && w==input_user_four && x!=input_user_five) {
						//VERIFYING TWO NUMBER S+W
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s!=input_user_three && w==input_user_four && x==input_user_five) {
						//VERIFYING TWO three number 	A+D+W+X
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s==input_user_three && w!=input_user_four && x==input_user_five) {
						//VERIFYING TWO three number A+D+S+X
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a==input_user_one && d!=input_user_two && s==input_user_three && w==input_user_four && x==input_user_five) {
						//VERIFYING TWO three number A+S+W+X
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else if (a==input_user_one && d==input_user_two && s==input_user_three && w==input_user_four && x!=input_user_five) {
						//just A+D+S+W
						c = document.getElementById("content").innerHTML="CONGRATULATION" //"lost "+a+" "+d+" "+s+" "+w+" "+x;
						screen = document.getElementById("screen").innerHTML="YOU HIT THE BELL";
						modal.style.display = "block";
				}else{
						c = document.getElementById("content").innerHTML="YOU LOST ";
						screen = document.getElementById("screen").innerHTML="PLEASE TRY AGAIN";
						modal.style.display = "block";
						
					}


//c = document.getElementById("content").innerHTML="CONGRATULATION";
//screen = document.getElementById("screen").innerHTML="YOU WON!";
//modal.style.display = "block";
// When the user clicks the button, open the modal 

//c = document.getElementById("content").innerHTML=a+"+"+d+"+"+s+"+"+w+"+"+s;
//screen = document.getElementById("screen").innerHTML="you won";
//modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

c = document.getElementById("content");
				
			}