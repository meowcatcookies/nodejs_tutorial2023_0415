console.log("hello world!!!");
let a = "hello";
let b = "world";
a += (" " + b);
console.log(a);

let name1 = "GG";
let message1 = "Hey!I am hurt!!!";
let result1 = name1 + " said:" + message1;
let result2 = `heeeeey!!${name1}`
console.log(result1);
console.log(result2);
///////
let today = "Monday";
let weather = "sunny";
let result3 = `${today} is ${weather} day.`;
console.log(result3);
/////
console.log(new Date());
let time = new Date();
console.log(time.getFullYear());

let data = {
    name: "Jeff",
    height: 170,
    weight: 65,
    age: 26,
    class: "A-",
    interest: ["喝酒", "爬山", "寫程式"]
};

console.log(data);

let question2 = "我是" + data["name"] + "，階級為" + data["class"] + "。";
console.log(question2);

let height = 180;
let question3 = "修改" + data["name"] + "的身高為" + data["height"];
console.log(question3);

data["interest"].push("彈吉他");
let question4 = data["interest"];
console.log(question4);

let data2 = {
    name: "Joe",
    height: 175,
    weight: 60,
    age: 28,
    class: "A++",
    interest: ["喝飲料", "露營", "想要轉職"]
};
console.log(data2);

let message2 = "嗨嗨，我是" + data2["name"] + ",階級為" + data2["class"];
console.log(message2);

data2["height"] = 180;
let message3 = "修改" + data2["name"] + "的身高為" + data2["height"];
console.log(message3);

data2["interest"].push("最後一刀");
console.log(data2);

console.log("-".repeat(100));

////// 小試身手 #2
let studentsScores = [
    { name: "Jeff", age: 18, scores: [95, 88, 100] },
    { name: "Leo", age: 22, scores: [90, 97, 98] },
    { name: "Holy", age: 25, scores: [75, 68, 90] },
    { name: "Keven", age: 33, scores: [77, 65, 32] },
    { name: "Jenny", age: 20, scores: [63, 82, 91] },
    { name: "Elle", age: 31, scores: [100, 73, 83] },
];

// 1) 取得 age >= 30 的人名 array  --> [ "Keven" , "Elle" ]
let repeat4 = studentsScores.filter(ele => ele["age"] >= 30)
    .map(ele => ele["name"]);
console.log(repeat4)

// 2) 取得 scores 總和 >= 250 的 資料 , 並將人名 & 年紀合併成一字串 , 成為 array 元素後回傳
//    --> [ 'Jeff-18', 'Leo-22', 'Elle-31' ]
let result5 = studentsScores.filter(ele2 => (ele2["scores"][0] + ele2["scores"][1] + ele2["scores"][2]) >= 250)
    .map(ele2 => (ele2["name"] + "-" + ele2["age"]));
console.log(result5);

console.log("-".repeat(100))
///

let num = 100;
let type;

if (num >= 100) {
    type = "丁組";
} else if (num < 100 && num > 50) {
    type = "丙組";
} else if (num < 0) {
    type = "甲組";
} else { type = "乙組"; };
console.log(type);

///
let age = 99;
let gender = "M";
let message0;
if (gender === "F") {
    message0 = "您的消費金額為$500";
} else if (gender === "M" && age >= 30) {
    message0 = "您的消費金額為$1000";
} else if (gender === "M" && age < 30) {
    message0 = "您的消費金額為$700";
};
console.log(message0);
console.log("-".repeat(100));
///1+~100的總和應該是5050
let sum1 = 0;
for (let i = 0; i < 101; i++) {
    sum1 += i;
};
console.log(sum1);
///// 2. 試撰寫一程式 , 列印出以下圖形  (repeat)
//     ******
//     *****
//     ****
//     ***
//     **
//     *

for (i = 7; i > 0; i--) {
    console.log("*".repeat(i));
};
// 3.  有一變數 teacherName="Jack!" , 試撰寫一程式 , 列印出下列訊息
//     JJJJJ
//     aaaa
//     ccc
//     kk
//     !
let name2 = "Jack!"
let test03 = name2[0]

for (i = 0; i < name2.length; i++) {
    console.log(name2[i].repeat(5 - i));
};
///聖誕樹切兩半

for (i = 0; i < 9; i++) {
    if (i < 5) console.log("*".repeat(5 - i));
    else
        console.log("*".repeat(i - 3));

};// 2. Word Count (字詞統計)
let data3 = ["a", "b", "c", "c", "c", "a", "d", "b", "b", "a", "c", "d", "kk", "a"];
let result6 = {};  // 期望最終長成 { "a" : 3 , "b" : 5 , "c" : 3 } 

for (i = 0; i < data3.length; i++) {
    let key = data3[i];
    if (result6[key]) {
        result6[key] += 1;
    } else {
        result6[key] = 1;
    };
};
console.log(result6);

console.log("-".repeat(50));
///2-3撰寫一段程式，顯示九九乘法表
///(1) 純顯示結果
// (2) 排列成方陣
for (i = 1; i < 10; i++) {
    let msg = "";
    for (j = 1; j < 10; j++) {
        let space = (i * j >= 10) ? " " : "  ";
        msg += (`${i}x${j}=${i * j}${space}`);
    };
    console.log(msg);
};

console.log("-".repeat(100));
// 2-4顯示 費氏數列 值
let fib = (n) => {
    if (n === 1 || n === 2) return 1;
    let a1 = 1;
    let a2 = 1;
    let k = 0;
    for (i = 0; i < n - 2; i++) {
        k = a1 + a2;
        a1 = a2;
        a2 = k;
    }
    return k;
};

for (c = 0; c < 5; c++) {
    console.log(fib(c));
};
console.log("-".repeat(100));

////////////////////////////////////////////////////////////////
//// while-loop

console.log("While loop 開始");

let cnt = 0;

// 只要 ...
while (cnt < 10) {
    console.log(`第 ${cnt} 次執行`);
    cnt++;  //  等同於 cnt +=1
};

///大樂透01~49可重複抽六個號碼
console.log(Math.random());     // 0 <= x < 1   的小數
console.log(Math.random() * 49);  // 0 <= x < 49  的小數
console.log(Math.ceil(Math.random() * 49));  // 1 <= x <= 49 無條件進位的整數
let nums = [];
while (nums.length < 6) {
    let n = Math.ceil(Math.random() * 49);
    if (!(nums.includes(n))) {
        nums.push(n);
    }
    else console.log(`此${n}已重複`, nums);
};
console.log(nums);
console.log("從小排到大", nums.sort((a, b) => a - b))
console.log("從大排到小", nums.sort((a, b) => b - a))