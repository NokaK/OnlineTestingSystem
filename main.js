//Collapse-Additional questions
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
