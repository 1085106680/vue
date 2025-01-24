<template><div><h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress"><span>Hello VuePress</span></a></h1>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">7890</span></span>
<span class="line">socks<span class="token operator">-</span>port<span class="token operator">:</span> <span class="token number">7891</span></span>
<span class="line">allow<span class="token operator">-</span>lan<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token literal-property property">mode</span><span class="token operator">:</span> Rule</span>
<span class="line">log<span class="token operator">-</span>level<span class="token operator">:</span> info</span>
<span class="line">external<span class="token operator">-</span>controller<span class="token operator">:</span> <span class="token operator">:</span><span class="token number">9090</span></span>
<span class="line"><span class="token literal-property property">dns</span><span class="token operator">:</span></span>
<span class="line">  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  enhanced<span class="token operator">-</span>mode<span class="token operator">:</span> fake<span class="token operator">-</span>ip</span>
<span class="line">  fake<span class="token operator">-</span>ip<span class="token operator">-</span>range<span class="token operator">:</span> <span class="token number">198.18</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">/</span><span class="token number">16</span></span>
<span class="line">  <span class="token literal-property property">nameserver</span><span class="token operator">:</span></span>
<span class="line">    <span class="token operator">-</span> <span class="token number">223.5</span><span class="token number">.5</span><span class="token number">.5</span></span>
<span class="line">    <span class="token operator">-</span> tls<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">8.8</span><span class="token number">.4</span><span class="token number">.4</span><span class="token operator">:</span><span class="token number">853</span></span>
<span class="line"></span>
<span class="line">rule<span class="token operator">-</span>providers<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">direct</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> domain</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/direct.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span>direct<span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> domain</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/private.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span><span class="token keyword">private</span><span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">gfw</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> domain</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/gfw.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span>gfw<span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"></span>
<span class="line">  tld<span class="token operator">-</span>not<span class="token operator">-</span>cn<span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> domain</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/tld-not-cn.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span>tld<span class="token operator">-</span>not<span class="token operator">-</span>cn<span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">telegramcidr</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> ipcidr</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/telegramcidr.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span>telegramcidr<span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">applications</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> http</span>
<span class="line">    <span class="token literal-property property">behavior</span><span class="token operator">:</span> classical</span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://us.mmovomm.pro:7890/rules/applications.txt"</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>ruleset<span class="token operator">/</span>applications<span class="token punctuation">.</span>yaml</span>
<span class="line">    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">86400</span></span>
<span class="line"><span class="token literal-property property">proxies</span><span class="token operator">:</span></span>
<span class="line">  <span class="token operator">-</span> name<span class="token operator">:</span> <span class="token string">"hks"</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> trojan</span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> hks<span class="token punctuation">.</span>mmovomm<span class="token punctuation">.</span>pro</span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">30000</span></span>
<span class="line">    <span class="token literal-property property">network</span><span class="token operator">:</span> grpc</span>
<span class="line">    <span class="token literal-property property">sni</span><span class="token operator">:</span> hks<span class="token punctuation">.</span>mmovomm<span class="token punctuation">.</span>pro</span>
<span class="line">    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"mmovomm"</span></span>
<span class="line">    <span class="token literal-property property">udp</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    grpc<span class="token operator">-</span>opts<span class="token operator">:</span></span>
<span class="line">      grpc<span class="token operator">-</span>service<span class="token operator">-</span>name<span class="token operator">:</span> <span class="token string">"mmovomm"</span></span>
<span class="line"></span>
<span class="line">   </span>
<span class="line">  <span class="token operator">-</span> name<span class="token operator">:</span> <span class="token string">"US-sa"</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> vmess</span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> ai<span class="token punctuation">.</span>mmovomm<span class="token punctuation">.</span>pro</span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span></span>
<span class="line">    <span class="token literal-property property">uuid</span><span class="token operator">:</span> c707c459<span class="token operator">-</span>e368<span class="token operator">-</span><span class="token number">5297</span><span class="token operator">-</span>8a44<span class="token operator">-</span>c5e4cbcde9d8</span>
<span class="line">    <span class="token literal-property property">alterId</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token literal-property property">network</span><span class="token operator">:</span> ws</span>
<span class="line">    <span class="token literal-property property">cipher</span><span class="token operator">:</span> auto</span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">  <span class="token operator">-</span> name<span class="token operator">:</span> <span class="token string">"US"</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> trojan</span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> us<span class="token punctuation">.</span>mmovomm<span class="token punctuation">.</span>pro</span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">29999</span></span>
<span class="line">    <span class="token literal-property property">network</span><span class="token operator">:</span> grpc</span>
<span class="line">    <span class="token literal-property property">sni</span><span class="token operator">:</span> us<span class="token punctuation">.</span>mmovomm<span class="token punctuation">.</span>pro</span>
<span class="line">    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"mmovomm"</span></span>
<span class="line">    <span class="token literal-property property">udp</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    grpc<span class="token operator">-</span>opts<span class="token operator">:</span></span>
<span class="line">      grpc<span class="token operator">-</span>service<span class="token operator">-</span>name<span class="token operator">:</span> <span class="token string">"mmovomm"</span></span>
<span class="line">         </span>
<span class="line">proxy<span class="token operator">-</span>groups<span class="token operator">:</span></span>
<span class="line">  <span class="token operator">-</span> name<span class="token operator">:</span> <span class="token constant">PROXY</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> select</span>
<span class="line">    <span class="token literal-property property">proxies</span><span class="token operator">:</span></span>
<span class="line">      <span class="token operator">-</span> hks</span>
<span class="line">      <span class="token operator">-</span> <span class="token constant">US</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">rules</span><span class="token operator">:</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">RULE</span><span class="token operator">-</span><span class="token constant">SET</span><span class="token punctuation">,</span>applications<span class="token punctuation">,</span><span class="token constant">DIRECT</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">DOMAIN</span><span class="token punctuation">,</span>clash<span class="token punctuation">.</span>razord<span class="token punctuation">.</span>top<span class="token punctuation">,</span><span class="token constant">DIRECT</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">DOMAIN</span><span class="token punctuation">,</span>yacd<span class="token punctuation">.</span>haishan<span class="token punctuation">.</span>me<span class="token punctuation">,</span><span class="token constant">DIRECT</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">RULE</span><span class="token operator">-</span><span class="token constant">SET</span><span class="token punctuation">,</span><span class="token keyword">private</span><span class="token punctuation">,</span><span class="token constant">DIRECT</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">RULE</span><span class="token operator">-</span><span class="token constant">SET</span><span class="token punctuation">,</span>tld<span class="token operator">-</span>not<span class="token operator">-</span>cn<span class="token punctuation">,</span><span class="token constant">PROXY</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">RULE</span><span class="token operator">-</span><span class="token constant">SET</span><span class="token punctuation">,</span>gfw<span class="token punctuation">,</span><span class="token constant">PROXY</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">RULE</span><span class="token operator">-</span><span class="token constant">SET</span><span class="token punctuation">,</span>telegramcidr<span class="token punctuation">,</span><span class="token constant">PROXY</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">MATCH</span><span class="token punctuation">,</span><span class="token constant">DIRECT</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


