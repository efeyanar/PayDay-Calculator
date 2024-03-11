alert("This application calculates the day you will receive your salary according to your TR ID number.");
let kimlik = prompt("Enter your TR ID Number : ");
let sonHane = kimlik.charAt(10);

if (sonHane == 0) {
    alert(`You will receive your salary on the 6th of the month.`);
}
else if(sonHane == 2){
    alert(`You will receive your salary on the 7th of the month.`);
}
else if(sonHane == 4){
    alert(`You will receive your salary on the 8th of the month.`);
}
else if(sonHane == 6){
    alert(`You will receive your salary on the 9th of the month.`);
}
else if(sonHane == 8){
    alert(`You will receive your salary on the 10th of the month.`);
}
else{
    alert(`Please make sure that you have entered your TR ID information correctly.`);
}

