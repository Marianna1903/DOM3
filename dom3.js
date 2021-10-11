/*div1 = document.getElementsByClassName("div1")[0];
div2 = document.getElementsByClassName("div2")[0];
div3 = document.getElementsByClassName("div3")[0];
btn1r = document.getElementsByClassName("btnr1")[0];
btn1l = document.getElementsByClassName("btnl1")[0];
btn2r = document.getElementsByClassName("btnr2")[0];
btn2l = document.getElementsByClassName("btnl2")[0];

btn1r.addEventListener("click",function(){
	div1.innerHTML = "";
	div3.innerHTML = "";
	div2.innerHTML = "HTML";
})
btn1l.addEventListener("click",function(){
	div1.innerHTML = "HTML";
	div2.innerHTML = "";
	div3.innerHTML = "";
})

btn2r.addEventListener("click",function(){
	div2.innerHTML = "";
	div1.innerHTML = "";
	div3.innerHTML = "HTML";
})
btn2l.addEventListener("click",function(){
	div2.innerHTML = "HTML";
	div3.innerHTML = "";
	div1.innerHTML = "";
})*/



col1 = document.getElementsByClassName("div1")[0];
col2 = document.getElementsByClassName("div2")[0];
col3 = document.getElementsByClassName("div3")[0];
// setInterval(function(){


// setTimeout(function(){
// 	col1.style.backgroundColor = "red";
// 	col2.style.backgroundColor = "grey";
// 	col3.style.backgroundColor = "grey";
// },1000)

// setTimeout(function(){
// 	col2.style.backgroundColor = "yellow";
// 	col1.style.backgroundColor = "grey";
// 	col3.style.backgroundColor = "grey";
// },2000)

// setTimeout(function(){
// 	col2.style.backgroundColor = "grey";
// 	col1.style.backgroundColor = "grey";
// 	col3.style.backgroundColor = "green";
// },3000)

// },6000)


/*setTimeout(function(){
	col1.style.backgroundColor = "red";
	col2.style.backgroundColor = "grey";
	col3.style.backgroundColor = "grey";
},1000)

setTimeout(function(){
	col2.style.backgroundColor = "yellow";
	col1.style.backgroundColor = "grey";
	col3.style.backgroundColor = "grey";
},5000)

setTimeout(function(){
	col2.style.backgroundColor = "grey";
	col1.style.backgroundColor = "grey";
	col3.style.backgroundColor = "green";
},7000)


setInterval(function(){
	setTimeout(function(){
	col1.style.backgroundColor = "red";
	col2.style.backgroundColor = "grey";
	col3.style.backgroundColor = "grey";
},1000)

setTimeout(function(){
	col2.style.backgroundColor = "yellow";
	col1.style.backgroundColor = "grey";
	col3.style.backgroundColor = "grey";
},5000)

setTimeout(function(){
	col2.style.backgroundColor = "grey";
	col1.style.backgroundColor = "grey";
	col3.style.backgroundColor = "green";
},7000)
},13000)*/



input = document.getElementById("inp");

input.addEventListener("keypress",function(e){
	if(e.which == 13){
		if(input.value==""){
			alert("Input is empty!");
		}else{
			let div = document.createElement("div");
			let check = document.createElement("input");
			let p = document.createElement("p");
			let btn = document.createElement("button");
			document.body.appendChild(div);
			div.prepend(check);
			div.appendChild(p);
			div.appendChild(check);
			div.appendChild(btn);

			div.style.border = "2px solid green";

			check.setAttribute("type","checkbox");
			check.setAttribute("class","checkbox");

			btn.setAttribute("class","btn");
			btn.innerHTML = "X";

			p.style.display = "inline-block";
			p.innerHTML = input.value;
			


			let checkbox = document.getElementsByClassName("checkbox")[0];
			checkbox.addEventListener("change", function(){
				if(this.checked){
					p.style.textDecoration = "line-through";
				}
			})

			let btnn = document.getElementsByClassName("btn")[0];
			btnn.addEventListener("click",function(){
				this.parentNode.remove();
			})

		}
	}
})

