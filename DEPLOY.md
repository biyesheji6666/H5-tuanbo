# GitHub Pages 部署指南

## 方案一：使用 GitHub Actions 自动部署（推荐）

### 步骤：

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建一个**私有仓库**（这样源代码不会公开）
   - 仓库名称例如：`tuanbo`

2. **更新 vite.config.ts 中的 base 路径**
   - 将 `base: '/tuanbo/'` 改为你的仓库名称
   - 如果仓库名称是 `my-h5-project`，则改为 `base: '/my-h5-project/'`

3. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/tuanbo.git
   git push -u origin main
   ```

4. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

5. **自动部署**
   - 每次推送到 main 分支时，GitHub Actions 会自动构建并部署
   - 部署完成后，访问：`https://你的用户名.github.io/tuanbo/`

---

## 方案二：手动部署（简单但需要手动操作）

### 步骤：

1. **本地构建项目**
   ```bash
   npm run build
   ```

2. **创建新的公开仓库（只包含构建后的文件）**
   - 在 GitHub 上创建一个**公开仓库**，例如：`tuanbo-pages`
   - 这个仓库只用于存放构建后的文件

3. **只推送 dist 目录**
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy"
   git branch -M main
   git remote add origin https://github.com/你的用户名/tuanbo-pages.git
   git push -u origin main
   ```

4. **启用 GitHub Pages**
   - 进入 `tuanbo-pages` 仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 保存后访问：`https://你的用户名.github.io/tuanbo-pages/`

---

## 方案三：使用其他托管服务

### Vercel / Netlify
- 这些服务支持从私有 GitHub 仓库部署
- 只部署构建后的文件，不暴露源代码
- 设置更简单，但需要注册账号

---

## 注意事项

1. **私有仓库**：源代码放在私有仓库，只有你能看到
2. **构建后的文件**：GitHub Pages 只显示构建后的 HTML/CSS/JS 文件
3. **base 路径**：确保 vite.config.ts 中的 base 路径与仓库名称匹配
4. **环境变量**：如果有敏感信息，使用 GitHub Secrets 配置


