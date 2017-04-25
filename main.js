// var q1, q2;
// var survey = [
// 	q1 = ['1.Qst', 'a.answ1', 'b.answ2', 'c.answ3'],
// 	q2 = ['2.Qst', 'a.answ1', 'b.answ2', 'c.answ3']	
// ];

// for (i=0; i<survey.length; i++){
// 	//document.write(survey[i] + '<br/>');
// 	var arr = survey[i];
// 	for (j=0; j<arr.length; j++){
// 		document.write(arr[j]+'<br/>');
// 	}
// 	document.write('<hr/>');
// 	//console.log('i= ' + i, survey.length);
// }

// var person = {
// 	name: "Petya",
// 	surname: "Ivanov",
// 	age: 25
// }

// for (key in person){
// 	document.write(key+": "+person[key] + "<br/>");
// 	console.log("key " + key);
// 	console.log("person[key] " + person[key]);
// }


var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var total = 0;
var max_sul = 0;

/** Функция проверки на пустоту обьекта**/
function isEmptyObject(obj) {
    var key;
    for (key in obj) {
        return false;
    }
    return true;
}

if (isEmptyObject(salaries)){
	alert('Empty');
}else{
	for (name in salaries){
		total=total+salaries[name];

		//console.log("Зарплата текущего: " +  salaries[name] + " Максимальная" + max_sul);
		if (max_sul < salaries[name]){
			max_sul=salaries[name];
			//console.log("Новое максимальное значение: " + max_sul);
		}
	}
	document.write('total '+total);
}
