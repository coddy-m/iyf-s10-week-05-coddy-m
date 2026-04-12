// ============================================
// TASK 10.1: Event Listeners 🟢
// ============================================

// ✅ Build: Click Counter
const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", () => {
    count++;
    updateCount();
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
});

// Named function example (can be removed)
function handleClick() {
    console.log("Handled!");
}
const testBtn = document.createElement("button");
testBtn.textContent = "Test Listener";
testBtn.addEventListener("click", handleClick);
// To remove: testBtn.removeEventListener("click", handleClick);


// ============================================
// TASK 10.2: The Event Object 🟡
// ============================================

// ✅ Build: Keyboard Shortcuts
const shortcutForm = document.getElementById("shortcut-form");
const shortcutInput = document.getElementById("shortcut-input");
const shortcutFeedback = document.getElementById("shortcut-feedback");

document.addEventListener("keydown", function(event) {
    // Ctrl+S: Show "Saved!" alert
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        showFeedback("✅ Saved!", "success");
    }
    
    // Escape: Clear all form inputs
    if (event.key === "Escape") {
        shortcutInput.value = "";
        showFeedback("🗑️ Cleared!", "info");
    }
    
    // Ctrl+Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        shortcutForm.requestSubmit();
    }
});

shortcutForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const value = shortcutInput.value.trim();
    if (value) {
        showFeedback(`📝 Submitted: "${value}"`, "success");
        shortcutInput.value = "";
    }
});

function showFeedback(message, type) {
    shortcutFeedback.textContent = message;
    shortcutFeedback.className = `feedback ${type}`;
    setTimeout(() => {
        shortcutFeedback.textContent = "";
        shortcutFeedback.className = "";
    }, 3000);
}

// Event object properties demo
document.addEventListener("click", function(event) {
    console.log("=== Event Object Demo ===");
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
});


// ============================================
// TASK 10.3: Event Bubbling & Delegation 🔴
// ============================================

// ✅ Build: Delegated Task List
const delegatedList = document.getElementById("delegated-list");
const addDelegatedForm = document.getElementById("add-delegated-task");
const newTaskInput = document.getElementById("new-task-input");

let delegatedTaskId = 4;

// SINGLE event listener using delegation
delegatedList.addEventListener("click", function(event) {
    const target = event.target;
    
    // Handle delete button clicks
    if (target.classList.contains("delete-btn")) {
        const li = target.closest("li");
        li.remove();
        return;
    }
    
    // Handle task toggle (click on li, not button)
    if (target.tagName === "LI" || target.closest("li")) {
        const li = target.closest("li");
        li.classList.toggle("completed");
    }
});

// Add new tasks
addDelegatedForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = newTaskInput.value.trim();
    
    if (text) {
        addDelegatedTask(text);
        newTaskInput.value = "";
    }
});

function addDelegatedTask(text) {
    const li = document.createElement("li");
    li.dataset.id = delegatedTaskId++;
    li.innerHTML = `
        ${text}
        <button class="delete-btn">×</button>
    `;
    delegatedList.appendChild(li);
}

// Event bubbling demo (uncomment to test)
/*
document.getElementById("grandparent")?.addEventListener("click", () => {
    console.log("👴 Grandparent clicked");
});
document.getElementById("parent")?.addEventListener("click", () => {
    console.log("👨 Parent clicked");
});
document.getElementById("child")?.addEventListener("click", () => {
    console.log("👶 Child clicked");
});
// Click order: Child → Parent → Grandparent (bubbling up)
*/


// ============================================
// TASK 10.4: Form Handling 🔴
// ============================================

// ✅ Build: Complete Form Validation
const validatedForm = document.getElementById("validated-form");
const nameInput = document.getElementById("valid-name");
const emailInput = document.getElementById("valid-email");
const formFeedback = document.getElementById("form-feedback");

// Real-time validation
nameInput.addEventListener("input", function() {
    validateName(nameInput.value);
});

emailInput.addEventListener("input", function() {
    validateEmail(emailInput.value);
});

function validateName(value) {
    const errorSpan = nameInput.nextElementSibling;
    if (value.length < 2) {
        showError(nameInput, errorSpan, "Name must be at least 2 characters");
        return false;
    } else {
        clearError(nameInput, errorSpan);
        return true;
    }
}

function validateEmail(value) {
    const errorSpan = emailInput.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, errorSpan, "Please enter a valid email");
        return false;
    } else {
        clearError(emailInput, errorSpan);
        return true;
    }
}

function showError(input, errorSpan, message) {
    input.classList.add("error");
    errorSpan.textContent = message;
    errorSpan.classList.add("visible");
}

function clearError(input, errorSpan) {
    input.classList.remove("error");
    errorSpan.textContent = "";
    errorSpan.classList.remove("visible");
}

validatedForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    
    if (isNameValid && isEmailValid) {
        // Get form data
        const formData = new FormData(validatedForm);
        const data = Object.fromEntries(formData);
        console.log("Form data:", data);
        
        showFormFeedback("✅ Form submitted successfully!", "success");
        validatedForm.reset();
    } else {
        showFormFeedback("❌ Please fix the errors above", "error");
    }
});

function showFormFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = `feedback ${type}`;
    setTimeout(() => {
        formFeedback.textContent = "";
        formFeedback.className = "";
    }, 4000);
}