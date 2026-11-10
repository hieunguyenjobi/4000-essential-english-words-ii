/**
 * Firebase config — điền thông tin project của bạn tại đây.
 *
 * Cách lấy:
 * 1. Vào https://console.firebase.google.com → tạo project mới (hoặc chọn project có sẵn)
 * 2. Thêm app Web (biểu tượng </>)
 * 3. Sao chép object firebaseConfig và dán vào bên dưới
 * 4. Bật Authentication → Sign-in method → Anonymous + Google
 * 5. Tạo Firestore Database (production mode hoặc test mode)
 *    Rules gợi ý (chỉ user đọc/ghi document của chính mình):
 *
 *    rules_version = '2';
 *    service cloud.firestore {
 *      match /databases/{database}/documents {
 *        match /users/{uid}/{document=**} {
 *          allow read, write: if request.auth != null && request.auth.uid == uid;
 *        }
 *      }
 *    }
 *
 * Để trống apiKey nếu chưa cấu hình — app vẫn chạy offline bình thường.
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBKpfGmi9Cw8yiH3Z40NHE2uIzf62RV51s",
  authDomain: "wordsii.firebaseapp.com",
  projectId: "wordsii",
  storageBucket: "wordsii.firebasestorage.app",
  messagingSenderId: "957630480209",
  appId: "1:957630480209:web:4d8ef6b093ed93efdd9d70"
  measurementId: "G-3W8VG40Y4G"
};
