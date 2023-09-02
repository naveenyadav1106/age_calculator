$(document).ready(function(){
    $("#calculate-btn").click(function(){
        var dobvalue=$("#dob").val();
        var dob=new Date(dobvalue);
        var today=new Date();

        var age=today.getFullYear()-dob.getFullYear();

        if(
            today.getMonth()<dob.getMonth() || 
            (today.getMonth()===dob.getMonth() && today.getDate()<dob.getDate())  
        ){
            age--;
        }

        $("#result").text("Your current age is: " + age)
    });
});