(function(){
const defaults=window.BIRTHDAY_CONTENT||{};
let content={...defaults};
const $=id=>document.getElementById(id);
const fieldLabels={
eyebrow:"首頁小標",recipient:"收件人稱呼",heroTitle:"首頁大標題",heroCopy:"首頁介紹",
greetingTitle:"花子君開場台詞",greetingText:"花子君開場內文",missionTitle:"生日任務標題",missionCopy:"生日任務說明",
cakeTitle:"蛋糕區標題",cakeCopy:"蛋糕區說明",wishText:"許願成功祝福",letterTitle:"信件標題",
letterP1:"信件第一段",letterP2:"信件第二段",letterP3:"信件第三段",letterP4:"信件第四段",letterSign:"信件署名",
finalTitle:"最後彩蛋標題",finalCopy:"最後彩蛋說明",finalGreeting:"最後祝福標題",finalMessage:"最後祝福內容"
};
function applyContent(){
 document.querySelectorAll("[data-field]").forEach(el=>{
  const key=el.dataset.field;if(content[key]!==undefined)el.textContent=content[key];
 });
}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300)}
applyContent();
const petals=$("petals");
for(let i=0;i<22;i++){const p=document.createElement("span");p.className="petal";p.textContent=["✿","❀","✧"][i%3];p.style.left=Math.random()*100+"%";p.style.animationDuration=7+Math.random()*9+"s";p.style.animationDelay=-Math.random()*14+"s";p.style.fontSize=10+Math.random()*13+"px";petals.appendChild(p)}
$("beginBtn").onclick=()=>$("story").scrollIntoView({behavior:"smooth"});
$("cakeGo").onclick=()=>$("cake").scrollIntoView({behavior:"smooth"});
$("letterGo").onclick=()=>$("letter").scrollIntoView({behavior:"smooth"});
$("secretGo").onclick=()=>$("secret").scrollIntoView({behavior:"smooth"});
let lit=0,blown=false;
$("lightBtn").onclick=()=>{
 if(blown)return toast("蠟燭已經吹熄，願望正在路上！");
 if(lit>=3)return toast("三根蠟燭都亮起來了！");
 document.querySelector('[data-candle="'+lit+'"]').classList.add("lit");lit++;
 $("candleStatus").textContent=lit===3?"三根蠟燭都亮了！現在可以許願。":"已點亮 "+lit+" / 3 根蠟燭。";
 if(lit===3)$("lightBtn").textContent="✨ 全部點亮！";
};
$("blowBtn").onclick=()=>{
 if(lit<3)return toast("先點亮三根蠟燭，再許願吧！");
 if(blown)return;
 blown=true;$("cakeEmoji").textContent="🍰";$("candleStatus").textContent="呼——願望已經送往星空！";
 $("wishMessage").hidden=false;$("lightBtn").disabled=true;
};
$("openLetter").onclick=()=>{
 const box=$("letterContent");box.hidden=!box.hidden;
 $("openLetter").textContent=box.hidden?"拆開花子君的信":"把信件收起來";
};
$("revealBtn").onclick=()=>{
 $("finalGift").hidden=false;$("revealBtn").textContent="秘密已經揭曉 ♡";
 $("finalGift").scrollIntoView({behavior:"smooth",block:"center"});
};
$("editToggle").onclick=()=>$("editor").hidden=false;
$("closeEditor").onclick=()=>$("editor").hidden=true;
const fields=$("fields");
Object.keys(fieldLabels).forEach(key=>{
 const wrap=document.createElement("div");wrap.className="field";
 const label=document.createElement("label");label.htmlFor="edit-"+key;label.textContent=fieldLabels[key];
 const input=document.createElement(key.includes("Text")||key.includes("Copy")||key.startsWith("letterP")||key==="greetingTitle"||key==="greetingText"||key==="finalMessage"||key==="finalCopy"?"textarea":"input");
 input.id="edit-"+key;input.value=content[key]||"";input.dataset.key=key;
 wrap.append(label,input);fields.append(wrap);
});
function readEditor(){fields.querySelectorAll("[data-key]").forEach(el=>content[el.dataset.key]=el.value)}
$("applyEdits").onclick=()=>{readEditor();applyContent();toast("已套用預覽！記得下載新版內容檔，才會永久更新網站。")};
$("downloadData").onclick=()=>{
 readEditor();
 const text="/* 由網站內建編輯器匯出的文字內容 */\nwindow.BIRTHDAY_CONTENT = "+JSON.stringify(content,null,2)+";\n";
 download("content.js",text,"text/javascript;charset=utf-8");toast("新版 content.js 已下載！");
};
$("resetEdits").onclick=()=>{content={...defaults};fields.querySelectorAll("[data-key]").forEach(el=>el.value=content[el.dataset.key]||"");applyContent();toast("已還原預設文字。")};
function download(name,data,type){const blob=new Blob([data],{type});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
$("imageUpload").onchange=e=>{
 const file=e.target.files[0];if(!file)return;
 const url=URL.createObjectURL(file);$("characterArt").style.backgroundImage="linear-gradient(#35233255,#35233255),url("+url+")";$("characterArt").style.backgroundSize="cover";$("characterArt").style.backgroundPosition="center";
 toast("圖片已套用本機預覽；要公開圖片請將檔案放入網站資料夾。");
};
$("exportAll").onclick=()=>toast("請使用下載包內的網站資料夾，整份網站 ZIP 已在原始下載檔中。");
})();