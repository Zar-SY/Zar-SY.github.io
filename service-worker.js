if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/08/25/hello-world/index.html",revision:"dcfee0c6ff2b6568080c2466a3c09a5f"},{url:"2022/10/08/思维是在绕圈/index.html",revision:"2d509416c609b24083225130b9535bd6"},{url:"404.html",revision:"ecb0f022db7caf001d7fdcde1d6343fc"},{url:"about/index.html",revision:"a0af9315e1713e84f15178d8b6f93716"},{url:"archives/2022/08/index.html",revision:"b97d086f19e3e01cc63b2f75074ddc80"},{url:"archives/2022/10/index.html",revision:"782319ea37d797f3c47ff0145e88f0d9"},{url:"archives/2022/index.html",revision:"f21f7fa80cffd1cf5250b6288d673d6b"},{url:"archives/index.html",revision:"9ae5e6e1cd469fed18511f4a0e122703"},{url:"bangumis/index.html",revision:"137174bd2bca998b4bf3736252dce764"},{url:"categories/index.html",revision:"edfd878af27c33e8c21c910eda595160"},{url:"categories/瞎折腾/index.html",revision:"56df610bf4965708e234d89b11cb0c08"},{url:"categories/随笔/index.html",revision:"712568346f9220d0c5eac2d359412fa7"},{url:"cinemas/index.html",revision:"84f2badcce3042b7d1039a58ddf7256f"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"b10cfcfc357113a3eed2651046effa88"},{url:"images/bangumis/loading.gif",revision:"b86c6b435fc25c1366acaafc3fb5c252"},{url:"img/22-08-25.jpg",revision:"05db5559e10e1a7115fea20ac4ff9698"},{url:"img/22-10-08.png",revision:"368ff0e6d0df300bd51dc8db8b2404aa"},{url:"img/avatar.png",revision:"cd65ab72f0d491a76896a4c04aac41b5"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/wa2.png",revision:"639c1ed25ae00683407fa8cb21d0ee92"},{url:"index.html",revision:"c4e5bf02a71f6b283f62fd5d64509b4a"},{url:"js/boot.js",revision:"211458bcbad652438aee5e0e8976b86e"},{url:"js/color-schema.js",revision:"fda9ab19205d5873d3710a4cc5bb5ec3"},{url:"js/duration.js",revision:"66da1827c9d1a26c1cf108c9d2248cb3"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"85b5700ee52692e268d7ce57a8e3647b"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"dc318860573c24e4b5d8a7605cf8356e"},{url:"tags/index.html",revision:"8507f620938c106c27811fa4c1980178"},{url:"tags/思考/index.html",revision:"33eddab25a95b2fbe55cbfb68da02698"},{url:"tags/生活/index.html",revision:"6b05f733f3af555fccbbeb6ccd8e041d"},{url:"tags/瞎折腾/index.html",revision:"cda5997010f14892b97dc72b93257278"}],{})}));
//# sourceMappingURL=service-worker.js.map
