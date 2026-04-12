// Day 3: Image Remover 🟢

const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const images = document.querySelectorAll(".image-grid img");

let imagesRemoved = false;

// Remove all images
removeBtn.addEventListener("click", function() {
    if (imagesRemoved) {
        // Restore images (bonus feature)
        location.reload();
        return;
    }
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.transition = "all 0.3s ease";
            img.style.opacity = "0";
            img.style.transform = "scale(0.8)";
            setTimeout(() => img.remove(), 300);
        }, index * 100);
    });
    
    removeBtn.textContent = "Restore Images";
    imagesRemoved = true;
});

// Toggle hide/show (bonus)
toggleBtn.addEventListener("click", function() {
    images.forEach(img => {
        img.classList.toggle("hidden");
    });
    
    const isHidden = images[0]?.classList.contains("hidden");
    toggleBtn.textContent = isHidden ? "Show Images" : "Hide Images";
});