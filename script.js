
//1 Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let current_user_name = prompt(`Please enter your name`, `Jack`);
alert(`Hello ${current_user_name}`);
//2 Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const currentYear = 2024;
let currentUserAge = prompt(`Please, enter year of your birthday`);

let answer = currentYear - currentUserAge;
alert(`${answer}`)

//3 Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let side = prompt(`Please, enter length of one side`);
let square = side*4;
alert(`${square}`)

//4 Запитай у користувача радіус кола і виведи площу такої окружності.
let radius = prompt('Enter radius');
let squareRadius = 3.14 * (radius*radius);
alert(`${squareRadius}`);

//5 Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let length = prompt('Please, enter a distance');
let time = prompt(`how many time do you want to spend`);
let speed = length / time;
alert(`You should move with speed - ${speed}`)
 
//6 Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
let dollar = prompt(`Enter summ of money`);
let euro = dollar * 0.9;
alert(`${euro}`)