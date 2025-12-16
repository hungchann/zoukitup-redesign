# Hướng dẫn Deploy lên Vercel bằng CLI

## Tổng quan

Dự án này đã được cấu hình sẵn để deploy lên Vercel. Bạn có thể deploy bằng Vercel CLI (khuyến nghị) hoặc qua Vercel Dashboard.

## Phương pháp 1: Deploy bằng Vercel CLI (Khuyến nghị) ⭐

### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

Hoặc sử dụng npx (không cần cài đặt global):

```bash
npx vercel
```

### Bước 2: Đăng nhập Vercel

```bash
vercel login
```

Lệnh này sẽ mở trình duyệt để bạn đăng nhập vào tài khoản Vercel.

### Bước 3: Deploy lần đầu

Từ thư mục root của dự án:

```bash
vercel
```

Vercel CLI sẽ hỏi một số câu hỏi:
- **Set up and deploy?** → Chọn `Y`
- **Which scope?** → Chọn tài khoản của bạn
- **Link to existing project?** → Chọn `N` (lần đầu)
- **What's your project's name?** → Nhập tên project (hoặc Enter để dùng tên mặc định)
- **In which directory is your code located?** → Enter (dùng `.` - thư mục hiện tại)
- **Want to override the settings?** → Chọn `N` (Vercel tự động detect Vite)

### Bước 4: Thêm Environment Variables

Nếu bạn có biến môi trường (như `GEMINI_API_KEY`), thêm bằng lệnh:

```bash
vercel env add GEMINI_API_KEY
```

Hoặc thêm nhiều biến cùng lúc:

```bash
vercel env add GEMINI_API_KEY production
vercel env add GEMINI_API_KEY preview
vercel env add GEMINI_API_KEY development
```

**Lưu ý**: Bạn cần thêm biến cho cả 3 môi trường (production, preview, development) nếu muốn dùng ở tất cả.

### Bước 5: Deploy Production

Sau khi setup xong, deploy lên production:

```bash
vercel --prod
```

## Phương pháp 2: Deploy qua Vercel Dashboard

Nếu bạn không muốn dùng CLI, có thể deploy qua web:

1. Đăng nhập vào [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import repository từ GitHub/GitLab/Bitbucket
4. Vercel sẽ tự động detect Vite và cấu hình
5. Thêm Environment Variables:
   - `GEMINI_API_KEY`: giá trị API key của bạn
6. Click **"Deploy"**

## Các lệnh Vercel CLI hữu ích

### Xem thông tin project

```bash
vercel ls
```

### Xem logs

```bash
vercel logs
```

### Xem thông tin deployment

```bash
vercel inspect [deployment-url]
```

### Xóa deployment

```bash
vercel remove [deployment-url]
```

### Xem environment variables

```bash
vercel env ls
```

### Xóa environment variable

```bash
vercel env rm GEMINI_API_KEY
```

### Pull cấu hình từ Vercel về local

```bash
vercel pull
```

Lệnh này sẽ tạo file `.vercel/project.json` và `.vercel/.gitignore` với cấu hình project.

## Cấu trúc file

Dự án đã có các file cấu hình sau:

- `vercel.json`: Cấu hình Vercel (build command, output directory, rewrites)
- `vite.config.ts`: Đã được cập nhật để phù hợp với Vercel (base='/', outDir='dist')

## Lưu ý quan trọng

### Environment Variables

- **Không commit** file `.env.local` vào Git
- Thêm biến môi trường trên Vercel Dashboard hoặc bằng CLI
- Vercel sẽ tự động inject biến môi trường vào build process

### Build Output

- Vercel sử dụng `dist` folder làm output (đã cấu hình trong `vite.config.ts`)
- Nếu bạn muốn deploy lên GitHub Pages, cần set `VITE_OUT_DIR=docs` và `VITE_BASE=/zoukitup-redesign/`

### Custom Domain

Sau khi deploy, bạn có thể thêm custom domain:

```bash
vercel domains add yourdomain.com
```

Hoặc qua Dashboard: Project Settings → Domains

## Troubleshooting

### Lỗi: "Command not found: vercel"

Cài đặt lại Vercel CLI:
```bash
npm install -g vercel
```

### Lỗi: "Environment variable not found"

Đảm bảo bạn đã thêm environment variable cho đúng môi trường:
```bash
vercel env ls
```

### Lỗi: "Build failed"

Kiểm tra logs:
```bash
vercel logs
```

Hoặc xem logs trên Vercel Dashboard.

### Lỗi: "404 Not Found" khi navigate

Đảm bảo file `vercel.json` có rewrite rule cho SPA routing (đã có sẵn).

## Kết luận

**Khuyến nghị**: Sử dụng Vercel CLI vì:
- ✅ Nhanh chóng, chỉ cần vài lệnh
- ✅ Có thể deploy từ terminal
- ✅ Dễ dàng quản lý environment variables
- ✅ Preview deployments tự động cho mọi commit/PR

Sau khi setup lần đầu, mỗi lần push code lên Git, Vercel sẽ tự động deploy (nếu đã link với Git repository).

