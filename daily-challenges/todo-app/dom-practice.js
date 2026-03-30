// ======================
// WEEK 5 DOM PRACTICE - FULLY FIXED
// ======================

console.log("%c✅ Week 5 DOM Practice Loaded Successfully!", "color: #667eea; font-size: 18px; font-weight: bold");

// Task 9.1 - Selecting Elements
function practiceSelection() {
    console.clear();
    console.log("%c=== Task 9.1: Selecting Elements ===", "color: #667eea; font-size: 16px; font-weight: bold");
    
    console.log("1. h1 element →", document.querySelector("h1"));
    console.log("2. All buttons →", document.querySelectorAll("button"));
    console.log("3. All task boxes →", document.querySelectorAll(".task-box"));
    
    console.log("%c✅ Selection Practice Completed!", "color: green");
}

// Task 9.2 - Traversing the DOM
function practiceTraversal() {
    console.clear();
    console.log("%c=== Task 9.2: Traversing the DOM ===", "color: #667eea; font-size: 16px; font-weight: bold");
    
    const firstTaskBox = document.querySelector(".task-box");
    if (firstTaskBox) {
        console.log("Parent of first task box →", firstTaskBox.parentElement);
        console.log("Children of first task box →", firstTaskBox.children);
        console.log("Next sibling →", firstTaskBox.nextElementSibling);
    }
    
    console.log("%c✅ Traversal Practice Completed!", "color: green");
}

// Task 9.3 - Modifying Content
function practiceModification() {
    console.clear();
    console.log("%c=== Task 9.3: Modifying Content ===", "color: #667eea; font-size: 16px; font-weight: bold");
    
    const title = document.querySelector("h1");
    if (title) {
        title.textContent = "Week 5 - DOM Practice (Modified!)";
        title.style.color = "#ff6b6b";
    }
    
    console.log("%c✅ Modification Practice Completed! Title changed.", "color: green");
}

// Task 9.4 - Adding & Removing Elements (Fixed)
function addNavItem(text) {
    const navList = document.getElementById("dynamic-nav-list");
    
    if (!navList) {
        console.error("Navigation list not found!");
        return;
    }

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = text;
    a.href = "#";
    a.style.cssText = "padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;";

    // Hover effect
    a.addEventListener("mouseover", () => a.style.backgroundColor = "#5566cc");
    a.addEventListener("mouseout", () => a.style.backgroundColor = "#667eea");

    li.appendChild(a);
    navList.appendChild(li);

    console.log(`✅ Dynamically added "${text}" link!`);
}

// Task 10.1 - Click Counter
let count = 0;
const counterBtn = document.getElementById("counterBtn");

if (counterBtn) {
    counterBtn.addEventListener("click", () => {
        count++;
        counterBtn.textContent = `Click Counter: ${count}`;
        console.log(`Button clicked ${count} times`);
    });
}

// ====================================
// DAILY CHALLENGES
// ====================================

// Day 1: Color Changer
function changeHeadingColors() {
    console.clear();
    console.log("%c=== Day 1: Color Changer ===", "color: #667eea; font-size: 16px");
    
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(heading => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        heading.style.color = randomColor;
    });
    
    console.log("%c✅ Day 1 Completed - Headings changed to random colors!", "color: green");
}

// Day 2: Dynamic Paragraph Creator
let paragraphCount = 0;
function addNumberedParagraph() {
    paragraphCount++;
    const container = document.getElementById("dynamic-container") || document.body;
    
    const p = document.createElement("div");
    p.className = "dynamic-paragraph";
    p.style.cssText = "padding: 14px; background: #f0f8ff; margin: 10px 0; border-radius: 8px; border-left: 5px solid #667eea;";
    p.innerHTML = `
        Paragraph #${paragraphCount} 
        <button onclick="this.parentElement.remove()" 
                style="float:right; background:#ff4757; color:white; border:none; padding:5px 12px; border-radius:6px; cursor:pointer;">
            Delete
        </button>
    `;
    
    container.appendChild(p);
    console.log(`✅ Day 2: Added paragraph #${paragraphCount}`);
}

// Day 3: Image Remover (Your Request)
function removeAllImages() {
    console.clear();
    console.log("%c=== Day 3: Image Remover ===", "color: #667eea; font-size: 16px");
    
    const images = document.querySelectorAll("img");
    console.log(`Found ${images.length} images on the page`);
    
    if (images.length === 0) {
        console.log("No images found to remove.");
        return;
    }
    
    images.forEach((img, index) => {
        img.style.transition = "opacity 0.5s";
        img.style.opacity = "0";
        setTimeout(() => img.remove(), 500);
    });
    
    console.log("%c✅ Day 3 Completed - All images removed!", "color: green");
}

// Toggle show/hide images instead of permanent remove
function toggleImages() {
    console.clear();
    console.log("%c=== Day 3: Toggle Images ===", "color: #667eea");
    
    const images = document.querySelectorAll("img");
    let isHidden = images[0] && images[0].style.display === "none";
    
    images.forEach(img => {
        img.style.display = isHidden ? "inline-block" : "none";
    });
    
    console.log(`✅ Images are now ${isHidden ? "visible" : "hidden"}`);
}

// Day 4: Content Copier (Your Request)
function copyContent() {
    console.clear();
    console.log("%c=== Day 4: Content Copier ===", "color: #667eea; font-size: 16px");
    
    const source = document.getElementById("source-text");
    const target = document.getElementById("target-text");
    
    if (source && target) {
        target.textContent = source.textContent;
        console.log("%c✅ Content copied successfully from Source to Target!", "color: green");
    } else {
        console.log("Source or Target element not found. Make sure you have elements with ids 'source-text' and 'target-text'.");
    }
}

function clearTarget() {
    const target = document.getElementById("target-text");
    if (target) {
        target.textContent = "Content will appear here after copying...";
        console.log("Target cleared.");
    }
}

// Day 5: Dark Mode Toggle
function toggleDarkMode() {
    console.clear();
    console.log("%c=== Day 5: Dark Mode Toggle ===", "color: #667eea; font-size: 16px");
    
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    
    localStorage.setItem("darkMode", isDark);
    
    console.log(`✅ Dark Mode is now ${isDark ? "ENABLED" : "DISABLED"}`);
}

// Initialize on page load
window.onload = function() {

    
    // Load saved dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
    
    console.log("%c🎉 All Daily Challenges and Exercises are ready!", "color: #667eea; font-size: 16px");
    console.log("Click any button to test the functions.");

// Initialize
console.log("%c🎉 All functions are ready. Click the buttons to test!", "color: #667eea");

};
