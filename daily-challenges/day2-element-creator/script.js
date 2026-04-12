// Day 2: Dynamic Element Creator 🟢

const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");
let count = 0;

addBtn.addEventListener("click", function() {
    count++;
    
    const para = document.createElement("p");
    para.className = "dynamic-para";
    para.innerHTML = `
        <span>Paragraph #${count}: Created dynamically!</span>
        <button class="delete-btn">Delete</button>
    `;
    
    // Add delete functionality
    const deleteBtn = para.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        para.style.animation = "slideIn 0.3s ease reverse";
        setTimeout(() => para.remove(), 280);
    });
    
    container.appendChild(para);
});