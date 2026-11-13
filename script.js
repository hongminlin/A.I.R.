
// ==========================
// 一、頁面切換功能
// ==========================

window.showPage = function(page) {

  // 找出所有頁面
  let pages = document.querySelectorAll(".page");

  // 隱藏所有頁面
  pages.forEach(function(item) {
    item.classList.remove("active");
  });

  // 顯示選擇的頁面
  let targetPage = document.getElementById("page-" + page);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  // 找出所有導覽列
  let links = document.querySelectorAll(".nav-link");

  // 移除所有選取效果
  links.forEach(function(item) {
    item.classList.remove("active");
  });

  // 設定目前選取的導覽列
  let targetLink = document.getElementById("nav-" + page);

  if (targetLink) {
    targetLink.classList.add("active");
  }

};


// ==========================
// 二、水費計算功能
// ==========================

window.calculate = function() {

  // 取得輸入的用水度數
  let usageInput = document.getElementById("usage");

  let usage = Number(usageInput.value);


  // 檢查輸入資料
  if (
    usageInput.value.trim() === "" ||
    !Number.isFinite(usage) ||
    usage < 0
  ) {

    alert("請輸入正確的用水度數！");

    return;

  }


  // ==========================
  // 三、計算各級距度數
  // ==========================

  let tier1 = Math.min(usage, 20);

  let tier2 = Math.min(Math.max(usage - 20, 0), 40);

  let tier3 = Math.min(Math.max(usage - 60, 0), 40);

  let tier4 = Math.max(usage - 100, 0);


  // ==========================
  // 四、設定每度單價
  // ==========================

  let price1 = 7.35;

  let price2 = 9.45;

  let price3 = 11.55;

  let price4 = 12.075;


  // ==========================
  // 五、計算各級距金額
  // ==========================

  let money1 = tier1 * price1;

  let money2 = tier2 * price2;

  let money3 = tier3 * price3;

  let money4 = tier4 * price4;


  // ==========================
  // 六、計算總金額
  // ==========================

  let total = money1 + money2 + money3 + money4;


  // ==========================
  // 七、顯示水費結果
  // ==========================

  document.getElementById("tier1").innerText =
    money1.toFixed(2) + " 元";

  document.getElementById("tier2").innerText =
    money2.toFixed(2) + " 元";

  document.getElementById("tier3").innerText =
    money3.toFixed(2) + " 元";

  document.getElementById("tier4").innerText =
    money4.toFixed(2) + " 元";

  document.getElementById("total").innerText =
    total.toFixed(2) + " 元";


  // ==========================
  // 八、更新水費統計卡片
  // ==========================

  document.getElementById("summary-usage").innerText =
    usage + " 度";

  document.getElementById("summary-total").innerText =
    total.toFixed(2) + " 元";

};


// ==========================
// 九、瓦斯費計算功能
// ==========================

window.calculateGas = function() {

  // 取得輸入的用氣度數
  let usageInput = document.getElementById("gasUsage");

  let usage = Number(usageInput.value);


  // 取得輸入的每度單價
  let priceInput = document.getElementById("gasPrice");

  let price = Number(priceInput.value);


  // ==========================
  // 十、檢查輸入資料
  // ==========================

  if (
    usageInput.value.trim() === "" ||
    priceInput.value.trim() === "" ||
    !Number.isFinite(usage) ||
    !Number.isFinite(price) ||
    usage < 0 ||
    price < 0
  ) {

    alert("請輸入正確的用氣度數及瓦斯單價！");

    return;

  }


  // ==========================
  // 十一、計算瓦斯費
  // ==========================

  let total = usage * price;


  // ==========================
  // 十二、顯示計算結果
  // ==========================

  document.getElementById("gas-result-usage").innerText =
    usage + " 度";

  document.getElementById("gas-result-price").innerText =
    price.toFixed(2) + " 元";

  document.getElementById("gas-total").innerText =
    total.toFixed(2) + " 元";


  // ==========================
  // 十三、更新瓦斯統計卡片
  // ==========================

  document.getElementById("gas-summary-usage").innerText =
    usage + " 度";

  document.getElementById("gas-summary-total").innerText =
    total.toFixed(2) + " 元";

};
