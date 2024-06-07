import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.Cj_rLs_y.js";const g=JSON.parse('{"title":"CSS错误笔记","description":"","frontmatter":{},"headers":[],"relativePath":"css/css mistake.md","filePath":"css/css mistake.md"}'),n={name:"css/css mistake.md"},e=t(`<h1 id="css错误笔记" tabindex="-1">CSS错误笔记 <a class="header-anchor" href="#css错误笔记" aria-label="Permalink to &quot;CSS错误笔记&quot;">​</a></h1><h2 id="_2024年" tabindex="-1">2024年 <a class="header-anchor" href="#_2024年" aria-label="Permalink to &quot;2024年&quot;">​</a></h2><h3 id="_5月" tabindex="-1">5月 <a class="header-anchor" href="#_5月" aria-label="Permalink to &quot;5月&quot;">​</a></h3><p><strong>在使用transform对元素进行更改修饰</strong>比如说‘定位’如下例使用在ul中我们使用translate进行位置居中，后续又对nav ul进行一个添加操作，这时我们要注意，不要只添加<code>scal（1）</code>而要加上<code>translate（-50%，-50%）</code>不然对于hover之后他不会显示位置的变化。</p><p><strong>bootstrap4-font</strong>，一个字体库，建议使用，可以vs直接搜索，或者百度。</p><p><strong>引用字体库</strong>对其进行字体放大时，使用<code>i{font-size:100px}</code>没有效果，要是用它的类名，因为这存在一个优先级，所以<code>i.fa{font-size:100px}</code>才对。</p><p><strong>定位</strong>几种中心定位方法：</p><p>①弹性盒模型</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display:flex;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">justify-content:center;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-self:center</span></span></code></pre></div><p>②<code>position</code>定位：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">position: absolute;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">left: 50%;top: 50%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transform: translate(-50%,-50%);</span></span></code></pre></div><p>③栅格定位：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display:grid;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">justify-self:center;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">align-self:center</span></span></code></pre></div><p><strong>&amp;符号引用类</strong>:&amp;可以看作是a</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;.form-bg{  }  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>在导航条中想把元素顶到最右边</strong>，只需要让左边元素的<code>margin-right=auto</code>即可充满整个导航条，把旁边元素顶到最右边。</p><p><strong>使用checkbox</strong>不要忘记将id赋给lable，不然点击label没有触发checkbox的效果</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;toggle-nav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fa fa-tasks&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;toggle-nav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>小技巧</strong>：在弹性模型例如做个跳转页码，用边框时，相邻元素边框紧贴，造成视觉加粗，可以使用<code>margin-left</code>移动，让边框重叠，去掉视觉加粗。</p>`,19),l=[e];function p(h,k,o,d,r,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
