//alert("TEST!!!");
//這邊是用JQuery寫的前端程式碼
$(function () {
  console.log("HIHI,我是來自JS的訊息");
  setTimeout(() => {
    $("#wording").text("JS,修改一秒後的文字");
  }, 1000);
  $(".click_test").click(() => {
    alert("案到按鈕了");
    $.ajax({
      url: "/data",
      type: "GET"
    })
      .then(res => {
        console.log(res);
        $("#wording").after(`<div${res["mes"]}</div>`);
      })
      .catch(err => {
        console.log(err);
      })
  })


});