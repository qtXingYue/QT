# 新海诚专题博客（增强版）

## 1) 时间轴专题页
- 打开 `timeline.html` 即可看到按年代整理的作品时间轴
- 首页导航也已加入「时间轴」入口
- 时间轴页面现在支持主题切换，且会记住首页的主题设置

## 2) 场景截图 + 文字解析
文章里已经内置了截图位（figure）。你只需要把图片放到 `assets/` 下并按下列文件名命名即可自动显示：
- assets/yourname_stairs.jpg
- assets/yourname_twilight.jpg
- assets/weathering_cityrain.jpg
- assets/suzume_door.jpg
- assets/sky_palette_ref.jpg
- assets/kotonoha_garden.jpg （《言叶之庭》新增文章）

> 不放图片也没关系：页面会显示占位提示。

## 3) 新海诚天空色系背景
已将背景氛围渐变改为：晨曦青蓝 / 夕阳粉橙 / 深夜靛紫（在 styles.css 的 .bg__glow）

## 4) 近期改进
- 新增第 5 篇文章：《言叶之庭》情感解析
- 主题（暗色/亮色）现在跨页面持久保存
- 时间轴页面加入主题切换按钮
- 新增「回到顶部」按钮（滚动超过 320px 后出现）
- 订阅表单提交后在表单下方显示成功提示
- 封面图片加载失败时优雅降级（不显示损坏图标）