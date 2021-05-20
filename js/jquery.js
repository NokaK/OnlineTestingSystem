//Create bank

$("#teacher_bank").on("click", function() {
    $('form').removeClass('d-none');
});



// Collapse-Additional questions

$("#qeust_checkbox").on("click", function() {
    if ($("#quest_collapse").hasClass("d-none")){
        $('#quest_collapse').removeClass('d-none');
    } else {
        $('#quest_collapse').addClass('d-none');
    }
});



// Completion Date

//add and delete end date class
$("form").on('click', '.working_now', function() {
    if ($(this).parent().find(".end_date").hasClass("d-none")){
        $(this).parent().find(".end_date").removeClass('d-none');
    } else {
        $(this).parent().find(".end_date").addClass('d-none');
    }
});



// Add additional questions

var add_questions = 1;
$('.add_questions').on('click', function() {
    $('form').append('\
    <div class="add_additional_question">\
        <input class="main_question" type="text" name="main_question-vell'+ (work_experience) +'" placeholder="კითვის მთავარი ველი (text)">\
        <input class="answer_type" type="text"  name="ans-typ'+ (work_experience) +'" placeholder="პასუხის ტიპის არჩევა">\
        <input class="answer" type="text" id="answer_'+ (work_experience) +'" name="answer_'+ (work_experience) +'" placeholder="პირველი პასუხის ველი"><br>\
        <button class="add_answer btn">ახალი პასუხის ველის დამატება</button>\
        <input type="submit" value="del">\
        <input type="submit" value="req">\
    </div>');
    add_questions++;
});



// Add answer

$("form").on('click', '.add_answer', function() {
    $(this).before('<input class="answer" type="text" name="name" placeholder="პირველი პასუხის ველი"><br>')
});



// Add work Experience

var work_experience = 1;
$('.add_work_experience').on('click', function() {
    //if you want to add a block above, write "$('#mob_num').after"
    $('.add_work_experience').before('\
    <div id="work-exp-cont-'+ (work_experience) +'" class="content-box">\
        <label for="work-exp-'+ (work_experience) +'">სამუშაო გამოცდილება</label>\
        <div class="input-cont">\
            <input type="text" name="work-exp-'+ (work_experience) +'" id="work-exp-'+ (work_experience) +'" class="form_input workexp-valid input-animation">\
        </div>\
    </div>\
    <div id="org-name_cont'+ (work_experience) +'" class="content-box">\
        <label for="org-name-'+ (work_experience) +'">ორგანიზაციის სახელი</label>\
        <div class="input-cont">\
            <input type="text" name="org-name-'+ (work_experience) +'" id="org-name'+ (work_experience) +'" class="form_input workexp-valid input-animation">\
        </div>\
    </div>\
    <div id="position-cont'+ (work_experience) +'" class="content-box">\
        <label for="position-'+ (work_experience) +'">თქვენი პოზიცია</label>\
        <div class="input-cont">\
            <input type="text" name="position-'+ (work_experience) +'" id="position-'+ (work_experience) +'" class="form_input workexp-valid input-animation">\
        </div>\
    </div>\
    <div>\
        <input class="working_now checkbox" type="checkbox">\
        მოცემულ მომეტში ვმუშაობ აღნიშნულ ორგანიზაციაში\
        <div class="content-box">\
            <label for="start_day_'+ (work_experience) +'">დაწყების თარიღი:</label>\
            <div class="input-cont">\
                <input type="date" id="start_day_'+ (work_experience) +'" class="form_input date-valid" name="start_day'+ (work_experience) +'">\
            </div>\
        </div>\
        <div class="end_date content-box">\
            <label for="end_day_'+ (work_experience) +'">დასრულების თარიღი:</label>\
            <div class="input-cont">\
                <input type="date" id="end_day_'+ (work_experience) +'" class="form_input date-valid" name="end_day'+ (work_experience) +'">\
            </div>\
        </div>\
    </div>');
    work_experience++;
});