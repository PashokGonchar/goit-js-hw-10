const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");let r="",a="";fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{t.forEach((e=>{r+=`<option value="${e.id}">${e.name}-${e.id}</option>`})),e.insertAdjacentHTML("afterbegin",r)}));e.addEventListener("change",(e=>{var r;console.log(e.target.value),fetch(`https://api.thecatapi.com/v1/images/search?breeds_id=${r}&api_key=live_LRO7hxKh7OtAizcFavrKplaoyu93uuq3cRNTCS2bMfExkivtkUKGqWCIpgo6F6Hp, `).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{e.forEach((e=>{a+=`<p>"${e.id}"</p>`}))})),t.insertAdjacentHTML("afterbegin",a)}));
//# sourceMappingURL=index.35dd1e6c.js.map