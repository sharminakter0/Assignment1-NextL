//Question-1 Value Detective
console.log("Answer-1: Value Detective")
function describeValue (value) {
    const type = typeof value;
    const truthiness = value ? "truthy" :"falsy";
    return`${type} | ${truthiness}`    
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));


// Question-2 Bangladesh Weekend Machine
console.log("Answer-2: Bangladesh Weekend Machine")
function getDayType (day){
    switch(day.toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day" ;                          
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("tuesday"));
console.log(getDayType("Tour"));
console.log(getDayType("Saturday"));

// Question 3: Username Gatekeeper 
console.log("Answer-3: Username Gatekeeper ");
function validateUsername (username){
    if(username.length < 4){
        return "Too Short";
    }
    if(username.includes(" ")){
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    return "Available"
}


console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

// Question 4: Dhaka CNG Fare Meter
console.log("Answer-4: Dhaka CNG Fare Meter")

function getCngFare(distance, isNight =false, waitingMinutes=0){
    let fare = 50;
    if (distance >2){
        fare = fare +(distance-2)*15;

    }
    fare = fare +waitingMinutes*2;
    if(isNight){
        fare = fare*1.2
    }
    return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5,false,10));
console.log(getCngFare(5,true));
console.log(getCngFare(5,true,10));

// Question 5: Run Chase Commentator 
console.log("Answer-5: Question 5: Run Chase Commentator");

function getChaseVerdict(target, scored, ballsLeft){
    const runsNeeded = target - scored ;
    if(runsNeeded <=0){
        return "Won";
    }
    if(ballsLeft <= 0){
        return "Lost";
    }
    const requiredRate = (runsNeeded/ballsLeft)*6;
    let verdict;

    if(requiredRate <= 6){
        verdict ="Comfortable";
    } else if (requiredRate <=12){
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
} 

console.log(getChaseVerdict(200,200,12));
console.log(getChaseVerdict(200,190,0));
console.log(getChaseVerdict(100,90,12));
console.log(getChaseVerdict(100,80,12));
console.log(getChaseVerdict(100,70,12));
console.log(getChaseVerdict(150,149,1));










