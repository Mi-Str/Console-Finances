var revenue_total = 0;
var averageChange = 0;
var change = 0;
var changeArray = [];
var sumOfChanges = 0;
var increaseValue = 0;
var increaseMonth = "";
var decreaseValue = 0;
var decreaseMonth = "";
const output = document.getElementById('output')

function sumArray(array){
    var sum = 0;

    for (var i = 0; i< array.length; i++){
        sum += array[i];
    }
 return sum;   
} 
// The net total amount of Profit/Loss over the entire period  
function sumRevenue(array){
    
    for (var i = 0; i< array.length; i++){
        revenue_total += array[i][1];
    }
 return revenue_total;

} sumRevenue(finances);



function calculateChange(array){
    
    for (var i = 0; i< array.length; i++){
        if(!array[i+1]) {
        break;
    }
    change = array[i+1][1] - array[i][1];
    changeArray.push(change);
    // check for greatest increase in profit
    if(change > increaseValue) {
        increaseValue = change;
        increaseMonth = array[i+1][0];
    }
    // check for greatest decrease in profit
    if(change < decreaseValue) {
        decreaseValue = change;
        decreaseMonth = array[i+1][0];

    }

}
} calculateChange(finances);


for(var i of changeArray) {
    sumOfChanges = sumArray(changeArray)
}
var avgChange = Math.round(((sumOfChanges / changeArray.length)+ Number.EPSILON) * 100) / 100
var numberMonth = finances.length


var html = `
<dl>
<dt>Financial Analysis</dt>
<dt>-----------------------</dt>
<dd>Total Months: ${numberMonth}</dd>
<dd>Total: $${revenue_total}</dd>
<dd>Average Change: $ ${avgChange}</dd>
<dd>Greatest Increase in Profits: ${increaseMonth}, $${increaseValue}</dd>
<dd>Greatest Decrease in Profits: ${decreaseMonth}, $${decreaseValue}</dd>
</dl> `

output.innerHTML = html



console.log("Financial Analysis");
console.log("------------------");
console.log(`Total Months:${numberMonth}`);
console.log(`Total: $${revenue_total}`);
console.log(`Average  Change:$${avgChange}`);
console.log(`Greatest Increase in Profits: ${increaseMonth}, $${increaseValue}`);
console.log(`Greatest Decrease in Profits: ${decreaseMonth}, $${decreaseValue}`);