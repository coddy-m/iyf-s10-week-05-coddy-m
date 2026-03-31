# Week 5: DOM Manipulation

## Author
- **Name:** Michelle  
- **GitHub:** [@coddy-m](https://github.com/coddy-m)  
- **Date:** March 30, 2026
----

## Project Description

This project demonstrates a deep understanding of **DOM Manipulation** and **Event Handling** using vanilla JavaScript. 

It includes:
- A comprehensive practice page covering all Lesson 9 & 10 concepts
- All 5 Daily Challenges
- A fully functional **Interactive To-Do List** (main deliverable)

The goal was to master selecting elements, traversing the DOM, modifying content, dynamically adding/removing elements, and handling user interactions effectively.
----

## Technologies Used
- HTML5
- CSS3 (Flexbox & modern styling)
- Vanilla JavaScript (No frameworks or libraries)
- localStorage (for data persistence and dark mode preference)
----
## Features 

- Element selection using `getElementById`, `querySelector`, `querySelectorAll`
- DOM Traversal (parent, children, siblings)
- Modifying content, attributes, and inline styles
- Dynamically adding and removing elements (Blog, Portfolio, Contact links)
- Event listeners and click counter
- All **5 Daily Challenges** implemented

### Main Deliverable: Interactive To-Do List (`todo-app/`)
- Add new tasks
- Toggle task completion (strikethrough)
- Delete tasks
- Filter tasks (All / Active / Completed)
- Live "X items left" counter
- Clear completed tasks
- Bonus: Double-click to edit tasks
- Data persists using `localStorage`
----
## How to Run

### 1. DOM Practice Page
1. Open `dom-practice.html` in your browser
2. Open Developer Tools (F12) → Console to see results
3. Click any button to test the exercises
-----

### 2. Interactive To-Do List
1. Navigate to the `todo-app/` folder
2. Open `index.html` in your browser
3. Start adding and managing your tasks
4. 
No installation required — pure vanilla web technologies.
-----
## Lessons Learned
- How to efficiently select and manipulate DOM elements
- The importance of **event delegation** for dynamic content
- Difference between `textContent`, `innerHTML`, and proper security practices
- How to create, append, and remove elements dynamically
- Working with the Event object (`event.target`, `preventDefault`, etc.)
- Using `localStorage` to persist user preferences and data
- Implementing dark mode with smooth transitions
-----
## Challenges Faced & Solutions
- **Problem**: Dynamically added links not appearing  
  **Solution**: Properly created container with correct `id` and used `appendChild()`

- **Problem**: Dark mode not applying styles consistently  
  **Solution**: Used `!important` in CSS and properly toggled class on `document.body`

- **Problem**: Functions not defined when buttons clicked  
  **Solution**: Ensured all functions were declared before `window.onload` and script loaded at the end of HTML
-----
## Screenshots
- https://github.com/coddy-m/iyf-s10-week-05-coddy-m/blob/main/images/Screenshot%20(22).png
- https://github.com/coddy-m/iyf-s10-week-05-coddy-m/blob/main/images/Screenshot%20(24).png
----
**DOM Practice Page**  

**Interactive To-Do List in action**
- [To-Do list](https://coddy-m.github.io/todo-list-app/)
---


**Week 5 Submission** – DOM Manipulation  
March 2026
