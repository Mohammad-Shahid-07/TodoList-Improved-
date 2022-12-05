const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const genrateTemplate = todo => {
    const html = `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="bi bi-trash"></i>
</li>
    `;
    todoList.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
        const todo = addForm.add.value.trim();
    if (todo.length) {     
        genrateTemplate(todo);
        addForm.reset();
    }
});

todoList.addEventListener('click', e =>{
   if (e.target.classList.contains('bi-trash')){
    e.target.parentElement.remove();
   }
});



const filterTodos = (term) => {

    Array.from(todoList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
    
    Array.from(todoList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};
 

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});