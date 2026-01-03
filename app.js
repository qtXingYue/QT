const posts = [
  {
    id: "p1",
    title: "冬夜霓虹：我最爱的 5 部治愈系动画",
    category: "动画",
    tags: ["治愈", "日常", "温柔"],
    date: "2025-12-28",
    readTime: "6 min",
    hot: true,
    excerpt: "适合一个人戴耳机窝在被窝里看的那种：慢、暖、会发光。",
    content: `
      <h3>为什么是“治愈系”？</h3>
      <p>治愈不是鸡汤，而是一种允许你慢下来、呼吸一下的节奏。</p>
      <h3>我的 5 部私藏清单</h3>
      <p>1）《xxx》：适合深夜。</p>
      <p>2）《xxx》：日常的光。</p>
      <p>3）《xxx》：配乐超神。</p>
      <p>4）《xxx》：氛围拉满。</p>
      <p>5）《xxx》：看完想拥抱世界。</p>
      <p>你也可以把这里改成你真实的片单。</p>
    `
  },
  {
    id: "p2",
    title: "漫画分镜到底强在哪？用 3 个例子讲明白",
    category: "漫画",
    tags: ["分镜", "叙事", "技巧"],
    date: "2025-12-22",
    readTime: "8 min",
    hot: false,
    excerpt: "分镜不是“画格子”，而是在控制读者的呼吸与注意力。",
    content: `
      <h3>分镜的核心：节奏</h3>
      <p>大格子=停顿，小格子=加速。</p>
      <h3>例子 A：冲击瞬间</h3>
      <p>给关键一击留白，会更“响”。</p>
      <h3>例子 B：情绪堆叠</h3>
      <p>连续近景能把人拉进角色内心。</p>
    `
  },
  {
    id: "p3",
    title: "我用一周把游戏 UI 调成二次元霓虹风：踩坑记录",
    category: "游戏",
    tags: ["UI", "设计", "霓虹"],
    date: "2025-12-18",
    readTime: "10 min",
    hot: true,
    excerpt: "从配色到字体再到阴影：每一步都在和“花哨”做斗争。",
    content: `
      <h3>目标：霓虹但不刺眼</h3>
      <p>关键是控制对比度与留白比例。</p>
      <h3>我踩过的坑</h3>
      <p>1）高饱和 + 强发光 = 眼睛痛</p>
      <p>2）信息密度太高 = 读不动</p>
      <p>3）统一不了的圆角 = 不高级</p>
    `
  },
  {
    id: "p4",
    title: "杂谈：为什么我喜欢 City Pop 式的“夏夜感”",
    category: "杂谈",
    tags: ["CityPop", "夏夜", "情绪"],
    date: "2025-12-12",
    readTime: "5 min",
    hot: false,
    excerpt: "那种风里有海盐、路灯像汽水气泡的感觉，会让人相信明天。",
    content: `
      <h3>一种“被定格的乐观”</h3>
      <p>City Pop 很像给生活加了一层柔光滤镜。</p>
      <h3>我的私人配方</h3>
      <p>夕阳渐变、干净的线条、恰到好处的霓虹。</p>
    `
  }
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const state = {
  theme: localStorage.getItem("theme") || "dark",
  filter: "all",
  query: "",
};

function uniqueTags(list){
  const set = new Set();
  list.forEach(p => p.tags.forEach(t => set.add(t)));
  return [...set].sort((a,b)=>a.localeCompare(b,"zh-CN"));
}

function renderStats(){
  $("#statPosts").textContent = String(posts.length);
  $("#statTags").textContent = String(uniqueTags(posts).length);
}

function makeCoverText(post){
  const t = post.tags[0] ? `#${post.tags[0]}` : `#${post.category}`;
  return `${post.category} · ${t}`;
}

function progressFor(post){
  const v = Number(localStorage.getItem(`progress:${post.id}`) || 0);
  return Math.max(0, Math.min(100, v));
}

function setProgress(postId, v){
  localStorage.setItem(`progress:${postId}`, String(v));
}

function matches(post){
  const q = state.query.trim().toLowerCase();
  const hitQuery = !q
    || post.title.toLowerCase().includes(q)
    || post.tags.some(t => t.toLowerCase().includes(q))
    || post.category.toLowerCase().includes(q);

  const hitFilter = state.filter === "all" || post.category === state.filter;

  return hitQuery && hitFilter;
}

function renderPosts(){
  const list = $("#postList");
  list.innerHTML = "";

  const filtered = posts.filter(matches).sort((a,b)=> b.date.localeCompare(a.date));

  if(filtered.length === 0){
    list.innerHTML = `<div class="card" style="padding:16px">没有匹配的文章，换个关键词试试～</div>`;
    return;
  }

  for(const p of filtered){
    const prog = progressFor(p);
    const el = document.createElement("article");
    el.className = "postCard";
    el.dataset.id = p.id;

    el.innerHTML = `
      <div class="cover">
        <div class="cover__text">${makeCoverText(p)}</div>
      </div>
      <div class="postMain">
        <h3 class="postTitle">${p.title}</h3>
        <p class="postDesc">${p.excerpt}</p>
        <div class="metaRow">
          <span class="badge">${p.category}</span>
          <span class="badge">${p.date}</span>
          <span class="badge">${p.readTime}</span>
          ${p.hot ? `<span class="badge badge--hot">HOT</span>` : ""}
          <span class="badge">进度</span>
          <div class="progress" aria-label="阅读进度">
            <i style="width:${prog}%"></i>
          </div>
          <span class="badge">${prog}%</span>
        </div>
      </div>
    `;

    el.addEventListener("click", () => openPost(p.id));
    list.appendChild(el);
  }
}

function renderTags(){
  const wrap = $("#tags");
  wrap.innerHTML = "";
  const tags = uniqueTags(posts);

  for(const t of tags){
    const b = document.createElement("button");
    b.className = "tag";
    b.type = "button";
    b.textContent = `#${t}`;
    b.addEventListener("click", () => {
      state.query = t;
      $("#searchInput").value = t;
      renderPosts();
    });
    wrap.appendChild(b);
  }
}

function renderHot(){
  const hot = [...posts]
    .sort((a,b)=> (b.hot === a.hot ? b.date.localeCompare(a.date) : (b.hot?1:-1)))
    .slice(0, 4);

  const wrap = $("#hotList");
  wrap.innerHTML = "";

  for(const p of hot){
    const a = document.createElement("a");
    a.href = "javascript:void(0)";
    a.className = "hotItem";
    a.innerHTML = `<div>${p.title}</div><span>${p.readTime}</span>`;
    a.addEventListener("click", () => openPost(p.id));
    wrap.appendChild(a);
  }
}

function openPost(id){
  const p = posts.find(x => x.id === id);
  if(!p) return;

  $("#dialogTitle").textContent = p.title;
  $("#dialogMeta").textContent = `${p.category} · ${p.date} · ${p.readTime} · 标签：${p.tags.map(t=>`#${t}`).join(" ")}`;
  $("#dialogBody").innerHTML = p.content;

  const now = progressFor(p);
  const next = Math.min(100, now + 18);
  setProgress(p.id, next);
  renderPosts();

  const dlg = $("#postDialog");
  dlg.showModal();
}

function closePost(){
  const dlg = $("#postDialog");
  dlg.close();
}

function setTheme(next){
  state.theme = next;
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);

  const btn = $("#themeBtn");
  if(next === "light"){
    btn.querySelector(".btn__icon").textContent = "☀";
    btn.querySelector(".btn__text").textContent = "亮色";
  }else{
    btn.querySelector(".btn__icon").textContent = "☾";
    btn.querySelector(".btn__text").textContent = "暗色";
  }
}

function showToast(msg){
  let toast = $(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span> ${msg}`;
  toast.classList.add("is-visible");
  setTimeout(()=>{
    toast.classList.remove("is-visible");
  }, 3000);
}

function bind(){
  $("#searchInput").addEventListener("input", (e)=>{
    state.query = e.target.value;
    renderPosts();
  });

  $$(".pill").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      $$(".pill").forEach(x=>x.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.filter = btn.dataset.filter;
      renderPosts();
    });
  });

  $("#dialogClose").addEventListener("click", closePost);
  $("#postDialog").addEventListener("click", (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();
    const inDialog = (
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width
    );
    if(!inDialog) closePost();
  });

  $("#subForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    showToast("已订阅（演示）！之后你可以接入真实后端或第三方订阅服务～");
    e.target.reset();
  });

  $("#themeBtn").addEventListener("click", ()=>{
    setTheme(state.theme === "dark" ? "light" : "dark");
  });
  
  // 绑定个人链接点击事件
  $$(".profile__links .link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("这里可以跳转到你的社交主页～");
    });
  });
}

function dailyPick(){
  const pick = posts[Math.floor(Math.random() * posts.length)];
  $("#dailyPick").textContent = `《${pick.title}》— ${pick.excerpt}`;
}

function init(){
  setTheme(state.theme);
  renderStats();
  renderTags();
  renderHot();
  renderPosts();
  dailyPick();
  $("#year").textContent = String(new Date().getFullYear());
  bind();
}

init();
