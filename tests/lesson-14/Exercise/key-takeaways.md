# Lesson 14
## Async & Await
- Là 1 cú pháp dùng để xử lý bất đồng bộ (asynchronous)
    - Async: dùng để khai báo hàm bất đồng bộ
    - Await: dùng để chờ một Promise
- Mục đích: Async await giúp tăng hiệu năng xử lý cho hệ thống 

## Test generator
- Tự sinh ra code test khi thao tác
- Record một test có 2 loại:
    - Sử dụng VS Code
        - Record new test :
            1. Nhấn vào icon Testing
            2. Nhấn vào mục Record new -> lúc này pm sẽ tự động sinh ra 1 file test (browser)
            3. Mình thao tác như test case bình thường -> lúc này file test sẽ tự động sinh ra các dòng code tương ứng thao tác mình đã thực hiện
            4. Nếu mình muốn verify test bằng expect thì nhấn chọn các loại Assert có phía trên thanh (Visibility, text, value, snapshot) -> Nhấn vào phần muốn verify -> lúc này trên file sẽ sinh ra dòng code expect
        - Record at cursor : ko tạo ra file mới, đứng tại file nào thì chọn cursor thì ta sẽ tiếp tục gen code tiếp trên file đã có sẵn
    - Sử dụng terminal
        - npx playwright codegen <url> (url của web test)
        - Tương tự thằng trên
- Pick locators
    - npx playwright codegen await page.goto('https://pw-practice.playwrightvn.com/');
- Mục đích thường sử dùng là khi dự án đang gấp, cần phải chạy đi chạy lại 1 test case, không có nhìu thời gian để ngồi viết cho chuẩn fomat

## Visual comparison
- So sánh ảnh chụp màn hình có hiển thị đúng với Expect hay ko
- Generate screenshot:
    1. Nhập câu lệnh - await expect(page).toHaveScreenshot("new-tab.png"); -> bước đầu chạy sẽ báo lỗi vì chưa tồn tại ảnh nào để so sánh đồng thời nó cũng tự động sinh ra 1 file ảnh
    2. Nhấn chạy lần nữa - lúc này mới thực sự là chạy test và so sánh 2 ảnh
- Update screenshot:
    1. Cách 1 là xóa đi folder chứa ảnh cũ và chạy lại từ đầu
    2. Cách 2 là dùng câu lệnh npx playwright test -g "visual comparison" --update-snapshots
- Verify một số phần của trang web:
    1. khai báo biến locator của phần muốn verify
    2. viết lệnh expect(biến đã khai báo)
- Mask location : giúp verify toàn bộ web TRỪ 1 phần không muốn verify (thường sẽ là những phần thay đổi nội dung liên tục như các block quảng cáo)
- Câu lệnh chụp full màn hình:

            await expect(page).toHaveScreenshot({
                fullPage: true,
            })

## Video recording
- Ghi lại toàn bộ quá trình test, giúp theo dõi quá trình chạy test như thế nào
- config
    - Mở file playwright.config và kéo xuống cái trace
    - Mục đích của trace trong Playwright:
        - Ảnh chụp màn hình từng bước
        - Video quay lại session
        - Thông tin DOM, network, console log
        - Timeline tương tác (click, type, navigation...)
    - Mặc định ban đầu trace sẽ là on-first-retry (record khi test bị thất bại lần đầu tiên) có thể chuyển thành on là mặc định record mặc định chạy test
        - off: ko trace
        - on: trace (Thường dùng)
        - on-all-retries: trace tất cả các test bị fail
        - on-first-retry: trace khi fail lần đầu (Thường dùng)
        - retain-on-failure: trace hết nhưng sau đó sẽ xóa những cái pass
        - retain-on-first-failure: Chỉ ghi trace nếu test bị fail
        - retry-with-trace:
    - Thêm config video:
        - mode: off (ko bật record) - on (bật record) - on-first-retry (record test thất bại đầu tiên) - retain-on-failure (record tất cả nhưng sau cùng sẽ chỉ giữ lại các record bị fail trong báo cáo mà thôi)
        - size : {width: 640, height: 480} - confix size của video xuất ra
- Câu lệnh chạy : npx playwright test -g "Test 03 unit record" ("" là tên của test muốn chạy)
- Video sẽ nằm trong mục test-results

## Test Report
- Giải thích chi tiết link test report
    - Cột action: Xem được playwright sử dụng locator nào để tương tác với web + thời gian cho mỗi action
    - Locator: show các locator đã đi qua
    - Log: log các action của playwright
    - Errors: báo test bị fails cái gì
    - Console:
    - Network: chứa các API
    - Source: Chứa phần code
    - Attachment: chưa video và screenshot

## Test emulation
- Device
- Viewport
- Locale & timezone
- Color scheme: màu nền của web
- Geolocation: vị trí địa lý
- Permission: https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
- Further reading : https://playwright.dev/docs/emulation

## Drag and Drop
- Cách 1:
    1. Khai báo 2 biến locator điểm gốc và điểm đến
    2. Viết câu lệnh page.dragAndDrop(điểm gốc, điểm đến);
- Cách 2:
    1. Như cách 1
    2. dùng câu lệnh:

            await page.locator(điểm gốc).hover();
            await page.mouse.down();
            await page.locator(điểm đến).hover();
            await page.mouse.up();

