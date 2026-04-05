function t(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var d;const l=window,h=l.trustedTypes,c=h?h.emptyScript:"",p=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m},g="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):o.forEach(i=>{const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)})})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=y){var o;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var v;f[g]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(d=l.reactiveElementVersions)&&void 0!==d?d:l.reactiveElementVersions=[]).push("1.6.3");const _=window,$=_.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,E="?"+w,C=`<${E}>`,A=document,H=()=>A.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,k=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,F=/"/g,U=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),z=L(1),N=L(2),I=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),V=new WeakMap,j=A.createTreeWalker(A,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,o=[];let r,n=2===e?"<svg>":"",s=D;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,h=0;for(;h<i.length&&(s.lastIndex=h,d=s.exec(i),null!==d);)h=s.lastIndex,s===D?"!--"===d[1]?s=T:void 0!==d[1]?s=k:void 0!==d[2]?(U.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=R):void 0!==d[3]&&(s=R):s===R?">"===d[0]?(s=null!=r?r:D,l=-1):void 0===d[1]?l=-2:(l=s.lastIndex-d[2].length,a=d[1],s=void 0===d[3]?R:'"'===d[3]?F:P):s===F||s===P?s=R:s===T||s===k?s=D:(s=R,r=void 0);const c=s===R&&t[e+1].startsWith("/>")?" ":"";n+=s===D?i+C:l>=0?(o.push(a),i.slice(0,l)+x+i.slice(l)+w+c):i+w+(-2===l?(o.push(void 0),e):c)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class K{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const s=t.length-1,a=this.parts,[d,l]=W(t,e);if(this.el=K.createElement(d,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=j.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(x)||e.startsWith(w)){const i=l[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+x).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?tt:"@"===e[1]?et:X})}else a.push({type:6,index:r})}for(const e of t)o.removeAttribute(e)}if(U.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],H()),j.nextNode(),a.push({type:2,index:++r});o.append(t[e],H())}}}else if(8===o.nodeType)if(o.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)a.push({type:7,index:r}),t+=w.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){var r,n,s,a;if(e===I)return e;let d=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl;const l=S(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,o)),void 0!==o?(null!==(s=(a=i)._$Co)&&void 0!==s?s:a._$Co=[])[o]=d:i._$Cl=d),void 0!==d&&(e=Q(t,d._$AS(t,e.values),d,o)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);j.currentNode=r;let n=j.nextNode(),s=0,a=0,d=o[0];for(;void 0!==d;){if(s===d.index){let e;2===d.type?e=new G(n,n.nextSibling,this,t):1===d.type?e=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(e=new it(n,this,t)),this._$AV.push(e),d=o[++a]}s!==(null==d?void 0:d.index)&&(n=j.nextNode(),s++)}return j.currentNode=A,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var r;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),S(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=K.createElement(B(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new q(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new G(this.k(H()),this.k(H()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,o,r){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const o=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=Q(this,o[i+s],e,s),a===I&&(a=this._$AH[s]),n||(n=!S(a)||a!==this._$AH[s]),a===Y?t=Y:t!==Y&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}n&&!o&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}const J=$?$.emptyScript:"";class tt extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class et extends X{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Q(this,t,e,0))&&void 0!==i?i:Y)===I)return;const o=this._$AH,r=t===Y&&o!==Y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==Y&&(o===Y||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=_.litHtmlPolyfillSupport;null==ot||ot(K,G),(null!==(v=_.litHtmlVersions)&&void 0!==v?v:_.litHtmlVersions=[]).push("2.8.0");var rt,nt;class st extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,r;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let s=n._$litPart$;if(void 0===s){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new G(e.insertBefore(H(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}st.finalized=!0,st._$litElement$=!0,null===(rt=globalThis.litElementHydrateSupport)||void 0===rt||rt.call(globalThis,{LitElement:st});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:st}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");const dt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}function ct(t){return ht({...t,state:!0})}var pt;null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements;const ut=["show_temperature_graph","show_humidity_graph","show_co2_graph","show_no2_graph","show_pm25_graph","show_pm10_graph","show_voc_graph","temp_min","temp_max","co2_good","co2_warning","co2_poor","no2_good","no2_warning","no2_poor","pm25_good","pm25_warning","pm25_poor","pm10_good","pm10_warning","pm10_poor","voc_good","voc_warning","voc_poor"];function mt(t){const e={...t};for(const t of ut)delete e[t];return e}const yt=s`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .option {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  label {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  input {
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
  }

  input[type="checkbox"] {
    width: auto;
    margin-left: 0;
  }

  .checkbox-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ha-entity-picker {
    margin-top: 8px;
  }

  .section {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .section-title {
    font-weight: 500;
    font-size: 14px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
  }

  .range-inputs {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .range-inputs input {
    flex: 1;
    min-width: 0;
  }

  .range-separator {
    color: var(--secondary-text-color);
  }
`,gt=s`
  :host {
    display: block;
    min-width: 0;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    padding: clamp(16px, 4vw, 24px);
    background: var(
      --ha-card-background,
      var(--card-background-color, #1a1a1a)
    );
    border-radius: 12px;
    box-sizing: border-box;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 1.5em;
    font-weight: 400;
    color: var(--primary-text-color, #ffffff);
  }

  .status-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2em;
    font-weight: 500;
    color: var(--primary-text-color, #ffffff);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .severity-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .severity-0 { background: var(--success-color, #40c057); }
  .severity-1 { background: var(--warning-color, #fd7e14); }
  .severity-2 { background: var(--error-color, #fa5252); }

  .comfort-dial-container {
    position: relative;
    width: min(var(--dial-size, 300px), 100%);
    aspect-ratio: 1 / 1;
    margin: 0 auto 24px;
  }

  .comfort-dial {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dial-outer-ring {
    position: absolute;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border: 2px solid var(--divider-color, rgba(255, 255, 255, 0.2));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .dial-comfort-zone {
    position: absolute;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background: color-mix(in srgb, var(--air-comfort-zone-color, var(--success-color, #40c057)) 15%, transparent);
    border: 2px solid color-mix(in srgb, var(--air-comfort-zone-color, var(--success-color, #40c057)) 40%, transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .comfort-indicator {
    position: absolute;
    width: clamp(16px, calc(var(--dial-size, 300px) * 0.08), 24px);
    height: clamp(16px, calc(var(--dial-size, 300px) * 0.08), 24px);
    border-radius: 50%;
    background: var(--primary-text-color, #ffffff);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    top: 50%;
    left: 50%;
    z-index: 3;
    transition: transform 0.5s ease;
  }

  .dial-label {
    position: absolute;
    font-size: 0.75em;
    font-weight: 500;
    color: var(--primary-text-color, #ffffff);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .label-top {
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
  }

  .label-right {
    left: 87%;
    top: 50%;
    transform: translateY(-50%);
  }

  .label-bottom {
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
  }

  .label-left {
    right: 87%;
    top: 50%;
    transform: translateY(-50%);
  }

  .readings {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  .reading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .reading-label {
    font-size: 0.75em;
    color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .reading-value {
    font-size: 2.5em;
    font-weight: 300;
    color: var(--primary-text-color, #ffffff);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .reading-unit {
    font-size: 0.6em;
    color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
  }

  .warning-icon {
    font-size: 0.5em;
    color: var(--warning-color, #ff9800);
  }

  @media (max-width: 480px) {
    .card-title {
      font-size: 1.2em;
    }

    .status-badge {
      font-size: 1em;
    }

    .readings {
      gap: 24px;
    }

    .reading-value {
      font-size: 2em;
    }
  }

  @media (max-width: 360px) {
    .card-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .comfort-dial-container {
      margin-bottom: 16px;
    }

    .readings {
      gap: 16px;
    }

    .reading {
      align-items: flex-start;
    }
  }

  .history-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
  }

  .history-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
    font-size: 0.9em;
    color: var(--primary-text-color, #ffffff);
    cursor: pointer;
  }

  .history-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color, #4dabf7);
    border-radius: 8px;
  }

  .history-toggle-icon {
    transition: transform 0.3s ease;
  }

  .history-toggle[aria-expanded="true"] .history-toggle-icon {
    transform: rotate(180deg);
  }

  .charts-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 0;
  }

  .chart-wrapper {
    display: flex;
    flex-direction: column;
  }

  .chart-label {
    font-size: 0.75em;
    color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  svg-line-chart {
    display: block;
    width: 100%;
  }
`;function ft(t){return 9*t/5+32}function vt(t){return 5*(t-32)/9}const _t={PLEASANT:"Comfortable",COLD:"Cold",HOT:"Hot",DRY:"Dry",HUMID:"Humid","COLD & DRY":"Cold & dry","COLD & HUMID":"Cold & humid","HOT & DRY":"Hot & dry","HOT & HUMID":"Hot & humid"};const $t={good:0,moderate:1,poor:2},bt={good:"Good",moderate:"Moderate",poor:"Poor"},xt={co2:{good:800,warning:1200,poor:1500},no2:{good:50,warning:150,poor:250},pm1:{good:10,warning:25,poor:50},pm25:{good:15,warning:35,poor:75},pm10:{good:45,warning:100,poor:150},radon:{good:100,warning:150,poor:300},voc:{good:150,warning:250,poor:400}};function wt(t){return t.value<=t.good?"good":t.value<=t.warning?"moderate":"poor"}const Et={PLEASANT:0,COLD:1,HOT:1,DRY:1,HUMID:1,"COLD & DRY":2,"COLD & HUMID":2,"HOT & DRY":2,"HOT & HUMID":2},Ct={good:0,moderate:1,poor:2},At={good:"Clean air",moderate:"Moderate air",poor:"Poor air"};function Ht(t,e,i){const o=function(t){return Et[t]??1}(t),r=e?(n=e.level,Ct[n]):0;var n;const s=Math.max(o,r),a=null!==e&&r>0&&r>=o?i?.airQuality[e.level]??At[e.level]:i?.status[t]??function(t){return _t[t]??t}(t);return{label:a,severity:s}}const St={card:{title:"Air Comfort",entityNotFound:"Entity not found",invalidSensorValues:"Invalid sensor values"},dial:{hot:"HOT",humid:"HUMID",cold:"COLD",dry:"DRY"},readings:{temperature:"Temperature",humidity:"Humidity"},history:{show:"Show 24-hour history",hide:"Hide 24-hour history",chartSuffix:"(24h)"},status:{PLEASANT:"Comfortable",COLD:"Cold",HOT:"Hot",DRY:"Dry",HUMID:"Humid","COLD & DRY":"Cold & dry","COLD & HUMID":"Cold & humid","HOT & DRY":"Hot & dry","HOT & HUMID":"Hot & humid"},airQuality:{good:"Clean air",moderate:"Moderate air",poor:"Poor air"},thresholds:{cold:"Cold",hot:"Hot",dry:"Dry",wet:"Wet",good:"Good",stuffy:"Stuffy",poor:"Poor",warning:"Warning"},sensors:{temperature:"Temperature",humidity:"Humidity",co2:"CO₂",no2:"NO₂",pm1:"PM 1",pm25:"PM 2.5",pm10:"PM 10",radon:"Radon",voc:"VOC"},editor:{cardTitle:"Card Title",temperatureSection:"Temperature",temperatureEntity:"Temperature Entity",displayUnit:"Display Unit",celsius:"°C (Celsius)",fahrenheit:"°F (Fahrenheit)",comfortRange:"Comfort Range",humiditySection:"Humidity",humidityEntity:"Humidity Entity",comfortRangeHumidity:"Comfort Range (%)",airQualitySection:"Air Quality",co2Entity:"CO₂ Entity",no2Entity:"NO₂ Entity",pm1Entity:"PM 1 Entity",pm25Entity:"PM 2.5 Entity",pm10Entity:"PM 10 Entity",radonEntity:"Radon Entity",vocEntity:"VOC Entity"}},Mt={en:St,de:{card:{title:"Luftkomfort",entityNotFound:"Entität nicht gefunden",invalidSensorValues:"Ungültige Sensorwerte"},dial:{hot:"WARM",humid:"FEUCHT",cold:"KALT",dry:"TROCKEN"},readings:{temperature:"Temperatur",humidity:"Luftfeuchtigkeit"},history:{show:"24-Stunden-Verlauf anzeigen",hide:"24-Stunden-Verlauf ausblenden",chartSuffix:"(24h)"},status:{PLEASANT:"Angenehm",COLD:"Kalt",HOT:"Warm",DRY:"Trocken",HUMID:"Feucht","COLD & DRY":"Kalt & trocken","COLD & HUMID":"Kalt & feucht","HOT & DRY":"Warm & trocken","HOT & HUMID":"Warm & feucht"},airQuality:{good:"Saubere Luft",moderate:"Mäßige Luft",poor:"Schlechte Luft"},thresholds:{cold:"Kalt",hot:"Warm",dry:"Trocken",wet:"Feucht",good:"Gut",stuffy:"Stickig",poor:"Schlecht",warning:"Warnung"},sensors:{temperature:"Temperatur",humidity:"Luftfeuchtigkeit",co2:"CO₂",no2:"NO₂",pm1:"PM 1",pm25:"PM 2,5",pm10:"PM 10",radon:"Radon",voc:"VOC"},editor:{cardTitle:"Kartentitel",temperatureSection:"Temperatur",temperatureEntity:"Temperatur-Entität",displayUnit:"Anzeigeeinheit",celsius:"°C (Celsius)",fahrenheit:"°F (Fahrenheit)",comfortRange:"Komfortbereich",humiditySection:"Luftfeuchtigkeit",humidityEntity:"Luftfeuchtigkeits-Entität",comfortRangeHumidity:"Komfortbereich (%)",airQualitySection:"Luftqualität",co2Entity:"CO₂-Entität",no2Entity:"NO₂-Entität",pm1Entity:"PM 1-Entität",pm25Entity:"PM 2,5-Entität",pm10Entity:"PM 10-Entität",radonEntity:"Radon-Entität",vocEntity:"VOC-Entität"}},es:{card:{title:"Confort del aire",entityNotFound:"Entidad no encontrada",invalidSensorValues:"Valores de sensor no válidos"},dial:{hot:"CALUROSO",humid:"HÚMEDO",cold:"FRÍO",dry:"SECO"},readings:{temperature:"Temperatura",humidity:"Humedad"},history:{show:"Mostrar historial de 24 horas",hide:"Ocultar historial de 24 horas",chartSuffix:"(24h)"},status:{PLEASANT:"Cómodo",COLD:"Frío",HOT:"Caluroso",DRY:"Seco",HUMID:"Húmedo","COLD & DRY":"Frío y seco","COLD & HUMID":"Frío y húmedo","HOT & DRY":"Caluroso y seco","HOT & HUMID":"Caluroso y húmedo"},airQuality:{good:"Aire limpio",moderate:"Aire moderado",poor:"Aire deficiente"},thresholds:{cold:"Frío",hot:"Caluroso",dry:"Seco",wet:"Húmedo",good:"Bueno",stuffy:"Cargado",poor:"Malo",warning:"Advertencia"},sensors:{temperature:"Temperatura",humidity:"Humedad",co2:"CO₂",no2:"NO₂",pm1:"PM 1",pm25:"PM 2,5",pm10:"PM 10",radon:"Radón",voc:"VOC"},editor:{cardTitle:"Título de la tarjeta",temperatureSection:"Temperatura",temperatureEntity:"Entidad de temperatura",displayUnit:"Unidad a mostrar",celsius:"°C (Celsius)",fahrenheit:"°F (Fahrenheit)",comfortRange:"Rango de confort",humiditySection:"Humedad",humidityEntity:"Entidad de humedad",comfortRangeHumidity:"Rango de confort (%)",airQualitySection:"Calidad del aire",co2Entity:"Entidad de CO₂",no2Entity:"Entidad de NO₂",pm1Entity:"Entidad de PM 1",pm25Entity:"Entidad de PM 2,5",pm10Entity:"Entidad de PM 10",radonEntity:"Entidad de radón",vocEntity:"Entidad de VOC"}},ca:{card:{title:"Confort de l’aire",entityNotFound:"Entitat no trobada",invalidSensorValues:"Valors de sensor no vàlids"},dial:{hot:"CALORÓS",humid:"HUMIT",cold:"FRED",dry:"SEC"},readings:{temperature:"Temperatura",humidity:"Humitat"},history:{show:"Mostra l’historial de 24 hores",hide:"Amaga l’historial de 24 hores",chartSuffix:"(24h)"},status:{PLEASANT:"Còmode",COLD:"Fred",HOT:"Calorós",DRY:"Sec",HUMID:"Humit","COLD & DRY":"Fred i sec","COLD & HUMID":"Fred i humit","HOT & DRY":"Calorós i sec","HOT & HUMID":"Calorós i humit"},airQuality:{good:"Aire net",moderate:"Aire moderat",poor:"Aire deficient"},thresholds:{cold:"Fred",hot:"Calorós",dry:"Sec",wet:"Humit",good:"Bo",stuffy:"Carregat",poor:"Dolent",warning:"Advertència"},sensors:{temperature:"Temperatura",humidity:"Humitat",co2:"CO₂",no2:"NO₂",pm1:"PM 1",pm25:"PM 2,5",pm10:"PM 10",radon:"Radó",voc:"VOC"},editor:{cardTitle:"Títol de la targeta",temperatureSection:"Temperatura",temperatureEntity:"Entitat de temperatura",displayUnit:"Unitat a mostrar",celsius:"°C (Celsius)",fahrenheit:"°F (Fahrenheit)",comfortRange:"Rang de confort",humiditySection:"Humitat",humidityEntity:"Entitat d’humitat",comfortRangeHumidity:"Rang de confort (%)",airQualitySection:"Qualitat de l’aire",co2Entity:"Entitat de CO₂",no2Entity:"Entitat de NO₂",pm1Entity:"Entitat de PM 1",pm25Entity:"Entitat de PM 2,5",pm10Entity:"Entitat de PM 10",radonEntity:"Entitat de radó",vocEntity:"Entitat de VOC"}}};function Ot(t){const e=t?.split("-")[0]?.toLowerCase()??"en";return Mt[e]??St}const Dt=new Set(["temperature_entity","humidity_entity","co2_entity","no2_entity","pm1_entity","pm25_entity","pm10_entity","radon_entity","voc_entity"]);let Tt=class extends st{constructor(){super(...arguments),this._entityPickerAvailable=!1}connectedCallback(){super.connectedCallback(),async function(){if(customElements.get("ha-entity-picker"))return!0;try{const t=await(window.loadCardHelpers?.());if(t){const e=await t.createCardElement({type:"entities",entities:[]});await(e?.constructor?.getConfigElement?.())}}catch{}if(customElements.get("ha-entity-picker"))return!0;try{return await Promise.race([customElements.whenDefined("ha-entity-picker"),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),3e3))]),!0}catch{return!1}}().then(t=>{this._entityPickerAvailable=t})}setConfig(t){this.config=mt(t)}render(){if(!this.config)return Y;const t=Ot(this.hass?.language),e=this.config.temperature_unit||"C",i="F"===e?"°F":"°C",o="F"===e?"temp_f_min":"temp_c_min",r="F"===e?"temp_f_max":"temp_c_max",n="F"===e?68:20,s="F"===e?75:24;return z`
      <div class="card-config">
        ${this._renderTextField("name",t.editor.cardTitle,t.card.title)}

        <div class="section">
          <div class="section-title">${t.editor.temperatureSection}</div>
          ${this._renderEntityField("temperature_entity",t.editor.temperatureEntity,"temperature")}
          ${this._renderTemperatureUnitSelector(t)}
          ${this._renderRangeField(o,r,`${t.editor.comfortRange} (${i})`,n,s)}
        </div>

        <div class="section">
          <div class="section-title">${t.editor.humiditySection}</div>
          ${this._renderEntityField("humidity_entity",t.editor.humidityEntity,"humidity")}
          ${this._renderRangeField("humidity_min","humidity_max",t.editor.comfortRangeHumidity,40,60)}
        </div>

        <div class="section">
          <div class="section-title">${t.editor.airQualitySection}</div>
          ${this._renderEntityField("co2_entity",t.editor.co2Entity,"carbon_dioxide",!1)}
          ${this._renderEntityField("no2_entity",t.editor.no2Entity,"nitrogen_dioxide",!1)}
          ${this._renderEntityField("pm1_entity",t.editor.pm1Entity,"pm1",!1)}
          ${this._renderEntityField("pm25_entity",t.editor.pm25Entity,"pm25",!1)}
          ${this._renderEntityField("pm10_entity",t.editor.pm10Entity,"pm10",!1)}
          ${this._renderEntityField("radon_entity",t.editor.radonEntity,"radon",!1)}
          ${this._renderEntityField("voc_entity",t.editor.vocEntity,"volatile_organic_compounds",!1)}
        </div>
      </div>
    `}_renderTextField(t,e,i){return z`
      <div class="option">
        <label for=${t}>${e}</label>
        <input
          id=${t}
          type="text"
          .value=${this.config?.[t]||""}
          placeholder=${i}
          @input=${this._valueChanged}
        />
      </div>
    `}_renderEntityField(t,e,i,o=!0){return this.config?this._entityPickerAvailable?z`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.config[t]||""}
          .label=${e}
          .includeDomains=${["sensor"]}
          .includeDeviceClasses=${[i]}
          .required=${o}
          @value-changed=${this._entityChanged(t)}
          allow-custom-entity
        ></ha-entity-picker>
      `:this._renderTextField(t,e,"sensor.example"):Y}_renderRangeField(t,e,i,o,r){return z`
      <div class="option">
        <label>${i}</label>
        <div class="range-inputs">
          <input
            id=${t}
            type="number"
            .value=${String(this.config?.[t]??o)}
            placeholder=${String(o)}
            @input=${this._valueChanged}
          />
          <span class="range-separator">–</span>
          <input
            id=${e}
            type="number"
            .value=${String(this.config?.[e]??r)}
            placeholder=${String(r)}
            @input=${this._valueChanged}
          />
        </div>
      </div>
    `}_renderTemperatureUnitSelector(t){const e=this.config?.temperature_unit||"C";return z`
      <div class="option">
        <label for="temperature_unit">${t.editor.displayUnit}</label>
        <select
          id="temperature_unit"
          .value=${e}
          @change=${this._valueChanged}
        >
          <option value="C" ?selected=${"C"===e}>${t.editor.celsius}</option>
          <option value="F" ?selected=${"F"===e}>${t.editor.fahrenheit}</option>
        </select>
      </div>
    `}_entityChanged(t){return e=>{this._updateConfig(t,e.detail.value||void 0)}}_valueChanged(t){const e=t.target,i=e.id;let o;e instanceof HTMLSelectElement?o=e.value:"checkbox"===e.type?o=e.checked:"number"===e.type?o=""===e.value?void 0:parseFloat(e.value):(o=e.value,""===o&&Dt.has(i)&&(o=void 0)),this._updateConfig(i,o)}_updateConfig(t,e){this.config&&(this.config={...this.config,[t]:e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0})))}};Tt.styles=yt,t([ht({attribute:!1})],Tt.prototype,"hass",void 0),t([ct()],Tt.prototype,"config",void 0),t([ct()],Tt.prototype,"_entityPickerAvailable",void 0),Tt=t([dt("air-comfort-card-editor")],Tt);const kt=16,Rt=8,Pt=20,Ft=40;const Ut=[6e4,3e5,6e5,9e5,18e5,36e5,72e5,144e5,216e5,432e5,864e5];function Lt(t,e){const i=new Date(t);return e<12e4?i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}):i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}let zt=class extends st{constructor(){super(...arguments),this.data=[],this.color="#4dabf7",this.unit="",this.thresholds=[],this._width=0}connectedCallback(){super.connectedCallback(),this.ro=new ResizeObserver(([t])=>{const e=t?.contentRect.width??0;Math.abs(e-this._width)>1&&(this._width=e,this.requestUpdate())}),this.ro.observe(this),this._width=this.clientWidth}disconnectedCallback(){super.disconnectedCallback(),this.ro?.disconnect()}get cw(){return Math.max(0,this._width-Ft-Rt)}get ch(){return 120-kt-Pt}onMouseMove(t){if(this.data.length<2)return;const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),i=t.clientX-e.left-Ft,o=this.cw,r=this.data.map(t=>t.time.getTime()),n=r[0],s=r[r.length-1]-n||1,a=n+Math.max(0,Math.min(1,i/o))*s;let d=0,l=this.data.length-1;for(;d<l;){const t=d+l>>1;this.data[t].time.getTime()<a?d=t+1:l=t}const h=d>0&&Math.abs(this.data[d-1].time.getTime()-a)<Math.abs(this.data[d].time.getTime()-a)?d-1:d,c=this.data[h],p=Ft+(c.time.getTime()-n)/s*o,u=this.shadowRoot.querySelector(".crosshair");u&&(u.setAttribute("x1",p.toFixed(1)),u.setAttribute("x2",p.toFixed(1)),u.style.display="");const m=this.shadowRoot.querySelector(".tooltip");if(m){const t=Lt(c.time.getTime(),s);m.textContent=`${t} · ${c.value.toFixed(1)}${this.unit}`,m.style.display="block";const e=p+10;m.style.left=`${Math.min(e,this._width-150)}px`}}onMouseLeave(){const t=this.shadowRoot.querySelector(".crosshair");t&&(t.style.display="none");const e=this.shadowRoot.querySelector(".tooltip");e&&(e.style.display="none")}render(){if(this._width<10||this.data.length<2)return z``;const t=this.cw,e=this.ch,i=this.data.map(t=>t.time.getTime()),o=i[0],r=i[i.length-1],n=r-o||1,s=this.data.map(t=>t.value),a=Math.min(...s),d=Math.max(...s),l=.1*(d-a)||1,h=a-l,c=d+l-h,p=e=>(e-o)/n*t,u=t=>(1-(t-h)/c)*e,m=this.data.map(t=>[p(t.time.getTime()),u(t.value)]),y=function(t){if(t.length<2)return"";let e=`M ${t[0][0].toFixed(1)},${t[0][1].toFixed(1)}`;for(let i=0;i<t.length-1;i++){const o=t[Math.max(0,i-1)],r=t[i],n=t[i+1],s=t[Math.min(t.length-1,i+2)],a=r[0]+(n[0]-o[0])/6,d=r[1]+(n[1]-o[1])/6,l=n[0]-(s[0]-r[0])/6,h=n[1]-(s[1]-r[1])/6;e+=` C ${a.toFixed(1)},${d.toFixed(1)} ${l.toFixed(1)},${h.toFixed(1)} ${n[0].toFixed(1)},${n[1].toFixed(1)}`}return e}(m),g=`${y} L ${m[m.length-1][0].toFixed(1)},${e} L ${m[0][0].toFixed(1)},${e} Z`,f=function(t,e,i=4){if(t===e)return[t];const o=(e-t)/(i-1),r=Math.pow(10,Math.floor(Math.log10(o))),n=([1,2,5,10].find(t=>t*r>=o)??10)*r,s=Math.floor(t/n)*n,a=[];for(let i=0;;i++){const o=Math.round(1e9*(s+i*n))/1e9;if(o>e+.01*n)break;o>=t-.5*n&&a.push(o)}return a}(a,d),v=function(t,e,i=6){const o=e-t;if(o<=0)return[t];const r=o/(i-1),n=Ut.find(t=>t>=r)??Ut[Ut.length-1],s=[];for(let i=Math.ceil(t/n)*n;i<=e+.01*n;i+=n)s.push(i);return s}(o,r);return z`
      <svg
        width="${this._width}"
        height="${120}"
        @mousemove=${this.onMouseMove}
        @mouseleave=${this.onMouseLeave}
      >
        <!-- Y axis labels -->
        ${f.map(t=>{const i=kt+u(t);return i<kt-2||i>kt+e+2?"":N`
            <text
              x="${Ft-4}" y="${i}"
              text-anchor="end" dominant-baseline="middle"
              font-size="10"
              fill="var(--secondary-text-color, rgba(255,255,255,0.6))"
            >${Math.round(t)}${this.unit}</text>
          `})}

        <!-- X axis labels -->
        ${v.map(i=>{const o=Ft+p(i);if(o<Ft-1||o>Ft+t+1)return"";return N`
            <text
              x="${o}" y="${kt+e+14}"
              text-anchor="${o<Ft+20?"start":o>Ft+t-20?"end":"middle"}"
              font-size="10"
              fill="var(--secondary-text-color, rgba(255,255,255,0.6))"
            >${Lt(i,n)}</text>
          `})}

        <!-- Inner chart SVG — overflow:hidden clips the data paths -->
        <svg x="${Ft}" y="${kt}" width="${t}" height="${e}" overflow="hidden">
          <!-- Y grid lines -->
          ${f.map(i=>{const o=u(i);return o<-2||o>e+2?"":N`
              <line
                x1="0" y1="${o}" x2="${t}" y2="${o}"
                stroke="var(--divider-color, rgba(255,255,255,0.1))"
                stroke-width="1"
              />
            `})}

          <!-- X grid lines -->
          ${v.map(i=>{const o=p(i);return o<-1||o>t+1?"":N`
              <line
                x1="${o}" y1="0" x2="${o}" y2="${e}"
                stroke="var(--divider-color, rgba(255,255,255,0.1))"
                stroke-width="1"
              />
            `})}

          <!-- Area fill -->
          <path d="${g}" fill="${this.color}33" />

          <!-- Line -->
          <path d="${y}" fill="none" stroke="${this.color}" stroke-width="2" />

          <!-- Threshold lines and labels -->
          ${this.thresholds.map(i=>{const o=u(i.value);return o<0||o>e?"":N`
              <line
                x1="0" y1="${o}" x2="${t}" y2="${o}"
                stroke="${i.color}" stroke-width="1" stroke-dasharray="6,4"
              />
              ${i.label?N`<text
                    x="${t-4}" y="${o-4}"
                    text-anchor="end" font-size="10" fill="${i.color}"
                  >${i.label}</text>`:""}
            `})}
        </svg>

        <!-- Crosshair (hidden until hover) -->
        <line
          class="crosshair"
          x1="${Ft}" y1="${kt}"
          x2="${Ft}" y2="${kt+e}"
          stroke="var(--secondary-text-color, rgba(255,255,255,0.4))"
          stroke-width="1"
          style="display:none; pointer-events:none"
        />

        <!-- Hit area for mouse events (must be last) -->
        <rect
          x="${Ft}" y="${kt}" width="${t}" height="${e}"
          fill="transparent" style="cursor:crosshair"
        />
      </svg>
      <div class="tooltip"></div>
    `}};zt.styles=s`
    :host {
      display: block;
      position: relative;
    }
    svg {
      display: block;
    }
    .tooltip {
      position: absolute;
      display: none;
      top: 0;
      background: var(--card-background-color, #1e1e1e);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.15));
      border-radius: 4px;
      padding: 3px 7px;
      font-size: 11px;
      color: var(--secondary-text-color, rgba(255, 255, 255, 0.6));
      pointer-events: none;
      white-space: nowrap;
      z-index: 10;
    }
  `,t([ht({attribute:!1})],zt.prototype,"data",void 0),t([ht()],zt.prototype,"color",void 0),t([ht()],zt.prototype,"unit",void 0),t([ht({attribute:!1})],zt.prototype,"thresholds",void 0),zt=t([dt("svg-line-chart")],zt);let Nt=class extends st{constructor(){super(...arguments),this.dialSize=280,this.temperatureHistory=[],this.humidityHistory=[],this.co2History=[],this.no2History=[],this.pm1History=[],this.pm25History=[],this.pm10History=[],this.radonHistory=[],this.vocHistory=[],this.historyExpanded=!1,this.lastHistoryFetch=0}static getStubConfig(){return{type:"custom:air-comfort-card",temperature_entity:"sensor.temperature",humidity_entity:"sensor.humidity",co2_entity:"",no2_entity:"",pm1_entity:"",pm25_entity:"",pm10_entity:"",radon_entity:"",voc_entity:"",temperature_unit:"C",temp_c_min:20,temp_c_max:24,temp_f_min:68,temp_f_max:75,humidity_min:40,humidity_max:60}}static getConfigElement(){return document.createElement("air-comfort-card-editor")}setConfig(t){if(!t.temperature_entity)throw new Error("You need to define a temperature_entity");if(!t.humidity_entity)throw new Error("You need to define a humidity_entity");this.config={temperature_unit:"C",temp_c_min:20,temp_c_max:24,temp_f_min:68,temp_f_max:75,humidity_min:40,humidity_max:60,...mt(t)}}getCardSize(){return Math.max(3,Math.round(this.dialSize/90))}connectedCallback(){super.connectedCallback(),"undefined"!=typeof ResizeObserver&&(this.resizeObserver=new ResizeObserver(t=>{const e=t[0];e&&this.updateDialSize(e.contentRect.width)}),this.resizeObserver.observe(this)),this.updateDialSize(this.clientWidth),this.fetchHistory(),this.historyFetchInterval=window.setInterval(()=>{this.fetchHistory()},3e5)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.historyFetchInterval&&clearInterval(this.historyFetchInterval),super.disconnectedCallback()}async fetchHistory(){if(!this.hass||!this.config)return;const t=Date.now();if(t-this.lastHistoryFetch<6e4)return;this.lastHistoryFetch=t;const e=new Date,i=new Date(e.getTime()-864e5);try{const t=[this.config.temperature_entity,this.config.humidity_entity];this.config.co2_entity&&t.push(this.config.co2_entity),this.config.no2_entity&&t.push(this.config.no2_entity),this.config.pm1_entity&&t.push(this.config.pm1_entity),this.config.pm25_entity&&t.push(this.config.pm25_entity),this.config.pm10_entity&&t.push(this.config.pm10_entity),this.config.radon_entity&&t.push(this.config.radon_entity),this.config.voc_entity&&t.push(this.config.voc_entity);const o=await this.hass.callApi("GET",`history/period/${i.toISOString()}?filter_entity_id=${t.join(",")}&end_time=${e.toISOString()}&minimal_response&no_attributes`);if(!o||0===o.length)return;for(const t of o){if(0===t.length)continue;const e=t.filter(t=>!isNaN(parseFloat(t.state))).map(t=>({time:new Date(t.last_changed),value:parseFloat(t.state)})),i=t[0];i.entity_id===this.config.temperature_entity?this.temperatureHistory=e:i.entity_id===this.config.humidity_entity?this.humidityHistory=e:i.entity_id===this.config.co2_entity?this.co2History=e:i.entity_id===this.config.no2_entity?this.no2History=e:i.entity_id===this.config.pm1_entity?this.pm1History=e:i.entity_id===this.config.pm25_entity?this.pm25History=e:i.entity_id===this.config.pm10_entity?this.pm10History=e:i.entity_id===this.config.radon_entity?this.radonHistory=e:i.entity_id===this.config.voc_entity&&(this.vocHistory=e)}}catch(t){console.error("Error fetching history:",t)}}getSensorDefs(){const t=this.config;if(!t)return[];const e=Ot(this.hass?.language),i=(t,e,i)=>null!=t?{value:t,color:e,label:i}:null,o=(...t)=>t.filter(t=>null!==t),r=(e,i)=>{const o=t[e];return o&&this.hass?.states[o]?.attributes.unit_of_measurement||i},n=t.temperature_unit||"C",s=r("temperature_entity","°C"),a="°F"===s||"F"===s,d="F"===n,l=d?"°F":"°C",h=d&&!a?this.temperatureHistory.map(t=>({...t,value:ft(t.value)})):!d&&a?this.temperatureHistory.map(t=>({...t,value:vt(t.value)})):this.temperatureHistory,c=d?t.temp_f_min:t.temp_c_min,p=d?t.temp_f_max:t.temp_c_max;return[{id:"temperature",label:e.sensors.temperature,color:"#ff6b6b",unit:l,history:h,show:!0,thresholds:o(i(c,"rgba(100,150,255,0.5)",e.thresholds.cold),i(p,"rgba(255,100,80,0.5)",e.thresholds.hot))},{id:"humidity",label:e.sensors.humidity,color:"#4dabf7",unit:r("humidity_entity","%"),history:this.humidityHistory,show:!0,thresholds:o(i(t.humidity_min,"rgba(255,180,50,0.5)",e.thresholds.dry),i(t.humidity_max,"rgba(80,160,255,0.5)",e.thresholds.wet))},{id:"co2",label:e.sensors.co2,color:"#a9e34b",unit:r("co2_entity","ppm"),history:this.co2History,show:!!t.co2_entity,thresholds:o(i(xt.co2.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.co2.warning,"rgba(255,180,50,0.5)",e.thresholds.stuffy),i(xt.co2.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"no2",label:e.sensors.no2,color:"#ffa94d",unit:r("no2_entity",""),history:this.no2History,show:!!t.no2_entity,thresholds:o(i(xt.no2.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.no2.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.no2.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"pm1",label:e.sensors.pm1,color:"#e599f7",unit:r("pm1_entity","µg/m³"),history:this.pm1History,show:!!t.pm1_entity,thresholds:o(i(xt.pm1.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.pm1.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.pm1.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"pm25",label:e.sensors.pm25,color:"#da77f2",unit:r("pm25_entity","µg/m³"),history:this.pm25History,show:!!t.pm25_entity,thresholds:o(i(xt.pm25.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.pm25.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.pm25.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"pm10",label:e.sensors.pm10,color:"#74c0fc",unit:r("pm10_entity","µg/m³"),history:this.pm10History,show:!!t.pm10_entity,thresholds:o(i(xt.pm10.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.pm10.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.pm10.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"radon",label:e.sensors.radon,color:"#63e6be",unit:r("radon_entity","Bq/m³"),history:this.radonHistory,show:!!t.radon_entity,thresholds:o(i(xt.radon.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.radon.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.radon.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))},{id:"voc",label:e.sensors.voc,color:"#20c997",unit:r("voc_entity",""),history:this.vocHistory,show:!!t.voc_entity,thresholds:o(i(xt.voc.good,"rgba(100,220,100,0.5)",e.thresholds.good),i(xt.voc.warning,"rgba(255,180,50,0.5)",e.thresholds.warning),i(xt.voc.poor,"rgba(255,80,80,0.5)",e.thresholds.poor))}]}updateDialSize(t){if(!t)return;const e=Math.max(0,t-48);if(!e)return;let i=Math.min(320,e);e>=220&&(i=Math.max(220,i)),Math.abs(i-this.dialSize)>.5&&(this.dialSize=i)}render(){if(!this.config||!this.hass)return z``;const t=Ot(this.hass.language),e=this.hass.states[this.config.temperature_entity],i=this.hass.states[this.config.humidity_entity];if(!e||!i)return z`
        <div class="card-content">
          <div class="card-header">
            <div class="card-title">${t.card.title}</div>
          </div>
          <div>${t.card.entityNotFound}</div>
        </div>
      `;const o=parseFloat(e.state),r=parseFloat(i.state),n=e.attributes.unit_of_measurement||"°C",s=i.attributes.unit_of_measurement||"%";if(isNaN(o)||isNaN(r))return z`
        <div class="card-content">
          <div class="card-header">
            <div class="card-title">${t.card.title}</div>
          </div>
          <div>${t.card.invalidSensorValues}</div>
        </div>
      `;const a="°F"===n||"F"===n,d=a?vt(o):o,l=this.config.temperature_unit||"C";let h,c,p,u;"F"===l?(h=a?o:ft(o),c="°F"):(h=a?vt(o):o,c="°C"),"F"===l?(p=vt(this.config.temp_f_min??68),u=vt(this.config.temp_f_max??75)):(p=this.config.temp_c_min??20,u=this.config.temp_c_max??24);const{angle:m,radialDistance:y,statusText:g,tempDeviation:f,humidityDeviation:v}=function(t,e,i){const o=i?.tempMin??20,r=i?.tempMax??24,n=i?.humidityMin??40,s=i?.humidityMax??60;let a=0;t<o?a=o-t:t>r&&(a=t-r);let d=0;e<n?d=n-e:e>s&&(d=e-s);const l=0===a&&0===d;let h=0;if(l){const i=t-(o+r)/2,a=e-(n+s)/2;h=Math.atan2(-i,a)*(180/Math.PI),h=(h+90+360)%360}else{let i=0,a=0;t<o?i=t-o:t>r&&(i=t-r),e<n?a=e-n:e>s&&(a=e-s),h=Math.atan2(-i,a)*(180/Math.PI),h=(h+90+360)%360}const c=a/10,p=d/40,u=Math.sqrt(c*c+p*p);let m="PLEASANT";if(!l){const i=Math.abs(a),r=Math.abs(d);m=i>.5*r?t<o?r>5?e<n?"COLD & DRY":"COLD & HUMID":"COLD":r>5?e<n?"HOT & DRY":"HOT & HUMID":"HOT":e<n?i>1?t<o?"COLD & DRY":"HOT & DRY":"DRY":i>1?t<o?"COLD & HUMID":"HOT & HUMID":"HUMID"}return{angle:h,radialDistance:u,isInComfortZone:l,statusText:m,tempDeviation:a,humidityDeviation:d}}(d,r,{tempMin:p,tempMax:u,humidityMin:this.config.humidity_min,humidityMax:this.config.humidity_max}),_=.2*this.dialSize,$=.35*this.dialSize,b=(p+u)/2,x=((this.config.humidity_min??40)+(this.config.humidity_max??60))/2,w=(d-b)/Math.max(.5,(u-p)/2),E=(r-x)/Math.max(1,((this.config.humidity_max??60)-(this.config.humidity_min??40))/2),C=Math.max(Math.abs(w),Math.abs(E));let A;C<=1?A=C*_:(A=_+y*($-_)/1.5,A=Math.min(A,$));const H=(m-90)*(Math.PI/180),S=A*Math.cos(H),M=A*Math.sin(H),O=f>0,D=v>0,T=this.calculateAirQuality(),{label:k,severity:R}=Ht(g,T,t);return z`
      <div class="card-content">
        <div class="card-header">
          <div class="card-title">${this.config.name||t.card.title}</div>
          <div class="status-badge">
            <span class="severity-dot severity-${R}"></span>
            ${k}
          </div>
        </div>

        <div
          class="comfort-dial-container"
          style="--dial-size: ${this.dialSize}px;"
        >
          <div class="comfort-dial">
            <div class="dial-outer-ring"></div>
            <div class="dial-comfort-zone"></div>
            <div
              class="comfort-indicator"
              style="transform: translate(-50%, -50%) translate(${S}px, ${M}px);"
            ></div>

            <div class="dial-label label-top">${t.dial.hot}</div>
            <div class="dial-label label-right">${t.dial.humid}</div>
            <div class="dial-label label-bottom">${t.dial.cold}</div>
            <div class="dial-label label-left">${t.dial.dry}</div>
          </div>
        </div>

        <div class="readings">
          <div class="reading">
            <div class="reading-label">${t.readings.temperature}</div>
            <div class="reading-value">
              ${O?z`
                    <span class="warning-icon">⚠</span>
                  `:""}
              ${h.toFixed(1)}<span class="reading-unit"
                >${c}</span
              >
            </div>
          </div>

          <div class="reading">
            <div class="reading-label">${t.readings.humidity}</div>
            <div class="reading-value">
              ${D?z`
                    <span class="warning-icon">⚠</span>
                  `:""}
              ${r.toFixed(0)}<span class="reading-unit"
                >${s}</span
              >
            </div>
          </div>
        </div>

    ${this.renderCharts()}
  </div>
`}toggleHistory(){this.historyExpanded=!this.historyExpanded}calculateAirQuality(){if(!this.config||!this.hass)return null;const t=[{entity:this.config.co2_entity,thresholds:xt.co2},{entity:this.config.no2_entity,thresholds:xt.no2},{entity:this.config.pm1_entity,thresholds:xt.pm1},{entity:this.config.pm25_entity,thresholds:xt.pm25},{entity:this.config.pm10_entity,thresholds:xt.pm10},{entity:this.config.radon_entity,thresholds:xt.radon},{entity:this.config.voc_entity,thresholds:xt.voc}],e=[];for(const{entity:i,thresholds:o}of t){if(!i)continue;const t=this.hass.states[i];if(!t)continue;const r=parseFloat(t.state);isNaN(r)||e.push({value:r,good:o.good,warning:o.warning})}return function(t){if(0===t.length)return null;let e="good";for(const i of t){const t=wt(i);$t[t]>$t[e]&&(e=t)}return{level:e,label:bt[e]}}(e)}handleHistoryToggleKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.toggleHistory())}renderCharts(){const t=this.getSensorDefs().filter(t=>t.show);if(0===t.length)return null;const e=Ot(this.hass?.language);return z`
      <div class="history-section">
        <div
          class="history-toggle"
          role="button"
          tabindex="0"
          aria-expanded="${this.historyExpanded}"
          @click=${this.toggleHistory}
          @keydown=${this.handleHistoryToggleKeyDown}
        >
          <span>
            ${this.historyExpanded?e.history.hide:e.history.show}
          </span>
          <svg
            class="history-toggle-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        ${this.historyExpanded?z`
              <div class="charts-container">
                ${t.map(t=>z`
                  <div class="chart-wrapper">
                    <div class="chart-label">${t.label} ${e.history.chartSuffix}</div>
                    <svg-line-chart
                      .data=${t.history}
                      .color=${t.color}
                      .unit=${t.unit}
                      .thresholds=${t.thresholds}
                    ></svg-line-chart>
                  </div>
                `)}
              </div>
            `:""}
      </div>
    `}};Nt.styles=gt,t([ht({attribute:!1})],Nt.prototype,"hass",void 0),t([ct()],Nt.prototype,"config",void 0),t([ct()],Nt.prototype,"dialSize",void 0),t([ct()],Nt.prototype,"temperatureHistory",void 0),t([ct()],Nt.prototype,"humidityHistory",void 0),t([ct()],Nt.prototype,"co2History",void 0),t([ct()],Nt.prototype,"no2History",void 0),t([ct()],Nt.prototype,"pm1History",void 0),t([ct()],Nt.prototype,"pm25History",void 0),t([ct()],Nt.prototype,"pm10History",void 0),t([ct()],Nt.prototype,"radonHistory",void 0),t([ct()],Nt.prototype,"vocHistory",void 0),t([ct()],Nt.prototype,"historyExpanded",void 0),Nt=t([dt("air-comfort-card")],Nt),window.customCards=window.customCards||[],window.customCards.push({type:"air-comfort-card",name:"Air Comfort Card",description:"A card that visualizes indoor air comfort using temperature and humidity",preview:!1,documentationURL:"https://github.com/mrded/ha-air-comfort-card"});export{Nt as AirComfortCard};
//# sourceMappingURL=air-comfort-card.js.map
