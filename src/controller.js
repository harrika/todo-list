import {Task} from './task.js';

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
			<span>${tsk.taskid}</span>
			<span>${tsk.title}..</span>
			<span>Description: ${tsk.description}</span>
			<span>Due DATE: ${tsk.duedate}</span>
			<span>${tsk.priority}</span>
			<span>...</span>
			<span><button id="${tsk.taskid}">Delete</button></span>
			`;			
		 return litem;
	}

	delltask(rowid) {
		let ee = this.tasklist.findIndex(tas => tas.taskid == rowid); 
		if (confirm("Are you sure about this!")) {
			this.remove(ee);
		}
	}
	

} 

export {taskController}
