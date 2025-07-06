// Excercises: Level 1
// 1)
function fullName(firstName: string, lastName: string): string { 
    return `${firstName} ${lastName}`;
}

// 2)
function addNumbers(a: number, b: number): number{
    return a + b;
}

// 3)
function areaCircle(r: number): number{
    return 3.14 * r * r;
}

// 4)
function celciusToFahr(deg: number): number{
    return deg * (9/5) + 32;
}

// 5)
function bmiCalc(weightKg: number, height: number): string{
    let bmi: number = weightKg / (height * height)
    
    if(bmi < 18.5){
        return `Underweight with BMI of ${bmi}`;
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        return `Normal weight with BMI of ${bmi}`;
    }
    else if(bmi >= 24.9 && bmi < 25){
        return `Overweight with BMI of ${bmi}`;
    }
    else{
        return `Obese with BMI of ${bmi}`; 
    }
}

// 6)
function checkSeason(month: string): string{
    let seasonAutumn = ["September", "October", "November"];
    let seasonWinter = ["December", "January", "February"];
    let seasonSpring = ["March", "April", "May"];
    let seasonSummer = ["June", "July", "August"];
    let season = "";

    for(let i = 0; i < 3; i ++){
        if(month == seasonAutumn[i]){
            season = "Autumn";
        }
        else if (month == seasonWinter[i]){
            season = "Winter";
        }
        else if (month == seasonSpring[i]){
            season = "Spring";
        }
        else if (month == seasonSummer[i]){
            season = "Summer";
        }
        else{
            season = "Invalid input";
        }
    }
    return season;
}

