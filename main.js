$(document).ready(function(){

    $(".display").click(function(){
        let buttonValue = $(this).text();
        let currentText = $(".box").text();
        $(".box").text(currentText + buttonValue);
    });

    $(".num").click(function(){
        $(".sign").prop("disabled", false)
    });

    $(".sign").click(function(){
        $(".sign").prop("disabled", true)
        $(".num").prop("disabled", false)
    });

    $(".AC").click(function(){
        $(".box").text("");
        $(".num").prop("disabled", false)
        $(".sign").prop("disabled", true)
    });

    $(".equal").click(function(){
        let expression = $(".box").text();
        let numbers = expression.match(/\d+(\.\d+)?/g).map(Number);
        let sign = expression.match(/[\+\-\*\/]/).filter(op => op);
        let result = numbers[0];
        for (let i = 0; i < sign.length; i++){
            switch(sign[i]){
                case "+":
                    result = result + numbers[i+1]
                    break;
                case "-":
                    result = result - numbers[i+1]
                    break;
                case "/":
                    result = result / numbers[i+1]
                    break;
                case "*":
                    result = result * numbers[i+1]
                    break;
            }
        }
        $(".box").text(result);
        $(".num").prop("disabled", true)
        $(".point").prop("disabled", true)
    });
});
