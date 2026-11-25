# 宜蘭縣防災教育素養檢測挑戰

以「知識王遊戲模組」製作的專案。內含：
- 防災知識王 2000 題（3～6 年級 × 基本～超高難度、情境題組）
- 新增「宜蘭在地」關卡：每年級 25 題（20 題＋1 組 5 題情境題組），結合蘭陽平原地形、颱風與東北季風、土石流、海嘯、山區道路中斷等在地風險
- 三種玩法：大螢幕搶答（主持人／大螢幕／選手）、個人挑戰（自學、錯題本）、可選填 Google 表單回傳成績

## 上傳到 GitHub Pages
1. 建立公開倉庫 `yilan-disaster-literacy`（名稱不同時，請改 `config.js` 的 `publicUrl`）
2. 把資料夾內所有檔案上傳到倉庫根目錄
3. Settings → Pages → Branch: main / root，網址為 https://hsiao103.github.io/yilan-disaster-literacy/
4. 個人挑戰：網址後加 `#solo`

## 自訂
- 題庫：直接編輯 `questions.csv`（Excel 另存 CSV UTF-8），或在主持人頁「題庫管理」上傳
- 成績回傳：`config.js` 的 `formUrl`／`formFields`
- 情境題組：CSV 的「情境ID」「情境」兩欄，同ID題目整組出現
