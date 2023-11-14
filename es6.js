//1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
let arr = [-1, 3, 4, 5, 6, 7, 4, 3, 8, 9];
let newArr = arr.map(function (item) {
    if (item > 5) {
        return item;
    }
})
console.log(newArr);
let newArr2 = newArr.filter((item) => item > 5);

console.log(newArr2);

//2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let sum = arr.reduce((sum, item) => sum + item);
console.log(sum);

//3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

const result = (number) => arr.some(item => item === number) ? number : "Khong tim thay";
console.log(result(999));

function isExist(number) {
    for (const numberElement of arr) {
        return numberElement === number ? number : "Khong tim thay";
    }
}

console.log(isExist(99));

//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

const areAllGreaterThan0 = (array) => array.every(item => item > 0) ? "yes" : "no";
console.log(areAllGreaterThan0(arr));

//5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
// c1
let newArrGreaterThan3 = arr.filter((item) => item > 3);
console.log(newArrGreaterThan3);
let firstNumber = 0;
let [a, b, ...c] = newArrGreaterThan3;
firstNumber = a;
console.log(firstNumber);

// c2
function findFirstNumberGreaterThan3(array) {
    let newArrGreaterThan3 = array.filter((item) => item > 3);
    let firstNumber = 0;
    let [a, b, ...c] = newArrGreaterThan3;
    firstNumber = a;
    return firstNumber;
}

console.log(findFirstNumberGreaterThan3(arr));

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên
// vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let first = 0;
let restArr = [];
const destruc = (array) => {
    let[a,b,...c] = array;
    first = a;
    for (let i = 1; i < array.length; i++) {
        restArr.push(array[i]);
    }
    return restArr, first;
}

destruc(arr);
console.log(first);
console.log(restArr);

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name: "Ly",
    age: 35
}
let{name,age} = person;
console.log(name, age);

//8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrayNumberA],[...arrayNumberB]) => {
    let numberResultArray = [...arrayNumberA,...arrayNumberB];
    return numberResultArray.reduce((sum, item) => sum + item)
}
console.log(sumArray([1,3,2,34,222,12,1],[1,222,123,41]));

//9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng
// "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
const nameArr = (...names) => {
    return names;
}
console.log("Welcome " + nameArr('A', 'B', 'C'));

// 10. Tạo một đối tượng "book" với thuộc tính "title",
// "author" và "pages" bằng cách sử dụng Enhanced object literals.
// Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title : "My life",
    author : "Ly",
    page: 35,
    toString : function () {
        console.log(this.title + " " + this.author +" "+ this.page);
    }
};
book.toString();
