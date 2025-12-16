# Hướng dẫn cấu hình Gallery - Ảnh từ Google Drive & Video YouTube

## Tổng quan

Gallery component đã được cập nhật để hỗ trợ:
- ✅ **Ảnh từ Google Drive**: Hiển thị ảnh trực tiếp từ Google Drive (không cần tải lên VPS)
- ✅ **Video YouTube**: Nhúng video YouTube với modal player

## Cách sử dụng

### 1. Thêm ảnh từ Google Drive

#### Bước 1: Upload ảnh lên Google Drive
- Upload ảnh vào folder Google Drive của bạn
- Ví dụ: `https://drive.google.com/drive/folders/10w-EeRKbOT6IzzHeitQ6lHcOMMTWtJea`

#### Bước 2: Lấy link chia sẻ cho từng ảnh

**⚠️ QUAN TRỌNG**: Hiện tại bạn cần lấy link **từng ảnh riêng lẻ**, không thể chỉ dùng link folder.

1. Click chuột phải vào **từng ảnh** trong Google Drive
2. Chọn "Get link" hoặc "Lấy liên kết"
3. **QUAN TRỌNG**: Đảm bảo quyền chia sẻ là **"Anyone with the link can view"** (Bất kỳ ai có liên kết đều có thể xem)
4. Copy link, ví dụ: `https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing`
5. Lặp lại cho tất cả ảnh bạn muốn hiển thị

**💡 Lưu ý**: Nếu bạn có nhiều ảnh và muốn tự động lấy tất cả từ một folder, xem phần "Tự động lấy ảnh từ folder" bên dưới.

#### Bước 3: Thêm vào file cấu hình
Mở file `data/galleryMedia.ts` và thêm ảnh vào mảng `galleryMedia`:

```typescript
export const galleryMedia: GalleryItem[] = [
  // Ảnh từ Google Drive
  {
    type: 'image',
    url: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
    title: 'Workshop Photo 1' // Tùy chọn
  },
  {
    type: 'image',
    url: 'https://drive.google.com/file/d/ANOTHER_FILE_ID/view?usp=sharing',
    title: 'Workshop Photo 2'
  },
  
  // Video YouTube
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=Yq7rn2xPYL8',
    title: 'Demo Lautaro & Ariana in PT Zouk Vietnam'
  },
];
```

**Lưu ý**: Component sẽ tự động chuyển đổi link Google Drive sang direct image URL.

### 2. Thêm video YouTube

Chỉ cần thêm link YouTube vào mảng `galleryMedia`:

```typescript
{
  type: 'video',
  url: 'https://www.youtube.com/watch?v=Yq7rn2xPYL8',
  title: 'Tên video' // Tùy chọn
}
```

Hỗ trợ các định dạng URL YouTube:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

## Câu trả lời cho câu hỏi của bạn

### ❓ Có thể trình chiếu ảnh từ Google Drive mà vẫn lưu ở Drive không?

**✅ CÓ THỂ!** Bạn không cần tải ảnh lên VPS hay nơi khác. Chỉ cần:

1. **Đảm bảo quyền chia sẻ**: Set ảnh/folder trong Google Drive thành **"Anyone with the link can view"**
2. **Lấy link chia sẻ** của từng ảnh
3. **Thêm vào file cấu hình** `data/galleryMedia.ts`

Component sẽ tự động chuyển đổi link Google Drive sang direct image URL để hiển thị trên web.

### ⚠️ Lưu ý về Google Drive

- **Quyền chia sẻ**: Phải set thành "Anyone with the link can view" (công khai)
- **Giới hạn**: Google Drive có thể có rate limiting nếu có quá nhiều request
- **Hiệu năng**: Ảnh từ Drive có thể load chậm hơn so với CDN chuyên dụng
- **Bảo mật**: Nếu bạn xóa hoặc thay đổi quyền, ảnh sẽ không hiển thị được
- **⚠️ KHÔNG PHÙ HỢP cho media lớn (>500MB)**: 
  - Rate limiting nghiêm trọng
  - Tốc độ load chậm
  - Không có image optimization tự động
  - Có thể bị giới hạn bandwidth

### ❓ Video YouTube có cần lưu ở đâu không?

**✅ KHÔNG CẦN!** Video YouTube chỉ cần link, không cần tải lên VPS hay nơi khác. YouTube sẽ tự động host và stream video.

## Tự động lấy ảnh từ folder Google Drive (Tùy chọn)

Nếu bạn có nhiều ảnh trong một folder và không muốn copy link từng ảnh, bạn có thể sử dụng Google Drive API để tự động lấy tất cả ảnh từ folder.

### Cách 1: Sử dụng Google Drive API (Cần setup)

**Yêu cầu**:
- Google Cloud Project với Drive API enabled
- API Key hoặc OAuth credentials
- Folder ID từ Google Drive

**Ưu điểm**: Tự động lấy tất cả ảnh, không cần copy link từng ảnh

**Nhược điểm**: Cần setup API key, phức tạp hơn

### Cách 2: Copy link từng ảnh (Hiện tại - Đơn giản nhất)

**Ưu điểm**: 
- ✅ Không cần setup gì thêm
- ✅ Đơn giản, dễ hiểu
- ✅ Kiểm soát được ảnh nào hiển thị

**Nhược điểm**: 
- ⚠️ Phải copy link từng ảnh (nếu có nhiều ảnh thì hơi mất thời gian)

**Kết luận**: Với số lượng ảnh ít (< 20 ảnh), cách copy link từng ảnh là đơn giản nhất. Nếu có hàng trăm ảnh, nên cân nhắc dùng Google Drive API.

## ⚠️ QUAN TRỌNG: Google Drive KHÔNG phù hợp cho media lớn (>500MB)

Nếu bạn có **nhiều ảnh/video (1GB+)**, Google Drive **KHÔNG PHÙ HỢP** vì:

- ❌ **Rate limiting**: Google Drive sẽ chặn request nếu có quá nhiều traffic
- ❌ **Tốc độ chậm**: Không được tối ưu cho web, load rất chậm
- ❌ **Không có optimization**: Ảnh không được compress/resize tự động
- ❌ **Bandwidth limit**: Có thể bị giới hạn bandwidth
- ❌ **Không ổn định**: Ảnh có thể không load được khi có nhiều người xem

## ✅ Giải pháp tốt hơn cho media lớn (1GB+)

### 1. **Cloudinary** (Khuyến nghị - FREE tier tốt)

**Free tier:**
- ✅ 25GB storage
- ✅ 25GB bandwidth/tháng
- ✅ Image optimization tự động (resize, compress, format conversion)
- ✅ CDN toàn cầu (load nhanh)
- ✅ Video hosting (có giới hạn)

**Cách dùng:**
1. Đăng ký tài khoản miễn phí tại [cloudinary.com](https://cloudinary.com)
2. Upload ảnh/video lên Cloudinary
3. Copy URL và thêm vào `galleryMedia.ts`

**Ưu điểm:**
- ✅ Tự động optimize ảnh (WebP, resize theo device)
- ✅ CDN nhanh, ổn định
- ✅ Free tier đủ cho hầu hết website nhỏ/trung bình
- ✅ Dễ sử dụng, có dashboard quản lý

**Nhược điểm:**
- ⚠️ Free tier có giới hạn bandwidth (25GB/tháng)
- ⚠️ Cần upload lại ảnh lên Cloudinary

### 2. **YouTube cho Video + Cloudinary cho Ảnh** (Khuyến nghị nhất)

**Video:**
- ✅ Upload lên YouTube (unlimited, free)
- ✅ Chỉ cần link YouTube trong config

**Ảnh:**
- ✅ Upload lên Cloudinary
- ✅ Tận dụng image optimization

**Kết hợp này là tốt nhất vì:**
- ✅ YouTube xử lý video tốt nhất (streaming, compression)
- ✅ Cloudinary xử lý ảnh tốt nhất (optimization, CDN)
- ✅ Miễn phí hoàn toàn (với traffic vừa phải)

### 3. **AWS S3 + CloudFront** (Professional)

**Ưu điểm:**
- ✅ Không giới hạn storage
- ✅ Pay-as-you-go (chỉ trả tiền dùng)
- ✅ Rất ổn định, scalable

**Nhược điểm:**
- ⚠️ Cần setup phức tạp hơn
- ⚠️ Cần credit card (nhưng free tier 5GB storage, 1 năm đầu)
- ⚠️ Không có image optimization tự động (cần setup thêm)

### 4. **VPS + CDN** (Nếu đã có VPS)

Nếu bạn đã có VPS:
- ✅ Upload ảnh lên VPS
- ✅ Setup CDN (Cloudflare miễn phí)
- ✅ Kiểm soát hoàn toàn

**Nhược điểm:**
- ⚠️ Tốn storage trên VPS
- ⚠️ Cần tự optimize ảnh
- ⚠️ Cần setup CDN

## 🎯 Khuyến nghị cho bạn (1GB media)

**Giải pháp tốt nhất:**
1. **Video**: Upload lên YouTube → Chỉ cần link
2. **Ảnh**: Upload lên Cloudinary → Copy URL vào config

**Lý do:**
- ✅ Miễn phí hoàn toàn (với traffic vừa phải)
- ✅ Tốc độ nhanh, ổn định
- ✅ Tự động optimize
- ✅ Dễ quản lý

**Nếu muốn tôi implement support cho Cloudinary**, tôi có thể:
- Thêm helper function để convert Cloudinary URL
- Hỗ trợ image transformation (resize, crop, format)
- Cập nhật documentation chi tiết

## Các tùy chọn khác (nếu cần)

### Nếu muốn tối ưu hơn, bạn có thể:

1. **Sử dụng Google Drive API**: Tự động lấy danh sách ảnh từ folder (cần setup API key)
2. **Tải ảnh lên CDN**: Sử dụng Cloudinary, Imgur, hoặc CDN khác để tối ưu tốc độ
3. **Host trên VPS**: Tải ảnh lên VPS nếu muốn kiểm soát hoàn toàn

**⚠️ Lưu ý**: Với 1GB+ media, **KHÔNG NÊN** dùng Google Drive trực tiếp!

## Ví dụ hoàn chỉnh

```typescript
export const galleryMedia: GalleryItem[] = [
  // Ảnh từ Google Drive - Workshop 2+3
  {
    type: 'image',
    url: 'https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing',
    title: 'Workshop Photo 1'
  },
  {
    type: 'image',
    url: 'https://drive.google.com/file/d/1DEF456uvw/view?usp=sharing',
    title: 'Workshop Photo 2'
  },
  // ... thêm 10-15 ảnh khác
  
  // Video YouTube highlight
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=Yq7rn2xPYL8',
    title: 'Demo Lautaro & Ariana in PT Zouk Vietnam'
  },
];
```

## Troubleshooting

### Ảnh không hiển thị?
- ✅ Kiểm tra quyền chia sẻ: Phải là "Anyone with the link can view"
- ✅ Kiểm tra link có đúng format không
- ✅ Mở link trong trình duyệt ẩn danh để test

### Video không play?
- ✅ Kiểm tra link YouTube có đúng không
- ✅ Video có thể bị chặn ở một số quốc gia

## Kết luận

### Với media nhỏ (< 500MB):
**Bạn KHÔNG CẦN tải ảnh lên VPS hay nơi khác!** Chỉ cần:
1. Upload ảnh lên Google Drive
2. Set quyền chia sẻ công khai
3. Copy link và thêm vào `data/galleryMedia.ts`

### Với media lớn (1GB+):
**⚠️ KHÔNG NÊN dùng Google Drive!** Thay vào đó:
1. **Video**: Upload lên YouTube → Chỉ cần link
2. **Ảnh**: Upload lên Cloudinary → Copy URL vào config

**Lý do**: Google Drive không được tối ưu cho web, sẽ load chậm và có thể bị rate limit! 🚫

**Giải pháp tốt nhất**: YouTube (video) + Cloudinary (ảnh) = Miễn phí + Nhanh + Ổn định! ✅

