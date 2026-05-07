// courses.js

const courses = [
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    },

    {
        subject: "CSE",
        number: 110,
        title: "Programming Building Blocks",
        credits: 2,
        completed: true
    },

    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    }
];


// SELECT HTML ELEMENTS

const coursesContainer = document.querySelector("#courses");

const creditsContainer = document.querySelector("#credits");

const allButton = document.querySelector("#all");

const wddButton = document.querySelector("#wdd");

const cseButton = document.querySelector("#cse");


// DISPLAY COURSES

function displayCourses(courseList) {

    coursesContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        // Completed Courses
        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        coursesContainer.appendChild(card);
    });

    // TOTAL CREDITS USING REDUCE
    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    creditsContainer.textContent =
        `Total Credits: ${totalCredits}`;
}


// SHOW ALL COURSES ON PAGE LOAD

displayCourses(courses);


// FILTER BUTTONS

allButton.addEventListener("click", () => {
    displayCourses(courses);
});


wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});


cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});