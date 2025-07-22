# Lesson 02
## Sự khác nhau của Git & GitHub
Git: Là 1 phần mềm, cài trên máy
Github: Là 1 dịch vụ web, Host trên website
## Git - three states
1. Working Directory
2. Staging Area
3. Repository
## Các câu lệnh khởi tạo Git
1. Câu lệnh khởi tạo thư mục: git init
2. Câu lệnh cấu hình git:
- Cho 1 repo :
    - git config user.name "<name>"
    - git config user.email "<email>"
- Cho toàn bộ máy tính (default)
    - git config --global user.name "user"
    - git config --global user.email "email"
- Vd: có 2 thư mục lesson-2-git1, lesson-2-git2
    - lesson-2-git1: name="Hien", email="hienishien98@gmail.com"
3. Câu lệnh thêm file vào vùng staging:
- Thêm 1 file: git add <file_name> (vd: git add <file_name>)
- Thêm toàn bộ: git add .
4. Câu lệnh check status: git status
- File màu xanh: vùng staging
- File màu đỏ: vùng working directory
5. Câu lệnh Commit: git commit -m "message"
6. Câu lệnh kiểm tra lịch sử commit: git log
## Commit convention
- Convention = Quy tắc : Giúp cả team làm việc với nhau theo 1 quy tắc, code gọn sạch
- VD: trong lớp dùng convention: <type>: <short_description>
- type: loại commit
    - **chore**: sửa nhỏ lẻ, chính tả, xoá file không dùng tới
    - **feat**: thêm tính năng mới, test case mới
    - **fix**: sửa lỗi 1 test trước đó

# Javascript
1. Câu lệnh in ra màn hình : console.log()
2. Data type: String, Number, Bigint, Boolean, Underfined, Null, Symbol, Object
3. Comparison operator: >, <, ==, ===, != ...
4. Unary operator: i++, i=i+1
5. Arithmetic operator: +, -, *, /
6. Conditional: if else
7. Loops: dòng lặp for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>)