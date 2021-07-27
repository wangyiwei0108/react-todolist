# 待辦事項工具
可以紀錄待辦事項的小工具。除了基本的新增、刪除功能之外，也能夠對事項進行修改、標註與篩選。另外，也支援暗黑模式，提供使用者另一種介面顏色的選擇。

## DEMO
[前往頁面](https://wangyiwei0108.github.io/react-todolist/)

## 使用技術
- HTML / CSS / JS
- SASS
- localStorage
- React

## 實現功能
- 具備對事項進行 CRUD（新增、讀取、修改、刪除）之功能
- 能夠以星星數量註記事項的重要程度
- 可於畫面分別顯示已完成、未完成，或全部的事項
- 點擊事項，可轉換事項的完成狀態（已完成、未完成）
- 按下右上角開關，可將 UI 顏色切換為暗黑模式
- RWD：瀏覽器畫面支援手機、平板、電腦等裝置

## 學習記錄
- 使用 useRef 獲取 DOM element 資訊，進而對其操控（使 input 為 focus 狀態，游標自動閃爍）
- 使用 SASS 達成暗黑模式的開關設定
- 設定元件狀態之預設值
- 以 localStorage 儲存資訊
- 以 gh-pages 部署至 Github
---
![GITHUB](https://github.com/wangyiwei0108/react-todolist/blob/master/src/assets/todo.png)
