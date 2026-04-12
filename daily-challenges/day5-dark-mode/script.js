// Day 5: Dark Mode Toggle 🟡

const toggleBtn = document.getElementById("toggleBtn");
const icon = toggleBtn.querySelector(".icon");
const label = toggleBtn.querySelector(".label");
const body = document.body;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    body.setAttribute("data-theme", "dark");
    updateButtonText(true);
}

// Toggle dark mode
toggleBtn.addEventListener("click", function() {
    const isDark = body.getAttribute("data-theme") === "dark";
    
    if (isDark) {
        body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        updateButtonText(false);
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        updateButtonText(true);
    }
});

function updateButtonText(isDark) {
    icon.textContent = isDark ? "☀️" : "🌙";
    label.textContent = isDark ? "Disable Dark Mode" : "Enable Dark Mode";
}

// Optional: Listen for system preference changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
        // Only auto-switch if user hasn't set a preference
        if (e.matches) {
            body.setAttribute("data-theme", "dark");
            updateButtonText(true);
        } else {
            body.removeAttribute("data-theme");
            updateButtonText(false);
        }
    }
});