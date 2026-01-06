// String  Number Boolean Oject Array
/*
let fname = "John"; // String
console.log("Name:", fname);
const PI = 3.14; // Number
/*
// Number
let age = 30; // Number
let height = 175.5; // Number
*/
/*
fname = "Bob";
PI = 3.14159;
console.log("Name:", fname);
console.log("Age:", age);
console.log("Height:", height);

/*
+ = บวก
- = ลบ
* = คูณ
/ = หาร
% = หารเอาเศษ
*/
/*
let nn1 = '10';
let nn2 = '3';

let result1 = nn1 + nn2;
console.log("ผลบวก:", result1);

/**
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้อยกว่าหรือเท่ากับ
 */
/*
 let n1 = 10
 let number2 = 20;
 let condition = n1 < number2;
 console.log("condition", condition)

 // if-else codition
 if (number1 > number2) {
    console.log("number is greater than or eqal to number2");
 } else if (number1 < number2) {
    console.log("this is else if");
 } else {
    console.log('this is else')
 }

 /**
  Grade
  >= 80 เป็นเกรด A
    >= 70 เป็นเกรด B
    >= 60 เป็นเกรด C
    >= 50 เป็นเกรด D
    < 50 เป็นเกรด F
  *//*
 let score =75;
 
if (score >= 80) {
    console.log('Grade A');
} else if (score >= 70) {
    console.log('Grade B');
} else if (score >= 60) {
    console.log('Grade C');
} else if (score >= 50) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}

/*
&& และ
|| หรือ
! not หรือ ไม่
*/
/*
Grade
let s1 = 5;
let s2 = 10;

let condition1 = (s1 > 0 && s2 > 0); //true && false
console.log("condition1:", condition1); 

let age = 25
let gender = "female"
if (age >= 18 && gender =="female" || age >=20) {
    console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
}

let number1 = 5

if (number1 % 2 == 0) {
    console.log("เป็นเลขคู่")
} else {
    console.log("เป็นเลขคี่")
}

/**
 while
 for
 */
/*
 let conter = 0;
 while (conter <=5) { //true
conter = conter +1;
console.log("while:", conter);
 }
 
 for (let i = 0; i <=4; i = i +1) {
    console.log("for:",i);
 }
 /**
     array
 */
 /*
    let a = 10
    let b = 20
    let c = 30

    let abc = [10,20,30];
    console.log(abc); // [10,20,30]
    console.log(abc[1]) // [10,20,30]

    ages = [40,45,50]
    console.log(ages); // [40,45,50]

    // ต่ออาเรย์ 
    ages.push(55);
    console.log(ages); // [40,45,50,55]

    // ความยาวของอาเรย์
    console.pop();
    console.log(ages); // [40,45,50]

    if (ages.includes(45)) { // true
        console.log("พบ 45 ในอาเรย์"); // พบ 45 ในอาเรย์
    }

    let number = [90, 60, 80, 40, 50]
    number.sort();
    console.log(number);

    let name = ["John", "Jone", "Doe"]
    name.push("Smith")
    console.log(name)
    console.log(name.length)

    for (let i= 0; i < name.length; i++){
        console.log(name[i]);
}

//**
object
 */
/*

let student = {
    age: 20,
    Name: "Emma",
    Grade: "A"
}
console.log(student);
console.log(student.name);
},{
let student = {
    age: 20,
    Name: "Emma",
    Grade: "A"
}
for (let i = 0; i<  student.length; i++) {
    console.log("Student " + (i + 1) + ":")
    console.log("Name " + (student[i].name))
    console.log("Age " + (student[i].age))
    console.log("Grade " + (student[i].grade))
}

//**
// fuction
//  */
// ประกาศฟังก์ชัน

/*
function calculation_grade(score){
    if (score >=90){
    grade = 'A'
    }else if (score >= 80){
    grade = 'B'
    }else if (score >=70){
    grade = 'C'
    }else if (score >=60){
    grade = 'D'
    }else {
    grade = 'F'
}
return grade
}
// เรียกใช้ฟังก์ชัน
let student_score = 85;
let student_grade = calculation_grade(student_score);
console.log("Stdent's grade is: " + student_grade);
*/

/*
array
*/

/*
let scores = [10, 20 ,30 ,40 ,50];

for (let i = 0; i < score.length; i++){
    console.log(`Score at index ${i} is ${scores[i]}`);
}

scores.forEach((s) => {
    //console.log('score:', s);
    console.log(`Score: ${s}`)
})

/* scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
*/
/*
scores = scores.map((s) => {
    return s * 2;
})
    */
   /*
   let score = [10, 20, 30, 40, 50];
   let newscore = []

   for (let index = 0; index <score.length; index++) {
    console.log('score', score[index])
    if (score[index] >= 30)
        newscore.push(score[index])
}

console.log('newScore :',newscore)
newScore.forEach((ns) => {
    console.log('new score: ', ns)
})
/*
let newScore = score.filter{(s) => 
    return s >= 30
}
*/
/**
 object + function 
 */

 let students = [
    {
       Names: 'aa',
       score: '50',
       grade: 'A'
    },
    {
    Names: 'bb',
       score: '60',
       grade: 'B'
    }
 ]

 console.log('Student :', students[0])

 let student = students.find((s)=> {
    if (s.name == 'bb') {
        return true
    }
 })

 let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
 })
 console.log('student:' ,student)
 console.log(doublescore_student)

 let highScore_student = student.filter((s) => {
    if (s.score >= 110) {
        return true
    }
 })