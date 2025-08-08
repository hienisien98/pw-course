# Lesson 04
## Sự khác nhau giữa var và let
**1. Đối với var:**

for (var i = 0; i < 5; i++){

    console.log(i);

}

console.log(i) 

==> sẽ chạy ra kết quả

**2. Đối với let:**

for (let i = 0; i < 5; i++){

    console.log(i);

}

console.log(i) 

==> sẽ ra lỗi i is not defined

**3. Hoisting**

Là một cơ chế trong JavaScript mà trình thông dịch kéo phần khai báo biến/hàm lên đầu phạm vi trước khi thực thi code, chỉ kéo phần khai báo không kéo phần gán giá trị.

Dòng code sau

console.log(a);

var a = 5;

Thì sẽ được Javascript hiểu như sau

var a;

console.log(a);

a = 5;

- Hoisting đối với var:

console.log(a);

var a = 5;

==> Kết quả sẽ ra underfine

- Hoisting đối với let:

console.log(a);

var a = 5;

==> sẽ báo lỗi

## Điều kiện nâng cao
### if....else

if (điều kiện) {

    Khối lệnh nếu điều kiện đúng

} else

    Khối lệnh nếu điều kiện sai

### if....else if ... if

if (điều kiện 1) {

    Khối lệnh nếu điều kiện 1 đúng

} else if (điều kiện 2){

    Khối lệnh nếu điều kiện 2 đúng

} else if (điều kiện 3){

    Khối lệnh nếu điều kiện 3 đúng

}else

    Khối lệnh nếu điều kiện sai

### switch....case

Thay thế cho if else if khi bạn cần so sánh giá trị chính xác, giúp code ngắn gọn dễ đọc và hiệu quả hơn khi có nhiều điều kiện kiểm tra bằng nhau

switch (biểu_thức){

    case giá_trị_1:
        khối lệnh 1
        break; ==> break để khi đã tìm đúng case thì sẽ ko tiếp tục chạy những case bên dưới
    case giá_trị_2:
        khối lệnh 2
        break;
    default:
        khối lệnh default: ==> nếu các case trên ko thỏa thì sẽ mặc định chạy vào default
}

## Phân biệt ==, != và ===, !==
### == và !=
So sánh kiểu "lỏng lẻo", chỉ so sánh về giá trị

const result = "5" == 5; ==> true

### === và !===
So sánh tuyệt đối, so sánh về giá trị và cả kiểu dữ liệu (data type)

const result = "5" == 5; ==> false

## Vòng lặp nâng cao
### for.....in
Dùng tốt cho object (không khuyến khích dùng cho mảng), dùng để duyệt qua tất cả các thuộc tính của objects

let product = {

    Banana: 20,
    Apple: 30,
    Orange: 15

}

for (let property in product){

    console.log(property); ==> kết quả sẽ in ra tên của thuộc tính Banana, Aplle, Orange

    console.log(product[property]); ==> Kết quả sẽ in ra giá trị của thuộc tính

    console.log(`${property}: ${product[property]}`); ==> Kết quả sẽ in ra thuộc tính: giá trị
}

### forEach
Là một phương thức(method) được dùng để duyệt qua từng phần tử trong một mảng

const fruits = ["apple", "banana", "cherry"];

fruits.forEach ((fruit, index) => {

    console.log(`${index}: ${value}`); ==> kết quả sẽ in ra 0: apple 1: banana 2: cherry

})

### for...of
Là một câu lệnh lặp được dùng để lặp qua các giá trị của đối tượng có thể lặp được như Array, String. Map, Set

*** Lưu ý for...of không dùng được với object thông thường

1. Lặp qua mảng (array)

const arr = ["a", "b", "c"];

for (let value of arr){

    console.log(value); ==> kết quả sẽ in ra a, b ,c

}

2. Lặp qua string

for (const char of "Hien"){

    console.log(char); ==> kết quả sẽ in ra H i e n

}

### Continute
- Bỏ qua vòng lặp, chạy vòng lặp tiếp theo
- Nếu gặp continute thì bỏ qua đoạn code chạy phía dưới, và chạy tiếp vòng lặp tiếp theo

for (let i = 1; i <= 5; i++>){

    if (i % 2 === 0){
        continute;
    }
    console.log(i); ==> kết quả sẽ in ra 1 3 5
}

### Break
Gặp break sẽ thoát khỏi vòng lặp và không chạy vòng lặp tiếp theo

for (let i = 1; i <= 5; i++>){

    if (i % 2 === 0){
        break;
    }
    console.log(i); ==> kết quả sẽ in ra 1
}

## Util function - Hàm tiện ích
Những hàm nhỏ, thường được viết để thực hiện một tác vụ cụ thể, đơn giản và có thể tái sử dụng nhiều lần trong các phần khác nhau của ứng dụng
- String util
- Array util

### String util

1. **trim()** : dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi - Câu lệnh: str.trim()
    - trimStart() hoặc trimLeft() - dùng để xóa khoảng trắng ở đầu
    - trimEnd() hoặc trimRight() - dùng để xóa khoảng trắng ở cuối

2. **toLowerCase()** : dùng để trả về 1 chuỗi mới chuyển các ký tự trong chuỗi thành chữ thường, không làm thay đổi chuỗi gốc
- Ứng dụng thực tế và lưu ý:
    - So sánh chuỗi không phân biệt chữ hoa/thường
    - Chuẩn hóa dữ liệu trước khi lưu hoặc tìm kiếm
    - Không ảnh hưởng đến các ký tự không phải chữ cái

3. **toUpperCase()** : dùng để trả về 1 chuỗi mới chuyển các ký tự trong chuỗi thành chữ hoa, không làm thay đổi chuỗi gốc

4. **includes()** : dùng để kiểm tra chuỗi có chứa 1 chuỗi con cụ thể hay không, trả về giá trị true/false
- Câu lệnh thường str.includes(<tên_biến>.includes("chuỗi muốn tìm"))
- Câu lệnh tìm từ vị trí str.includes(<tên_biến>.includes("chuỗi muốn tìm", 5)) //5 là vị trí muốn tìm
- Ứng dụng thực tế:
    - Kiểm tra từ khóa trong chuỗi
    - Lọc danh sách theo chuỗi nhập vào

5. **replace()** : dùng để thay thế một phần của chuỗi bằng một chuỗi khác, sinh ra chuỗi mới và không thay đổi chuỗi gốc
- Câu lệnh:

        const t = "apple, banana, apple";

        console.log(t.replace("apple", "orange")); ==> kết quả trả ra organe, banana, apple

- Ứng dụng thực tế:
    - Làm sạch dữ liệu người dùng nhập
    - Cảm biến từ ngữ nhạy cảm

5. **split()** : dùng để tách chuỗi thành một danh sách các phần tử dựa trên một ký tự phân cách nhất định
- Câu lệnh:

        s = "apple,banana,cherry"

        result = s.split(",")

        print(result)

- Ứng dụng thực tế:
    - Đọc dữ liệu từ file CSV hoặc văn bản
    - Tách từ trong câu
    - Tách dữ liệu từ đầu vào người dùng (input)
    - Phân tích cú pháp dữ liệu văn bản 

6. **substring()** - dùng để trích xuất một chuỗi con (substring) từ chuỗi gốc, dựa trên vị trí số (index), trả vê chuỗi mới, không làm thay đổi chuỗi gốc
- Câu lệnh:

        let str = "JavaScript"

        let result = str.substring(0, 4) //0 là startIndex và 4 là endIndex

        console.log(result) => kết quả trả ra Java

        ---------

        console.log(str.substring(4)) => kết quả trả ra Script //cắt từ vị trí 4 trở đi

- Ứng dụng thực tế:
    - Lấy tên từ chuỗi Họ và tên
    - Lấy phần mở rộng của file

7. **indexOf()** - là một tiện ích quan trọng, dùng để tìm vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi gốc
- Câu lệnh:

        let text = "Hello JavaScript!"

        console.log(text.indexOf("Java")); => kết quả trả ra 6 //bắt đầu từ k1y tự J

        console.log(text.indexOf("Script")); => kết quả trả ra 10

        console.log(text.indexOf("Python")) => kết quả trả ra -1 // không tồn tại

- Ứng dụng thực tế
    - Kiểm tra chuỗi có chứa từ nào không
    - Dùng thay cho .includes() nếu cần vị trí

### Array util

1. **map** : là một hàm tiện ích mạnh được dùng để duyệt qua từng phần tử của mảng và biến đổi từng phần tử thành giá trị mới, từ đó tạo ra một mảng mới
- Câu lệnh:

        let numbers = [1, 2, 3, 4];
        let doubleNumber = numbers.map(function(num){
            return num*2;
        })
        console.log(doubleNumber) => trả ra mảng mới [2, 4, 6, 8]
- Ứng dụng thực tế:
    - Chuyển đổi đối tượng
    - Tính tổng từng phần tử + index

2. **filter** : dùng để tạo ra một mảng mới chứa các phần tử thỏa mãn điều kiện mà bạn chỉ định
- Câu lệnh:

        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
        });
        console.log(evenNumbers); => kết quả trả ra 2, 4, 6

- Ứng dụng thực tế:
    - Lọc dữ liệu từ API
    - Tìm kiếm phần tử thỏa mãn điều kiện cụ thể
    - Xóa phần tử không mong muốn khỏi mảng

3. **find** - dùng để tìm phần tử đầu tiên trong mảng thỏa điều kiện cụ thể
- Câu lệnh:

        const users = [
            { id: 1, name: 'An' },
            { id: 2, name: 'Bình' },
        ];
        const user = users.find(u => u.id === 2);
        console.log(user); => Kết quả trả ra {id:2, name: 'Bình'}

- Ứng dụng thực tế:
    - Tìm người dùng theo ID
    - Tìm sản phẩm theo tên hoặc thuộc tính
4. **reduce** - dùng để biến đổi toàn bộ mảng thành một giá trị duy nhất(tổng, object, mảng mới ....)
- Câu lệnh:

        const numbers = [1, 2, 3, 4];
        const total = numbers.reduce((sum, num) => sum + num, 0);
        console.log(total); => kết quả trả ra = 10

- Ứng dụng thực tế:
    - Tính tổng/ trung bình
    - Gom nhóm dữ liệu
    - Đếm số lần xuất hiện
    - Tạo một object từ một mảng

5. **some** - dùng để kiểm tra ít nhất một phần tử trong mảng thỏa điều kiện, trả về kiểu true/false
- Câu lệnh:

        const numbers = [1, 3, 5, 8];
        const hasEven = numbers.some(n => n % 2 === 0);
        console.log(hasEven); => kết quả trả ra = true

- Ứng dụng thực tế: 
    - Kiểm tra xem có sản phẩm nào hết hàng
    - Kiểm tra xem người dùng có quyền admin không
    - Kiểm tra dữ liệu có hợp lệ ít nhất một mục

6. **every** - dùng để kiểm tra tất cả các phần tử trong mảng thỏa điều kiện, trẻ về kiểu true/false
- Câu lệnh: 

        const ages = [22, 25, 29];
        const allAdults = ages.every(age => age >= 18);
        console.log(allAdults); => kết quả trả ra = true

- Ứng dụng thực tế:
    - Kiểm tra toàn bộ sản phẩm đều còn hàng
    - Kiểm tra form nhập liệu hợp lệ toàn bộ trường
    - Kiểm tra tất cả người dùng đều đã xác thực

7. **push** - dùng để thêm phần tử mới vào cuối mảng
- Câu lệnh: 

        const arr = [1, 2];
        arr.push(3) => kết quả trả ra [1, 2, 3]

- Ứng dụng thực tế: 
    - Thêm dữ liệu mới vào danh sách
    - Ghi log hoặc lịch sử thao tác
    - Xây dựng hàng đợi (queue)

8. **shift** - dùng để loại bỏ phần tử đầu tiên của mảng
- Câu lệnh: 

        const arr = [1, 2, 3];
        const first = arr.shift(); => kết quả trả ra [2, 3]

- Ứng dụng thực tế: 
    -Lấy phần tử đầu trong hàng đợi
    - Xử lý theo thứ tự (FIFO)
    - Xóa dữ liệu cũ khỏi bộ đệm

9. **sort** - dùng để sắp xếp mảng theo thứ tự tăng hoặc giảm
- Câu lệnh: 

        const nums = [10, 3, 20];
        nums.sort((a, b) => a - b); => kết quả trả ra = [3, 10, 20]

- Ứng dụng thực tế: 
    - Sắp xếp sản phẩm theo giá
    - Sắp xếp người dùng theo tên, tuổi
    - Sắp xếp ngày tháng, bảng điểm