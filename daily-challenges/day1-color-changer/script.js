// Day 1: Color Changer 🟢

const colorBtn = document.getElementById("colorBtn");

function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

colorBtn.addEventListener("click", function() {
    const headings = document.querySelectorAll("h1, h2, h3");
    const newColor = getRandomHexColor();
    
    headings.forEach(heading => {
        heading.style.color = newColor;
    });
    
    // Bonus: Show the color code
    colorBtn.textContent = `Color: ${newColor}`;
    setTimeout(() => {
        colorBtn.textContent = "Change Colors";
    }, 2000);
});