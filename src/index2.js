var iid = 0;
const taskelem = document.getElementById('taskelem');
const taskcontroll  = new taskController(taskelem);
document.querySelector('#adder').addEventListener('click', addtask);

function  xell() {
  // alert('howdy');
  taskcontroll.delltask(1);
}

taskelem.querySelector('#delta').addEventListener('click', xell);

// document.querySelector('#delta').addEventListener('DOMContentLoaded', (click) => {
    // xell;
// });


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
}	


//=====end main =================================================================>

class taskController {
	constructor(taskelem) {
		this.taskelem = taskelem;
		this.tasklist = [];
		this.tid = 0;

	}

	update(proj) {
		while (this.taskelem.firstChild) {
			this.taskelem.removeChild(this.taskelem.firstChild);
		}

		this.tasklist.forEach(tskit => {
			this.taskelem.appendChild(this.createElem(tskit));
		});

	}

	add(task) {
		this.tasklist.push(task);
		this.update()
	}

	remove(i) {
		this.tasklist.splice(i,1);
		this.update();
	}

	createElem(tsk) {
		var litem = document.createElement('li');
		litem.innerHTML = `
			<span>${tsk.title}</span>
			<span>${tsk.description}</span>
			<span>${tsk.duedate}</span>
			<span>${tsk.priority}</span>
			<span><button id = "delta" >Delete</button></span>
			`;			
		 return litem;
	}

	delltask(drowid) {
		let ee = this.tasklist.findIndex(tas => tas == drowid); 
		this.remove(ee);
	}
	

} //======end taskController===============================================

// function dell(taskrowid) {
// 	alert('wanji?')
// 	taskcontroll.delltask(taskrowid);
// }

// function xell() {
// 	alert('me dell');
// }




class Task {
	constructor(title, description, duedate, priority, taskid) {
		this.title = title;
		this.description = description;
		this.duedate = duedate;
		this.priority = priority;
		this.taskid = taskid;
		}
}

// <span><input type="button" onclick="dell(${tsk.taskid})" value="delete"> </span>
