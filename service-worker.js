if(!self.define){let i,s={};const l=(l,e)=>(l=new URL(l+".js",e).href,s[l]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=s,document.head.appendChild(i)}else i=l,importScripts(l),s()})).then((()=>{let i=s[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(e,t)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const u=i=>l(i,n),Q={module:{uri:n},exports:r,require:u};s[n]=Promise.all(e.map((i=>Q[i]||u(i)))).then((i=>(t(...i),r)))}}define(["./workbox-d169e1d7"],(function(i){"use strict";i.setCacheNameDetails({prefix:"stapxs-qq-lite"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/Stapxs-QQ-Lite-2.0/bcui/.git",revision:"68c23bd814e01f336c786a1e205b0cf9"},{url:"/Stapxs-QQ-Lite-2.0/bcui/.gitignore",revision:"2893065bc15d6dceefef35cec3ce2dff"},{url:"/Stapxs-QQ-Lite-2.0/bcui/LICENSE",revision:"86d3f3a95c324c9479bd8986968f4327"},{url:"/Stapxs-QQ-Lite-2.0/bcui/README.md",revision:"9b57a9a916da3ffd906b68270a2b64a6"},{url:"/Stapxs-QQ-Lite-2.0/bcui/css/color-dark.css",revision:"db9b72f87e05656a1c48d344e97d9b97"},{url:"/Stapxs-QQ-Lite-2.0/bcui/css/color-light.css",revision:"2283cd9950a772ad3fd2bb1feaf9317a"},{url:"/Stapxs-QQ-Lite-2.0/bcui/css/prism-dark.css",revision:"6465e75d7c644a90c1dadd0f304540dc"},{url:"/Stapxs-QQ-Lite-2.0/bcui/css/prism-light.css",revision:"1210d00d6d360df6e379e9b7ff4275f2"},{url:"/Stapxs-QQ-Lite-2.0/bcui/css/style.css",revision:"32141d44719569d0835b7e488083094d"},{url:"/Stapxs-QQ-Lite-2.0/bcui/js/auto-theme.js",revision:"38af66f11e1f79172f36245d7f0beedf"},{url:"/Stapxs-QQ-Lite-2.0/bcui/js/main.js",revision:"9253e08e4704365ee7fbda09a32a575d"},{url:"/Stapxs-QQ-Lite-2.0/css/346.fb579a5c.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/469.5ac02be5.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/573.c5796dc3.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/580.b80c2c08.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/789.fab021cb.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/826.13ca82e7.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/app.34337012.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/append-dark.css",revision:"3facb4adc7fdda2b295ffb70d57d79f1"},{url:"/Stapxs-QQ-Lite-2.0/css/append-light.css",revision:"7b96e33c944079ca28e5fa2c69167206"},{url:"/Stapxs-QQ-Lite-2.0/img/Vue.7001fa3c.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/dmg-bg.png",revision:"c7d78207745ab6a99a8b341b911c0947"},{url:"/Stapxs-QQ-Lite-2.0/img/s0.aec28bf2.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s100.a17962c1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s102.46179645.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s103.1e3d7f9c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s104.2bdc23a0.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s106.1d06655b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s109.dab4b7f5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s11.042a4c2c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s110.e5e32dcc.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s113.8032a6af.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s12.cfdc8b5f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s124.29422e65.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s125.1ebd3e0f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s127.c1051024.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s129.6a33969e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s135.cb3a3d96.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s136.5ca963b5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s137.814fc977.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s138.80ce54e9.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s140.88a3c581.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s144.82905fa2.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s147.b1f19918.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s148.84534a84.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s151.502935e5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s158.ae246a6a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s168.f9c116c9.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s169.ee9a8cee.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s171.4c8f51c6.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s174.2e0ac6c4.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s18.d6eda33d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s181.e9c39012.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s184.a1395623.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s185.1bb73784.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s186.55fc056b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s19.e92259cb.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s190.f6790b4a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s194.a38ec171.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s196.7946cd81.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s197.bf1348b5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s198.2b8cfc61.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s199.0082c88b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s200.6bbdf012.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s201.5498b4ae.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s202.f66e9edb.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s204.d9fbf035.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s205.27f183ed.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s206.b1110d12.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s207.a2d0e769.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s208.21e1928d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s210.6d1253f9.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s211.92e3a676.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s213.d36ba4ca.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s214.32b35a02.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s215.40f21b09.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s216.127a0f22.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s217.a0d396a3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s218.74e21b48.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s219.b60a0b0b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s220.3fa09cf8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s221.465e5faa.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s222.0a5b8f16.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s223.4f031eb1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s224.ad9dc320.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s225.57760766.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s226.acdafefb.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s228.f15cbb40.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s229.9eef27a3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s231.8e7fa146.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s232.3b2e749d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s233.73dfae16.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s234.99b194a0.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s235.87081179.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s238.d22eae5a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s239.6436991e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s240.2775049a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s244.1d16a00b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s245.6d6995aa.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s246.95cf2ba3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s26.153a5ee9.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s260.32e9482f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s261.633d18ba.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s264.92db0eab.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s265.069068e8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s267.47806878.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s269.e2e73cb2.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s27.f23e347b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s272.8cb7237c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s273.7c223440.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s274.ba04dee3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s278.11782972.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s279.fe20ec5d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s280.5ef46d8f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s282.f3d6d351.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s283.09d01ed7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s284.0a18151b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s285.0d505d60.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s287.e515a803.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s288.724d3970.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s289.b6c77984.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s29.8e3cf20d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s290.79d5b519.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s291.e3698bbd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s292.f8c6fad7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s293.0bf152a1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s294.b28ecc5a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s295.94c9ce29.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s296.3a3c5ca5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s297.0a2c0345.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s298.cd9560c5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s299.1ae750ef.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s300.e750c13e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s301.c854d8ac.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s302.d4d5d2ce.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s303.be17f9ce.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s304.263b9458.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s305.47e151d5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s306.bdfd0dbe.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s306.e7cd68dd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s307.2455cb5f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s308.26f11aa7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s309.820b2c0b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s31.c54883dd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s310.59c0c40d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s311.dfe78ca5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s312.13a2f091.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s313.9b092748.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s314.ba4ec7c7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s315.d9efd323.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s316.5d5f1d4a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s317.7c1d6049.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s318.781656f5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s319.4d0cbe1c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s32.d8b33ab6.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s320.c058971a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s321.0ce6e8fc.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s322.929e435d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s323.8d383a13.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s324.c4b68438.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s324.dd4aa20e.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s325.8d1fbe8c.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s325.b782642f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s326.9da50b50.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s332.85d96562.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s333.3aa61f05.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s334.e44c5312.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s335.b1cae656.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s336.a2757e5c.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s337.384e42b7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s337.fd6fef04.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s338.cc8bdaf8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s339.45efaee5.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s339.632f1671.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s340.13581160.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s340.d9ade4d3.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s341.0c4a3968.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s341.e94e271f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s342.25ccfc8c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s342.350d88e4.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s343.2a37a453.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s343.c18e6b8c.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s344.45fe2451.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s344.4f770953.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s345.860ff8b3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s345.ae2fe5c4.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s346.30553377.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s346.91b25552.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s347.04585a7d.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s347.e0ba1b3a.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s348.b6c3e95e.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s348.cf76fd7a.png",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s35.72bc0ed6.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s42.5a9a4b6c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s46.d0e397f7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s5.2921fcdd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s54.3d0e744c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s55.5a88628f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s59.a9f2f46e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s61.b057e05c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s66.3af3e58c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s69.6331f339.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s7.da2d140d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s74.d314b232.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s75.082a00b7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s86.af2dfd4f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s89.7421ef81.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s9.0f491da2.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s97.ebb8bf16.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s98.24802123.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/s99.8b6cb8d7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/index.html",revision:"818d9e758db69dee8743673195cbd57b"},{url:"/Stapxs-QQ-Lite-2.0/js/346.33239e97.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/469.0fa6b4a0.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/573.f3b43867.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/580.b38f06c3.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/789.42b89788.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/826.571bf527.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/amap.js",revision:"aa702c11c994c12f020c0e54de0232ed"},{url:"/Stapxs-QQ-Lite-2.0/js/app.28dd9444.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/manifest.json",revision:"2e9c741704c4c69bfa9c468558ee3b77"},{url:"/Stapxs-QQ-Lite-2.0/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/Stapxs-QQ-Lite-2.0/sw.js",revision:"b552ec80cfd273e8d6159de0ad25e1bd"}],{})}));
