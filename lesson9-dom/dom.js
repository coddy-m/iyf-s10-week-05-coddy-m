// ============================================
// TASK 9.1: Selecting Elements 🟢
// ============================================

// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// ✅ Practice Solutions:
// 1. The h1 element
const h1 = document.querySelector("h1");

// 2. All elements with class "content"
const contentElements = document.querySelectorAll(".content");

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");

// 4. The email input
const emailInput = document.querySelector("#email");

// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav-list li");

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");


// ============================================
// TASK 9.2: Traversing the DOM 🟡
// ============================================

const nav = document.querySelector("nav");

// Parent
console.log("Nav parent:", nav.parentElement); // header

// Children
console.log("Nav children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("Article next sibling:", article.nextElementSibling); // section
console.log("Article previous sibling:", article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("All nav links:", navLinks);

// ✅ Practice Solutions:
// 1. Select header, then navigate to nav inside it
const headerNav = document.getElementById("main-header").querySelector("nav");

// 2. Select first nav-link, then get its parent li
const firstLinkParent = document.querySelector(".nav-link").parentElement;

// 3. Select article, then get its next sibling (section)
const articleSection = document.querySelector("article").nextElementSibling;

// 4. Select ul, then get all its child li elements
const ulChildren = document.querySelector(".nav-list").children;

// 5. Start from footer and navigate up to body
const bodyFromFooter = document.querySelector("footer").closest("body");


// ============================================
// TASK 9.3: Modifying Content 🟡
// ============================================

// Exercise 1: Text Content
const h1Element = document.querySelector("h1");
console.log("TextContent:", h1Element.textContent);
console.log("InnerText:", h1Element.innerText);
h1Element.textContent = "New DOM Practice Title";

// Exercise 2: HTML Content
const articleElement = document.querySelector("article");
console.log("Article HTML:", articleElement.innerHTML);

// Safe content update (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
const safePara = document.createElement("p");
safePara.textContent = userInput; // Safe: displays as text
articleElement.appendChild(safePara);

// Exercise 3: Attributes
const link = document.querySelector(".nav-link");
console.log("Href attribute:", link.getAttribute("href"));
console.log("Href property:", link.href);

link.setAttribute("href", "https://example.com");
link.href = "https://example.com"; // Same result

console.log("Has target?", link.hasAttribute("target"));
link.removeAttribute("target");

// Data attributes demo
const elementWithData = document.createElement("div");
elementWithData.dataset.id = "123";
elementWithData.dataset.category = "tech";
console.log("Data ID:", elementWithData.dataset.id);
console.log("Data Category:", elementWithData.dataset.category);

// Exercise 4: Styles
const container = document.querySelector(".container");
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#e8f4f8",
    color: "#333",
    padding: "25px"
});


// ============================================
// TASK 9.4: Adding & Removing Elements 🔴
// ============================================

// Exercise 1: Creating Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

const articleEl = document.querySelector("article");
articleEl.appendChild(newParagraph); // Add at end

// Insert before another element
const firstParagraph = articleEl.querySelector("p.content");
if (firstParagraph) {
    articleEl.insertBefore(newParagraph.cloneNode(true), firstParagraph);
}

// Modern insertion methods
const modernPara = document.createElement("p");
modernPara.textContent = "Modern insertion!";
modernPara.className = "content";
articleEl.prepend(modernPara); // First child

// Exercise 2: Removing Elements
// Remove an element (uncomment to test)
// document.querySelector("footer").remove();

// Remove specific child
const navEl = document.querySelector("nav");
const lastLink = navEl.querySelector("li:last-child");
// lastLink.parentElement.removeChild(lastLink);

// Clear all children safely
function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true); // true = deep clone
clone.querySelector("a").textContent = "New Link";
clone.querySelector("a").href = "/new";
document.querySelector(".nav-list").appendChild(clone);

// ✅ Build: Dynamic Nav Item Function
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

// Test the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");