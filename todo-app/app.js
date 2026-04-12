// ============================================
// INTERACTIVE TO-DO LIST APPLICATION
// ============================================

// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// ============================================
// CORE FUNCTIONS
// ============================================

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add("completed");
    
    li.innerHTML = `
        <div class="todo-content">
            <input type="checkbox" class="toggle-complete" ${todo.completed ? "checked" : ""}>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
        </div>
        <button class="delete-btn" aria-label="Delete task">×</button>
    `;
    
    return li;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function renderTodos() {
    // Filter todos based on current filter
    const filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true; // "all"
    });
    
    // Clear and re-render
    todoList.innerHTML = "";
    
    if (filtered.length === 0) {
        const empty = document.createElement("li");
        empty.className = "empty-state";
        empty.textContent = currentFilter === "all" 
            ? "No tasks yet! Add one above 👆" 
            : `No ${currentFilter} tasks`;
        todoList.appendChild(empty);
    } else {
        filtered.forEach(todo => {
            todoList.appendChild(createTodoElement(todo));
        });
    }
    
    updateStats();
}

function addTodo(text) {
    const todo = {
        id: generateId(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.unshift(todo); // Add to beginning
    saveTodos();
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function editTodo(id, newText) {
    const todo = todos.find(t => t.id === id);
    if (todo && newText.trim()) {
        todo.text = newText.trim();
        saveTodos();
        renderTodos();
    }
}

function updateStats() {
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

function filterTodos(filter) {
    currentFilter = filter;
    
    // Update active filter button
    filters.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);
    });
    
    renderTodos();
}

function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ============================================
// EVENT LISTENERS
// ============================================

// Add new todo
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    
    if (text) {
        addTodo(text);
        input.value = "";
        input.focus();
    }
});

// Delegated event handling for todo list
todoList.addEventListener("click", function(event) {
    const target = event.target;
    const li = target.closest("li");
    
    if (!li || li.classList.contains("empty-state")) return;
    
    const id = li.dataset.id;
    
    // Handle delete button
    if (target.classList.contains("delete-btn")) {
        deleteTodo(id);
        return;
    }
    
    // Handle checkbox toggle
    if (target.classList.contains("toggle-complete")) {
        toggleTodo(id);
        return;
    }
    
    // Handle text click to toggle (bonus UX)
    if (target.classList.contains("todo-text")) {
        toggleTodo(id);
    }
});

// Double-click to edit (BONUS FEATURE)
todoList.addEventListener("dblclick", function(event) {
    if (event.target.classList.contains("todo-text")) {
        const li = event.target.closest("li");
        const id = li.dataset.id;
        const todo = todos.find(t => t.id === id);
        
        if (todo && !todo.completed) {
            startEditing(li, todo);
        }
    }
});

function startEditing(li, todo) {
    const textSpan = li.querySelector(".todo-text");
    const originalText = todo.text;
    
    // Create input for editing
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;
    input.className = "edit-input";
    input.style.width = `${Math.max(originalText.length * 8, 100)}px`;
    
    // Replace span with input
    textSpan.replaceWith(input);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    
    // Save on Enter or blur
    function save() {
        const newText = input.value.trim();
        if (newText && newText !== originalText) {
            editTodo(todo.id, newText);
        } else {
            renderTodos(); // Revert if empty or unchanged
        }
    }
    
    // Cancel on Escape
    function cancel() {
        renderTodos();
    }
    
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            save();
        } else if (e.key === "Escape") {
            cancel();
        }
    });
    
    input.addEventListener("blur", save);
}

// Filter buttons
filters.forEach(btn => {
    btn.addEventListener("click", function() {
        filterTodos(this.dataset.filter);
    });
});

// Clear completed button
clearCompletedBtn.addEventListener("click", function() {
    if (todos.some(t => t.completed)) {
        clearCompleted();
    }
});

// Keyboard shortcut: Ctrl+Enter to add task (bonus)
input.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "Enter" && input.value.trim()) {
        e.preventDefault();
        form.requestSubmit();
    }
});

// ============================================
// INITIALIZATION
// ============================================

// Initial render
renderTodos();

// Focus input on load
input.focus();

// Show welcome message if first visit
if (!localStorage.getItem("todos")) {
    setTimeout(() => {
        input.placeholder = "🎉 Welcome! Type your first task...";
    }, 1000);
}