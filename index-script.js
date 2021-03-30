function validation(){
    var loan=document.getElementById("loan").value;
    var interest=document.getElementById("interest").value;
    var year=document.getElementById("year").value;
    
    if(loan==null || loan=="" || loan==0){
        alert("please enter the amount above zero"); 
        return false;
    } else if(interest==null || interest==""){
        alert("please enter the rate of interest above zero");  
        return false;
    }else if(year==null || year==""){
        alert("repayment filed cannot be empty above zero");  
        return false;
    } else
        calculate();  
}

function calculate()
{
    $("#outTable").find("tr:gt(0)").remove(); 

    var p = document.getElementById('loan').value;   
    var r = document.getElementById('interest').value / 100 / 12;
    var t = document.getElementById('year').value * 12;
    var x = Math.pow(1 + r, t);
    var monthlyPayment = (p*x*r)/(x-1);
    var amtMonthly = Math.round(monthlyPayment);
    var totInterest = Math.round((monthlyPayment * t) - p);
    var interestPerMonth = totInterest/t;
    var totAmount = (monthlyPayment*t);
    var principleAmt = monthlyPayment-interestPerMonth;

    var tbodyRef = document.getElementById('outTable').getElementsByTagName('tbody')[0];

    for(i=1; i<=t; i++)
    {
        var outstanding = (monthlyPayment*t)-(monthlyPayment*i);
        // console.log(i, amtMonthly, Math.round(principleAmt), Math.round(interestPerMonth), Math.round(outstanding))
        var newRow = tbodyRef.insertRow();
        //count
        var newCellCount = newRow.insertCell();
        var newTextCount = document.createTextNode(i);
        newCellCount.appendChild(newTextCount);
        //payment
        var newCellPayment = newRow.insertCell();
        var newTextPayment = document.createTextNode(amtMonthly);
        newCellPayment.appendChild(newTextPayment);
        //principle
        var newCellPrinciple = newRow.insertCell();
        var newTextPrinciple = document.createTextNode(Math.round(principleAmt));
        newCellPrinciple.appendChild(newTextPrinciple);
        //intetrest
        var newCellIntetrest = newRow.insertCell();
        var newTextIntetrest = document.createTextNode(Math.round(interestPerMonth));
        newCellIntetrest.appendChild(newTextIntetrest);
        //outstanding
        var newCellOutstanding = newRow.insertCell();
        var newTextOutstanding = document.createTextNode(Math.round(outstanding));
        newCellOutstanding.appendChild(newTextOutstanding);
        
    }
}