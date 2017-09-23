$(document).ready(function(){
	var d = new Date();
	var n = d.getDay();
	if (n = 0)
	  document.body.className = "sun";
	else if (n = 1)
	  document.body.className = "mon";
	else if (n = 2)
	  document.body.className = "tue";
	else if (n = 3)
	  document.body.className = "wed";
	else if (n = 4)
	  document.body.className = "thu";
	else if (n = 5)
	  document.body.className = "fri";
	else
	  document.body.className = "sat";
});