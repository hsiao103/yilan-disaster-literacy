/* 宜蘭縣115年度防災教育素養檢測：模組設定 */
window.GAME_CONFIG={
  title:'宜蘭縣國中小防災素養檢測',
  icon:'🌊',
  subtitle:'國小高年級／國中組・全班最多 30 人以座號連線作答',
  storageKey:'ylddlit',
  publicUrl:'https://hsiao103.github.io/yilan-disaster-literacy/',
  labels:{lv1:'組別',lv2:'形式',cat:'災害類型'},
  lv1Suffix:'',
  tierOrder:['是非題','選擇題'],
  stageSuffix:'檢測',
  csvUrl:'questions.csv',
  defaultN:25, seatMode:true, credit:{text:'宜蘭縣防災教育資訊網',logo:'team-logo.png'}, iconImg:'logo.png',
  theme:{bg:'#0b1730',bg2:'#12264a',card:'#193360',line:'#2e4d80',acc:'#f26a1b',ok:'#4fae5b',mute:'#a9b8d6',deep:'#08122a',glow:'#1c3d78',st1:'#f26a1b',st2:'#f5a03a',stx:'#2a1203',on:'#2f6b3a',joinbg:'#183a70',joinbd:'#6fa0ee',okbg:'#15361f'},
  maxPlayers:30, examPoints:{'是非題':10,'選擇題':4}, defaultLimit:30,
  formUrl:'',
  formFields:{},
  characters:['安安隊長','小水手','頭巾俠','探險家'],
  templateRows:[
    ['國小高年級','是非題','火災','是非','在家煮東西時，即使暫時離開，也應確實做到「人離火熄」。','○','','','','煮食時無人看顧是住宅火災的常見原因。'],
    ['國中組','選擇題','地震','選擇','地震發生時在室內，應先做什麼？','趴下、掩護、穩住','跑到陽台','站在窗邊','到處跑','保護頭頸是第一步。']
  ]
};
