<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1iSbFdlYTjYVl7mAlfIdekTg3HAsohkmO

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```
   
   Hoặc nếu deploy từ branch `gh-pages` hoặc folder `docs`:
   ```bash
   npm run build:gh-pages
   ```
   
   Hoặc nếu deploy từ branch `main` với tên repo là `zoukitup-redesign`:
   ```bash
   npm run build:repo
   ```

2. **Deploy:**
   - Nếu deploy từ branch `main`: Đổi base path trong `vite.config.ts` thành tên repo của bạn (ví dụ: `/your-repo-name/`), sau đó:
     - Vào Settings > Pages trong GitHub repo
     - Chọn Source: Deploy from a branch
     - Chọn branch: `main` và folder: `/docs`
     - Đổi tên folder build output từ `dist` thành `docs` trong `vite.config.ts` (build.outDir: 'docs')
   
   - Nếu deploy từ branch `gh-pages`:
     - Build với `npm run build:gh-pages`
     - Push folder `dist` lên branch `gh-pages`
     - Vào Settings > Pages, chọn branch `gh-pages` và folder `/ (root)`

**Lưu ý:** Nhớ đổi base path trong `vite.config.ts` cho đúng với tên repo của bạn!
