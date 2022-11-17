function Total(){
    var sub1 = parseInt(document.getElementById("mach").value);
    var sub2 = parseInt(document.getElementById("dstr").value);
    var sub3 = parseInt(document.getElementById("mgmt").value);
    var sub4 = parseInt(document.getElementById("comp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4;
        document.getElementById("total").innerHTML = "Machine learning marks :"+sub1+"<br> Data structure marks :"+sub2+"<br> Management marks :" +sub3+"<br> Computer engineering marks "+sub4+"<br>             <br> Total marks"+total;
     }
}

function Average(){
    var sub1 = parseInt(document.getElementById("mach").value);
    var sub2 = parseInt(document.getElementById("dstr").value);
    var sub3 = parseInt(document.getElementById("mgmt").value);
    var sub4 = parseInt(document.getElementById("comp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4;
        var Average=total/5;
        document.getElementById("average").innerHTML="your average mark is :"+Average;

    }
}

function grade(){
    var sub1 = parseInt(document.getElementById("mach").value);
    var sub2 = parseInt(document.getElementById("dstr").value);
    var sub3 = parseInt(document.getElementById("mgmt").value);
    var sub4 = parseInt(document.getElementById("comp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4;
        var Average=total/5;

        if(Average>=80 && Average<=100){
            document.getElementById("grade").innerHTML="your grade is A";
        }
        else if(Average>=75 && Average<=80){
            document.getElementById("grade").innerHTML="your grade is B+";
        }
        else if(Average>=70 && Average<=75){
            document.getElementById("grade").innerHTML="your grade is B";
        }
        else if(Average>=65 && Average<=70){
            document.getElementById("grade").innerHTML="your grade is C+";
        }
        else if(Average>=60 && Average<=65){
            document.getElementById("grade").innerHTML="your grade is C";
        }
        else if(Average>=55 && Average<=60){
            document.getElementById("grade").innerHTML="your grade is D+";
        }
        else if(Average>=50 && Average<=55){
            document.getElementById("grade").innerHTML="your grade is D";
        }
        else{
            document.getElementById("grade").innerHTML="You failed your exam";
        }
    }
}