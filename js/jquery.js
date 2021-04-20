// Collapse-Additional questions
$("#qeust_checkbox").on("click", function() {
    if ($("#quest_collapse").hasClass("disnone")){
        $('#quest_collapse').removeClass('disnone');
    } else {
        $('#quest_collapse').addClass('disnone');
    }
});


// Completion Date

//add and delete end date class
$("#working_now").on("click", function() {
    if ($("#end_date").hasClass("disnone")){
        $('#end_date').removeClass('disnone');
    } else {
        $('#end_date').addClass('disnone');
    }
});

//date validation

start_day.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
end_day.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

$("#start_day").on('change', function() {
    if (start_day.value)
    end_day.min = start_day.value;
});
$("#end_day").on('change', function() {
    if (end_day.value)
    start_day.max = end_day.value;
});


// Add additional questions

$('.add_questions').on('click', function() {
    $('body').append('\
    <div class="add_additional_question">\
        <input class="main_question" type="text" name="name" placeholder="კითვის მთავარი ველი (text)">\
        <input class="answer_type" type="text"  name="name" placeholder="პასუხის ტიპის არჩევა">\
        <input class="answer" type="text" name="name" placeholder="პირველი პასუხის ველი"><br>\
        <button class="add_answer btn">ახალი პასუხის ველის დამატება</button>\
        <input type="submit" value="del">\
        <input type="submit" value="req">\
    </div>')
});

// Add answer

$("body").on('click', '.add_answer', function() {
    /* Checks if this class is selected and has grid-row-selected class */
    $(this).before('<input class="answer" type="text" name="name" placeholder="პირველი პასუხის ველი"><br>')
});

// Add work Experience
$('.add_work_experience').on('click', function() {
    $('.add_work_experience').before('\
    <div>\
        <label for="Work-experience">სამუშაო გამოცდილება</label><br>\
        <input type="text" name="username" id="username" class="form_input" required>\
    </div>\
    <div>\
        <label for="Org-name">ორგანიზაციის სახელი</label><br>\
        <input type="text" name="username" id="username" class="form_input" required>\
    </div>\
    <div>\
        <label for="pos">თქვენი პოზიცია</label><br>\
        <input type="text" name="username" id="username" class="form_input" required>\
    </div>\
    <label class="job_checkbox_label">\
        <input id="working_now" class="checkbox" type="checkbox">\
        მოცემულ მომეტში ვმუშაობ აღნიშნულ ორგანიზაციაში\
    </label>\
    <label for="start">დაწყების თარიღი:</label><br>\
    <input type="date" id="start_day" class="form_input" name="start_date" min="2018-01-01" required>\
    <div id="end_date" class="">\
        <label for="end">დასრულების თარიღი:</label><br>\
        <input type="date" id="end_day" class="form_input" name="end_date" min="2018-01-01" required>\
    </div>')
});