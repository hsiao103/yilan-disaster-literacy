/* 防災知識王：模組設定（修改這個檔案即可換主題，詳見 README）*/
window.GAME_CONFIG={
  title:'宜蘭縣防災教育素養檢測挑戰',
  icon:'🌊',
  subtitle:'宜蘭縣國小防災素養檢測・大螢幕搶答與個人自學挑戰',
  storageKey:'ylddlit',                              // 瀏覽器儲存與連線代號（不同遊戲請用不同代號）
  publicUrl:'https://hsiao103.github.io/yilan-disaster-literacy/',   // 大螢幕 QR Code 使用的網址（正式上線後自動使用實際網址）
  labels:{lv1:'年級',lv2:'難度',cat:'類別'},          // 篩選欄位的名稱
  lv1Suffix:'年級',
  tierOrder:['基本','常識','進階','高級1','高級2','超高難度','情境題組','宜蘭在地'],  // 第二層（難度）的排列順序
  stageSuffix:'挑戰',
  csvUrl:'questions.csv',                            // 網站上的 questions.csv 會優先於內建題庫；改完上傳 GitHub 即生效（讀不到時用 questions.js）

  // ── 個人挑戰成績回傳 Google 表單（不填 formUrl 就不會出現「送出成績」按鈕）──
  // formUrl：表單網址（貼 .../viewform 或 .../formResponse 皆可）。表單須設為「不需登入」、不限制網域。
  formUrl:'',
  // formFields：左邊是本程式的資料，右邊填表單欄位代碼 entry.數字（用「取得預先填入的連結」查）
  // 可用資料：cls 班級座號、name 姓名、scope 範圍、ok 答對數、n 題數、score 分數、acc 正確率、time 用時、wrong 答錯題目、when 送出時間
  formFields:{ /* cls:'entry.111111111', name:'entry.222222222', scope:'entry.333333333', ok:'entry.444444444', n:'entry.555555555', score:'entry.666666666', acc:'entry.777777777', wrong:'entry.888888888' */ },
  characters:['安安隊長','小水手','頭巾俠','探險家'], // 四位選手角色的名稱
  templateRows:[
    ['3年級','基本','地震','選擇','地震發生時，在教室裡第一步要做什麼？','趴下、掩護、穩住','衝出教室','跳窗','站在窗邊','趴下、掩護、穩住可保護頭部。'],
    ['3年級','基本','火災','是非','火災時可以搭電梯逃生。','✕','','','','火災時不能搭電梯，要走安全梯。'],
    ['','','防災常識','選擇','災害發生時，官方消息可以看哪裡？','中央氣象署與政府公告','路邊傳言','沒有來源的貼文','猜測','（年級／難度可留白）']
  ]
};
