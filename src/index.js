const taskelem = document.getElementById('taskelem');
const taskcontroll  = new taskController(taskelem);

upon clicking submit
	make task = taskcontroll.makeTask;
	add task to tasklist - taskcontroll.add(task);
	update fom -taskcontroll.update();

upon clicking delete
	get index of i 
	taskcontroll.remove(i);



class taskController {
	constructor(taskelem) {
		this.taskelem = taskelem;
		this.tasklist = [];
	}

	update(proj) {
		while (this.taskelem.firstChild) {
			this.taskelem.removeChild(this.taskelem.firstChild);
		}

		for item of this.tasklist {
			// if item.proj == proj {}
			this.taskelem.appendChild(this.createElem(item));
		}
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
		// create li
		// add tsk to li
		// return li

	}
}

class Task {
	constructor(title, description, duedate, priority) {
		this.title = title;
		this.description = description;
		this.duedate = duedate;
		this.priority = priority;
		this.proj = proj;
}

 // title, description, dueDate and priority
