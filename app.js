$(".dangnhap").on("keyup",function(e){
    // 13 nut enter
    if(e.keyCode == 13 && $(".dangnhap").val().trim() !="")
    {
        var task = $("<div class='task'></div").text($(".dangnhap").val());
        var del = $ ("<i class='fas fa-trash-alt'style='color: red;'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });
        var check = $ ("<i class='fas fas fa-check'style='color: green;''></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });
        task.append(del,check);
        $(".notcomp").append(task);
        // xoa noi dung trong input
        $(".dangnhap").val("");
    }
});