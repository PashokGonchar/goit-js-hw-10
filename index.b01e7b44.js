const e=e=>fetch(`https://api.thecatapi.com/v1/images/search?breeds_id=${e}&api_key=live_LRO7hxKh7OtAizcFavrKplaoyu93uuq3cRNTCS2bMfExkivtkUKGqWCIpgo6F6Hp, `).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})),t=document.querySelector(".breed-select");document.querySelector(".cat-info");let o="";fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e),e.forEach((e=>{o+=`<option value="${e.id}">${e.name}-${e.id}</option>`})),t.insertAdjacentHTML("afterbegin",o)}));const n=t=>{console.log(t),e(t).then((e=>{console.log(e),e.forEach((e=>{}))}))};t.addEventListener("change",(e=>n(e.target.value)));
//# sourceMappingURL=index.b01e7b44.js.map
