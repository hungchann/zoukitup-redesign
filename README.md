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

## Deploy

### Deploy to Vercel (Khuyến nghị) ⭐

Dự án đã được cấu hình sẵn để deploy lên Vercel. Xem hướng dẫn chi tiết tại [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md).

**Quick start với Vercel CLI:**

```bash
# Cài đặt Vercel CLI (nếu chưa có)
npm install -g vercel

# Đăng nhập
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

**Thêm environment variables:**
```bash
vercel env add GEMINI_API_KEY
```

### Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   # Set environment variables cho GitHub Pages
   export VITE_BASE=/zoukitup-redesign/
   export VITE_OUT_DIR=docs
   npm run build
   ```
   
   Hoặc sử dụng script có sẵn:
   ```bash
   npm run build:repo
   ```

2. **Deploy:**
   - Vào Settings > Pages trong GitHub repo
   - Chọn Source: Deploy from a branch
   - Chọn branch: `main` và folder: `/docs`
   - Push code lên branch `main`

**Lưu ý:** 
- Với Vercel: sử dụng `base='/'` và `outDir='dist'` (mặc định)
- Với GitHub Pages: cần set `VITE_BASE=/your-repo-name/` và `VITE_OUT_DIR=docs`
