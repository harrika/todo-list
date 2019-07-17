import {Task} from './task.js';

class taskController {
	constructor(taskelem) {
		this.taskelem = taskelem;
		this.tasklist = [];
		this.showlist = [];
		this.tid = 0;
		this.projkt = 'one';
	}

	setprojkt(c) {
		this.projkt = c;
		if (this.projkt == 'one') {
			this.showlist = this.tasklist.filter(chkrange1);
		}
		else if (this.projkt == 'two') {
			this.showlist = this.tasklist.filter(chkrange2);
		}
		else if (this.projkt == 'three') {
			this.showlist = this.tasklist.filter(chkrange3);
		}else{
			this.showlist = this.tasklist;
		}

		function chkrange1(x) {
			return x.taskid<1000;
		}
		function chkrange2(x) {
			return ((x.taskid>=1000)&&(x.taskid<2000));
		}
		function chkrange3(x) {
			return x.taskid>=2000;
		}
		this.update();
	}


	update() {
		while (this.taskelem.firstChild) {
			this.taskelem.removeChild(this.taskelem.firstChild);
		}

		this.showlist.forEach(tskit => {
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

// <span>${tsk.taskid}</span>