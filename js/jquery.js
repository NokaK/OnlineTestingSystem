//Create bank

$("#teacher_bank").on("click", function() {
    if ($("form").hasClass("disnone")){
        $('form').removeClass('disnone');
    } else {
        $('form').addClass('disnone');
    }
});



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
$("form").on('click', '.working_now', function() {
    if ($(this).parent().find(".end_date").hasClass("disnone")){
        $(this).parent().find(".end_date").removeClass('disnone');
    } else {
        $(this).parent().find(".end_date").addClass('disnone');
    }
});



// Add additional questions

$('.add_questions').on('click', function() {
    $('form').append('\
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

$("form").on('click', '.add_answer', function() {
    $(this).before('<input class="answer" type="text" name="name" placeholder="პირველი პასუხის ველი"><br>')
});



// Add work Experience

var work_experience = 1
$('.add_work_experience').on('click', function() {
    //if you want to add a block above, write "$('#mob_num').after"
    $('.add_work_experience').before('\
    <div id="work-exp-cont-'+ (work_experience) +'" class="content-box">\
        <label for="Work-experience">სამუშაო გამოცდილება</label>\
        <input type="text" name="work-exp-'+ (work_experience) +'" id="work-exp-'+ (work_experience) +'" class="form_input workexp-valid">\
    </div>\
    <div id="org-name_cont'+ (work_experience) +'" class="content-box">\
        <label for="Org-name">ორგანიზაციის სახელი</label>\
        <input type="text" name="org-name-'+ (work_experience) +'" id="org-name'+ (work_experience) +'" class="form_input workexp-valid">\
    </div>\
    <div id="position-cont'+ (work_experience) +'" class="content-box">\
        <label for="pos">თქვენი პოზიცია</label>\
        <input type="text" name="position-'+ (work_experience) +'" id="position-'+ (work_experience) +'" class="form_input workexp-valid">\
    </div>\
    <div class="job_checkbox_label">\
        <label>\
            <input class="working_now checkbox" type="checkbox">\
            მოცემულ მომეტში ვმუშაობ აღნიშნულ ორგანიზაციაში\
            <div class="content-box">\
                <label for="start">დაწყების თარიღი:</label>\
                <input type="date" id="start_day_'+ (work_experience) +'" class="form_input date-valid" name="start_day'+ (work_experience) +'">\
            </div>\
            <div class="end_date content-box">\
                <label for="end">დასრულების თარიღი:</label>\
                <input type="date" id="end_day_'+ (work_experience) +'" class="form_input date-valid" name="end_day'+ (work_experience) +'">\
            </div>\
        </label>\
    </div>');
    work_experience++;
});