const posts = [
  {
    id: "p1",
    title: "细读《你的名字。》：时间错位、结绳与命运感是怎么被“做出来”的",
    category: "动画",
    tags: ["你的名字", "新海诚", "深度解析"],
    date: "2026-01-03",
    readTime: "14 min",
    hot: true,
    excerpt: "这部电影最厉害的不是设定，而是把“想见你”加工成一种不可逃避的必然。",
    content: `
      <h3>一、叙事的“误导”：先让你相信这是日常喜剧</h3>
      <p>身体互换提供亲密感：观众在笑点里习惯两人的生活细节，于是当真相揭开时，损失感会更真实。</p>

      <div class="sceneBlock">
        <div class="sceneGrid">
          <div>
            <figure class="figure">
              <img src="assets/yourname_stairs.jpg" alt="《你的名字。》阶梯相遇场景（请替换为你的截图）" onerror="this.style.display='none'; this.parentElement.querySelector('.figure__placeholder').style.display='grid';">
              <div class="figure__placeholder">把截图放到 <b>assets/yourname_stairs.jpg</b><br/>这里会自动显示</div>
            </figure>
            <div class="figcap">场景截图 01：阶梯相遇（建议用你自己截的高清图）。</div>
          </div>
          <div class="analysis">
            <p><b>解析：</b>阶梯是一条很“新海诚”的空间：向上与向下的交汇，象征两条人生轨迹短暂重合。</p>
            <p>镜头把人流、光线与呼吸节奏塞进同一条线里：你会觉得相遇很普通，但又像命运早已写好。</p>
            <p class="note">写作技巧：先写“空间功能”（阶梯=交汇），再写“情绪功能”（普通=必然）。</p>
          </div>
        </div>
      </div>

      <h3>二、结绳不是道具，是“时间观”</h3>
      <p>结绳的纠缠、断裂、再连接，描述了关系的形态，也暗示时间并非直线，而是回环与重编织。</p>

      <div class="sceneBlock">
        <div class="sceneGrid">
          <div>
            <figure class="figure">
              <img src="assets/yourname_twilight.jpg" alt="《你的名字。》黄昏之时（请替换为你的截图）" onerror="this.style.display='none'; this.parentElement.querySelector('.figure__placeholder').style.display='grid';">
              <div class="figure__placeholder">把截图放到 <b>assets/yourname_twilight.jpg</b><br/>这里会自动显示</div>
            </figure>
            <div class="figcap">场景截图 02：黄昏之时（カタワレ時）——时间裂缝显形的瞬间。</div>
          </div>
          <div class="analysis">
            <p><b>解析：</b>黄昏渐变把“世界规则”变软了：天空颜色变得不可信，观众自然接受超现实发生。</p>
            <p>这不是炫技，是情绪工程：用颜色告诉你“现在可以见面”。</p>
          </div>
        </div>
      </div>

      <h3>三、最后一句话为什么要问“名字”</h3>
      <p>名字是身份的锚点。当名字消失，情感仍在——影片把命运从记忆里剥离出来，留下一种更本能的确认。</p>
    `
  },

  {
    id: "p2",
    title: "《天气之子》：当爱情与世界站在两端，选择为何会刺痛？",
    category: "动画",
    tags: ["天气之子", "新海诚", "主题分析"],
    date: "2026-01-02",
    readTime: "12 min",
    hot: true,
    excerpt: "雨不是背景，它是一整座城市的焦虑；晴天不是奖励，它是代价。",
    content: `
      <h3>一、雨的系统：社会压力如何被天气“具象化”</h3>
      <p>持续降雨让东京像一个巨大的情绪容器：潮湿、拥挤、喘不过气。</p>

      <div class="sceneBlock">
        <div class="sceneGrid">
          <div>
            <figure class="figure">
              <img src="assets/weathering_cityrain.jpg" alt="《天气之子》城市雨景（请替换为你的截图）" onerror="this.style.display='none'; this.parentElement.querySelector('.figure__placeholder').style.display='grid';">
              <div class="figure__placeholder">把截图放到 <b>assets/weathering_cityrain.jpg</b><br/>这里会自动显示</div>
            </figure>
            <div class="figcap">场景截图：雨中的城市（建议截取霓虹反光与积水倒影）。</div>
          </div>
          <div class="analysis">
            <p><b>解析：</b>雨把城市“抹平”，让个人显得渺小；但雨也让光更亮、倒影更美——这就是影片的矛盾美学。</p>
            <p class="note">写作提示：用“矛盾对照”写新海诚——痛苦与美常常同时发生。</p>
          </div>
        </div>
      </div>

      <h3>二、争议的核心：个人愿望是否有资格大到改变世界？</h3>
      <p>影片把道德答案留给观众：新海诚更在意“你敢不敢承认自己想要什么”。</p>

      <h3>三、晴天女孩：神话结构与现实代价</h3>
      <p>神话不是逃避现实，而是把现实代价写得更清楚：每一次“放晴”都在消耗某个具体的人。</p>
    `
  },

  {
    id: "p3",
    title: "《铃芽之旅》：门、废墟与告别——一场关于创伤的公路仪式",
    category: "动画",
    tags: ["铃芽之旅", "新海诚", "创伤叙事"],
    date: "2025-12-31",
    readTime: "11 min",
    hot: false,
    excerpt: "这一次，新海诚把灾难写得更“具体”：它有地点、有回声，也有必须说出口的再见。",
    content: `
      <h3>一、门是边界：把不可见的创伤变成可触摸的结构</h3>
      <p>“门的另一侧”不只是奇幻设定，而是对灾难记忆的空间化表达。</p>

      <div class="sceneBlock">
        <div class="sceneGrid">
          <div>
            <figure class="figure">
              <img src="assets/suzume_door.jpg" alt="《铃芽之旅》门的场景（请替换为你的截图）" onerror="this.style.display='none'; this.parentElement.querySelector('.figure__placeholder').style.display='grid';">
              <div class="figure__placeholder">把截图放到 <b>assets/suzume_door.jpg</b><br/>这里会自动显示</div>
            </figure>
            <div class="figcap">场景截图：门与废墟（建议选择“静止但有风”的镜头）。</div>
          </div>
          <div class="analysis">
            <p><b>解析：</b>废墟的存在让告别有了对象。影片把“抽象的痛”转译成“可被关闭的门”。</p>
            <p>当铃芽一次次关闭门，观众在重复中完成情绪上的“整理”。</p>
          </div>
        </div>
      </div>

      <h3>二、旅行即疗愈：不断前行是一种回答</h3>
      <p>公路片结构让每一站都像一次呼吸：停下、面对、再继续。</p>

      <h3>三、最重要的告别：向过去的自己</h3>
      <p>影片最温柔的一刀，是让铃芽对“那个年幼的自己”说：你会没事的。</p>
    `
  },

  {
    id: "p4",
    title: "新海诚色彩与天空配色指南：把“情绪时间”调进画面里",
    category: "杂谈",
    tags: ["新海诚", "配色", "天空美学"],
    date: "2025-12-29",
    readTime: "10 min",
    hot: false,
    excerpt: "新海诚的天空不是写实，它是情绪的计时器：用颜色告诉你“此刻发生了什么”。",
    content: `
      <h3>一、三段天空：晴空蓝 / 黄昏渐变 / 夜空靛紫</h3>
      <p><b>晴空蓝</b>：扩大距离感，制造“触不到”的清澈。</p>
      <p><b>黄昏渐变</b>：情绪转折点，允许超现实短暂发生。</p>
      <p><b>夜空靛紫</b>：沉静、宿命与自我对话。</p>

      <div class="sceneBlock">
        <div class="sceneGrid">
          <div>
            <figure class="figure">
              <img src="assets/sky_palette_ref.jpg" alt="天空配色参考（请替换为你制作的色卡图）" onerror="this.style.display='none'; this.parentElement.querySelector('.figure__placeholder').style.display='grid';">
              <div class="figure__placeholder">把色卡放到 <b>assets/sky_palette_ref.jpg</b><br/>这里会自动显示</div>
            </figure>
            <div class="figcap">建议：自己做一张色卡（截图取色 → 排成条带），视觉会更“专业”。</div>
          </div>
          <div class="analysis">
            <p><b>推荐色值（可直接用于设计）：</b></p>
            <p>#6FB7E9（晴空） / #F2A7A0（暮色） / #FFD6A5（余晖） / #3B2E5A（夜空）</p>
            <p class="note">小技巧：把“余晖色”饱和度降低一点，会更像胶片感。</p>
          </div>
        </div>
      </div>

      <h3>二、云层不是云：它是情绪的放大器</h3>
      <p>新海诚常用更锐利、更“被照亮”的云边，把情绪拉到观众可感的强度。</p>

      <h3>三、雨与反光：让城市变成镜面</h3>
      <p>积水倒影会把光拉长，让画面带一点“不真实”的浪漫——这也是《天气之子》的关键语言。</p>
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
function setProgress(postId, v){ localStorage.setItem(`progress:${postId}`, String(v)); }

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
      <div class="cover"><div class="cover__text">${makeCoverText(p)}</div></div>
      <div class="postMain">
        <h3 class="postTitle">${p.title}</h3>
        <p class="postDesc">${p.excerpt}</p>
        <div class="metaRow">
          <span class="badge">${p.category}</span>
          <span class="badge">${p.date}</span>
          <span class="badge">${p.readTime}</span>
          ${p.hot ? `<span class="badge badge--hot">HOT</span>` : ""}
          <span class="badge">进度</span>
          <div class="progress" aria-label="阅读进度"><i style="width:${prog}%"></i></div>
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

  $("#postDialog").showModal();
}
function closePost(){ $("#postDialog").close(); }

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
    // 订阅仍为演示
    const toast = document.createElement("div");
    toast.className = "toast is-visible";
    toast.innerHTML = "<span>✨</span> 已订阅（演示）！";
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(), 2500);
    e.target.reset();
  });
  $("#themeBtn").addEventListener("click", ()=>{
    setTheme(state.theme === "dark" ? "light" : "dark");
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