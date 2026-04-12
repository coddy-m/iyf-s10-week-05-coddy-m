// Day 4: Content Copier 🟡

const source = document.getElementById("source");
const target = document.getElementById("target");
const copyBtn = document.getElementById("copyBtn");
const feedback = document.getElementById("feedback");

// Copy on button click
copyBtn.addEventListener("click", function() {
    const content = source.innerHTML;
    
    if (content.trim() && content !== "Type or paste content here...") {
        target.innerHTML = content;
        showFeedback("✅ Content copied!");
    } else {
        showFeedback("⚠️ Source is empty!", true);
    }
});

function showFeedback(message, isError = false) {
    feedback.textContent = message;
    feedback.className = isError ? "" : "success";
    setTimeout(() => {
        feedback.textContent = "";
        feedback.className = "";
    }, 2000);
}

// BONUS: Drag and Drop Copy
source.setAttribute("draggable", "true");

source.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/html", source.innerHTML);
});

target.addEventListener("dragover", function(e) {
    e.preventDefault();
    target.classList.add("drag-over");
});

target.addEventListener("dragleave", function() {
    target.classList.remove("drag-over");
});

target.addEventListener("drop", function(e) {
    e.preventDefault();
    target.classList.remove("drag-over");
    
    const content = e.dataTransfer.getData("text/html");
    if (content) {
        target.innerHTML = content;
        showFeedback("✅ Dropped content!");
    }
});