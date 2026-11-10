# 4000 Essential English Word II

App học từ vựng Book 2 — flashcard, quiz, story, **FSRS**, chạy offline (PWA).

## Deploy Netlify (nhanh nhất)

1. Vào https://app.netlify.com/drop
2. Kéo **cả thư mục này** thả vào
3. Nhận link `https://xxx.netlify.app`

Hoặc dùng Netlify CLI:
```bash
npx netlify deploy --dir=. --prod
```

## Deploy GitHub Pages

1. Tạo repo mới trên GitHub
2. Upload toàn bộ file trong thư mục này (root repo)
3. Settings → Pages → Source: Deploy from branch `main` / root
4. Mở `https://<user>.github.io/<repo>/`

## Cài trên điện thoại

- Mở link HTTPS trên Chrome/Safari
- Android: menu → **Install app** / Thêm vào màn hình chính
- iOS: Share → **Add to Home Screen**

## Tính năng

- FSRS (Again / Hard / Good / Easy)
- IndexedDB lưu tiến độ + export/import JSON
- **Đồng bộ đám mây** (Firebase Auth + Firestore) — multi-device
- **Phát âm**: audio người bản xứ (Free Dictionary API) + Web Speech neural fallback
- **Onboarding** lần đầu (giải thích FSRS + thói quen học)
- **Landscape** tối ưu (flashcard + rate buttons cạnh nhau trên màn ngang)
- **Cài app** (PWA install banner + hướng dẫn iOS)
- **Học nhanh 5 phút** (timer + ưu tiên từ đến hạn)
- PWA offline
- 30 Unit × 20 từ (Book 2)
- Story mode, Unit Test, streak, XP

## Đồng bộ đám mây (Firebase)

App vẫn chạy offline bình thường nếu chưa cấu hình Firebase.

### 1. Tạo project Firebase

1. Vào [Firebase Console](https://console.firebase.google.com) → **Add project**
2. Thêm app **Web** (`</>`) → copy object `firebaseConfig`
3. Dán vào file `firebase-config.js`:

```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "...",
  appId: "1:..."
};
```

### 2. Bật Authentication

- Authentication → Sign-in method
- Bật **Anonymous**
- (Tuỳ chọn) Bật **Google**

### 3. Tạo Firestore

- Build → Firestore Database → Create database
- Chọn production mode (hoặc test mode để thử nhanh)

**Rules khuyến nghị** (chỉ user đọc/ghi data của chính mình):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### 4. Dùng trong app

1. Mở **Cài đặt**
2. Chọn **Bật đồng bộ (ẩn danh)** hoặc **Đăng nhập Google**
3. Dùng **Đẩy lên cloud** / **Tải về** khi cần
4. Sau khi đăng nhập, app tự đẩy tiến độ lên cloud (debounce ~2.5s) mỗi lần học

**Merge thông minh:** khi tải về, tiến độ từng từ lấy bản có `stability` cao hơn; XP / streak lấy giá trị lớn hơn.

> Lưu ý: tài khoản ẩn danh gắn với trình duyệt. Nếu xóa dữ liệu trình duyệt sẽ mất liên kết ẩn danh — nên dùng Google khi cần bền vững.

## Lưu ý

- Phải chạy qua **https://** (hoặc localhost). `file://` không bật được Service Worker / Firebase Auth.
- Tiến độ vẫn lưu local (IndexedDB). Cloud chỉ là lớp đồng bộ thêm.
- Nên **Xuất tiến độ** định kỳ để có bản backup file JSON độc lập.
