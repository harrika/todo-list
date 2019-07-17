import {taskController} from './controller.js';
import {Task} from './task.js';

var iid=0
var master = [];

const taskelem = document.getElementById('taskelem');
const notice = document.getElementById('notice');
const taskcontroll  = new taskController(taskelem);
document.querySelector('#adder').addEventListener('click', addtask);

document.querySelector('#project1').addEventListener('click', chngstart);
document.querySelector('#project2').addEventListener('click', chngstart1);
document.querySelector('#project3').addEventListener('click', chngstart2);
document.querySelector('#project4').addEventListener('click', chngstartall);
var separator = document.getElementById("two");
var ss = document.getElementById("adder");


// functions to select project range
function chngstartall() {	
	separator.style.backgroundColor = "#d09f65";
	ss.style.color = "#d09f65";
	taskcontroll.setprojkt('all');	
	notice.replaceChild(createnote('All projects'), notice.childNodes[0]);	
}
function chngstart() {
	if (master.includes(0) == false) {
		master.push(0)
	}
	iid = Math.max(...master.filter(x => x < 1000));
	separator.style.backgroundColor = "#33C3F0";
	ss.style.color = "#33C3F0";
	taskcontroll.setprojkt('one');		
	notice.replaceChild(createnote('Home projects'), notice.childNodes[0]);	
}
function chngstart1() {
	if (master.includes(1000) == false) {
		master.push(1000)
	}
	iid = Math.max(...master.filter(x => (x >= 1000)&&(x < 2000)));
	separator.style.backgroundColor = "#d16fd8";
	ss.style.color = "#d16fd8";
	taskcontroll.setprojkt('two');		
	notice.replaceChild(createnote('Business projects'), notice.childNodes[0]);	
}
function chngstart2() {
	if (master.includes(2000) == false) {
		master.push(2000)
	}
	iid = Math.max(...master.filter(x => x >= 2000));
	separator.style.backgroundColor = "#65d083";
	ss.style.color = "#65d083";
	taskcontroll.setprojkt('three');		
	notice.replaceChild(createnote('Interests'), notice.childNodes[0]);	
}

var bigdiv = document.querySelector('ul');
bigdiv.addEventListener('click', function(event){
		if(event.target.tagName === "BUTTON") {	
			taskcontroll.delltask(Number(event.target.id));
		}
	});

//on clicking SUBMIT button#adder --> calls addtask()
function addtask(e) {
	e.preventDefault();
	var ttitle = document.querySelector('#title').value;
	var tdesc = document.querySelector('#desc').value;
	var tddate = document.querySelector('#ddate').value;
	var tprity = document.querySelector('#prity').value;
	var taskid = iid++;		
	var newtask  = new Task(ttitle, tdesc, tddate, tprity, taskid);
	taskcontroll.add(newtask);
	master.push(taskid);
	taskcontroll.setprojkt(taskcontroll.projkt);
}	

function createnote(aa) {
	var note = document.createElement('h4');
	note.innerHTML =aa;			
	return note;
}
