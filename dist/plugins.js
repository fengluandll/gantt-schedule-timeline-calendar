/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */
function e(e={}){e={...{time:1e3,movementThreshold:2,action(e,t){}},...e};const t={},n={x:0,y:0};function i(e){void 0!==t[e]&&delete t[e]}function o(o,s){function r(i){!function(i,o,s){void 0===t[i.id]&&(t[i.id]={x:s.x,y:s.y},setTimeout(()=>{if(void 0!==t[i.id]){let s=!0,r=t[i.id].x-n.x;-1===Math.sign(r)&&(r=-r);let a=t[i.id].y-n.y;-1===Math.sign(a)&&(a=-a),r>e.movementThreshold&&(s=!1),a>e.movementThreshold&&(s=!1),delete t[i.id],s&&e.action(o,i)}},e.time))}(s.item,o,i)}function a(e){n.x=e.x,n.y=e.y}return o.addEventListener("mousedown",r),document.addEventListener("mouseup",(function(){i(s.item.id)})),document.addEventListener("mousemove",a),{destroy(e,t){document.removeEventListener("mouseup",i),document.removeEventListener("mousemove",a),e.removeEventListener("mousedown",r)}}}return function(e,t){e.update("config.actions.chart-timeline-items-row-item",e=>(e.push(o),e))}}
/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */function t(e={}){e={moveable:!0,resizeable:!0,resizerContent:"",collisionDetection:!0,outOfBorders:!1,snapStart:(e,t)=>e+t,snapEnd:(e,t)=>e+t,ghostNode:!0,...e};const t={};function n(n,i){const o=n.querySelector(".gantt-schedule-timeline-calendar__chart-timeline-items-row-item-content");if(!e.moveable&&!e.resizeable)return;let s=e.moveable;i.item.hasOwnProperty("moveable")&&s&&(s=i.item.moveable),i.row.hasOwnProperty("moveable")&&s&&(s=i.row.moveable);let r=e.resizeable&&(!i.item.hasOwnProperty("resizeable")||!0===i.item.resizeable);i.row.hasOwnProperty("resizeable")&&r&&(r=i.row.resizeable);const a=i.api;let m=e.snapStart;void 0!==i.item.snapStart&&Array.isArray(i.item.snapStart)&&(m=item.snapStart);let l=e.snapEnd;if(void 0!==i.item.snapEnd&&Array.isArray(i.item.snapEnd)&&(l=i.item.snapEnd),r){const t=`<div class="${a.getClass("chart-timeline-items-row-item-content-resizer")}">${e.resizerContent}</div>`;o.insertAdjacentHTML("beforeend",t)}const d=o,c=d.querySelector(".gantt-schedule-timeline-calendar__chart-timeline-items-row-item-content-resizer"),g=i.state;void 0===t[i.item.id]&&(t[i.item.id]={moving:!1,resizing:!1});const f=t[i.item.id];function u(t){if(e.ghostNode){const e=t.x-f.ganttLeft-f.itemLeftCompensation;f.ghost.style.left=e+"px",f.ghost.style.top=t.y-f.ganttTop-f.itemTop+"px"}}function h(n){e.ghostNode&&(void 0!==t[n]&&void 0!==t[n].ghost&&(g.get("_internal.elements.gantt").removeChild(t[n].ghost),delete t[n].ghost),o.style.opacity="1")}function p(n){if(0!==n.button)return;f.moving=!0;const s=g.get(`config.chart.items.${i.item.id}`),r=g.get("_internal.chart.time.leftGlobal"),a=g.get("_internal.chart.time.timePerPixel"),m=g.get("_internal.elements.gantt").getBoundingClientRect();f.ganttTop=m.top,f.ganttLeft=m.left,f.itemX=Math.round((s.time.start-r)/a),f.itemLeftCompensation=n.x-f.ganttLeft-f.itemX,function(n,s,r,a){if(!e.ghostNode||void 0!==t[n].ghost)return;const m=o.cloneNode(!0),l=getComputedStyle(o);m.style.position="absolute",m.style.left=s.x-r-f.itemLeftCompensation+"px";const d=s.y-a-i.row.top-o.offsetTop;f.itemTop=d,m.style.top=s.y-a-d+"px",m.style.width=l.width,m.style["box-shadow"]="10px 10px 6px #00000020";const c=o.clientHeight+"px";m.style.height=c,m.style["line-height"]=c,m.style.opacity="0.75",g.get("_internal.elements.gantt").appendChild(m),t[n].ghost=m}(i.item.id,n,m.left,m.top)}function v(e){if(0!==e.button)return;e.stopPropagation(),f.resizing=!0;const t=g.get(`config.chart.items.${i.item.id}`),n=g.get("_internal.chart.time.leftGlobal"),o=g.get("_internal.chart.time.timePerPixel"),s=g.get("_internal.elements.gantt").getBoundingClientRect();f.ganttTop=s.top,f.ganttLeft=s.left,f.itemX=(t.time.end-n)/o,f.itemLeftCompensation=e.x-f.ganttLeft-f.itemX}function y(t,n,i,o){if(!e.collisionDetection)return!1;const s=g.get("_internal.chart.time");if(e.outOfBorders&&(i<s.from||o>s.to))return!0;let r=a.time.date(o).diff(i,"milliseconds");if(-1===Math.sign(r)&&(r=-r),r<=1)return!0;const m=g.get("config.list.rows."+t);for(const e of m._internal.items)if(e.id!==n){if(i>=e.time.start&&i<=e.time.end)return!0;if(o>=e.time.start&&o<=e.time.end)return!0;if(i<=e.time.start&&o>=e.time.end)return!0}return!1}function w(e){let t,n,o,r,a;if((f.moving||f.resizing)&&(t=g.get(`config.chart.items.${i.item.id}`),n=g.get(`config.chart.items.${i.item.id}.rowId`),o=g.get(`config.list.rows.${n}`),r=g.get("config.chart.time.zoom"),a=g.get("_internal.chart.time.timePerPixel")),f.moving){if((!0===s||"x"===s||Array.isArray(s)&&s.includes(n))&&function(e,t,n,o,s){const r=e.x-f.ganttLeft-f.itemLeftCompensation;u(e);const a=g.get("_internal.chart.time.leftGlobal")+r*s-n.time.start,d=n.time.start,c=m(n.time.start,a,n)-d,h=y(t.id,n.id,n.time.start+c,n.time.end+c);c&&!h&&g.update(`config.chart.items.${i.item.id}.time`,(function(e){return e.start+=c,e.end=l(e.end,c,n),e}))}(e,o,t,0,a),!s||"x"===s)return;let r=function(e,t,n,i,o){u(e);const s=e.y-f.ganttTop,r=g.get("_internal.list.visibleRows");let a=0;for(const e of r){if(e.top>s)return a>0?a-1:0;a++}return a}(e);const d=g.get("_internal.list.visibleRows");void 0===d[r]&&(r>0?r=d.length-1:r<0&&(r=0));const c=d[r],h=c.id,p=y(h,t.id,t.time.start,t.time.end);h===t.rowId||p||Array.isArray(s)&&!s.includes(h)||c.hasOwnProperty("moveable")&&!c.moveable||g.update(`config.chart.items.${t.id}.rowId`,h)}else!f.resizing||void 0!==t.resizeable&&!0!==t.resizeable||function(e,t,n,o,s){const r=g.get("_internal.chart.time"),a=e.x-f.ganttLeft-f.itemLeftCompensation,d=r.leftGlobal+a*s-n.time.end;if(n.time.end+d<n.time.start)return;const c=n.time.end,u=l(n.time.end,d,n)-1-c,h=y(t.id,n.id,n.time.start,n.time.end+u);u&&!h&&g.update(`config.chart.items.${i.item.id}.time`,e=>(e.start=m(e.start,0,n),e.end=l(e.end,u,n),e))}(e,o,t,0,a)}function b(e){f.moving=!1,f.resizing=!1;for(const e in t)t[e].moving=!1,t[e].resizing=!1,h(e)}return s&&d.addEventListener("mousedown",p),r&&c.addEventListener("mousedown",v),document.addEventListener("mousemove",w),document.addEventListener("mouseup",b),{destroy(e,t){s&&d.removeEventListener("mousedown",p),r&&c.removeEventListener("mousedown",v),document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b),r&&o.removeChild(c)}}}return function(e,t){e.update("config.actions.chart-timeline-items-row-item",e=>(e.push(n),e))}}
/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */function n(e={}){function t(t){const n=t.target,i=n.clientWidth,o=n.clientHeight,s=unescape(encodeURIComponent(n.outerHTML));let r="";for(const e of document.styleSheets)if("gstc"===e.title)for(const t of e.rules)r+=t.cssText;const a=`<svg xmlns="http://www.w3.org/2000/svg" width="${i}" height="${o}" viewBox="0 0 ${i} ${o}">\n      <foreignObject x="0" y="0" width="${i}" height="${o}">\n        <div xmlns="http://www.w3.org/1999/xhtml">\n          ${r=`<style>* {${e.style}} ${r}</style>`}\n          ${s}\n        </div>\n      </foreignObject>\n    </svg>`,m=document.createElement("canvas");m.width=i,m.height=o;const l=m.getContext("2d");l.fillStyle="white",l.fillRect(0,0,i,o);const d="data:image/svg+xml;base64,"+btoa(a),c=new Image;c.onload=function(){l.drawImage(c,0,0),function(e,t){const n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click()}(m.toDataURL("image/jpeg",1),e.filename)},c.src=d}return e={style:"font-family: sans-serif;",filename:"gantt-schedule-timeline-calendar.jpeg",options:e},function(e,n){e.subscribe("_internal.elements.main",e=>{e&&e.addEventListener("save-as-image",t)})}}export{e as ItemHold,t as ItemMovement,n as SaveAsImage};
//# sourceMappingURL=plugins.js.map