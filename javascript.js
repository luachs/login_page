document
  .getElementById("LoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu

    // Lấy giá trị từ các trường nhập liệu
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập
    if (username === "user" && password === "pass") {
      //   alert("Login successful!");
      window.location.href =
        "https://www.facebook.com/profile.php?id=100058862585591";
      // Thực hiện hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng tới trang khác
    } else {
      alert("Invalid username or password.");
    }
  });
