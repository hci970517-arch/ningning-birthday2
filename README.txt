# 寧寧的花子君生日網站

這是一個可自行修改內容、可發布到 GitHub Pages 的靜態網站。

## 檔案
- `index.html`：網站結構
- `style.css`：顏色、排版、動畫與手機版樣式
- `content.js`：預設文字內容（最容易直接修改）
- `script.js`：互動功能與內建編輯器

## 方式一：直接在網站內視覺化修改
1. 開啟網站後按右上角「編輯內容」。
2. 修改欄位文字，按「套用預覽」。
3. 按「下載新版內容檔」，下載 `content.js`。
4. 將下載的新 `content.js` 替換網站資料夾裡原本的 `content.js`。
5. 重新上傳／部署網站，公開網址就會顯示新內容。

注意：內建編輯器的預覽只在目前瀏覽器暫時生效；要讓其他人也看到修改，必須下載新版 `content.js` 並重新發布。

## 方式二：直接編輯程式碼
- 改文字：編輯 `content.js`
- 改顏色、字體、版面：編輯 `style.css`
- 改按鈕或互動：編輯 `script.js`
- 改頁面結構：編輯 `index.html`

## 免費發布到 GitHub Pages
1. 登入 GitHub，建立一個新的 Public repository，例如 `ningning-birthday`。
2. 將這四個檔案上傳到 repository 根目錄。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
6. 等待 GitHub Pages 部署完成，網址通常會是：
   `https://你的GitHub帳號.github.io/ningning-birthday/`

之後只要更新檔案並 commit，網站就會重新發布。

## 圖片
目前人物主視覺是 CSS 原創裝飾插畫，並非官方動畫截圖。若要放入自己有權使用的圖片：
1. 將圖片放進網站資料夾，例如 `images/hanako.jpg`。
2. 在 `style.css` 的 `.character-art` 加上：
   `background-image: url("images/hanako.jpg"); background-size: cover; background-position: center;`
3. 若想更換整體背景，也可在 `.hero` 或其他區塊調整 CSS。

## 音樂
目前沒有內建音樂，以避免未經授權使用商業歌曲。若加入音樂，請使用自己創作或有權使用的音檔。
