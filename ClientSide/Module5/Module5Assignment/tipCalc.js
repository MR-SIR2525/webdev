function calculateTip()
{
    bill = document.getElementById("billEntry").value;
    tip = document.getElementById("tipEntry").value;
    resultTip = 0.00;
    resultBill = 0.00;

    if (bill > 0.00)
    {
        if (tip > 0.00)
        {
            resultTip = parseFloat(bill * (tip/100));
            resultBill = parseFloat(bill) + parseFloat(resultTip);
        }
        else 
            resultBill = parseFloat(bill);
    }
    
    document.getElementById("tipHere").innerText = resultTip.toFixed(2);
    document.getElementById("totalHere").innerText = resultBill.toFixed(2);
        
}