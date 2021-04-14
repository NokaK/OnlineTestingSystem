$('.add_questions').click(function() {
    $('body').append('\
    <div class="add_additional_question">\
        <input class="main_question" type="text" id="#" name="name" placeholder="კითვის მთავარი ველი (text)">\
        <input class="answer_type" type="text" id="#" name="name" placeholder="პასუხის ტიპის არჩევა">\
        <input class="answer" type="text" id="#" name="name" placeholder="პირველი პასუხის ველი"><br>\
        <button class="add_answer">ახალი პასუხის ველის დამატება</button>\
        <input type="submit" value="del">\
        <input type="submit" value="req">\
    </div>')
});

//Add answer
// $('.add_answer').click(function() {
//     $('.add_answer').after('<input class="answer" type="text" id="#" name="name" placeholder="პირველი პასუხის ველი"><br>')
// });