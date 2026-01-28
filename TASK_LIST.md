# personal-site 任务清单

## 第一批：核心功能

### Task 1: 实现笔记搜索功能
**文件**: `src/lib/notes.ts` + `src/app/[locale]/notes/page.tsx`
**目标**: 搜索框从 UI 变成真正可搜索

### Task 2: 修复 i18n 硬编码
**文件**: `src/app/[locale]/notes/page.tsx` + `src/app/[locale]/notes/[slug]/page.tsx`
**目标**: 所有硬编码中文替换为 t() 调用

### Task 3: 添加代码块复制按钮
**文件**: `src/app/[locale]/notes/[slug]/page.tsx`
**目标**: 每个代码块右上角添加复制按钮

## 第二批：增强功能

### Task 4: 添加阅读进度条
**文件**: `src/app/[locale]/notes/[slug]/page.tsx`
**目标**: 页面顶部显示阅读进度

### Task 5: 添加标签系统
**文件**: `src/lib/notes.ts` + `src/app/[locale]/notes/page.tsx`
**目标**: 笔记支持标签筛选

---

状态:
- [x] 任务列表创建
- [x] Task 1: 搜索功能 - 后端函数已完成 (notes.ts)
- [x] Task 2: i18n 修复 - 已完成
- [x] Task 3: 代码复制 - 已完成
- [x] Task 4: 阅读进度 - 已完成
- [x] Task 5: 标签系统 - 已完成

---
Task 1 完成:
- src/lib/notes.ts: 添加了 searchNotes(keyword) 函数
- 支持标题和内容搜索，不区分大小写

Task 2 完成:
- src/messages/zh.json: 添加 featured, recent 翻译键
- src/messages/en.json: 添加 featured, recent 翻译键
- src/app/[locale]/notes/page.tsx: 替换硬编码文本为 t() 调用
- src/app/[locale]/notes/[slug]/page.tsx: 替换硬编码文本为 t() 调用

Task 3 完成:
- src/components/notes/copy-button.tsx: 复制按钮组件
- src/components/notes/code-block.tsx: 代码块组件（包含复制功能）
- src/app/[locale]/notes/[slug]/page.tsx: 集成 CodeBlock 组件

Task 4 完成:
- src/components/notes/reading-progress.tsx: 阅读进度条组件
- src/app/[locale]/notes/[slug]/page.tsx: 集成 ReadingProgress 组件

Task 5 完成:
- src/lib/notes.ts: 添加了 getNotesByTag(tag) 函数
- src/app/[locale]/notes/notes-page.client.tsx: 客户端组件，包含标签筛选 UI
- src/app/[locale]/notes/page.tsx: 简化为包装器，引用客户端组件
