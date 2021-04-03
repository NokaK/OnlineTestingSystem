// Collapse-Additional questions
const qeustCheckbox = document.getElementById('qeust_checkbox');
const questCollapse = document.getElementById('quest_collapse');

qeustCheckbox.addEventListener("click", function() {
    if (questCollapse.classList) { 
        questCollapse.classList.toggle("quest_none");
    } else {
    const classes = questCollapse.className.split(" ");
    const i = classes.indexOf("quest_none");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("quest_none");
            questCollapse.className = classes.join(" "); 
        }
});

// Completion Date 
const workingNow = document.getElementById('working_now');
const endDate = document.getElementById('end_date');

workingNow.addEventListener("click", function() {
    if (endDate.classList) { 
        endDate.classList.toggle("quest_none");
    } else {
    const classes = endDate.className.split(" ");
    const i = classes.indexOf("quest_none");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("quest_none");
            questCollapse.className = classes.join(" "); 
        }
});

// Work date 
start_day.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
end_day.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

start_day.addEventListener('change', function() {
    if (start_day.value)
        end_day.min = start_day.value;
}, false);
end_day.addEventLiseter('change', function() {
    if (end_day.value)
        start_day.max = end_day.value;
}, false);