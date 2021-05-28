"use strict";

let data = [{
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM550",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM410",
        Title: "Introduction to Network Security & Defense",
        Instructor: "Yat",
        Location: "Classroom 6.5",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM600",
        Title: "Introduction to Pentesting",
        Instructor: "Att",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM700",
        Title: "Introduction to Malware Analysis & Reverse Engineering",
        Instructor: "Wya",
        Location: "Classroom 9",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM800",
        Title: "Introduction to Doodads",
        Instructor: "Ted Vinaigrette",
        Location: "Classroom 9 3/4",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM900",
        Title: "Introduction to the Computer Thingys",
        Instructor: "Dr. Doctor",
        Location: "Classroom 0",
        StartDate: "09/16/19",
        Fee: 50.00,
    }
];

/*
write code in the window.onload event handler to: 1)call a soon-to-be written loadTitlesDropdown() function and 2)hook up a click event handler for the button

code the loadTitlesDropdown() function to load the course titles into the dropdown. For the value, use the course id. Make sure you add a "Select one..." option as the first option in the dropdown.
*/
window.onload = function() {
    loadTitlesDropdown();
}
// window.onload = function() {
//     const showDetailsBtn = document.getElementById("showDetailsBtn");
//     showDetailsBtn.onclick = showDetailsBtnClicked;
// }

function loadTitlesDropdown() {
    //use label tag titleDropdown
    const titleDropdown = document.getElementById("titleDropdown");

    let selectOption = new Option("Select One...", "");
    titleDropdown.appendChild(selectOption);

    for (let i = 0; i < data.length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = data[i].Title;
        theOption.value = data[i].CourseId;

        titleDropdown.appendChild(theOption)
    }
}
