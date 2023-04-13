const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const list = document.querySelector(".tasks__list");
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskValue = formInput.value;
	// tasks__task
	const task = document.createElement('div');
	task.classList.add('tasks__task');
	// tasks__content
	const content = document.createElement('div');
	content.classList.add('tasks__content');
	task.appendChild(content);
	// tasks__input
	const taskInput = document.createElement('input');
	taskInput.classList.add('tasks__input');
	taskInput.type = 'text';
	taskInput.value = taskValue;
	taskInput.setAttribute('readonly', 'readonly');
	content.appendChild(taskInput);
	// tasks__actions
	const actions = document.createElement('div');
	actions.classList.add('tasks__actions');
	// tasks__edit
	const edit = document.createElement('button');
	edit.classList.add('tasks__edit');
	edit.innerText = 'Edit';
	// tasks__delete
	const taskDelete = document.createElement('button');
	taskDelete.classList.add('tasks__delete');
	taskDelete.innerText = 'Delete';

	actions.appendChild(edit);
	actions.appendChild(taskDelete);
	task.appendChild(actions);
	list.appendChild(task);
	formInput.value = '';
	//button Edit
	edit.addEventListener('click', (e) => {
		if (edit.innerText.toLowerCase() == "edit") {
			edit.innerText = "Save";
			taskInput.removeAttribute("readonly");
			taskInput.focus();
			taskInput.classList.add('active');
		} else {
			edit.innerText = "Edit";
			taskInput.setAttribute("readonly", "readonly");
			taskInput.classList.remove('active');
		}
	});
	//button Delete
	taskDelete.addEventListener('click', (e) => {
		list.removeChild(task);
	});
});