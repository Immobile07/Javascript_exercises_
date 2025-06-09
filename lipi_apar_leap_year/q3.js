function grade(marks){
    if (marks>=80){
        return "A";
    }
    else if (marks>=70 &&marks<80){
        return "B";
    }
    else if (marks>=60 && marks<70){
        return "C";
    }
    else if (marks>=50 && marks<60){
        return "D";}
    else{
        return "F";
    }

}
console.log(grade(100));
console.log(grade(77));
console.log(grade(69));
console.log(grade(51.5));
console.log(grade(49.75));
