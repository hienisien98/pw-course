# Lesson 05
## Function advance
### Lambda function (arrow function)
- Một cách ngắn gọn viết hàm trong JS
- Sử dụng dấu => thay vì từ khóa function
- Câu lệnh:

        (parameters) => {
            // code
        }

### Anonymous functions
- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khav1
- Câu lệnh:

        function (parameters){
            // code
        }

## DOM
- DOM = Document Object Model
- Một element : <option>Canada</option>
    - <option> là thẻ mở
    - </option> là thẻ đóng
- Thẻ mở có thể chứa nhiều thuộc tính trong đó như <option value="usa">
- Thẻ tự đóng: <img src="img.jpg" alt="Image description"/>

### Thẻ HTML thường gặp
- Thẻ <div> : viết tắt của divide, dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> : viết tắt của heading, dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé
- Thẻ <form></form>: dùng để chứa một form thông tin
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button: tạo nút chọn một (radio)
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox)
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống
- Thẻ button: tạo nút bấm
- Thẻ table: hiển thị bảng dữ liệu
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm
    - tbody
            - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày
- Thẻ slider: tạo thanh trượt
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

## Selector
- Là cách chọn phần tử trên trang
- Có nhiều kiểu:
    - XPath selector : thông dụng
    - CSS selector
    - Playwright selector

### XPath selector
- XPath = XML Path
- Có 2 loại XPath:
    - Tuyệt đối: bắt dầu bằng / - ít dùng, nếu đổi code sẽ phải đi maintain lại từng chổ một, mất thời gian
    - Tương đối: bắt đầu bằng //tenthe[@thuoctinh='giatri'] - nên dùng

## Playwright basic syntax
- Các câu lệnh cơ bản
    1. Navigate: await page.goto('url')
    2. Click: await page.locator("xpath").click();
        - //.dblclick() - double click
        - //.click({ button: 'right' }) - click bằng chuột phải
        - //.click({{modifiers: ['Shift']}}) - click chuộc kèm bấm phím khác
    3. Input
        - //.fill('text') - paste text vào input
        - //.pressSequentially('text',{ delay: 100}) - gõ từng chữ 1
    4. Radio/checkbox
        - //.isChecked() - kiểm tra xem giá trị hiện tại đang check hay không
        - //.check() - check vào giá trị
        - //.setChecked(false) - uncheck vào giá trị
    5. Select option : chọn giá trị trong dropdown, list
    6. Set Input file : thêm file