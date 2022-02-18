$(document).ready(function(){

    $('#submitBtn').click(function(){
        let name = $('input[name=full_name]').val();
        let coffeeType = $('input[name=coffee_type]:checked').val();

        let extras = [];
        $('input[name=extra]:checked').each(function(){
            extras.push($(this).val());
        });

        let total = 0;
        //add cost of cofee to total
        if (coffeeType == 'turkish'){
            total += 3;
        }
        else if(coffeeType == "american"){
            total +=5;
        }
        else{
            total +=7;
        }
        
        //add extras
        for(let i=0; i<extras.length; i++){
            let extra = extras[i];
            if(extra=="extra_coffee"){
                total += 1.5;
            }
            else if(extra=="whipped"){
                total += 2;
            }
            else{
                total +=3;
            }
        }
        
        //create report
        let report = `Hello ${name}, your total is $${total}. Your order will be ready soon.`
        $('p').text(report);
    });
});