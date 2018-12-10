let about = document.getElementById("about-me");
about.addEventListener("click", function(){
    if(document.getElementById("text").innerHTML === ""){
	document.getElementById("text").innerHTML = "  I am Lilit Potoyan, 22, front-end developer, from Yerevan Armenia. I am a Greduate student of Yerevan State University the Faculty of Mathematics and Mechanics, Department of Actuarial and Financial Mathematics. Now I am studying JavaScript and React at Armenian Code Academy. I want to develop my skills in the specific field and become promoted and demandable specialist. As an individual I am very active and sociable, as both friendship and communication are inseperable part in our life. In addition, I strongly appreciate honesty, loyalty and devotion. Moreover I am open to new opportunities, hard-working and self-development is of great importance. I pay attention to details as much as possible because I think that in many cases even a small detail can change everything totally. So I can be not only a team member but also a team leader." 
    } else {document.getElementById("text").innerHTML = ""};
})

document.onmousemove = animateCircles;

	var colors = ['#eac785','#f4cbd6','#f4ead2'];

	function animateCircles (event) {
		let circle = document.createElement("div");
		circle.setAttribute("class", "circle");
		document.body.appendChild(circle);

		circle.style.left = event.clientX + 'px';
		circle.style.top = event.clientY + 'px';

		var color = colors[Math.floor(Math.random() * colors.length)];
		circle.style.borderColor = color;

		circle.style.transition = "all 0.5s linear 0s";

		circle.style.left = circle.offsetLeft - 20 + 'px';
		circle.style.top = circle.offsetTop - 20 + 'px';

		circle.style.width = "40px";
		circle.style.height = "40px";
		circle.style.borderWidth = "4px";
		circle.style.opacity = 0;
			
		setTimeout(function() {
            circle.remove();
        }, 500);
	}