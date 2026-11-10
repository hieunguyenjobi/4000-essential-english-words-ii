/* ==========================================================================
   4000 Essential English Word II — app.js
   Vanilla JS, không framework, chạy offline, PWA + IndexedDB + FSRS.

   MỤC LỤC
    1. Cấu hình & hằng số
    2. Tiện ích
    3. Dữ liệu (index từ vựng từ data.js)
    4. Lưu trữ IndexedDB (schema, migration, export/import)
    5. Gamification (XP, level, streak, hoàn thành Unit)
    6. FSRS (Free Spaced Repetition Scheduler)
    7. Âm thanh (Web Audio) & phát âm (Speech Synthesis) & confetti
    8. UI chung (chuyển màn hình, toast, modal)
    9. Dashboard, Unit hub, Review Today
   10. Flashcard
   11. Quiz, Luyện tập, Unit Test (nhớ → hiểu → vận dụng)
   12. Story
   13. Kết quả phiên học
   14. Cài đặt (theme, giọng đọc, backup, reset)
   15. Sự kiện & khởi động
   ========================================================================== */
(function () {
  'use strict';

  /* ========================================================================
     1. CẤU HÌNH & HẰNG SỐ
     ======================================================================== */
  const STORAGE_KEY = 'ielts-vocab-lab';   // phải trùng khóa trong script đầu index.html

  /* ---- i18n: chỉ UI, không đụng từ/definition/example trong sách ---- */
  const I18N = {
    vi: {
      skip_link: 'Bỏ qua điều hướng',
      brand_sub: 'Book 2 · Flashcard · FSRS',
      dash_title: 'Học từ vựng, nhớ lâu hơn mỗi ngày',
      dash_greeting_due: 'Bạn có {n} từ cần ôn hôm nay. Ôn xong sẽ nhớ lâu hơn.',
      dash_greeting_ok: 'Hôm nay không có từ nào đến hạn ôn. Hãy học thêm từ mới.',
      review_today: 'Review Today',
      quick_study: 'Học nhanh 5 phút',
      quick_title: 'Học nhanh 5 phút',
      toast_quick_empty: 'Chưa có từ để học. Hãy mở một Unit trước.',
      toast_quick_timeup: 'Hết 5 phút! Xem kết quả nhé.',
      result_quick_title: 'Xong phiên 5 phút!',
      result_quick_sub: 'Học đều mỗi ngày hiệu quả hơn học dồn.',
      stat_streak: 'ngày liên tiếp',
      stat_xp: 'tổng XP',
      stat_mastered: 'từ đã thuộc',
      stat_due: 'từ cần ôn hôm nay',
      units_heading: 'Các Unit',
      filter_all: 'Tất cả',
      filter_learning: 'Đang học',
      filter_done: 'Hoàn thành',
      filter_due: 'Cần ôn',
      units_empty: 'Chưa có Unit nào khớp bộ lọc này.',
      nav_home: 'Trang chủ',
      nav_review: 'Ôn tập',
      nav_settings: 'Cài đặt',
      nav_aria: 'Điều hướng chính',
      settings_title: 'Cài đặt',
      close_settings: 'Đóng cài đặt',
      open_settings: 'Mở cài đặt',
      toggle_theme: 'Đổi giao diện sáng/tối',
      set_sound: 'Âm thanh hiệu ứng',
      set_sound_sub: 'Tiếng đúng, sai, lên cấp',
      set_dark: 'Dark mode',
      set_dark_sub: 'Giao diện tối, dịu mắt khi học buổi tối',
      set_rate: 'Tốc độ đọc',
      set_rate_sub: 'Hiện tại',
      set_voice: 'Giọng đọc (Web Speech)',
      set_voice_sub: 'Dùng khi không có audio từ điển. ★ = giọng tự nhiên',
      set_accounts: 'Tài khoản học',
      set_accounts_sub: 'Nhiều hồ sơ trên máy này, không cần mật khẩu',
      manage_profiles: 'Quản lý hồ sơ',
      set_cloud: 'Đồng bộ đám mây',
      set_cloud_sub: 'Đồng bộ tiến độ giữa các thiết bị qua Firebase',
      cloud_anon: 'Bật đồng bộ (ẩn danh)',
      cloud_google: 'Đăng nhập Google',
      cloud_push: 'Đẩy lên cloud',
      cloud_pull: 'Tải về',
      cloud_sign_out: 'Đăng xuất',
      cloud_status_off: 'Chưa kết nối',
      cloud_status_on: 'Đã đồng bộ',
      cloud_status_syncing: 'Đang đồng bộ…',
      cloud_need_config: 'Cần cấu hình Firebase trong firebase-config.js',
      toast_cloud_ok: 'Đồng bộ thành công.',
      toast_cloud_pull: 'Đã tải tiến độ từ cloud.',
      toast_cloud_err: 'Đồng bộ thất bại. Kiểm tra mạng / cấu hình.',
      toast_cloud_in: 'Đã bật đồng bộ đám mây.',
      toast_cloud_out: 'Đã đăng xuất cloud.',
      set_backup: 'Sao lưu tiến độ',
      set_backup_sub: 'Xuất ra file JSON hoặc nhập lại từ file đã lưu',
      export_progress: 'Xuất tiến độ',
      import_progress: 'Nhập tiến độ',
      set_reset: 'Xóa toàn bộ tiến độ',
      set_reset_sub: 'Đưa mọi thứ về ban đầu. Không thể hoàn tác.',
      reset_progress: 'Xóa tiến độ',
      profiles_title: 'Tài khoản học',
      add_profile: 'Thêm tài khoản',
      export_file: 'Xuất file',
      copy_code: 'Copy mã',
      import_btn: 'Import',
      from_file: 'Từ file…',
      close: 'Đóng',
      confirm_title: 'Xác nhận',
      cancel: 'Hủy',
      ok: 'Đồng ý',
      levelup_kicker: 'Lên cấp!',
      continue: 'Tiếp tục',
      ob_welcome_title: 'Chào mừng đến Word II',
      ob_welcome_body: '600 từ thiết yếu (Book 2) với flashcard, quiz, truyện ngắn và thuật toán FSRS giúp bạn nhớ lâu hơn.',
      ob_fsrs_title: 'Đánh giá thẻ như thế nào?',
      ob_fsrs_body: 'Sau mỗi thẻ, chọn mức nhớ. App sẽ xếp lịch ôn lại đúng lúc bạn sắp quên.',
      ob_rate_again: 'Quên — ôn lại ngay',
      ob_rate_hard: 'Khó nhớ — ôn sớm hơn',
      ob_rate_good: 'Nhớ được — lịch bình thường',
      ob_rate_easy: 'Rất dễ — giãn cách dài hơn',
      ob_habit_title: 'Học đều mỗi ngày',
      ob_habit_body: 'Mở Review Today để ôn đúng những từ đến hạn. Giữ streak để nhận thêm XP và nhớ bền hơn.',
      ob_tip_1: '10–15 phút mỗi ngày hiệu quả hơn học dồn',
      ob_tip_2: 'Đọc Story để gặp từ trong ngữ cảnh thật',
      ob_tip_3: 'Làm Unit Test khi thấy đã vững',
      ob_ready_title: 'Sẵn sàng bắt đầu?',
      ob_ready_body: 'Bắt đầu với Unit 1 — The Twelve Months. Bạn có thể đổi hồ sơ và bật đồng bộ đám mây trong Cài đặt bất cứ lúc nào.',
      ob_skip: 'Bỏ qua',
      ob_next: 'Tiếp tục',
      ob_start: 'Bắt đầu Unit 1',
      install_title: 'Cài Word II vào máy',
      install_sub: 'Học offline, mở nhanh từ màn hình chính',
      install_sub_ios: 'Trên iPhone: bấm Share → Thêm vào Màn hình chính',
      install_btn: 'Cài app',
      install_later: 'Để sau',
      set_install: 'Cài đặt ứng dụng',
      set_install_sub: 'Thêm Word II vào màn hình chính để học offline',
      toast_install_done: 'Đã cài app thành công.',
      toast_install_ios: 'iPhone: Share → Thêm vào Màn hình chính',
      toast_install_unavailable: 'Trình duyệt chưa hỗ trợ cài tự động. Dùng menu trình duyệt để “Cài ứng dụng”.',
      check: 'Kiểm tra',
      hint_more: 'Gợi ý thêm',
      i_forgot: 'Tôi không nhớ',
      retry: 'Làm lại',
      submit_sentence: 'Nộp câu',
      i_used_right: 'Tôi dùng đúng',
      need_fix: 'Cần sửa lại',
      next_enter: 'Tiếp theo · Enter / Space',
      pick_unit: 'Chọn Unit để học',
      keep_learning: 'Học tiếp',
      back_home: 'Về trang chủ',
      rate_again_sub: 'Quên',
      rate_hard_sub: 'Khó nhớ',
      rate_good_sub: '+10 XP',
      rate_easy_sub: '+12 XP',
      hub_flashcard: 'Flashcard',
      hub_flashcard_sub: 'Lật thẻ, tự đánh giá Again / Hard / Good / Easy',
      hub_quiz: 'Quiz',
      hub_story: 'Story',
      hub_story_sub: 'Đọc truyện, chạm vào từ để xem nghĩa',
      hub_practice: 'Luyện tập theo kỹ năng',
      practice_type: 'Gõ từ',
      practice_type_sub: 'Nhớ · từ nghĩa hoặc định nghĩa',
      practice_listen: 'Nghe và gõ',
      practice_listen_sub: 'Nhớ · nghe rồi viết đúng chính tả',
      practice_story: 'Điền vào truyện',
      practice_story_sub: 'Hiểu · câu trích từ truyện',
      practice_cloze: 'Điền từ vào câu',
      practice_cloze_sub: 'Vận dụng · tự gõ đúng dạng từ',
      practice_order: 'Sắp xếp câu',
      practice_order_sub: 'Vận dụng · ghép từ thành câu',
      practice_write: 'Viết câu',
      practice_write_sub: 'Vận dụng · tự viết, so câu mẫu',
      hub_test: 'Unit Test',
      word_list: 'Danh sách từ',
      review_by_flashcard: 'Ôn bằng Flashcard',
      review_by_quiz: 'Ôn bằng Quiz',
      status_new: 'Chưa học',
      status_learning: 'Đang học',
      status_done: 'Hoàn thành',
      status_placeholder: 'Sắp ra mắt',
      new_word: 'Từ mới',
      active: 'Đang dùng',
      select: 'Chọn',
      rename: 'Đổi tên',
      delete: 'Xóa',
      lang_switched: 'Giao diện: Tiếng Việt',
      toast_export: 'Đã xuất file sao lưu.',
      toast_copy: 'Đã copy mã vào clipboard.',
      toast_import_ok: 'Đã import.',
      toast_need_name: 'Nhập tên tài khoản.',
      toast_profile_added: 'Đã tạo tài khoản “{name}”. Bấm Chọn để dùng.',
      toast_profile_switched: 'Đã chuyển sang “{name}”. Tiến độ học theo tài khoản này.',
      toast_profile_deleted: 'Đã xóa tài khoản và toàn bộ dữ liệu học.',
      toast_need_one_profile: 'Cần giữ ít nhất một tài khoản.',
      toast_no_due: 'Hôm nay không còn từ nào cần ôn.',
      toast_unit_done: 'Hoàn thành {title}! +{xp} XP',
      toast_streak: 'Chuỗi {n} ngày liên tiếp! +{xp} XP',
      toast_saved_fail: 'Không lưu được tiến độ. Hãy Export file sao lưu.',
      toast_speech_unsupported: 'Trình duyệt này không hỗ trợ phát âm.',
      confirm_delete_profile: 'Xóa “{name}” và toàn bộ tiến độ học của tài khoản này?',
      confirm_reset: 'XP, level, streak và tiến độ từng từ của tài khoản đang dùng sẽ bị xóa.',
      profile_meta: 'Lv {level} · {xp} XP · {mastered} từ vững · streak {streak}',
      profile_summary: 'Tài khoản: {name} · Streak {streak} · Best {best} · {mastered} từ vững · {xp} XP',
      filter_units_aria: 'Lọc Unit'
    },
    en: {
      skip_link: 'Skip navigation',
      brand_sub: 'Book 2 · Flashcard · FSRS',
      dash_title: 'Learn vocabulary that sticks',
      dash_greeting_due: 'You have {n} words due today. Review them to remember longer.',
      dash_greeting_ok: 'No words due today. Learn some new ones.',
      review_today: 'Review Today',
      quick_study: 'Quick 5 min',
      quick_title: 'Quick 5 min',
      toast_quick_empty: 'No words to study yet. Open a unit first.',
      toast_quick_timeup: 'Time is up! See your results.',
      result_quick_title: '5-minute session done!',
      result_quick_sub: 'A little every day beats cramming.',
      stat_streak: 'day streak',
      stat_xp: 'total XP',
      stat_mastered: 'words mastered',
      stat_due: 'due today',
      units_heading: 'Units',
      filter_all: 'All',
      filter_learning: 'Learning',
      filter_done: 'Done',
      filter_due: 'Due',
      units_empty: 'No units match this filter.',
      nav_home: 'Home',
      nav_review: 'Review',
      nav_settings: 'Settings',
      nav_aria: 'Main navigation',
      settings_title: 'Settings',
      close_settings: 'Close settings',
      open_settings: 'Open settings',
      toggle_theme: 'Toggle light/dark theme',
      set_sound: 'Sound effects',
      set_sound_sub: 'Correct, wrong, level-up sounds',
      set_dark: 'Dark mode',
      set_dark_sub: 'Easier on the eyes at night',
      set_rate: 'Speech rate',
      set_rate_sub: 'Current',
      set_voice: 'Voice (Web Speech)',
      set_voice_sub: 'Used when dictionary audio is unavailable. ★ = natural voice',
      set_accounts: 'Learner accounts',
      set_accounts_sub: 'Multiple local profiles on this device, no password',
      manage_profiles: 'Manage profiles',
      set_cloud: 'Cloud sync',
      set_cloud_sub: 'Sync progress across devices via Firebase',
      cloud_anon: 'Enable sync (anonymous)',
      cloud_google: 'Sign in with Google',
      cloud_push: 'Push to cloud',
      cloud_pull: 'Pull from cloud',
      cloud_sign_out: 'Sign out',
      cloud_status_off: 'Not connected',
      cloud_status_on: 'Synced',
      cloud_status_syncing: 'Syncing…',
      cloud_need_config: 'Configure Firebase in firebase-config.js',
      toast_cloud_ok: 'Sync successful.',
      toast_cloud_pull: 'Progress loaded from cloud.',
      toast_cloud_err: 'Sync failed. Check network / config.',
      toast_cloud_in: 'Cloud sync enabled.',
      toast_cloud_out: 'Signed out of cloud.',
      set_backup: 'Backup progress',
      set_backup_sub: 'Export or import a JSON backup file',
      export_progress: 'Export progress',
      import_progress: 'Import progress',
      set_reset: 'Reset progress',
      set_reset_sub: 'Clear learning data for this account. Cannot be undone.',
      reset_progress: 'Reset progress',
      profiles_title: 'Learner accounts',
      add_profile: 'Add profile',
      export_file: 'Export file',
      copy_code: 'Copy code',
      import_btn: 'Import',
      from_file: 'From file…',
      close: 'Close',
      confirm_title: 'Confirm',
      cancel: 'Cancel',
      ok: 'OK',
      levelup_kicker: 'Level up!',
      continue: 'Continue',
      ob_welcome_title: 'Welcome to Word II',
      ob_welcome_body: '600 essential words (Book 2) with flashcards, quizzes, short stories, and FSRS scheduling so you remember longer.',
      ob_fsrs_title: 'How should you rate cards?',
      ob_fsrs_body: 'After each card, pick how well you recalled it. The app schedules the next review right before you forget.',
      ob_rate_again: 'Forgot — review again soon',
      ob_rate_hard: 'Hard — shorter interval',
      ob_rate_good: 'Got it — normal schedule',
      ob_rate_easy: 'Too easy — longer interval',
      ob_habit_title: 'Study a little every day',
      ob_habit_body: 'Open Review Today for due words. Keep your streak for bonus XP and stronger memory.',
      ob_tip_1: '10–15 minutes daily beats cramming',
      ob_tip_2: 'Read the Story to see words in context',
      ob_tip_3: 'Take the Unit Test when you feel ready',
      ob_ready_title: 'Ready to start?',
      ob_ready_body: 'Begin with Unit 1 — The Twelve Months. You can manage profiles and enable cloud sync in Settings anytime.',
      ob_skip: 'Skip',
      ob_next: 'Continue',
      ob_start: 'Start Unit 1',
      install_title: 'Install Word II',
      install_sub: 'Study offline and open instantly from your home screen',
      install_sub_ios: 'On iPhone: tap Share → Add to Home Screen',
      install_btn: 'Install',
      install_later: 'Later',
      set_install: 'Install app',
      set_install_sub: 'Add Word II to your home screen for offline study',
      toast_install_done: 'App installed.',
      toast_install_ios: 'iPhone: Share → Add to Home Screen',
      toast_install_unavailable: 'Auto-install is unavailable. Use the browser menu to install the app.',
      check: 'Check',
      hint_more: 'More hint',
      i_forgot: "I don't remember",
      retry: 'Retry',
      submit_sentence: 'Submit',
      i_used_right: 'I used it correctly',
      need_fix: 'Needs fixing',
      next_enter: 'Next · Enter / Space',
      pick_unit: 'Pick a unit to study',
      keep_learning: 'Keep learning',
      back_home: 'Back to home',
      rate_again_sub: 'Forgot',
      rate_hard_sub: 'Hard',
      rate_good_sub: '+10 XP',
      rate_easy_sub: '+12 XP',
      hub_flashcard: 'Flashcard',
      hub_flashcard_sub: 'Flip cards, rate Again / Hard / Good / Easy',
      hub_quiz: 'Quiz',
      hub_story: 'Story',
      hub_story_sub: 'Read the story, tap words for meaning',
      hub_practice: 'Skill practice',
      practice_type: 'Type the word',
      practice_type_sub: 'Recall · from meaning or definition',
      practice_listen: 'Listen & type',
      practice_listen_sub: 'Recall · listen then spell correctly',
      practice_story: 'Story cloze',
      practice_story_sub: 'Understand · lines from the story',
      practice_cloze: 'Sentence cloze',
      practice_cloze_sub: 'Use · type the correct word form',
      practice_order: 'Order the sentence',
      practice_order_sub: 'Use · arrange words into a sentence',
      practice_write: 'Write a sentence',
      practice_write_sub: 'Use · write freely, compare to sample',
      hub_test: 'Unit Test',
      word_list: 'Word list',
      review_by_flashcard: 'Review with Flashcards',
      review_by_quiz: 'Review with Quiz',
      status_new: 'Not started',
      status_learning: 'Learning',
      status_done: 'Completed',
      status_placeholder: 'Coming soon',
      new_word: 'New',
      active: 'Active',
      select: 'Select',
      rename: 'Rename',
      delete: 'Delete',
      lang_switched: 'Interface: English',
      toast_export: 'Backup file exported.',
      toast_copy: 'Code copied to clipboard.',
      toast_import_ok: 'Import complete.',
      toast_need_name: 'Enter a profile name.',
      toast_profile_added: 'Created “{name}”. Tap Select to use it.',
      toast_profile_switched: 'Switched to “{name}”. Progress follows this account.',
      toast_profile_deleted: 'Account and all its learning data deleted.',
      toast_need_one_profile: 'Keep at least one account.',
      toast_no_due: 'No words left to review today.',
      toast_unit_done: 'Finished {title}! +{xp} XP',
      toast_streak: '{n}-day streak! +{xp} XP',
      toast_saved_fail: 'Could not save progress. Please export a backup.',
      toast_speech_unsupported: 'This browser does not support speech.',
      confirm_delete_profile: 'Delete “{name}” and all learning progress for this account?',
      confirm_reset: 'XP, level, streak and word progress for this account will be cleared.',
      profile_meta: 'Lv {level} · {xp} XP · {mastered} mastered · streak {streak}',
      profile_summary: 'Account: {name} · Streak {streak} · Best {best} · {mastered} mastered · {xp} XP',
      filter_units_aria: 'Filter units'
    }
  };

  function currentLang() {
    return (state && state.settings && state.settings.lang === 'en') ? 'en' : 'vi';
  }

  function t(key, vars) {
    const pack = I18N[currentLang()] || I18N.vi;
    let s = pack[key] != null ? pack[key] : (I18N.vi[key] != null ? I18N.vi[key] : key);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        s = String(s).split('{' + k + '}').join(String(vars[k]));
      });
    }
    return s;
  }

  function applyUILanguage() {
    const lang = currentLang();
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'vi');
    const label = byId('lang-label');
    if (label) label.textContent = lang === 'en' ? 'EN' : 'VI';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
    });
    // re-render dynamic bits that use t()
    if (state) {
      renderStats();
      if (app.screen === 'dashboard') renderUnitGrid();
      if (!byId('modal-profiles').hidden) renderProfileList();
    }
  }

  function toggleLang() {
    if (!state) return;
    state.settings.lang = currentLang() === 'vi' ? 'en' : 'vi';
    save();
    applyUILanguage();
    toast(t('lang_switched'), 'success');
  }

  const SCHEMA_VERSION = 3;
  const DAY_MS = 24 * 60 * 60 * 1000;

  /* FSRS v4.5 */
  const FSRS_W = [0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898,0.51655,0.6621];
  const FSRS_REQUEST_RETENTION = 0.9;
  const FSRS_MAX_INTERVAL = 365;
  const FSRS_DECAY = -0.5;
  const FSRS_FACTOR = 19 / 81;
  const MASTERED_STABILITY = 21;
  const MAX_BOX = 5;

  const XP = {
    FLASHCARD_AGAIN: 0, FLASHCARD_HARD: 6, FLASHCARD_GOOD: 10, FLASHCARD_EASY: 12,
    QUIZ_CORRECT: 15, UNIT_COMPLETE: 100, TEST_PASS: 50,
    STREAK_PER_DAY: 5, STREAK_BONUS_CAP: 50
  };

  const QUIZ_MIN = 10;
  const QUIZ_MAX = 15;
  const REVIEW_FLASHCARD_MAX = 30;
  const QUICK_MINUTES = 5;
  const QUICK_WORD_TARGET = 16;
  const WORDS_PER_UNIT = 20;
  const PRACTICE_LEN = 10;
  const UNIT_TEST_PASS = 80;

  /* Các dạng câu hỏi, theo mức tư duy:
       Nhớ      : w2d, d2w, listen (nhận diện) · t_vi, t_def, dictation (tự gõ từ)
       Hiểu     : cloze, story_cloze (chọn từ đúng ngữ cảnh)
       Vận dụng : cloze_t (gõ từ vào câu), unscramble (sắp xếp câu), write (tự viết câu) */
  const QUIZ_LABELS = {
    w2d: 'Word → Definition',
    d2w: 'Definition → Word',
    cloze: 'Điền vào chỗ trống',
    listen: 'Nghe và chọn từ',
    story_cloze: 'Điền từ vào câu trong truyện',
    t_vi: 'Gõ từ theo nghĩa tiếng Việt',
    t_def: 'Gõ từ theo định nghĩa',
    dictation: 'Nghe và gõ lại từ',
    cloze_t: 'Điền từ vào câu (tự gõ)',
    unscramble: 'Sắp xếp thành câu',
    write: 'Viết câu của bạn'
  };
  const QUIZ_LEVEL = {
    w2d: 'Nhớ', d2w: 'Nhớ', listen: 'Nhớ', t_vi: 'Nhớ', t_def: 'Nhớ', dictation: 'Nhớ',
    cloze: 'Hiểu', story_cloze: 'Hiểu',
    cloze_t: 'Vận dụng', unscramble: 'Vận dụng', write: 'Vận dụng'
  };
  // XP mỗi câu đúng: tự gõ/viết khó hơn nên thưởng nhiều hơn
  const QUIZ_XP = {
    w2d: 15, d2w: 15, listen: 15, cloze: 15, story_cloze: 15,
    t_vi: 20, t_def: 20, dictation: 20, cloze_t: 20, unscramble: 20, write: 25
  };
  // Dạng bắt buộc người học tự tạo câu trả lời (được tính là "production" cho Leitner)
  const STRONG_TYPES = new Set(['t_vi', 't_def', 'dictation', 'cloze_t', 'unscramble', 'write']);
  const NEEDS_SPEECH = new Set(['listen', 'dictation']);

  // Các nút Luyện tập trong Unit hub: ptype → các dạng câu hỏi được dùng
  const PRACTICE_SETS = {
    typing: { label: 'Gõ từ', types: ['t_vi', 't_def'] },
    dictation: { label: 'Nghe và gõ', types: ['dictation'] },
    cloze_t: { label: 'Điền từ vào câu', types: ['cloze_t'] },
    unscramble: { label: 'Sắp xếp câu', types: ['unscramble'] },
    story_cloze: { label: 'Điền vào truyện', types: ['story_cloze'] },
    write: { label: 'Viết câu', types: ['write'] }
  };

  // Unit Test: mỗi từ một câu, trộn đủ ba mức Nhớ → Hiểu → Vận dụng
  const TEST_PLAN = [
    'w2d', 'd2w', 'listen', 'cloze', 'story_cloze', 'cloze', 'story_cloze', 't_vi', 't_def', 'dictation',
    't_vi', 'cloze_t', 'cloze_t', 'unscramble', 'unscramble', 't_def', 'dictation', 'cloze_t', 'story_cloze', 'unscramble'
  ];

  const ICON_CHECK = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
  const ICON_CROSS = '<svg aria-hidden="true"><use href="#i-cross"/></svg>';
  const ICON_SPEAKER = '<svg class="icon" aria-hidden="true"><use href="#i-speaker"/></svg>';

  /* ========================================================================
     2. TIỆN ÍCH
     ======================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const pad2 = (n) => String(n).padStart(2, '0');

  // Fisher–Yates: trộn công bằng, không sửa mảng gốc
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Khóa ngày theo giờ địa phương: "2026-11-05"
  function dateKey(d = new Date()) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }
  function yesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return dateKey(d);
  }
  function endOfToday() {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d.getTime();
  }

  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Regex khớp mọi dạng của một từ (forms đã xếp dạng dài trước trong data.js)
  function formsRegex(word, flags = 'gi') {
    const forms = (word.forms && word.forms.length ? word.forms : [word.word])
      .slice()
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp);
    return new RegExp('\\b(' + forms.join('|') + ')\\b', flags);
  }

  // Che từ mục tiêu trong một câu: "To consist of..." → "To _____ of..."
  function maskWord(text, word) {
    return text.replace(formsRegex(word), '_____');
  }

  /* ========================================================================
     3. DỮ LIỆU
     ======================================================================== */
  const DATA = typeof vocabularyData !== 'undefined' ? vocabularyData : null;
  const unitsById = new Map();
  const wordsById = new Map();
  let allWords = [];

  function indexData() {
    DATA.units.forEach((u) => {
      unitsById.set(u.id, u);
      u.words.forEach((w) => {
        w.unitId = u.id;
        wordsById.set(w.id, w);
      });
    });
    allWords = Array.from(wordsById.values());
  }

  /* ========================================================================
     4. LƯU TRỮ — IndexedDB + multi-profile (Learner account)
     store = { version, activeProfileId, profiles: { [id]: Profile } }
     Profile = { id, name, createdAt, bestStreak, user, progress, settings }
     state  = profile đang active (user/progress/settings) để code học không đổi
     ======================================================================== */
  let state = null;
  let store = null; // multi-profile container
  let saveWarned = false;
  let dbPromise = null;
  const THEME_KEY = 'ielts-vocab-lab-theme';

  function systemPrefersDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function uid() {
    return 'p_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  }

  function emptyUser() {
    return { xp: 0, level: 1, streak: 0, lastStudyDate: null, totalWordsMastered: 0, completedUnits: [], unitTests: {} };
  }

  function emptySettings() {
    return {
      sound: true,
      darkMode: systemPrefersDark(),
      speechRate: 0.9,
      voice: '',
      lang: 'vi',
      onboardingDone: false
    };
  }

  function defaultState() {
    return { version: SCHEMA_VERSION, user: emptyUser(), progress: {}, settings: emptySettings() };
  }

  function createProfile(name, base) {
    const b = base || defaultState();
    // Deep clone để mỗi tài khoản có dữ liệu học độc lập hoàn toàn
    const user = JSON.parse(JSON.stringify(b.user || emptyUser()));
    const progress = JSON.parse(JSON.stringify(b.progress || {}));
    const settings = JSON.parse(JSON.stringify(b.settings || emptySettings()));
    return {
      id: uid(),
      name: (name || 'Learner').trim().slice(0, 40) || 'Learner',
      createdAt: Date.now(),
      bestStreak: Math.max(0, user.streak || 0),
      user, progress, settings
    };
  }

  function sanitizeProgressMap(rawProgress) {
    const progress = {};
    const num = (v, f) => (Number.isFinite(v) ? v : f);
    if (!rawProgress || typeof rawProgress !== 'object') return progress;
    Object.entries(rawProgress).forEach(([id, p]) => {
      if (!/^\d+-\d+$/.test(id) || !p || typeof p !== 'object') return;
      if (Number.isFinite(p.box) && !Number.isFinite(p.stability)) {
        const box = clamp(Math.round(p.box), 1, 5);
        const stabMap = { 1: 1, 2: 3, 3: 8, 4: 21, 5: 45 };
        const stability = stabMap[box] || 1;
        progress[id] = {
          difficulty: 5.0, stability,
          lastReview: num(p.nextReview, 0) > 0 ? num(p.nextReview, 0) - stability * DAY_MS : 0,
          nextReview: num(p.nextReview, 0),
          state: box <= 1 ? 'learning' : 'review',
          reps: Math.max(0, Math.round(num(p.correctStreak, 0))),
          lapses: 0,
          correctStreak: Math.max(0, Math.round(num(p.correctStreak, 0)))
        };
        return;
      }
      if (!Number.isFinite(p.stability)) return;
      progress[id] = {
        difficulty: clamp(num(p.difficulty, 5), 1, 10),
        stability: Math.max(0.1, num(p.stability, 1)),
        lastReview: num(p.lastReview, 0),
        nextReview: num(p.nextReview, 0),
        state: ['new', 'learning', 'review', 'relearning'].includes(p.state) ? p.state : 'review',
        reps: Math.max(0, Math.round(num(p.reps, 0))),
        lapses: Math.max(0, Math.round(num(p.lapses, 0))),
        correctStreak: Math.max(0, Math.round(num(p.correctStreak, 0)))
      };
    });
    return progress;
  }

  function sanitizeUser(u) {
    const num = (v, f) => (Number.isFinite(v) ? v : f);
    u = u && typeof u === 'object' ? u : {};
    const unitTests = {};
    if (u.unitTests && typeof u.unitTests === 'object') {
      Object.entries(u.unitTests).forEach(([id, t]) => {
        if (!/^\d+$/.test(id) || !t || typeof t !== 'object') return;
        unitTests[id] = {
          best: clamp(Math.round(num(t.best, 0)), 0, 100),
          attempts: Math.max(0, Math.round(num(t.attempts, 0))),
          passed: t.passed === true
        };
      });
    }
    const xp = Math.max(0, num(u.xp, 0));
    return {
      xp, level: levelFromXp(xp),
      streak: Math.max(0, Math.round(num(u.streak, 0))),
      lastStudyDate: typeof u.lastStudyDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(u.lastStudyDate) ? u.lastStudyDate : null,
      totalWordsMastered: 0, // recalculated below
      completedUnits: Array.isArray(u.completedUnits) ? u.completedUnits.filter(Number.isInteger) : [],
      unitTests
    };
  }

  function sanitizeSettings(s) {
    const d = emptySettings();
    s = s && typeof s === 'object' ? s : {};
    const num = (v, f) => (Number.isFinite(v) ? v : f);
    // Existing users who already have progress skip onboarding
    const hasProgress = s && s.onboardingDone === true;
    return {
      sound: typeof s.sound === 'boolean' ? s.sound : d.sound,
      darkMode: typeof s.darkMode === 'boolean' ? s.darkMode : d.darkMode,
      speechRate: clamp(num(s.speechRate, d.speechRate), 0.5, 1.4),
      voice: typeof s.voice === 'string' ? s.voice : '',
      lang: s.lang === 'en' ? 'en' : 'vi',
      onboardingDone: typeof s.onboardingDone === 'boolean' ? s.onboardingDone : hasProgress
    };
  }

  /** Nhận state học cũ (v1/v2) hoặc profile blob → state sạch */
  function sanitizeState(raw) {
    if (!raw || typeof raw !== 'object') return null;
    // Legacy single-state
    if (raw.progress || raw.user) {
      const progress = sanitizeProgressMap(raw.progress);
      const user = sanitizeUser(raw.user);
      user.totalWordsMastered = Object.values(progress).filter((p) => p.stability >= MASTERED_STABILITY).length;
      return { version: SCHEMA_VERSION, user, progress, settings: sanitizeSettings(raw.settings) };
    }
    return null;
  }

  function sanitizeStore(raw) {
    if (!raw || typeof raw !== 'object') return null;
    // Multi-profile store
    if (raw.profiles && typeof raw.profiles === 'object') {
      const profiles = {};
      Object.entries(raw.profiles).forEach(([id, p]) => {
        if (!p || typeof p !== 'object') return;
        const progress = sanitizeProgressMap(p.progress);
        const user = sanitizeUser(p.user);
        user.totalWordsMastered = Object.values(progress).filter((x) => x.stability >= MASTERED_STABILITY).length;
        const pid = typeof p.id === 'string' ? p.id : id;
        profiles[pid] = {
          id: pid,
          name: (typeof p.name === 'string' && p.name.trim() ? p.name.trim() : 'Learner').slice(0, 40),
          createdAt: Number.isFinite(p.createdAt) ? p.createdAt : Date.now(),
          bestStreak: Math.max(0, Math.round(Number(p.bestStreak) || user.streak || 0)),
          user, progress, settings: sanitizeSettings(p.settings)
        };
      });
      if (!Object.keys(profiles).length) return null;
      let active = typeof raw.activeProfileId === 'string' ? raw.activeProfileId : null;
      if (!active || !profiles[active]) active = Object.keys(profiles)[0];
      return { version: SCHEMA_VERSION, activeProfileId: active, profiles };
    }
    // Migrate single state → one profile
    const single = sanitizeState(raw);
    if (!single) return null;
    const prof = createProfile('Learner', single);
    return { version: SCHEMA_VERSION, activeProfileId: prof.id, profiles: { [prof.id]: prof } };
  }

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('no IDB')); return; }
      const req = indexedDB.open(STORAGE_KEY, 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains('state')) req.result.createObjectStore('state');
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return dbPromise;
  }
  function idbGet() {
    return openDB().then((db) => new Promise((resolve, reject) => {
      const r = db.transaction('state', 'readonly').objectStore('state').get('main');
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => reject(r.error);
    }));
  }
  function idbSet(data) {
    return openDB().then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction('state', 'readwrite');
      tx.objectStore('state').put(data, 'main');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    }));
  }
  function persistTheme(darkMode) {
    try { localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light'); } catch (e) {}
  }

  function migrateFromLocalStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const clean = sanitizeStore(JSON.parse(raw));
      if (clean) { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} return clean; }
    } catch (e) {}
    return null;
  }

  function applyActiveToState() {
    const p = store.profiles[store.activeProfileId];
    if (!p) return;
    // state trỏ vào đúng object của profile → mọi lần học ghi thẳng vào tài khoản đang active
    state = {
      version: SCHEMA_VERSION,
      user: p.user,
      progress: p.progress,
      settings: p.settings
    };
    state.user.totalWordsMastered = Object.values(state.progress).filter((x) => x.stability >= MASTERED_STABILITY).length;
    state.user.level = levelFromXp(state.user.xp);
  }

  function writeStateIntoStore() {
    if (!store || !state) return;
    const p = store.profiles[store.activeProfileId];
    if (!p) return;
    p.user = state.user;
    p.progress = state.progress;
    p.settings = state.settings;
    p.bestStreak = Math.max(p.bestStreak || 0, state.user.streak || 0, effectiveStreak());
  }

  function save() {
    if (!state || !store) return;
    writeStateIntoStore();
    persistTheme(state.settings.darkMode);
    idbSet(store).catch((e) => {
      console.warn('[storage] write', e);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
      catch (err) {
        if (!saveWarned) {
          saveWarned = true;
          toast('Không lưu được tiến độ. Hãy Export file sao lưu.', 'error');
        }
      }
    });
    scheduleCloudPush();
  }

  async function loadStateAsync() {
    let loaded = null;
    try { loaded = sanitizeStore(await idbGet()); } catch (e) { console.warn('[storage]', e); }
    if (!loaded) loaded = migrateFromLocalStorage();
    if (!loaded) {
      const prof = createProfile('Learner');
      loaded = { version: SCHEMA_VERSION, activeProfileId: prof.id, profiles: { [prof.id]: prof } };
    }
    store = loaded;
    applyActiveToState();
    return state;
  }

  async function requestPersistentStorage() {
    try {
      if (navigator.storage && navigator.storage.persist) {
        const granted = await navigator.storage.persist();
        const hint = byId('persist-hint');
        if (hint && granted) hint.hidden = false;
      }
    } catch (e) {}
  }

  /* ========================================================================
     4b. CLOUD SYNC — Firebase Auth + Firestore (offline-first)
     Document path: users/{uid}/data/main
     Merge: progress lấy stability cao hơn; user stats lấy max hợp lý + updatedAt
     ======================================================================== */
  const cloud = {
    ready: false,
    user: null,
    app: null,
    auth: null,
    db: null,
    syncing: false,
    pushTimer: null
  };

  function cloudConfigured() {
    const c = window.FIREBASE_CONFIG || {};
    return !!(c.apiKey && c.projectId && c.appId);
  }

  function updateCloudUI() {
    const status = byId('cloud-status');
    const actions = byId('cloud-actions');
    const signed = byId('cloud-signed-in');
    const hint = byId('cloud-hint');
    const chip = byId('cloud-uid-chip');
    if (!status) return;

    if (!cloudConfigured()) {
      status.textContent = t('cloud_need_config');
      if (actions) actions.hidden = true;
      if (signed) signed.hidden = true;
      if (hint) hint.hidden = false;
      return;
    }
    if (hint) hint.hidden = true;

    if (cloud.syncing) {
      status.textContent = t('cloud_status_syncing');
    } else if (cloud.user) {
      status.textContent = t('cloud_status_on') + (cloud.user.isAnonymous ? ' · ẩn danh' : '');
    } else {
      status.textContent = t('cloud_status_off');
    }

    if (actions) actions.hidden = !!cloud.user;
    if (signed) signed.hidden = !cloud.user;
    if (chip && cloud.user) {
      const id = cloud.user.uid;
      chip.textContent = cloud.user.isAnonymous
        ? 'anon · ' + id.slice(0, 8)
        : (cloud.user.email || id.slice(0, 12));
      chip.title = id;
    }
  }

  async function initCloud() {
    if (!cloudConfigured()) {
      updateCloudUI();
      return;
    }
    try {
      const [{ initializeApp }, { getAuth, onAuthStateChanged, signInAnonymously, signInWithPopup, GoogleAuthProvider, signOut }, { getFirestore, doc, getDoc, setDoc }] =
        await Promise.all([
          import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
          import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'),
          import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js')
        ]);

      cloud.app = initializeApp(window.FIREBASE_CONFIG);
      cloud.auth = getAuth(cloud.app);
      cloud.db = getFirestore(cloud.app);
      cloud._doc = doc;
      cloud._getDoc = getDoc;
      cloud._setDoc = setDoc;
      cloud._signInAnonymously = signInAnonymously;
      cloud._signInWithPopup = signInWithPopup;
      cloud._GoogleAuthProvider = GoogleAuthProvider;
      cloud._signOut = signOut;
      cloud.ready = true;

      onAuthStateChanged(cloud.auth, (user) => {
        cloud.user = user;
        updateCloudUI();
        if (user) {
          // Auto pull once when session restores
          cloudPull({ silent: true }).catch(() => {});
        }
      });
    } catch (e) {
      console.warn('[cloud] init failed', e);
      cloud.ready = false;
      updateCloudUI();
    }
  }

  function cloudDocRef() {
    if (!cloud.user || !cloud.db) return null;
    return cloud._doc(cloud.db, 'users', cloud.user.uid, 'data', 'main');
  }

  function buildCloudPayload() {
    writeStateIntoStore();
    return {
      version: SCHEMA_VERSION,
      updatedAt: Date.now(),
      activeProfileId: store.activeProfileId,
      profiles: store.profiles
    };
  }

  function mergeCloudStore(localStore, remote) {
    if (!remote || !remote.profiles) return localStore;
    const out = {
      version: Math.max(localStore.version || 1, remote.version || 1),
      activeProfileId: localStore.activeProfileId,
      profiles: { ...localStore.profiles }
    };

    Object.entries(remote.profiles || {}).forEach(([id, rp]) => {
      const lp = out.profiles[id];
      if (!lp) {
        out.profiles[id] = rp;
        return;
      }
      // Merge progress: higher stability wins
      const progress = { ...(lp.progress || {}) };
      Object.entries(rp.progress || {}).forEach(([wid, rpItem]) => {
        const cur = progress[wid];
        if (!cur || (rpItem.stability > cur.stability) ||
            (rpItem.stability === cur.stability && (rpItem.lastReview || 0) > (cur.lastReview || 0))) {
          progress[wid] = rpItem;
        }
      });
      const lu = lp.user || emptyUser();
      const ru = rp.user || emptyUser();
      out.profiles[id] = {
        ...lp,
        name: lp.name || rp.name,
        bestStreak: Math.max(lp.bestStreak || 0, rp.bestStreak || 0, lu.streak || 0, ru.streak || 0),
        user: {
          ...lu,
          xp: Math.max(lu.xp || 0, ru.xp || 0),
          level: Math.max(lu.level || 1, ru.level || 1),
          streak: Math.max(lu.streak || 0, ru.streak || 0),
          lastStudyDate: (lu.lastStudyDate || '') >= (ru.lastStudyDate || '') ? lu.lastStudyDate : ru.lastStudyDate,
          totalWordsMastered: Math.max(lu.totalWordsMastered || 0, ru.totalWordsMastered || 0),
          completedUnits: Array.from(new Set([...(lu.completedUnits || []), ...(ru.completedUnits || [])])),
          unitTests: { ...(ru.unitTests || {}), ...(lu.unitTests || {}) }
        },
        progress,
        settings: { ...(rp.settings || {}), ...(lp.settings || {}) }
      };
    });
    return out;
  }

  async function cloudPush({ silent } = {}) {
    if (!cloud.ready || !cloud.user) return;
    const ref = cloudDocRef();
    if (!ref) return;
    cloud.syncing = true;
    updateCloudUI();
    try {
      await cloud._setDoc(ref, buildCloudPayload(), { merge: false });
      if (!silent) toast(t('toast_cloud_ok'), 'success');
    } catch (e) {
      console.warn('[cloud] push', e);
      if (!silent) toast(t('toast_cloud_err'), 'error');
    } finally {
      cloud.syncing = false;
      updateCloudUI();
    }
  }

  async function cloudPull({ silent } = {}) {
    if (!cloud.ready || !cloud.user) return;
    const ref = cloudDocRef();
    if (!ref) return;
    cloud.syncing = true;
    updateCloudUI();
    try {
      const snap = await cloud._getDoc(ref);
      if (!snap.exists()) {
        // First time: push local up
        await cloud._setDoc(ref, buildCloudPayload());
        if (!silent) toast(t('toast_cloud_ok'), 'success');
        return;
      }
      const remote = snap.data();
      const merged = mergeCloudStore(store, remote);
      store = sanitizeStore(merged) || store;
      applyActiveToState();
      save();
      // refresh UI if helpers exist
      try { if (typeof renderDashboard === 'function') renderDashboard(); } catch (e) {}
      try { if (typeof updateHeaderStats === 'function') updateHeaderStats(); } catch (e) {}
      if (!silent) toast(t('toast_cloud_pull'), 'success');
    } catch (e) {
      console.warn('[cloud] pull', e);
      if (!silent) toast(t('toast_cloud_err'), 'error');
    } finally {
      cloud.syncing = false;
      updateCloudUI();
    }
  }

  function scheduleCloudPush() {
    if (!cloud.user || !cloud.ready) return;
    clearTimeout(cloud.pushTimer);
    cloud.pushTimer = setTimeout(() => cloudPush({ silent: true }), 2500);
  }

  async function cloudSignInAnon() {
    if (!cloud.ready) await initCloud();
    if (!cloud.ready) {
      toast(t('cloud_need_config'), 'error');
      return;
    }
    try {
      await cloud._signInAnonymously(cloud.auth);
      toast(t('toast_cloud_in'), 'success');
      await cloudPull({ silent: false });
    } catch (e) {
      console.warn('[cloud] anon', e);
      toast(t('toast_cloud_err'), 'error');
    }
  }

  async function cloudSignInGoogle() {
    if (!cloud.ready) await initCloud();
    if (!cloud.ready) {
      toast(t('cloud_need_config'), 'error');
      return;
    }
    try {
      const provider = new cloud._GoogleAuthProvider();
      await cloud._signInWithPopup(cloud.auth, provider);
      toast(t('toast_cloud_in'), 'success');
      await cloudPull({ silent: false });
    } catch (e) {
      console.warn('[cloud] google', e);
      toast(t('toast_cloud_err'), 'error');
    }
  }

  async function cloudSignOut() {
    if (!cloud.auth) return;
    try {
      await cloud._signOut(cloud.auth);
      cloud.user = null;
      updateCloudUI();
      toast(t('toast_cloud_out'), 'success');
    } catch (e) {
      toast(t('toast_cloud_err'), 'error');
    }
  }

  /* ========================================================================
     5. GAMIFICATION
     ======================================================================== */

  // Ngưỡng XP của level L: 100 × (L² − 1) → L2 = 300, L3 = 800, L4 = 1500, ...
  const xpForLevel = (L) => 100 * (L * L - 1);
  const levelFromXp = (xp) => Math.max(1, Math.floor(Math.sqrt(xp / 100 + 1)));

  // Streak hiển thị: nếu đã bỏ lỡ hơn 1 ngày thì coi như 0 (state chỉ đổi khi học lại)
  function effectiveStreak() {
    const last = state.user.lastStudyDate;
    return last === dateKey() || last === yesterdayKey() ? state.user.streak : 0;
  }

  // Gọi mỗi lần người dùng học. Cập nhật streak và thưởng XP cho ngày học đầu tiên trong ngày.
  function touchStudy() {
    const today = dateKey();
    const user = state.user;
    if (user.lastStudyDate === today) return;

    user.streak = user.lastStudyDate === yesterdayKey() ? user.streak + 1 : 1;
    user.lastStudyDate = today;
    save();

    if (user.streak >= 2) {
      const bonus = Math.min(user.streak * XP.STREAK_PER_DAY, XP.STREAK_BONUS_CAP);
      addXp(bonus);
      toast(t('toast_streak', { n: user.streak, xp: bonus }), 'success');
    }
  }

  function addXp(amount) {
    const before = state.user.level;
    state.user.xp += amount;
    state.user.level = levelFromXp(state.user.xp);
    save();
    renderStats();
    if (state.user.level > before) showLevelUp(state.user.level);
  }

  function isMastered(p) { return p && p.stability >= MASTERED_STABILITY; }
  function countMastered() { return Object.values(state.progress).filter(isMastered).length; }

  function checkUnitComplete(unitId) {
    const unit = unitsById.get(unitId);
    if (!unit || state.user.completedUnits.includes(unitId)) return;
    const all = unit.words.every((w) => isMastered(state.progress[w.id]));
    if (!all) return;
    state.user.completedUnits.push(unitId);
    save();
    addXp(XP.UNIT_COMPLETE);
    toast(t('toast_unit_done', { title: unit.title, xp: XP.UNIT_COMPLETE }), 'success');
    playSound('complete');
    confetti(220);
  }

  /* ========================================================================
     6. FSRS — Rating 1=Again 2=Hard 3=Good 4=Easy
     ======================================================================== */
  function getProgress(id) { return state.progress[id] || null; }
  function isDue(id) { const p = getProgress(id); return !!p && p.nextReview <= endOfToday(); }

  function fsrsRetrievability(elapsedDays, stability) {
    if (stability <= 0) return 0;
    return Math.pow(1 + FSRS_FACTOR * elapsedDays / stability, FSRS_DECAY);
  }
  function fsrsNextInterval(stability) {
    const interval = stability / FSRS_FACTOR * (Math.pow(FSRS_REQUEST_RETENTION, 1 / FSRS_DECAY) - 1);
    return Math.min(Math.max(1, Math.round(interval * 10) / 10), FSRS_MAX_INTERVAL);
  }
  function fsrsInitDifficulty(rating) {
    return clamp(FSRS_W[4] - Math.exp(FSRS_W[5] * (rating - 1)) + 1, 1, 10);
  }
  function fsrsInitStability(rating) { return Math.max(0.1, FSRS_W[rating - 1]); }
  function fsrsNextDifficulty(d, rating) {
    const delta = -FSRS_W[6] * (rating - 3);
    const d0 = fsrsInitDifficulty(3);
    return clamp(FSRS_W[7] * d0 + (1 - FSRS_W[7]) * (d + delta), 1, 10);
  }
  function fsrsNextStabilitySuccess(d, s, r, rating) {
    const hardPenalty = rating === 2 ? FSRS_W[15] : 1;
    const easyBonus = rating === 4 ? FSRS_W[16] : 1;
    const factor = Math.exp(FSRS_W[8]) * (11 - d) * Math.pow(s, -FSRS_W[9]) *
      (Math.exp(FSRS_W[10] * (1 - r)) - 1) * hardPenalty * easyBonus;
    return Math.max(0.1, s * (1 + factor));
  }
  function fsrsNextStabilityFail(d, s, r) {
    return Math.max(0.1, FSRS_W[11] * Math.pow(d, -FSRS_W[12]) * (Math.pow(s + 1, FSRS_W[13]) - 1) * Math.exp(FSRS_W[14] * (1 - r)));
  }

  function updateProgress(wordId, correct, strong = false, ratingOverride = null) {
    const now = Date.now();
    const existing = getProgress(wordId);
    let rating;
    if (ratingOverride >= 1 && ratingOverride <= 4) rating = ratingOverride;
    else if (!correct) rating = 1;
    else if (strong) rating = 4;
    else rating = 3;

    let p;
    if (!existing) {
      p = {
        difficulty: fsrsInitDifficulty(rating), stability: fsrsInitStability(rating),
        lastReview: now, nextReview: 0,
        state: rating === 1 ? 'relearning' : 'learning',
        reps: 1, lapses: rating === 1 ? 1 : 0, correctStreak: rating >= 2 ? 1 : 0
      };
    } else {
      p = Object.assign({}, existing);
      const elapsed = p.lastReview > 0 ? Math.max(0, (now - p.lastReview) / DAY_MS) : 0;
      const r = fsrsRetrievability(elapsed, p.stability);
      if (rating === 1) {
        p.difficulty = fsrsNextDifficulty(p.difficulty, 1);
        p.stability = fsrsNextStabilityFail(p.difficulty, p.stability, r);
        p.correctStreak = 0; p.lapses = (p.lapses || 0) + 1; p.state = 'relearning';
      } else {
        p.difficulty = fsrsNextDifficulty(p.difficulty, rating);
        p.stability = fsrsNextStabilitySuccess(p.difficulty, p.stability, r, rating);
        p.correctStreak = (p.correctStreak || 0) + 1; p.state = 'review';
      }
      p.reps = (p.reps || 0) + 1; p.lastReview = now;
    }
    const intervalDays = fsrsNextInterval(p.stability);
    p.nextReview = now + (rating === 1 ? Math.min(intervalDays, 1) : intervalDays) * DAY_MS;
    state.progress[wordId] = p;
    state.user.totalWordsMastered = countMastered();
    save();
    checkUnitComplete(wordsById.get(wordId).unitId);
    return { capped: false };
  }

  function dueWords(unitId = null) {
    const pool = unitId == null ? allWords : unitsById.get(unitId).words;
    return pool.filter(w => isDue(w.id)).sort((a, b) => state.progress[a.id].nextReview - state.progress[b.id].nextReview);
  }
  const newWords = (unitId) => unitsById.get(unitId).words.filter(w => !getProgress(w.id));

  function stageOf(id) {
    const p = getProgress(id); if (!p) return 0;
    const s = p.stability;
    if (s < 2) return 1; if (s < 7) return 2; if (s < 21) return 3; if (s < 60) return 4; return 5;
  }
  const boxOf = stageOf;

  function unitStats(unit) {
    const total = unit.words.length;
    const mastered = unit.words.filter(w => isMastered(getProgress(w.id))).length;
    const seen = unit.words.filter(w => getProgress(w.id)).length;
    const due = unit.words.filter(w => isDue(w.id)).length;
    return { total, mastered, seen, due };
  }

  /* ========================================================================
     7. ÂM THANH, PHÁT ÂM, CONFETTI
     ======================================================================== */

  /* ---- Hiệu ứng âm thanh bằng Web Audio API (không cần file) ---- */
  let audioCtx = null;

  function tone(freq, start, dur, type = 'sine', gain = 0.07) {
    const ctx = audioCtx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = ctx.currentTime + start;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function playSound(name) {
    if (!state || !state.settings.sound) return;
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      switch (name) {
        case 'correct': tone(660, 0, 0.14); tone(880, 0.1, 0.22); break;
        case 'wrong': tone(240, 0, 0.18, 'triangle', 0.09); tone(180, 0.14, 0.26, 'triangle', 0.09); break;
        case 'flip': tone(520, 0, 0.07, 'sine', 0.04); break;
        case 'levelup': [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.3)); break;
        case 'complete': [523, 659, 784].forEach((f, i) => tone(f, i * 0.1, 0.22)); tone(1047, 0.35, 0.5); break;
        default: break;
      }
    } catch (e) { /* trình duyệt chặn audio: bỏ qua */ }
  }

  /* ---- Phát âm: Dictionary audio (bản xứ) + Web Speech fallback ---- */
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  let englishVoices = [];
  let speechWarned = false;
  let storyReading = false;
  let currentAudio = null;
  // Cache URL audio theo từ (lowercase). null = đã hỏi API nhưng không có.
  const audioUrlCache = new Map();
  const DICT_API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  // Ưu tiên giọng neural / tự nhiên khi dùng Web Speech
  const VOICE_PREFER = [
    /google us english/i,
    /google uk english/i,
    /microsoft (aria|guy|jenny|ryan|sonia|neerja)/i,
    /samantha/i,
    /alex/i,
    /daniel/i,
    /karen/i,
    /moira/i,
    /natural/i,
    /neural/i,
    /premium/i,
    /enhanced/i
  ];

  function loadVoices() {
    if (!synth) return;
    englishVoices = synth.getVoices().filter((v) => /^en/i.test(v.lang));
    englishVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    const select = byId('set-voice');
    if (!select) return;
    const current = state ? state.settings.voice : '';
    select.replaceChildren(new Option(currentLang() === 'en' ? 'Auto (best available)' : 'Tự động (tốt nhất)', ''));
    englishVoices.forEach((v) => {
      const label = `${v.name} (${v.lang})${scoreVoice(v) >= 8 ? ' ★' : ''}`;
      select.appendChild(new Option(label, v.name));
    });
    select.value = englishVoices.some((v) => v.name === current) ? current : '';
  }

  function scoreVoice(v) {
    let s = 0;
    const name = v.name || '';
    VOICE_PREFER.forEach((re, i) => { if (re.test(name)) s += (VOICE_PREFER.length - i + 2); });
    if (/en-US/i.test(v.lang)) s += 3;
    else if (/en-GB/i.test(v.lang)) s += 2;
    else if (/en/i.test(v.lang)) s += 1;
    if (v.localService) s += 1;
    return s;
  }

  function pickVoice() {
    if (!englishVoices.length) return null;
    const chosen = englishVoices.find((v) => v.name === state.settings.voice);
    if (chosen) return chosen;
    return englishVoices[0] || null;
  }

  function stopSpeech() {
    if (synth) synth.cancel();
    if (currentAudio) {
      try { currentAudio.pause(); currentAudio.currentTime = 0; } catch (e) {}
      currentAudio = null;
    }
    setSpeakingUI(false);
    if (storyReading) {
      storyReading = false;
      setStoryReadButton(false);
    }
  }

  function setSpeakingUI(on) {
    document.querySelectorAll('[data-action="speak-current"], [data-action="popup-speak"], [data-action="row-speak"], [data-action="quiz-listen"], #fc-speak')
      .forEach((btn) => btn.classList.toggle('is-speaking', !!on));
  }

  /** Lấy URL audio từ Free Dictionary API (cache). */
  async function fetchDictAudioUrl(word) {
    const key = String(word || '').trim().toLowerCase();
    if (!key || /\s/.test(key)) return null;
    if (audioUrlCache.has(key)) return audioUrlCache.get(key);

    try {
      const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = ctrl ? setTimeout(() => ctrl.abort(), 4000) : null;
      const res = await fetch(DICT_API + encodeURIComponent(key), ctrl ? { signal: ctrl.signal } : undefined);
      if (timer) clearTimeout(timer);
      if (!res.ok) {
        audioUrlCache.set(key, null);
        return null;
      }
      const data = await res.json();
      let url = null;
      outer: for (const entry of data) {
        for (const ph of (entry.phonetics || [])) {
          if (ph.audio && /(-us\.|\.us\.|us\.mp3|_us_)/i.test(ph.audio)) {
            url = ph.audio;
            break outer;
          }
        }
        for (const ph of (entry.phonetics || [])) {
          if (ph.audio) {
            url = ph.audio;
            break outer;
          }
        }
      }
      audioUrlCache.set(key, url || null);
      return url || null;
    } catch (e) {
      audioUrlCache.set(key, null);
      return null;
    }
  }

  /** Prefetch audio cho danh sách từ (không chặn UI). */
  function prefetchWordAudio(words) {
    if (!words || !words.length) return;
    let i = 0;
    const run = () => {
      if (i >= words.length) return;
      const w = words[i++];
      const term = (typeof w === 'string' ? w : (w && w.word) || '').toLowerCase();
      if (term && !audioUrlCache.has(term)) {
        fetchDictAudioUrl(term).finally(() => setTimeout(run, 80));
      } else {
        run();
      }
    };
    run();
  }

  function playAudioUrl(url, onend) {
    return new Promise((resolve) => {
      stopSpeech();
      const a = new Audio();
      a.preload = 'auto';
      const rate = state && state.settings ? state.settings.speechRate : 1;
      a.playbackRate = Math.min(1.4, Math.max(0.7, rate));
      a.src = url;
      currentAudio = a;
      setSpeakingUI(true);
      const done = (ok) => {
        if (currentAudio === a) currentAudio = null;
        setSpeakingUI(false);
        if (onend) onend();
        resolve(!!ok);
      };
      a.onended = () => done(true);
      a.onerror = () => done(false);
      a.play().catch(() => done(false));
    });
  }

  function speakWithSynth(text, onend) {
    if (!synth) {
      if (!speechWarned) {
        speechWarned = true;
        toast(t('toast_speech_unsupported'), 'error');
      }
      if (onend) onend();
      return false;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    const voice = pickVoice();
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    u.rate = state && state.settings ? state.settings.speechRate : 0.9;
    setSpeakingUI(true);
    const done = () => {
      setSpeakingUI(false);
      if (onend) onend();
    };
    u.onend = done;
    u.onerror = done;
    synth.speak(u);
    return true;
  }

  /**
   * Phát âm thông minh:
   * - Từ đơn → audio từ điển (người bản xứ) → fallback Web Speech
   * - Câu / nhiều từ → Web Speech (giọng neural ưu tiên)
   */
  async function speak(text, onend) {
    const str = String(text || '').trim();
    if (!str) {
      if (onend) onend();
      return false;
    }
    const isSingleWord = /^[a-zA-Z][a-zA-Z\-']{0,40}$/.test(str);
    if (isSingleWord) {
      const url = await fetchDictAudioUrl(str);
      if (url) {
        const ok = await playAudioUrl(url, onend);
        if (ok) return true;
      }
    }
    return speakWithSynth(str, onend);
  }

  /* ---- Confetti vẽ bằng canvas ---- */
  const confettiState = { canvas: null, ctx: null, parts: [], raf: 0 };
  const CONFETTI_COLORS = ['#4f52d6', '#14b8a6', '#f1a03a', '#ef6a5b', '#5cc08f', '#2b9fd4', '#e2cf3f'];

  function confetti(count = 140) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = confettiState;
    if (!c.canvas) {
      c.canvas = byId('confetti-canvas');
      c.ctx = c.canvas.getContext('2d');
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.canvas.width = window.innerWidth * dpr;
    c.canvas.height = window.innerHeight * dpr;
    c.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    for (let i = 0; i < count; i++) {
      const angle = (-Math.PI / 2) + (Math.random() - 0.5) * Math.PI * 0.9;
      const speed = 7 + Math.random() * 9;
      c.parts.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
        y: window.innerHeight * 0.6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 6 + Math.random() * 6,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.4,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        life: 0
      });
    }
    if (!c.raf) c.raf = requestAnimationFrame(confettiFrame);
  }

  function confettiFrame() {
    const c = confettiState;
    const w = window.innerWidth;
    const h = window.innerHeight;
    c.ctx.clearRect(0, 0, w, h);
    c.parts = c.parts.filter((p) => p.life < 150 && p.y < h + 20);
    c.parts.forEach((p) => {
      p.life += 1;
      p.vy += 0.28;        // trọng lực
      p.vx *= 0.99;        // lực cản không khí
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      c.ctx.save();
      c.ctx.translate(p.x, p.y);
      c.ctx.rotate(p.rot);
      c.ctx.globalAlpha = clamp(1 - p.life / 150, 0, 1);
      c.ctx.fillStyle = p.color;
      c.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      c.ctx.restore();
    });
    if (c.parts.length) {
      c.raf = requestAnimationFrame(confettiFrame);
    } else {
      c.raf = 0;
      c.ctx.clearRect(0, 0, w, h);
    }
  }

  /* ========================================================================
     8. UI CHUNG
     ======================================================================== */
  const app = {
    screen: 'dashboard',
    unitId: null,
    session: null,
    lastSession: null,
    returnTo: { screen: 'dashboard' },
    filter: 'all',
    popupWordId: null,
    popupHideTimer: 0,
    lastFocus: null
  };

  function showScreen(name) {
    if (app.screen !== name) stopSpeech();
    if (name !== 'flashcard') clearQuickTimer();
    hidePopup();
    app.screen = name;
    $$('.screen').forEach((s) => s.classList.toggle('is-active', s.dataset.screen === name));

    const navTarget = name === 'review' ? 'review' : 'dashboard';
    $$('#bottom-nav [data-nav]').forEach((b) => b.classList.toggle('is-active', b.dataset.nav === navTarget));

    if (name === 'dashboard') renderDashboard();
    if (name === 'unit') renderUnitHub();
    if (name === 'review') renderReview();

    window.scrollTo({ top: 0 });
    byId('main').focus({ preventScroll: true });
  }

  // Nút "quay lại" trong từng màn hình học
  function goBack() {
    const s = app.screen;
    if (s === 'flashcard' || s === 'quiz' || s === 'story' || s === 'results') {
      showScreen(app.returnTo.screen === 'unit' && app.unitId != null ? 'unit' : app.returnTo.screen);
    } else {
      showScreen('dashboard');
    }
  }

  function toast(message, type = 'info') {
    const el = document.createElement('div');
    el.className = 'toast';
    el.dataset.type = type;
    el.textContent = message;
    byId('toast-stack').appendChild(el);
    setTimeout(() => {
      el.classList.add('is-leaving');
      setTimeout(() => el.remove(), 320);
    }, 2800);
  }

  /* ---- Modal ---- */
  function openModal(el) {
    app.lastFocus = document.activeElement;
    el.hidden = false;
    document.body.style.overflow = 'hidden';
    const first = $('.modal__dialog button, .modal__dialog input, .modal__dialog select', el);
    if (first) first.focus({ preventScroll: true });
  }

  function closeModal(el) {
    el.hidden = true;
    const anyOpen = !byId('modal-settings').hidden
      || !byId('modal-confirm').hidden
      || (byId('modal-profiles') && !byId('modal-profiles').hidden);
    if (!anyOpen) document.body.style.overflow = '';
    if (app.lastFocus && document.contains(app.lastFocus)) app.lastFocus.focus({ preventScroll: true });
  }

  // Hộp xác nhận dùng chung. Trả về Promise<boolean>.
  function confirmDialog({ title, text, okLabel = 'Đồng ý' }) {
    return new Promise((resolve) => {
      const modal = byId('modal-confirm');
      const ok = byId('confirm-ok');
      const cancel = byId('confirm-cancel');
      byId('confirm-title').textContent = title;
      byId('confirm-text').textContent = text;
      ok.textContent = okLabel;

      const done = (value) => {
        ok.removeEventListener('click', onOk);
        cancel.removeEventListener('click', onCancel);
        modal.removeEventListener('cancel-confirm', onCancel);
        closeModal(modal);
        resolve(value);
      };
      const onOk = () => done(true);
      const onCancel = () => done(false);
      ok.addEventListener('click', onOk);
      cancel.addEventListener('click', onCancel);
      modal.addEventListener('cancel-confirm', onCancel);
      openModal(modal);
      cancel.focus({ preventScroll: true });
    });
  }

  // Giữ phím Tab trong modal đang mở
  function trapFocus(e) {
    const modal = !byId('modal-confirm').hidden ? byId('modal-confirm')
      : (byId('modal-profiles') && !byId('modal-profiles').hidden) ? byId('modal-profiles')
      : (!byId('modal-settings').hidden ? byId('modal-settings') : null);
    if (!modal || e.key !== 'Tab') return;
    const items = $$('button:not([disabled]), input:not([hidden]), select', $('.modal__dialog', modal)).filter((n) => n.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---- Level up ---- */
  function showLevelUp(level) {
    byId('levelup-number').textContent = level;
    byId('levelup-number-text').textContent = level;
    byId('levelup').hidden = false;
    playSound('levelup');
    confetti(200);
    $('#levelup .btn').focus({ preventScroll: true });
  }

  /* ========================================================================
     9. DASHBOARD, UNIT HUB, REVIEW TODAY
     ======================================================================== */

  // Cập nhật mọi con số tổng (header + dashboard). Gọi lại mỗi khi XP hoặc tiến độ đổi.
  function renderStats() {
    const u = state.user;
    const streak = effectiveStreak();
    const due = dueWords().length;
    const base = xpForLevel(u.level);
    const next = xpForLevel(u.level + 1);
    const pct = clamp(((u.xp - base) / (next - base)) * 100, 0, 100);

    const activeName = (store && store.profiles[store.activeProfileId] && store.profiles[store.activeProfileId].name) || 'Learner';
    const hdrProfile = byId('hdr-profile');
    if (hdrProfile) hdrProfile.textContent = activeName;

    byId('hdr-level').textContent = u.level;
    byId('hdr-xp').textContent = u.xp;
    byId('hdr-streak').textContent = streak;

    byId('stat-streak').textContent = streak;
    byId('stat-xp').textContent = u.xp;
    byId('stat-mastered').textContent = countMastered();
    byId('stat-total-words').textContent = allWords.length;
    byId('stat-due').textContent = due;
    byId('review-today-count').textContent = due;

    byId('level-number').textContent = u.level;
    byId('xp-progress-text').textContent = `${u.xp - base} / ${next - base} XP`;
    const ring = byId('level-ring');
    ring.style.setProperty('--p', pct.toFixed(1));
    ring.setAttribute('aria-label', `Level ${u.level}, còn ${next - u.xp} XP để lên Level ${u.level + 1}`);

    const badge = byId('nav-due-badge');
    badge.hidden = due === 0;
    badge.textContent = due > 99 ? '99+' : due;

    byId('dash-greeting').textContent = due > 0
      ? t('dash_greeting_due', { n: due })
      : t('dash_greeting_ok');
  }

  function renderDashboard() {
    renderStats();
    renderUnitGrid();
  }

  const statusLabel = (k) => t('status_' + k);

  function renderUnitGrid() {
    const grid = byId('unit-grid');
    const tpl = byId('tpl-unit-card').content.firstElementChild;
    const frag = document.createDocumentFragment();
    let shown = 0;

    for (let id = 1; id <= DATA.totalUnits; id++) {
      const unit = unitsById.get(id);
      let status = 'placeholder';
      let st = { total: WORDS_PER_UNIT, mastered: 0, seen: 0, due: 0 };

      if (unit) {
        st = unitStats(unit);
        status = st.mastered === st.total && st.total > 0 ? 'done' : (st.seen > 0 ? 'learning' : 'new');
      }

      const pass = app.filter === 'all'
        || (app.filter === 'learning' && status === 'learning')
        || (app.filter === 'done' && status === 'done')
        || (app.filter === 'due' && st.due > 0);
      if (!pass) continue;

      const card = tpl.cloneNode(true);
      const percent = st.total ? Math.round((st.mastered / st.total) * 100) : 0;
      card.dataset.unitId = id;
      card.dataset.status = status;
      $('.unit-card__title', card).textContent = unit ? unit.title : `Unit ${id}`;
      $('.unit-card__story', card).textContent = unit ? unit.storyTitle : 'Chưa có dữ liệu';
      $('.status-chip', card).textContent = statusLabel(status);
      $('.progress__fill', card).style.width = percent + '%';
      $('.progress', card).setAttribute('aria-valuenow', percent);
      $('.unit-card__mastered', card).textContent = st.mastered;
      $('.unit-card__total', card).textContent = st.total;
      $('.unit-card__percent', card).textContent = percent + '%';
      if (st.due > 0) {
        $('.unit-card__due', card).hidden = false;
        $('.unit-card__due-count', card).textContent = st.due;
      }
      const test = state.user.unitTests[id];
      if (test && test.passed) {
        $('.unit-card__test', card).hidden = false;
        $('.unit-card__test-score', card).textContent = test.best;
      }
      if (status === 'placeholder') $('.unit-card__lock', card).hidden = false;
      frag.appendChild(card);
      shown++;
    }

    grid.replaceChildren(frag);
    byId('unit-grid-empty').hidden = shown > 0;
  }

  function openUnit(id) {
    if (!unitsById.has(id)) {
      toast('Unit này chưa có dữ liệu. Hãy thêm vào data.js.');
      return;
    }
    app.unitId = id;
    showScreen('unit');
    const unit = unitsById.get(id);
    if (unit && unit.words) prefetchWordAudio(unit.words);
  }

  // Điền câu ví dụ vào một phần tử, in đậm dạng từ mục tiêu (dùng DOM, không dùng innerHTML)
  function fillExample(el, w, sentence = w.example) {
    el.replaceChildren();
    const m = formsRegex(w, 'i').exec(sentence);
    if (!m) { el.textContent = sentence; return; }
    const b = document.createElement('b');
    b.textContent = m[0];
    el.append(sentence.slice(0, m.index), b, sentence.slice(m.index + m[0].length));
  }

  // Các câu ví dụ bổ sung (trường `examples` trong data.js, có thể không có)
  const extraExamples = (w) => (Array.isArray(w.examples) ? w.examples : []);

  // Một câu ví dụ bổ sung dạng nút: bấm để nghe, từ mục tiêu được in đậm
  function buildExampleLine(w, sentence) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'example-line';
    btn.dataset.action = 'speak-text';
    btn.dataset.text = sentence;
    btn.setAttribute('aria-label', 'Nghe câu: ' + sentence);
    btn.insertAdjacentHTML('afterbegin', ICON_SPEAKER);
    const span = document.createElement('span');
    fillExample(span, w, sentence);
    btn.append(span);
    return btn;
  }

  // Tạo các dòng từ (dùng cho Unit hub và Review)
  function renderWordRows(listEl, words) {
    const tpl = byId('tpl-word-row').content.firstElementChild;
    const frag = document.createDocumentFragment();
    words.forEach((w) => {
      const row = tpl.cloneNode(true);
      row.dataset.wordId = w.id;
      row.dataset.box = boxOf(w.id);
      $('.word-row__word', row).textContent = w.word;
      $('.word-row__ipa', row).textContent = w.ipa;
      $('.word-row__pos', row).textContent = w.pos;
      $('.word-row__def', row).textContent = w.vi ? `${w.vi}. ${w.definition}` : w.definition;
      fillExample($('.word-row__example', row), w);

      const extras = extraExamples(w);
      const moreBtn = $('.word-row__more', row);
      const extrasBox = $('.word-row__extras', row);
      if (extras.length) {
        moreBtn.textContent = `Xem thêm ${extras.length} ví dụ`;
        extrasBox.append(...extras.map((s) => buildExampleLine(w, s)));
      } else {
        moreBtn.remove();
        extrasBox.remove();
      }
      frag.appendChild(row);
    });
    listEl.replaceChildren(frag);
  }

  function renderUnitHub() {
    const unit = unitsById.get(app.unitId);
    const st = unitStats(unit);
    const percent = st.total ? Math.round((st.mastered / st.total) * 100) : 0;
    byId('unit-hub-title').textContent = unit.title;
    byId('unit-hub-story').textContent = `Câu chuyện: ${unit.storyTitle}`;
    byId('unit-hub-mastered').textContent = st.mastered;
    byId('unit-hub-total').textContent = st.total;
    byId('unit-hub-due').textContent = st.due;
    byId('unit-hub-progress-fill').style.width = percent + '%';
    byId('unit-hub-progress').setAttribute('aria-valuenow', percent);
    const test = state.user.unitTests[unit.id];
    byId('unit-test-status').textContent = test
      ? `${test.passed ? 'Đã đạt' : 'Chưa đạt'} · tốt nhất ${test.best}% · ${test.attempts} lần làm`
      : `Chưa làm. Đạt từ ${UNIT_TEST_PASS}% để thưởng ${XP.TEST_PASS} XP.`;
    byId('unit-test-card').dataset.passed = test && test.passed ? 'true' : 'false';
    renderWordRows(byId('unit-word-list'), unit.words);
  }

  function renderReview() {
    const due = dueWords();
    const empty = due.length === 0;
    byId('review-summary').hidden = empty;
    byId('review-empty').hidden = !empty;
    byId('review-due-list').hidden = empty;
    byId('review-due-list').previousElementSibling.hidden = empty;
    byId('review-due-total').textContent = due.length;

    const counts = [0, 0, 0, 0, 0];
    due.forEach((w) => { const st = stageOf(w.id); if (st >= 1 && st <= 5) counts[st - 1] += 1; });
    const max = Math.max(1, ...counts);
    $$('#review-boxes .box-bar').forEach((bar, i) => {
      $('b', bar).textContent = counts[i];
      $('.box-bar__fill', bar).style.setProperty('--h', Math.round((counts[i] / max) * 100) + '%');
    });

    renderWordRows(byId('review-due-list'), due);
  }

  /* ========================================================================
     10. FLASHCARD
     ======================================================================== */
  function startUnitFlashcard(unitId) {
    const unit = unitsById.get(unitId);
    // Ưu tiên từ đến hạn, rồi từ mới (giữ thứ tự trong sách để dễ gắn với câu chuyện)
    let words = shuffle(dueWords(unitId)).concat(newWords(unitId));
    if (!words.length) {
      words = shuffle(unit.words);
      toast('Bạn đã học hết từ mới. Đang luyện lại cả Unit.');
    }
    prefetchWordAudio(words);
    startFlashcard(words, { unitId, review: false });
  }

  function startReviewFlashcard() {
    const due = shuffle(dueWords()).slice(0, REVIEW_FLASHCARD_MAX);
    if (!due.length) { toast(t('toast_no_due')); return; }
    startFlashcard(due, { unitId: null, review: true });
  }

  /** Chọn từ cho phiên 5 phút: ưu tiên đến hạn → từ mới unit sớm → từ yếu */
  function pickQuickWords() {
    const due = shuffle(dueWords());
    const picked = [];
    const seen = new Set();
    const take = (list) => {
      for (const w of list) {
        if (picked.length >= QUICK_WORD_TARGET) break;
        if (seen.has(w.id)) continue;
        seen.add(w.id);
        picked.push(w);
      }
    };
    take(due);
    // Từ mới theo thứ tự unit
    const units = (DATA.units || []).slice().sort((a, b) => a.id - b.id);
    for (const u of units) {
      if (picked.length >= QUICK_WORD_TARGET) break;
      take(newWords(u.id));
    }
    // Bổ sung từ đã học nhưng stability thấp
    if (picked.length < QUICK_WORD_TARGET) {
      const weak = allWords
        .filter((w) => {
          const p = getProgress(w.id);
          return p && p.stability < 7 && !seen.has(w.id);
        })
        .sort((a, b) => (getProgress(a.id).stability || 0) - (getProgress(b.id).stability || 0));
      take(shuffle(weak));
    }
    // Fallback: bất kỳ từ nào còn lại
    if (picked.length < Math.min(8, QUICK_WORD_TARGET)) {
      take(shuffle(allWords.filter((w) => !seen.has(w.id))));
    }
    return picked;
  }

  let quickTimerId = null;

  function clearQuickTimer() {
    if (quickTimerId) {
      clearInterval(quickTimerId);
      quickTimerId = null;
    }
    const el = byId('fc-timer');
    if (el) {
      el.hidden = true;
      el.classList.remove('is-low');
    }
  }

  function formatMmSs(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ':' + String(r).padStart(2, '0');
  }

  function tickQuickTimer() {
    const s = app.session;
    const el = byId('fc-timer');
    if (!s || !s.quick || !el) {
      clearQuickTimer();
      return;
    }
    const left = (s.endsAt || 0) - Date.now();
    el.hidden = false;
    el.textContent = formatMmSs(left);
    el.classList.toggle('is-low', left <= 60000);
    if (left <= 0) {
      // Đánh dấu hết giờ; kết thúc sau khi xong thẻ hiện tại (hoặc ngay nếu không busy)
      s.timeUp = true;
      clearQuickTimer();
      el.textContent = '0:00';
      el.classList.add('is-low');
      if (!s.busy) {
        toast(t('toast_quick_timeup'), 'success');
        finishSession({
          mode: 'flashcard',
          correct: s.firstTryCorrect,
          total: Math.max(s.cleared, s.attempted.size || s.cleared),
          session: s
        });
      }
    }
  }

  function startQuickStudy() {
    const words = pickQuickWords();
    if (!words.length) {
      toast(t('toast_quick_empty'), 'error');
      return;
    }
    startFlashcard(words, { unitId: null, review: false, quick: true });
  }

  function startFlashcard(words, { unitId, review, quick }) {
    clearQuickTimer();
    app.lastSession = { mode: 'flashcard', unitId, review: !!review, quick: !!quick };
    app.returnTo = { screen: quick || review ? 'dashboard' : 'unit' };
    app.session = {
      mode: 'flashcard',
      queue: words.slice(),
      total: words.length,
      cleared: 0,
      firstTryCorrect: 0,
      attempted: new Set(),
      startXp: state.user.xp,
      busy: false,
      unitId,
      review: !!review,
      quick: !!quick,
      endsAt: quick ? Date.now() + QUICK_MINUTES * 60 * 1000 : 0,
      timeUp: false
    };
    if (quick) byId('fc-title').textContent = t('quick_title');
    else if (review) byId('fc-title').textContent = 'Review Today';
    else byId('fc-title').textContent = `${unitsById.get(unitId).title} · Flashcard`;
    showScreen('flashcard');
    renderCard();
    if (quick) {
      tickQuickTimer();
      quickTimerId = setInterval(tickQuickTimer, 1000);
    }
  }

  function setFlipped(flipped) {
    const card = byId('flashcard');
    card.classList.toggle('is-flipped', flipped);
    card.setAttribute('aria-pressed', String(flipped));
    // Chỉ mặt đang hiện mới tương tác được (nút, đọc màn hình)
    $('.flashcard__face--front', card).inert = flipped;
    $('.flashcard__face--back', card).inert = !flipped;
  }

  function renderCard() {
    const s = app.session;
    const w = s.queue[0];
    byId('fc-word').textContent = w.word;
    byId('fc-ipa').textContent = w.ipa;
    byId('fc-pos').textContent = w.pos;
    byId('fc-definition').textContent = w.definition;
    byId('fc-vi').textContent = w.vi || '';
    byId('fc-vi').hidden = !w.vi;
    // Câu ví dụ của sách đứng đầu, tiếp theo là các câu bổ sung
    byId('fc-more-list').replaceChildren(
      ...[w.example].concat(extraExamples(w)).map((s) => buildExampleLine(w, s))
    );
    const prog = getProgress(w.id);
    if (!prog) byId('fc-box-badge').textContent = t('new_word');
    else {
      const days = prog.stability < 1 ? prog.stability.toFixed(1) : Math.round(prog.stability);
      byId('fc-box-badge').textContent = (currentLang() === 'en' ? ('S ≈ ' + days + 'd') : ('S ≈ ' + days + ' ngày'));
    }
    byId('fc-counter').textContent = `${s.cleared} / ${s.total}`;
    const pct = Math.round((s.cleared / s.total) * 100);
    byId('fc-progress-fill').style.width = pct + '%';
    byId('fc-progress').setAttribute('aria-valuenow', pct);
    setFlipped(false);
    s.busy = false;
  }

  function flipCard() {
    const s = app.session;
    if (!s || s.busy) return;
    setFlipped(!byId('flashcard').classList.contains('is-flipped'));
    playSound('flip');
  }

  async function answerFlashcard(rating) {
    const s = app.session;
    if (!s || s.busy || !s.queue.length) return;
    s.busy = true;

    const word = s.queue[0];
    const firstTime = !s.attempted.has(word.id);
    s.attempted.add(word.id);
    touchStudy();

    updateProgress(word.id, rating >= 2, false, rating);
    s.queue.shift();

    if (rating === 1) {
      playSound('wrong');
      s.queue.splice(Math.min(s.queue.length, 3), 0, word);
    } else {
      const xpMap = { 2: XP.FLASHCARD_HARD, 3: XP.FLASHCARD_GOOD, 4: XP.FLASHCARD_EASY };
      addXp(xpMap[rating] || XP.FLASHCARD_GOOD);
      playSound('correct');
      s.cleared += 1;
      if (firstTime) s.firstTryCorrect += 1;
    }

    // Đợi thẻ lật về mặt trước rồi mới đổi nội dung, tránh lộ từ kế tiếp
    const wasFlipped = byId('flashcard').classList.contains('is-flipped');
    setFlipped(false);
    await sleep(wasFlipped ? 320 : 120);
    if (app.session !== s) return;

    if (!s.queue.length || s.timeUp) {
      if (s.timeUp) toast(t('toast_quick_timeup'), 'success');
      clearQuickTimer();
      finishSession({
        mode: 'flashcard',
        correct: s.firstTryCorrect,
        total: Math.max(s.cleared, s.attempted.size || s.cleared, 1),
        session: s
      });
    } else {
      renderCard();
    }
  }

  /* ========================================================================
     11. QUIZ, LUYỆN TẬP & UNIT TEST

     Một phiên (session) gồm nhiều câu hỏi. Mỗi câu có `kind`:
       'choice' : chọn 1 trong 4 đáp án (w2d, d2w, listen, cloze, story_cloze)
       'type'   : tự gõ đáp án (t_vi, t_def, dictation, cloze_t)
       'order'  : bấm các từ để xếp thành câu (unscramble)
       'write'  : tự viết câu, so với câu mẫu rồi tự chấm (write)

     Loại phiên (`session.kind`):
       'quiz'     : Quiz thường / Review Today. Dạng câu hỏi THÍCH ỨNG theo hộp Leitner của
                    từng từ: từ mới làm trắc nghiệm, từ càng vững càng phải tự gõ/vận dụng.
       'practice' : Luyện một kỹ năng cụ thể (nút trong Unit hub).
       'test'     : Unit Test, mỗi từ một câu, đạt từ UNIT_TEST_PASS % trở lên.
     ======================================================================== */
  function startUnitQuiz(unitId) {
    const unit = unitsById.get(unitId);
    const due = shuffle(dueWords(unitId));
    const fresh = newWords(unitId);
    const rest = shuffle(unit.words.filter((w) => !due.includes(w) && !fresh.includes(w)));
    // Ưu tiên từ cần ôn và từ mới, phần còn lại điền cho đủ số câu
    const picked = due.concat(shuffle(fresh), rest).slice(0, QUIZ_MAX);
    startQuiz(picked, { unitId, review: false });
  }

  function startReviewQuiz() {
    const due = shuffle(dueWords());
    if (!due.length) { toast(t('toast_no_due')); return; }
    let picked = due.slice(0, QUIZ_MAX);
    // Ít hơn 10 từ đến hạn: bổ sung từ đã học để quiz đủ dài (không ảnh hưởng hộp Leitner)
    if (picked.length < QUIZ_MIN) {
      const extra = shuffle(allWords.filter((w) => getProgress(w.id) && !picked.includes(w)));
      picked = picked.concat(extra.slice(0, QUIZ_MIN - picked.length));
    }
    startQuiz(picked, { unitId: null, review: true });
  }

  // Chọn từ để luyện: đến hạn trước, rồi từ mới, rồi từ có hộp thấp nhất
  function prioritizeWords(unitId, n) {
    const unit = unitsById.get(unitId);
    const due = shuffle(dueWords(unitId));
    const fresh = shuffle(newWords(unitId)).filter((w) => !due.includes(w));
    const rest = shuffle(unit.words.filter((w) => !due.includes(w) && !fresh.includes(w)))
      .sort((a, b) => boxOf(a.id) - boxOf(b.id));
    return due.concat(fresh, rest).slice(0, n);
  }

  function startPractice(unitId, ptype) {
    const set = PRACTICE_SETS[ptype];
    if (!set) return;
    if (!synth && set.types.some((t) => NEEDS_SPEECH.has(t))) {
      toast('Trình duyệt này không hỗ trợ phát âm nên không làm được bài nghe.', 'error');
      return;
    }
    const words = prioritizeWords(unitId, PRACTICE_LEN);
    const plan = words.map((w, i) => set.types[i % set.types.length]);
    startQuiz(words, { unitId, review: false, kind: 'practice', ptype, plan, label: set.label });
  }

  function startUnitTest(unitId) {
    const unit = unitsById.get(unitId);
    const words = shuffle(unit.words);
    const plan = words.map((w, i) => TEST_PLAN[i % TEST_PLAN.length]);
    startQuiz(words, { unitId, review: false, kind: 'test', plan, label: 'Unit Test' });
  }

  // Dạng câu hỏi thích ứng theo hộp Leitner của từ (dùng cho Quiz thường và Review Today)
  function adaptiveType(word, i) {
    const box = boxOf(word.id);
    let pool;
    if (box <= 1) pool = ['w2d', 'd2w', 'listen'];                         // mới hoặc vừa sai: nhận diện
    else if (box === 2) pool = ['cloze', 'story_cloze', 'w2d', 'listen'];   // hiểu trong ngữ cảnh
    else if (box === 3) pool = ['t_vi', 'cloze', 'story_cloze', 'dictation'];  // bắt đầu tự gõ
    else pool = ['t_def', 'cloze_t', 'dictation', 'unscramble', 't_vi'];    // vững: gõ và vận dụng
    if (!synth) pool = pool.filter((t) => !NEEDS_SPEECH.has(t));
    return pool[(i + box) % pool.length];
  }

  function startQuiz(words, { unitId, review, kind = 'quiz', ptype = null, plan = null, label = 'Quiz' }) {
    if (!words.length) { toast('Không có từ nào để làm bài.', 'error'); return; }
    app.lastSession = { mode: 'quiz', unitId, review, kind, ptype };
    app.returnTo = { screen: review ? 'review' : 'unit' };

    const order = shuffle(words);
    const questions = order.map((w, i) => {
      const type = plan ? plan[words.indexOf(w) % plan.length] : adaptiveType(w, i);
      return buildQuestion(w, type);
    });

    app.session = {
      mode: 'quiz',
      kind,
      ptype,
      questions: kind === 'test' ? questions : shuffle(questions),
      index: 0,
      correct: 0,
      combo: 0,
      missed: [],
      levels: {},                    // thống kê theo mức Nhớ / Hiểu / Vận dụng
      startXp: state.user.xp,
      unitId,
      review
    };
    byId('quiz-title').textContent = review ? `Review Today · ${label}` : `${unitsById.get(unitId).title} · ${label}`;
    showScreen('quiz');
    renderQuestion();
  }

  // Chọn 3 từ gây nhiễu: ưu tiên cùng Unit và cùng từ loại để câu hỏi không quá dễ
  function pickDistractors(word) {
    const sameUnit = shuffle(allWords.filter((w) => w.unitId === word.unitId && w.id !== word.id));
    const others = shuffle(allWords.filter((w) => w.unitId !== word.unitId));
    const pool = sameUnit.concat(others);
    const samePos = pool.filter((w) => w.pos === word.pos);
    const diffPos = pool.filter((w) => w.pos !== word.pos);
    return samePos.concat(diffPos).slice(0, 3);
  }

  /* ---- Tiện ích cho các dạng câu hỏi ---- */

  // Tách câu có chứa từ mục tiêu thành {before, answer, after}; answer là đúng dạng đang dùng
  function splitAtWord(word, sentence) {
    const m = formsRegex(word, 'i').exec(sentence);
    if (!m) return null;
    return { before: sentence.slice(0, m.index), answer: m[0], after: sentence.slice(m.index + m[0].length) };
  }

  // Các câu ví dụ có dùng từ mục tiêu (câu của sách + các câu bổ sung)
  function exampleSentences(word) {
    return [word.example].concat(extraExamples(word)).filter((s) => formsRegex(word, 'i').test(s));
  }

  // Một câu trong truyện của Unit có chứa từ mục tiêu (null nếu không có)
  function storySentence(word) {
    const unit = unitsById.get(word.unitId);
    const sentences = unit.story.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]+["”]?/g) || [];
    const hits = sentences.map((s) => s.trim()).filter((s) => s.length <= 240 && formsRegex(word, 'i').test(s));
    return hits.length ? hits[Math.floor(Math.random() * hits.length)] : null;
  }

  // Gợi ý chữ cái: "p _ _ _ _" (giữ nguyên khoảng trắng, dấu gạch nối)
  function maskHint(answer, reveal) {
    return answer.split('').map((ch, i) => (i < reveal || !/[a-z]/i.test(ch) ? ch : '_')).join(' ');
  }

  const normalizeAnswer = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');

  // Khoảng cách Levenshtein, dùng để báo "sai chính tả 1 ký tự"
  function editDistance(a, b) {
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
    }
    return dp[a.length][b.length];
  }

  // Chấm câu trả lời gõ tay. Không chấp nhận sai chính tả nhưng báo rõ lý do.
  function gradeTyped(q, raw) {
    const a = normalizeAnswer(raw);
    const target = q.answer.toLowerCase();
    if (a === target) return { correct: true, note: '' };
    if ((q.word.forms || []).some((f) => f.toLowerCase() === a)) {
      return { correct: false, note: `Đúng từ nhưng chưa đúng dạng, câu này cần "${q.answer}".` };
    }
    if (a && editDistance(a, target) === 1) return { correct: false, note: 'Gần đúng, bạn sai chính tả 1 ký tự.' };
    return { correct: false, note: '' };
  }

  /* ---- Tạo câu hỏi ---- */

  // Nếu một dạng không dựng được (thiếu dữ liệu, thiếu Speech Synthesis) thì hạ xuống dạng gần nhất
  const TYPE_FALLBACK = {
    story_cloze: 'cloze', unscramble: 'cloze_t', cloze_t: 't_def', t_vi: 't_def',
    listen: 'w2d', dictation: 't_def', write: 'cloze_t', t_def: 'd2w', cloze: 'd2w'
  };

  function buildQuestion(word, type) {
    let t = type;
    for (let guard = 0; guard < 6; guard++) {
      if (NEEDS_SPEECH.has(t) && !synth) { t = TYPE_FALLBACK[t]; continue; }
      const q = buildByType(word, t);
      if (q) return q;
      t = TYPE_FALLBACK[t] || 'd2w';
    }
    return buildByType(word, 'd2w');
  }

  function buildByType(word, type) {
    const base = { type, word, answered: false, options: [], kind: 'choice', hintsUsed: 0 };
    const asWord = (w) => ({ text: w.word, correct: w.id === word.id, word: w });
    const asDef = (w) => ({ text: maskWord(w.definition, w), correct: w.id === word.id, word: w });
    const pool = () => shuffle([word].concat(pickDistractors(word)));
    const pos = `Từ loại: ${word.pos}`;

    switch (type) {
      case 'w2d':
        return Object.assign(base, { prompt: word.word, sub: `${word.ipa} · ${word.pos}`, options: pool().map(asDef), layout: 'single' });

      case 'd2w':
        return Object.assign(base, { prompt: maskWord(word.definition, word), sub: pos, options: pool().map(asWord) });

      case 'cloze': {
        const parts = splitAtWord(word, word.example)
          || { before: maskWord(word.example, word), answer: word.word, after: '' };
        return Object.assign(base, { prompt: 'Chọn từ điền vào chỗ trống (chọn dạng từ gốc)', cloze: parts, options: pool().map(asWord) });
      }

      case 'story_cloze': {
        const sentence = storySentence(word);
        const parts = sentence && splitAtWord(word, sentence);
        if (!parts) return null;
        return Object.assign(base, { prompt: 'Câu này trích từ truyện của Unit. Chọn từ điền vào chỗ trống (dạng từ gốc)', cloze: parts, options: pool().map(asWord) });
      }

      case 'listen':
        return Object.assign(base, { prompt: 'Nghe và chọn từ bạn nghe được', options: pool().map(asWord) });

      case 't_vi':
      case 't_def': {
        if (type === 't_vi' && !word.vi) return null;
        return Object.assign(base, {
          kind: 'type',
          prompt: type === 't_vi' ? word.vi : maskWord(word.definition, word),
          sub: `${word.pos} · ${word.word.replace(/[a-z]/gi, '_').split('').join(' ')}`,
          answer: word.word,
          reveal: 1
        });
      }

      case 'dictation':
        return Object.assign(base, {
          kind: 'type',
          prompt: 'Nghe và gõ lại từ bạn nghe được',
          sub: `${word.pos} · ${word.word.length} chữ cái`,
          answer: word.word,
          reveal: 0
        });

      case 'cloze_t': {
        const sentences = exampleSentences(word);
        if (!sentences.length) return null;
        const parts = splitAtWord(word, sentences[Math.floor(Math.random() * sentences.length)]);
        return Object.assign(base, {
          kind: 'type',
          prompt: 'Gõ từ còn thiếu, đúng dạng của từ trong câu',
          sub: `${word.pos}${word.vi ? ' · ' + word.vi : ''}`,
          cloze: parts,
          answer: parts.answer,
          reveal: 1
        });
      }

      case 'unscramble': {
        const pool2 = exampleSentences(word).filter((s) => {
          const n = s.trim().split(/\s+/).length;
          return n >= 4 && n <= 12;
        });
        if (!pool2.length) return null;
        const sentence = pool2[Math.floor(Math.random() * pool2.length)];
        const tokens = sentence.trim().split(/\s+/);
        let order = shuffle(tokens.map((tk, i) => ({ tk, i })));
        for (let k = 0; k < 6 && order.every((o, idx) => o.i === idx); k++) order = shuffle(order);
        return Object.assign(base, {
          kind: 'order',
          prompt: 'Bấm các từ theo thứ tự để tạo thành câu đúng',
          sub: `Câu có từ "${word.word}"${word.vi ? ' · ' + word.vi : ''}`,
          tokens: order.map((o) => o.tk),
          solution: tokens,
          answer: sentence,
          picked: []
        });
      }

      case 'write':
        return Object.assign(base, {
          kind: 'write',
          prompt: `Viết một câu tiếng Anh có dùng từ "${word.word}"`,
          sub: `${word.pos} · ${word.vi || word.definition}`,
          models: exampleSentences(word),
          answer: word.example
        });

      default:
        return null;
    }
  }

  /* ---- Hiển thị câu hỏi ---- */
  const curQuestion = () => { const s = app.session; return s && s.mode === 'quiz' ? s.questions[s.index] : null; };

  function renderQuestion() {
    const s = app.session;
    const q = s.questions[s.index];
    const total = s.questions.length;

    byId('quiz-counter').textContent = `${s.index + 1} / ${total}`;
    const pct = Math.round((s.index / total) * 100);
    byId('quiz-progress-fill').style.width = pct + '%';
    byId('quiz-progress').setAttribute('aria-valuenow', pct);
    byId('quiz-xp').textContent = state.user.xp - s.startXp;
    byId('quiz-type-label').textContent = `${QUIZ_LABELS[q.type]} · ${QUIZ_LEVEL[q.type]}`;

    const promptEl = byId('quiz-prompt');
    const sentenceEl = byId('quiz-sentence');
    const listenBtn = byId('quiz-listen');
    const isAudio = NEEDS_SPEECH.has(q.type);

    promptEl.textContent = q.prompt;
    sentenceEl.replaceChildren();
    sentenceEl.hidden = true;
    listenBtn.hidden = !isAudio;

    if (q.sub) {
      sentenceEl.textContent = q.sub;
      sentenceEl.hidden = false;
    }
    if (q.cloze) {
      const blank = document.createElement('span');
      blank.className = 'blank';
      blank.id = 'quiz-blank';
      sentenceEl.replaceChildren();
      if (q.sub && q.kind === 'type') {
        const tag = document.createElement('span');
        tag.className = 'quiz-sub';
        tag.textContent = q.sub;
        sentenceEl.append(tag, document.createElement('br'));
      }
      sentenceEl.append(q.cloze.before, blank, q.cloze.after);
      sentenceEl.hidden = false;
    }

    // Chỉ hiện đúng khu vực nhập liệu của dạng câu hỏi hiện tại
    const optsEl = byId('quiz-options');
    optsEl.hidden = q.kind !== 'choice';
    byId('quiz-typed').hidden = q.kind !== 'type';
    byId('quiz-order').hidden = q.kind !== 'order';
    byId('quiz-write').hidden = q.kind !== 'write';
    byId('quiz-feedback').hidden = true;

    if (q.kind === 'choice') {
      optsEl.classList.toggle('options--single', q.layout === 'single');
      optsEl.replaceChildren(...q.options.map((opt, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'option';
        b.dataset.index = i;
        const key = document.createElement('span');
        key.className = 'option__key';
        key.textContent = 'ABCD'[i];
        const label = document.createElement('span');
        label.textContent = opt.text;
        b.append(key, label);
        return b;
      }));
    } else if (q.kind === 'type') {
      const input = byId('quiz-input');
      input.value = '';
      input.disabled = false;
      input.className = 'quiz-input';
      byId('quiz-submit').disabled = false;
      byId('quiz-hint-btn').disabled = false;
      byId('quiz-skip').disabled = false;
      renderHint(q);
      input.focus({ preventScroll: true });
    } else if (q.kind === 'order') {
      byId('order-submit').disabled = false;
      byId('order-reset').disabled = false;
      byId('order-msg').textContent = '';
      renderOrder(q);
    } else if (q.kind === 'write') {
      const ta = byId('write-input');
      ta.value = '';
      ta.disabled = false;
      byId('write-msg').textContent = '';
      byId('write-submit').hidden = false;
      byId('write-self').hidden = true;
      ta.focus({ preventScroll: true });
    }

    if (isAudio) {
      setTimeout(() => {
        if (app.session === s && s.questions[s.index] === q && !q.answered) speak(q.word.word);
      }, 300);
    }
  }

  function renderHint(q) {
    const hint = q.cloze || q.type === 't_vi' || q.type === 't_def' || q.type === 'dictation'
      ? `Gợi ý: ${maskHint(q.answer, q.reveal)}  (${q.answer.length} chữ cái)`
      : '';
    byId('quiz-hint').textContent = hint;
    byId('quiz-hint-btn').disabled = q.reveal >= q.answer.length - 1;
  }

  function renderOrder(q) {
    const answerBox = byId('order-answer');
    const bank = byId('order-bank');
    const chip = (ti, where) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'order-chip';
      b.dataset.ti = ti;
      b.dataset.where = where;
      b.textContent = q.tokens[ti];
      b.disabled = q.answered;
      return b;
    };
    answerBox.replaceChildren(...q.picked.map((ti) => chip(ti, 'answer')));
    bank.replaceChildren(...q.tokens.map((_, ti) => (q.picked.includes(ti) ? null : chip(ti, 'bank'))).filter(Boolean));
  }

  /* ---- Nhận đáp án ---- */

  // Trắc nghiệm
  function answerQuiz(i) {
    const q = curQuestion();
    if (!q || q.kind !== 'choice' || q.answered || !q.options[i]) return;
    const correct = q.options[i].correct;
    const correctIndex = q.options.findIndex((o) => o.correct);
    $$('#quiz-options .option').forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) btn.classList.add('is-correct');
      if (idx === i && !correct) btn.classList.add('is-wrong');
    });
    if (q.cloze) byId('quiz-blank').textContent = q.cloze.answer;
    resolveQuestion(q, correct);
  }

  // Gõ từ
  function submitTyped(giveUp = false) {
    const q = curQuestion();
    if (!q || q.kind !== 'type' || q.answered) return;
    const input = byId('quiz-input');
    if (!giveUp && !input.value.trim()) {
      byId('quiz-hint').textContent = 'Hãy gõ câu trả lời trước khi kiểm tra.';
      input.focus({ preventScroll: true });
      return;
    }
    const g = giveUp ? { correct: false, note: '' } : gradeTyped(q, input.value);
    input.disabled = true;
    input.classList.add(g.correct ? 'is-correct' : 'is-wrong');
    ['quiz-submit', 'quiz-hint-btn', 'quiz-skip'].forEach((id) => { byId(id).disabled = true; });
    byId('quiz-hint').textContent = '';
    if (q.cloze) byId('quiz-blank').textContent = q.answer;
    resolveQuestion(q, g.correct, { note: g.note });
  }

  function giveHint() {
    const q = curQuestion();
    if (!q || q.kind !== 'type' || q.answered) return;
    q.reveal = Math.min(q.answer.length - 1, q.reveal + 1);
    q.hintsUsed += 1;          // dùng gợi ý thêm: đúng vẫn được tính nhưng không phải "strong"
    renderHint(q);
    byId('quiz-input').focus({ preventScroll: true });
  }

  // Sắp xếp câu
  function pickOrderToken(el) {
    const q = curQuestion();
    if (!q || q.kind !== 'order' || q.answered) return;
    const ti = Number(el.dataset.ti);
    if (el.dataset.where === 'bank') q.picked.push(ti);
    else q.picked = q.picked.filter((x) => x !== ti);
    byId('order-msg').textContent = '';
    renderOrder(q);
  }

  function resetOrder() {
    const q = curQuestion();
    if (!q || q.kind !== 'order' || q.answered) return;
    q.picked = [];
    byId('order-msg').textContent = '';
    renderOrder(q);
  }

  function submitOrder() {
    const q = curQuestion();
    if (!q || q.kind !== 'order' || q.answered) return;
    if (q.picked.length < q.tokens.length) {
      byId('order-msg').textContent = `Bạn mới xếp ${q.picked.length}/${q.tokens.length} từ.`;
      return;
    }
    const attempt = q.picked.map((ti) => q.tokens[ti]);
    const correct = attempt.every((t, i) => t === q.solution[i]);
    q.answered = true;
    byId('order-answer').classList.add(correct ? 'is-correct' : 'is-wrong');
    byId('order-submit').disabled = true;
    byId('order-reset').disabled = true;
    renderOrder(q);
    resolveQuestion(q, correct);
  }

  // Viết câu: kiểm tra có dùng từ, rồi cho người học tự so với câu mẫu
  function submitWrite() {
    const q = curQuestion();
    if (!q || q.kind !== 'write' || q.answered) return;
    const text = byId('write-input').value.trim();
    const msg = byId('write-msg');
    if (text.split(/\s+/).filter(Boolean).length < 4) { msg.textContent = 'Hãy viết một câu đầy đủ (ít nhất 4 từ).'; return; }
    if (!formsRegex(q.word, 'i').test(text)) { msg.textContent = `Câu của bạn chưa có từ "${q.word.word}" (hoặc dạng biến đổi của nó).`; return; }
    msg.textContent = '';
    byId('write-input').disabled = true;
    byId('write-submit').hidden = true;
    const list = byId('write-models');
    list.replaceChildren(...q.models.slice(0, 3).map((m) => {
      const li = document.createElement('li');
      fillExample(li, q.word, m);
      return li;
    }));
    byId('write-self').hidden = false;
    byId('write-ok').focus({ preventScroll: true });
  }

  function selfGradeWrite(ok) {
    const q = curQuestion();
    if (!q || q.kind !== 'write' || q.answered) return;
    byId('write-self').hidden = true;
    resolveQuestion(q, ok, { note: ok ? 'Bạn tự đánh giá là đã dùng từ đúng.' : 'Hãy so lại với các câu mẫu và thử viết lại câu khác.' });
  }

  // Xử lý chung sau khi có kết quả: Leitner, XP, thống kê, phản hồi
  function resolveQuestion(q, correct, { note = '' } = {}) {
    const s = app.session;
    q.answered = true;
    if (synth) synth.cancel();

    // "strong" = tự tạo câu trả lời và không dùng gợi ý thêm
    const strong = correct && STRONG_TYPES.has(q.type) && !q.hintsUsed;
    touchStudy();
    const res = updateProgress(q.word.id, correct, strong);

    const level = QUIZ_LEVEL[q.type];
    const lv = s.levels[level] || (s.levels[level] = { correct: 0, total: 0 });
    lv.total += 1;

    let gained = 0;
    if (correct) {
      s.correct += 1;
      s.combo += 1;
      lv.correct += 1;
      gained = Math.round(QUIZ_XP[q.type] * (q.hintsUsed ? 0.5 : 1));
      addXp(gained);
      playSound('correct');
      if (s.combo > 0 && s.combo % 5 === 0) { confetti(90); toast(`${s.combo} câu đúng liên tiếp!`, 'success'); }
    } else {
      s.combo = 0;
      s.missed.push(q.word);
      playSound('wrong');
    }
    byId('quiz-xp').textContent = state.user.xp - s.startXp;

    // Phản hồi tức thì
    const w = q.word;
    const fb = byId('quiz-feedback');
    fb.dataset.result = correct ? 'correct' : 'wrong';
    byId('quiz-feedback-icon').innerHTML = correct ? ICON_CHECK : ICON_CROSS;
    byId('quiz-feedback-title').textContent = correct ? 'Chính xác!' : 'Chưa đúng';
    byId('quiz-feedback-xp').textContent = correct ? `+${gained} XP` : '';

    const parts = [];
    if (note) parts.push(note);
    if (!correct && (q.kind === 'type' || q.kind === 'order')) parts.push(`Đáp án: ${q.answer}.`);
    parts.push(`${w.word} ${w.ipa} (${w.pos}): ${w.definition} Ví dụ: ${w.example}${w.vi ? ' Nghĩa: ' + w.vi + '.' : ''}`);
    byId('quiz-feedback-detail').textContent = parts.join(' ');

    byId('quiz-next').textContent = s.index === s.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo';
    fb.hidden = false;
    fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    byId('quiz-next').focus({ preventScroll: true });
  }

  function nextQuestion() {
    const s = app.session;
    if (!s || s.mode !== 'quiz') return;
    if (s.index >= s.questions.length - 1) {
      finishSession({ mode: 'quiz', correct: s.correct, total: s.questions.length, session: s });
    } else {
      s.index += 1;
      renderQuestion();
    }
  }

  /* ========================================================================
     12. STORY
     ======================================================================== */
  function openStory(unitId) {
    const unit = unitsById.get(unitId);
    app.unitId = unitId;
    app.returnTo = { screen: 'unit' };
    touchStudy();

    byId('story-unit-title').textContent = unit.title;
    byId('story-title').textContent = unit.storyTitle;

    // Regex gộp mọi dạng của mọi từ mục tiêu; map dạng → từ để biết từ nào được bấm
    const formMap = new Map();
    unit.words.forEach((w) => (w.forms || [w.word]).forEach((f) => formMap.set(f.toLowerCase(), w)));
    const forms = Array.from(formMap.keys()).sort((a, b) => b.length - a.length).map(escapeRegExp);
    const re = new RegExp('\\b(' + forms.join('|') + ')\\b', 'gi');

    const box = byId('story-text');
    box.replaceChildren();
    unit.story.split(/\n\s*\n/).forEach((para) => {
      const p = document.createElement('p');
      let last = 0;
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(para)) !== null) {
        if (m.index > last) p.append(para.slice(last, m.index));
        const w = formMap.get(m[0].toLowerCase());
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hl-word';
        btn.dataset.wordId = w.id;
        btn.textContent = m[0];
        p.append(btn);
        last = m.index + m[0].length;
      }
      if (last < para.length) p.append(para.slice(last));
      box.append(p);
    });

    const list = byId('story-wordlist');
    list.replaceChildren(...unit.words.map((w) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.wordId = w.id;
      b.textContent = w.word;
      return b;
    }));

    setStoryReadButton(false);
    showScreen('story');
  }

  /* ---- Popup từ vựng ---- */
  function showPopup(wordId, anchor) {
    const w = wordsById.get(wordId);
    if (!w) return;
    clearTimeout(app.popupHideTimer);
    app.popupWordId = wordId;

    byId('wp-word').textContent = w.word;
    byId('wp-pos').textContent = w.pos;
    byId('wp-ipa').textContent = w.ipa;
    byId('wp-definition').textContent = w.definition;
    byId('wp-example').textContent = w.example;
    byId('wp-vi').textContent = w.vi || '';
    byId('wp-vi').hidden = !w.vi;

    $$('.hl-word.is-active').forEach((n) => n.classList.remove('is-active'));
    $$(`.hl-word[data-word-id="${wordId}"]`).forEach((n) => n.classList.add('is-active'));

    const pop = byId('word-popup');
    pop.hidden = false;

    // Đặt popup ngay dưới từ; nếu tràn đáy màn hình thì đặt phía trên.
    // Trên điện thoại CSS biến popup thành bottom sheet nên bỏ qua top/left.
    const r = anchor.getBoundingClientRect();
    const pw = pop.offsetWidth;
    const ph = pop.offsetHeight;
    const left = clamp(r.left, 12, window.innerWidth - pw - 12);
    let top = r.bottom + 8;
    if (top + ph > window.innerHeight - 12) top = Math.max(12, r.top - ph - 8);
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  function hidePopup() {
    clearTimeout(app.popupHideTimer);
    const pop = byId('word-popup');
    if (pop) pop.hidden = true;
    app.popupWordId = null;
    $$('.hl-word.is-active').forEach((n) => n.classList.remove('is-active'));
  }

  function scheduleHidePopup() {
    clearTimeout(app.popupHideTimer);
    app.popupHideTimer = setTimeout(hidePopup, 220);
  }

  /* ---- Đọc cả truyện: tách theo câu để không bị ngắt giữa chừng ---- */
  function setStoryReadButton(reading) {
    const btn = byId('story-read-all');
    if (!btn) return;
    $('span', btn).textContent = reading ? 'Dừng đọc' : 'Nghe cả truyện';
  }

  function toggleStoryReading() {
    if (storyReading) { stopSpeech(); return; }
    if (!synth) { speak(''); return; }
    const unit = unitsById.get(app.unitId);
    const sentences = unit.story.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]+["”]?/g) || [unit.story];
    storyReading = true;
    setStoryReadButton(true);
    let i = 0;
    const next = () => {
      if (!storyReading || i >= sentences.length) {
        storyReading = false;
        setStoryReadButton(false);
        return;
      }
      speak(sentences[i++].trim(), next);
    };
    next();
  }

  /* ========================================================================
     13. KẾT QUẢ PHIÊN HỌC
     ======================================================================== */
  // Ghi kết quả Unit Test; thưởng XP một lần khi đạt lần đầu. Trả về { passed, firstPass, best }.
  function recordUnitTest(unitId, accuracy) {
    const prev = state.user.unitTests[unitId] || { best: 0, attempts: 0, passed: false };
    const passed = accuracy >= UNIT_TEST_PASS;
    const firstPass = passed && !prev.passed;
    state.user.unitTests[unitId] = {
      best: Math.max(prev.best, accuracy),
      attempts: prev.attempts + 1,
      passed: prev.passed || passed
    };
    save();
    if (firstPass) addXp(XP.TEST_PASS);
    return { passed, firstPass, best: state.user.unitTests[unitId].best };
  }

  function finishSession({ mode, correct, total, session }) {
    clearQuickTimer();
    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    const isTest = mode === 'quiz' && session.kind === 'test';
    const testResult = isTest ? recordUnitTest(session.unitId, accuracy) : null;
    const gained = state.user.xp - session.startXp;

    let title;
    let subtitle;
    if (isTest) {
      if (testResult.firstPass) {
        title = 'Bạn đã đạt Unit Test!';
        subtitle = `Đạt ${accuracy}% (cần ${UNIT_TEST_PASS}%). Thưởng thêm ${XP.TEST_PASS} XP.`;
      } else if (testResult.passed) {
        title = 'Đạt Unit Test!';
        subtitle = `Lần này ${accuracy}%, kết quả tốt nhất của bạn là ${testResult.best}%.`;
      } else {
        title = 'Chưa đạt Unit Test';
        subtitle = `Bạn được ${accuracy}%, cần ${UNIT_TEST_PASS}% để đạt. Hãy luyện các từ sai rồi thử lại.`;
      }
    } else if (mode === 'flashcard' && session.quick) {
      title = t('result_quick_title');
      subtitle = t('result_quick_sub') + ` · ${session.cleared}/${session.total} thẻ · lần đầu đúng ${correct}.`;
    } else if (mode === 'flashcard') {
      title = 'Hoàn thành lượt học!';
      subtitle = `Bạn nhớ đúng ngay lần đầu ${correct}/${total} từ. Những từ chưa nhớ sẽ quay lại đúng lúc.`;
    } else if (accuracy >= 90) {
      title = 'Xuất sắc!';
      subtitle = 'Gần như không sót từ nào.';
    } else if (accuracy >= 70) {
      title = 'Làm tốt lắm!';
      subtitle = 'Ôn thêm vài từ nữa là vững.';
    } else {
      title = 'Cố lên, lần sau sẽ tốt hơn';
      subtitle = 'Các từ sai sẽ được ôn lại vào ngày mai.';
    }

    byId('result-title').textContent = title;
    byId('result-subtitle').textContent = subtitle;
    byId('result-score').textContent = `${correct} / ${total}`;
    byId('result-accuracy').textContent = accuracy + '%';
    byId('result-xp').textContent = '+' + gained;
    byId('result-retry').textContent = !isTest && mode === 'quiz'
      ? (session.kind === 'practice' ? 'Luyện tiếp' : 'Làm quiz mới')
      : (isTest ? 'Làm lại bài test' : 'Học tiếp');

    // Ghi chú: thống kê theo mức tư duy + các từ cần luyện thêm
    const note = byId('result-note');
    const lines = [];
    if (mode === 'quiz') {
      const lv = ['Nhớ', 'Hiểu', 'Vận dụng']
        .filter((k) => session.levels[k])
        .map((k) => `${k} ${session.levels[k].correct}/${session.levels[k].total}`);
      if (lv.length > 1 || session.kind === 'test') lines.push('Theo mức: ' + lv.join(' · '));
      const missed = Array.from(new Set(session.missed.map((w) => w.word)));
      if (missed.length) lines.push('Cần luyện thêm: ' + missed.join(', '));
    }
    note.textContent = lines.join('\n');
    note.hidden = lines.length === 0;

    showScreen('results');
    if (mode === 'flashcard' || (isTest ? testResult.passed : accuracy >= 80)) {
      playSound('complete');
      confetti(accuracy >= 90 || mode === 'flashcard' ? 180 : 110);
    }
  }

  function retrySession() {
    const l = app.lastSession;
    if (!l) { showScreen('dashboard'); return; }
    if (l.quick) {
      startQuickStudy();
      return;
    }
    if (l.review) {
      if (l.mode === 'quiz') startReviewQuiz(); else startReviewFlashcard();
    } else if (l.mode === 'quiz') {
      if (l.kind === 'test') startUnitTest(l.unitId);
      else if (l.kind === 'practice') startPractice(l.unitId, l.ptype);
      else startUnitQuiz(l.unitId);
    } else {
      startUnitFlashcard(l.unitId);
    }
  }

  /* ========================================================================
     14. CÀI ĐẶT
     ======================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', state.settings.darkMode ? '#090c1d' : '#eef0ff');
  }

  function toggleTheme() {
    state.settings.darkMode = !state.settings.darkMode;
    save();
    applyTheme();
    byId('set-dark').checked = state.settings.darkMode;
  }

  function syncSettingsUI() {
    const s = state.settings;
    byId('set-sound').checked = s.sound;
    byId('set-dark').checked = s.darkMode;
    byId('set-rate').value = s.speechRate;
    byId('set-rate-value').textContent = s.speechRate.toFixed(2).replace(/0$/, '');
    if (synth) loadVoices();
  }

  /* ---- PWA install prompt ---- */
  const INSTALL_DISMISS_KEY = 'ielts-vocab-lab-install-dismiss';
  let deferredInstallPrompt = null;

  function isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
      || window.navigator.standalone === true;
  }

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function installDismissed() {
    try { return localStorage.getItem(INSTALL_DISMISS_KEY) === '1'; } catch (e) { return false; }
  }

  function setInstallDismissed() {
    try { localStorage.setItem(INSTALL_DISMISS_KEY, '1'); } catch (e) {}
  }

  function updateInstallUI() {
    const banner = byId('install-banner');
    const setting = byId('install-setting');
    const sub = byId('install-banner-sub');
    const standalone = isStandalone();
    const dismissed = installDismissed();
    const ios = isIos();
    const canNative = !!deferredInstallPrompt;

    if (sub) {
      sub.textContent = ios ? t('install_sub_ios') : t('install_sub');
    }

    // Banner: show if not installed, not dismissed, and (can install OR iOS)
    if (banner) {
      const showBanner = !standalone && !dismissed && (canNative || ios);
      banner.hidden = !showBanner;
    }
    // Settings row: show when not installed
    if (setting) {
      setting.hidden = standalone;
    }
  }

  async function promptInstall() {
    if (isStandalone()) {
      toast(t('toast_install_done'), 'success');
      return;
    }
    if (deferredInstallPrompt) {
      try {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        if (choice && choice.outcome === 'accepted') {
          setInstallDismissed();
          toast(t('toast_install_done'), 'success');
        }
      } catch (e) {
        toast(t('toast_install_unavailable'), 'error');
      }
      updateInstallUI();
      return;
    }
    if (isIos()) {
      toast(t('toast_install_ios'), 'success');
      return;
    }
    toast(t('toast_install_unavailable'), 'error');
  }

  function dismissInstall() {
    setInstallDismissed();
    updateInstallUI();
  }

  function initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      updateInstallUI();
    });
    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      setInstallDismissed();
      updateInstallUI();
      toast(t('toast_install_done'), 'success');
    });
    updateInstallUI();
  }

  /* ---- Onboarding (first launch) ---- */
  let onboardStep = 0;
  const ONBOARD_LAST = 3;

  function shouldShowOnboarding() {
    if (!state || !state.settings) return false;
    if (state.settings.onboardingDone) return false;
    // Người dùng cũ đã có tiến độ → không hiện nữa
    const progressed = Object.keys(state.progress || {}).length > 0 || (state.user && state.user.xp > 0);
    if (progressed) {
      state.settings.onboardingDone = true;
      save();
      return false;
    }
    return true;
  }

  function renderOnboardStep() {
    const root = byId('onboard');
    if (!root) return;
    $$('.onboard__step', root).forEach((el) => {
      const n = Number(el.dataset.step);
      const active = n === onboardStep;
      el.hidden = !active;
      el.classList.toggle('is-active', active);
    });
    $$('.onboard__dot', root).forEach((el) => {
      el.classList.toggle('is-active', Number(el.dataset.step) === onboardStep);
    });
    const nextBtn = byId('onboard-next');
    if (nextBtn) {
      nextBtn.textContent = onboardStep >= ONBOARD_LAST ? t('ob_start') : t('ob_next');
    }
  }

  function openOnboarding() {
    onboardStep = 0;
    const el = byId('onboard');
    if (!el) return;
    el.hidden = false;
    renderOnboardStep();
    // Focus primary action for a11y
    const next = byId('onboard-next');
    if (next) setTimeout(() => next.focus(), 50);
  }

  function finishOnboarding(startUnit) {
    if (state && state.settings) {
      state.settings.onboardingDone = true;
      save();
    }
    const el = byId('onboard');
    if (el) el.hidden = true;
    if (startUnit) {
      openUnit(1);
      // Optional: go straight into flashcard
      // startUnitFlashcard(1);
    }
  }

  function onboardNext() {
    if (onboardStep >= ONBOARD_LAST) {
      finishOnboarding(true);
      return;
    }
    onboardStep += 1;
    renderOnboardStep();
  }

  function onboardSkip() {
    finishOnboarding(false);
  }

  function openSettings() {
    syncSettingsUI();
    updateCloudUI();
    updateInstallUI();
    openModal(byId('modal-settings'));
  }

  function closeSettings() {
    closeModal(byId('modal-settings'));
  }

  function profilePayload() {
    writeStateIntoStore();
    const p = store.profiles[store.activeProfileId];
    return {
      version: SCHEMA_VERSION,
      type: 'word-ii-profile',
      exportedAt: new Date().toISOString(),
      profile: {
        name: p.name,
        bestStreak: p.bestStreak,
        user: p.user,
        progress: p.progress,
        settings: p.settings
      }
    };
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(profilePayload(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safe = (store.profiles[store.activeProfileId].name || 'profile').replace(/[^\w\-]+/g, '_').slice(0, 24);
    a.download = `word-ii-${safe}-${dateKey()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    toast(t('toast_export'), 'success');
  }

  async function copyProfileCode() {
    const text = JSON.stringify(profilePayload());
    try {
      await navigator.clipboard.writeText(text);
      toast(t('toast_copy'), 'success');
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(t('toast_copy'), 'success'); }
      catch (err) { toast('Không copy được. Hãy Export file.', 'error'); }
      ta.remove();
    }
  }

  function parseImportPayload(text) {
    let raw;
    try { raw = JSON.parse(text); } catch (e) { return null; }
    // Full store
    if (raw && raw.profiles) return { kind: 'store', store: sanitizeStore(raw) };
    // Wrapped profile
    if (raw && raw.profile) {
      const st = sanitizeState(raw.profile);
      if (!st) return null;
      return { kind: 'profile', name: raw.profile.name || 'Imported', state: st, bestStreak: raw.profile.bestStreak || st.user.streak };
    }
    // Legacy single state
    const st = sanitizeState(raw);
    if (!st) return null;
    return { kind: 'profile', name: 'Imported', state: st, bestStreak: st.user.streak };
  }

  function mergeProgress(into, from) {
    Object.entries(from).forEach(([id, p]) => {
      const cur = into[id];
      if (!cur || (p.stability > cur.stability) || (p.reps > (cur.reps || 0) && p.stability >= cur.stability)) {
        into[id] = p;
      }
    });
    return into;
  }

  async function applyImportPayload(parsed, mode) {
    if (!parsed) {
      toast('Mã/file không hợp lệ.', 'error');
      return;
    }
    if (parsed.kind === 'store') {
      const ok = await confirmDialog({
        title: 'Nhập toàn bộ hồ sơ?',
        text: mode === 'overwrite'
          ? 'Sẽ thay thế tất cả hồ sơ trên máy này bằng dữ liệu trong file.'
          : 'Sẽ thêm các hồ sơ từ file vào máy này (giữ hồ sơ hiện có).',
        okLabel: 'Import'
      });
      if (!ok) return;
      if (mode === 'overwrite') {
        store = parsed.store;
      } else {
        Object.values(parsed.store.profiles).forEach((p) => {
          const np = Object.assign({}, p, { id: uid() });
          store.profiles[np.id] = np;
        });
      }
      applyActiveToState();
      save();
      applyTheme();
      syncSettingsUI();
      renderDashboard();
      renderProfileList();
      toast('Đã import hồ sơ.', 'success');
      return;
    }

    // single profile → current active
    const words = Object.keys(parsed.state.progress).length;
    const ok = await confirmDialog({
      title: mode === 'merge' ? 'Merge tiến độ?' : 'Overwrite tiến độ?',
      text: mode === 'merge'
        ? `Gộp ${words} từ / ${parsed.state.user.xp} XP vào hồ sơ đang dùng (giữ bản tốt hơn).`
        : `Thay thế toàn bộ tiến độ hồ sơ hiện tại bằng ${words} từ / ${parsed.state.user.xp} XP.`,
      okLabel: 'Import'
    });
    if (!ok) return;

    if (mode === 'overwrite') {
      state.user = parsed.state.user;
      state.progress = parsed.state.progress;
      // keep settings unless empty
      if (parsed.state.settings) state.settings = parsed.state.settings;
    } else {
      state.progress = mergeProgress(Object.assign({}, state.progress), parsed.state.progress);
      state.user.xp = Math.max(state.user.xp, parsed.state.user.xp);
      state.user.level = levelFromXp(state.user.xp);
      state.user.streak = Math.max(state.user.streak, parsed.state.user.streak);
      state.user.completedUnits = Array.from(new Set([...(state.user.completedUnits || []), ...(parsed.state.user.completedUnits || [])]));
      // merge unitTests best
      const ut = Object.assign({}, state.user.unitTests);
      Object.entries(parsed.state.user.unitTests || {}).forEach(([id, t]) => {
        if (!ut[id] || t.best > ut[id].best) ut[id] = t;
      });
      state.user.unitTests = ut;
      state.user.totalWordsMastered = countMastered();
    }
    const p = store.profiles[store.activeProfileId];
    if (p) p.bestStreak = Math.max(p.bestStreak || 0, parsed.bestStreak || 0, state.user.streak);
    save();
    applyTheme();
    syncSettingsUI();
    renderDashboard();
    renderProfileList();
    toast(mode === 'merge' ? 'Đã merge tiến độ.' : 'Đã ghi đè tiến độ.', 'success');
  }

  function importProgressFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = parseImportPayload(reader.result);
      applyImportPayload(parsed, 'overwrite');
    };
    reader.onerror = () => toast('Không đọc được file.', 'error');
    reader.readAsText(file);
  }

  async function resetProgress() {
    const ok = await confirmDialog({
      title: 'Xóa tiến độ hồ sơ này?',
      text: 'XP, level, streak và tiến độ từng từ của hồ sơ đang dùng sẽ bị xóa. Hồ sơ khác không bị ảnh hưởng.',
      okLabel: 'Xóa tiến độ'
    });
    if (!ok) return;
    const fresh = defaultState();
    state.user = fresh.user;
    state.progress = fresh.progress;
    const p = store.profiles[store.activeProfileId];
    if (p) p.bestStreak = 0;
    save();
    renderDashboard();
    renderProfileList();
    toast('Đã xóa tiến độ hồ sơ hiện tại.');
  }

  /* ---- Profile UI ---- */
  function openProfiles() {
    // Đóng settings nếu đang mở để tránh chồng 2 modal
    const settings = byId('modal-settings');
    if (settings && !settings.hidden) settings.hidden = true;
    renderProfileList();
    requestPersistentStorage();
    openModal(byId('modal-profiles'));
  }
  function closeProfiles() {
    closeModal(byId('modal-profiles'));
  }

  function profileMasteredCount(p) {
    return Object.values(p.progress || {}).filter((x) => x && x.stability >= MASTERED_STABILITY).length;
  }

  function renderProfileList() {
    const list = byId('profile-list');
    if (!list || !store) return;
    // Đồng bộ state hiện tại vào store trước khi vẽ (XP/streak mới nhất)
    writeStateIntoStore();
    list.replaceChildren();
    Object.values(store.profiles)
      .sort((a, b) => a.createdAt - b.createdAt)
      .forEach((p) => {
        const isActive = p.id === store.activeProfileId;
        const mastered = profileMasteredCount(p);
        const words = Object.keys(p.progress || {}).length;
        const streak = isActive ? effectiveStreak() : (p.user && p.user.streak) || 0;
        const best = Math.max(p.bestStreak || 0, (p.user && p.user.streak) || 0);
        const xp = (p.user && p.user.xp) || 0;
        const level = (p.user && p.user.level) || levelFromXp(xp);

        const li = document.createElement('li');
        li.className = 'profile-item' + (isActive ? ' is-active' : '');
        li.dataset.id = p.id;

        const main = document.createElement('div');
        main.className = 'profile-item__main';
        const name = document.createElement('span');
        name.className = 'profile-item__name';
        name.textContent = p.name + (isActive ? '' : '');
        main.appendChild(name);
        const meta = document.createElement('span');
        meta.className = 'profile-item__meta';
        meta.textContent = t('profile_meta', { level: level, xp: xp, mastered: mastered, streak: streak });
        main.appendChild(meta);
        li.appendChild(main);

        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'profile-item__actions';

        if (isActive) {
          const badge = document.createElement('span');
          badge.className = 'profile-item__badge';
          badge.textContent = t('active');
          actionsWrap.appendChild(badge);
        } else {
          const sel = document.createElement('button');
          sel.type = 'button';
          sel.className = 'btn btn--primary btn--sm';
          sel.textContent = t('select');
          sel.dataset.action = 'select-profile';
          sel.dataset.id = p.id;
          actionsWrap.appendChild(sel);
        }

        const ren = document.createElement('button');
        ren.type = 'button';
        ren.className = 'btn btn--soft btn--sm';
        ren.textContent = t('rename');
        ren.dataset.action = 'rename-profile';
        ren.dataset.id = p.id;
        actionsWrap.appendChild(ren);

        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'btn btn--soft btn--sm';
        del.textContent = t('delete');
        del.dataset.action = 'delete-profile';
        del.dataset.id = p.id;
        actionsWrap.appendChild(del);

        li.appendChild(actionsWrap);
        list.appendChild(li);
      });

    const active = store.profiles[store.activeProfileId];
    const line = byId('profile-streak-line');
    if (line && active) {
      const m = profileMasteredCount(active);
      line.textContent = 'Tài khoản đang dùng: ' + active.name + ' · Streak ' + effectiveStreak() + ' · Best ' + Math.max(active.bestStreak || 0, active.user.streak || 0) + ' · ' + m + ' từ vững · ' + (active.user.xp || 0) + ' XP';
    }
  }

  function addProfile() {
    if (!store) { toast('Chưa tải được dữ liệu hồ sơ.', 'error'); return; }
    const input = byId('profile-name-input');
    const name = (input && input.value || '').trim();
    if (!name) { toast('Nhập tên hồ sơ.', 'error'); return; }
    const prof = createProfile(name);
    store.profiles[prof.id] = prof;
    input.value = '';
    save();
    renderProfileList();
    toast('Đã tạo tài khoản “' + prof.name + '” (tiến độ học trống). Bấm Chọn để học bằng tài khoản này.', 'success');
  }

  async function selectProfile(id) {
    if (!store || !id || !store.profiles[id] || id === store.activeProfileId) return;
    // Lưu toàn bộ tiến độ tài khoản cũ trước khi đổi
    writeStateIntoStore();
    store.activeProfileId = id;
    applyActiveToState();
    // Hủy phiên học đang dở (thuộc tài khoản cũ)
    app.session = null;
    app.unitId = null;
    save();
    applyTheme();
    applyUILanguage();
    syncSettingsUI();
    renderDashboard();
    renderProfileList();
    showScreen('dashboard');
    closeProfiles();
    toast('Đã chuyển sang tài khoản “' + store.profiles[id].name + '”. Toàn bộ XP, từ vựng, streak theo tài khoản này.', 'success');
  }

  async function renameProfile(id) {
    const p = store.profiles[id];
    if (!p) return;
    const name = prompt('Tên hồ sơ mới:', p.name);
    if (name == null) return;
    const cleaned = name.trim().slice(0, 40);
    if (!cleaned) { toast('Tên không hợp lệ.', 'error'); return; }
    p.name = cleaned;
    save();
    renderProfileList();
    renderStats();
  }

  async function deleteProfile(id) {
    const ids = Object.keys(store.profiles);
    if (ids.length <= 1) {
      toast('Cần giữ ít nhất một hồ sơ.', 'error');
      return;
    }
    const p = store.profiles[id];
    const ok = await confirmDialog({
      title: 'Xóa hồ sơ?',
      text: `Xóa “${p.name}” và toàn bộ tiến độ của hồ sơ này. Không thể hoàn tác.`,
      okLabel: 'Delete'
    });
    if (!ok) return;
    delete store.profiles[id];
    if (store.activeProfileId === id) {
      store.activeProfileId = Object.keys(store.profiles)[0];
      applyActiveToState();
      applyTheme();
      syncSettingsUI();
      renderDashboard();
    }
    save();
    renderProfileList();
    toast('Đã xóa tài khoản và toàn bộ dữ liệu học của tài khoản đó.');
  }

  function importFromTextarea() {
    const text = (byId('profile-import-code').value || '').trim();
    if (!text) { toast('Dán code trước.', 'error'); return; }
    const mode = (document.querySelector('input[name="import-mode"]:checked') || {}).value || 'merge';
    applyImportPayload(parseImportPayload(text), mode);
  }

  function importProfileFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const mode = (document.querySelector('input[name="import-mode"]:checked') || {}).value || 'merge';
      applyImportPayload(parseImportPayload(reader.result), mode);
    };
    reader.onerror = () => toast('Không đọc được file.', 'error');
    reader.readAsText(file);
  }

  /* ========================================================================
     15. SỰ KIỆN & KHỞI ĐỘNG
     ======================================================================== */
  const actions = {
    'toggle-theme': toggleTheme,
    'toggle-lang': toggleLang,
    'open-settings': openSettings,
    'close-modal': closeSettings,
    'open-profiles': openProfiles,
    'close-profiles': closeProfiles,
    'add-profile': addProfile,
    'profile-export-file': exportProgress,
    'profile-copy-code': copyProfileCode,
    'profile-import': importFromTextarea,
    'profile-import-file': () => byId('profile-import-file').click(),
    'select-profile': (el) => selectProfile(el.dataset.id),
    'rename-profile': (el) => renameProfile(el.dataset.id),
    'delete-profile': (el) => deleteProfile(el.dataset.id),
    'back': goBack,
    'start-review': () => showScreen('review'),
    'start-flashcard': () => startUnitFlashcard(app.unitId),
    'start-quiz': () => startUnitQuiz(app.unitId),
    'open-story': () => openStory(app.unitId),
    'speak-current': () => { const s = app.session; if (s && s.queue.length) speak(s.queue[0].word); },
    'fc-again': () => answerFlashcard(1),
    'fc-hard': () => answerFlashcard(2),
    'fc-good': () => answerFlashcard(3),
    'fc-easy': () => answerFlashcard(4),
    'quiz-listen': () => { const s = app.session; if (s && s.mode === 'quiz') speak(s.questions[s.index].word.word); },
    'start-practice': (el) => startPractice(app.unitId, el.dataset.ptype),
    'start-test': () => startUnitTest(app.unitId),
    'quiz-submit': () => submitTyped(false),
    'quiz-skip': () => submitTyped(true),
    'quiz-hint': giveHint,
    'order-submit': submitOrder,
    'order-reset': resetOrder,
    'write-submit': submitWrite,
    'write-ok': () => selfGradeWrite(true),
    'write-bad': () => selfGradeWrite(false),
    'quiz-next': nextQuestion,
    'story-read-all': toggleStoryReading,
    'close-popup': hidePopup,
    'popup-speak': () => { const w = wordsById.get(app.popupWordId); if (w) speak(w.word); },
    'review-flashcard': startReviewFlashcard,
    'review-quiz': startReviewQuiz,
    'start-quick': startQuickStudy,
    'result-retry': retrySession,
    'export-progress': exportProgress,
    'import-progress': () => byId('import-file').click(),
    'reset-progress': resetProgress,
    'cloud-sign-in-anon': cloudSignInAnon,
    'cloud-sign-in-google': cloudSignInGoogle,
    'cloud-sign-out': cloudSignOut,
    'cloud-push': () => cloudPush({ silent: false }),
    'cloud-pull': () => cloudPull({ silent: false }),
    'onboard-next': onboardNext,
    'onboard-skip': onboardSkip,
    'install-app': promptInstall,
    'install-dismiss': dismissInstall,
    'close-levelup': () => { byId('levelup').hidden = true; },
    'speak-text': (el) => speak(el.dataset.text),
    'row-more': (el) => {
      const row = el.closest('.word-row');
      const box = $('.word-row__extras', row);
      const opening = box.hidden;
      box.hidden = !opening;
      el.setAttribute('aria-expanded', String(opening));
      el.textContent = opening ? 'Ẩn bớt' : `Xem thêm ${box.children.length} ví dụ`;
    },
    'row-speak': (el) => {
      const row = el.closest('.word-row');
      const w = row && wordsById.get(row.dataset.wordId);
      if (w) speak(w.word);
    }
  };

  function onClick(e) {
    const t = e.target;

    // Điều hướng giữa các màn hình chính
    const nav = t.closest('[data-nav]');
    if (nav) { showScreen(nav.dataset.nav); return; }

    // Nút hành động (kể cả nút nằm trong thẻ flashcard)
    const act = t.closest('[data-action]');
    if (act && actions[act.dataset.action]) {
      actions[act.dataset.action](act);
      return;
    }

    // Chọn Unit trên dashboard
    const unitCard = t.closest('.unit-card');
    if (unitCard) { openUnit(Number(unitCard.dataset.unitId)); return; }

    // Bộ lọc Unit
    const filter = t.closest('.filter');
    if (filter) {
      app.filter = filter.dataset.filter;
      $$('#unit-filters .filter').forEach((f) => f.classList.toggle('is-active', f === filter));
      renderUnitGrid();
      return;
    }

    // Lật thẻ flashcard
    if (t.closest('#flashcard')) { flipCard(); return; }

    // Từ trong bài sắp xếp câu
    const chip = t.closest('.order-chip');
    if (chip) { pickOrderToken(chip); return; }

    // Đáp án quiz
    const opt = t.closest('#quiz-options .option');
    if (opt) { answerQuiz(Number(opt.dataset.index)); return; }

    // Từ được highlight hoặc chip từ trong Story
    const hl = t.closest('.hl-word, #story-wordlist button');
    if (hl) { showPopup(hl.dataset.wordId, hl); return; }

    // Bấm ra ngoài popup thì đóng
    if (!t.closest('#word-popup')) hidePopup();
  }

  function onKeydown(e) {
    trapFocus(e);

    if (e.key === 'Escape') {
      if (!byId('modal-confirm').hidden) byId('modal-confirm').dispatchEvent(new Event('cancel-confirm'));
      else if (!byId('levelup').hidden) byId('levelup').hidden = true;
      else if (!byId('modal-settings').hidden) closeSettings();
      else hidePopup();
      return;
    }

    // Không xử lý phím tắt khi đang có lớp phủ hoặc đang gõ vào ô nhập
    if (!byId('modal-settings').hidden || !byId('modal-confirm').hidden || !byId('levelup').hidden) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const onButton = !!e.target.closest('button');

    if (app.screen === 'flashcard') {
      if ((e.key === ' ' || e.key === 'Enter') && !onButton) { e.preventDefault(); flipCard(); }
      else if (e.key === '1' || e.key === 'ArrowLeft') { e.preventDefault(); answerFlashcard(1); }
      else if (e.key === '2') { e.preventDefault(); answerFlashcard(2); }
      else if (e.key === '3' || e.key === 'ArrowRight') { e.preventDefault(); answerFlashcard(3); }
      else if (e.key === '4') { e.preventDefault(); answerFlashcard(4); }
      else if (e.key.toLowerCase() === 's') actions['speak-current']();
    } else if (app.screen === 'quiz') {
      const s = app.session;
      const q = s && s.questions[s.index];
      if (!q) return;
      if (!q.answered) {
        const idx = '1234'.indexOf(e.key) >= 0 && e.key !== '' ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase());
        if (idx >= 0 && e.key.length === 1) answerQuiz(idx);
        else if (e.key.toLowerCase() === 'l' && NEEDS_SPEECH.has(q.type)) speak(q.word.word);
      } else if ((e.key === 'Enter' || e.key === ' ') && !onButton) {
        e.preventDefault();
        nextQuestion();
      }
    }
  }

  function bindEvents() {
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeydown);

    // Popup Story: hover trên desktop
    const story = byId('story-text');
    const canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (canHover) {
      story.addEventListener('mouseover', (e) => {
        const hl = e.target.closest('.hl-word');
        if (hl) showPopup(hl.dataset.wordId, hl);
      });
      story.addEventListener('mouseout', (e) => { if (e.target.closest('.hl-word')) scheduleHidePopup(); });
      const pop = byId('word-popup');
      pop.addEventListener('mouseenter', () => clearTimeout(app.popupHideTimer));
      pop.addEventListener('mouseleave', scheduleHidePopup);
    }
    window.addEventListener('resize', hidePopup);

    // Ô gõ đáp án: Enter để kiểm tra
    byId('quiz-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submitTyped(false); }
    });
    // Ô viết câu: Ctrl/Cmd + Enter để nộp
    byId('write-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); submitWrite(); }
    });

    // Cài đặt
    byId('set-sound').addEventListener('change', (e) => {
      state.settings.sound = e.target.checked;
      save();
      if (e.target.checked) playSound('correct');
    });
    byId('set-dark').addEventListener('change', (e) => {
      state.settings.darkMode = e.target.checked;
      save();
      applyTheme();
    });
    byId('set-rate').addEventListener('input', (e) => {
      state.settings.speechRate = Number(e.target.value);
      byId('set-rate-value').textContent = Number(e.target.value).toFixed(2).replace(/0$/, '');
    });
    byId('set-rate').addEventListener('change', () => {
      save();
      speak('Pronunciation');
    });
    byId('set-voice').addEventListener('change', (e) => {
      state.settings.voice = e.target.value;
      save();
      speak('Hello');
    });
    byId('import-file').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) importProgressFile(file);
      e.target.value = '';
    });
    const nameInput = byId('profile-name-input');
    if (nameInput) nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addProfile(); }
    });
    const pif = byId('profile-import-file');
    if (pif) pif.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) importProfileFile(file);
      e.target.value = '';
    });

    // Cập nhật số từ đến hạn khi quay lại tab sau nhiều giờ (ví dụ qua nửa đêm)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && app.screen === 'dashboard') renderDashboard();
    });
  }

  async function init() {
    if (!DATA || !Array.isArray(DATA.units)) {
      byId('main').textContent = 'Không tải được data.js. Hãy kiểm tra file data.js nằm cùng thư mục với index.html.';
      return;
    }
    indexData();
    try { state = await loadStateAsync(); }
    catch (e) { console.warn('[init]', e); state = defaultState(); }
    state.user.totalWordsMastered = countMastered();
    save();
    applyTheme();
    applyUILanguage();
    bindEvents();
    if (synth) {
      loadVoices();
      if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', loadVoices);
    }
    showScreen('dashboard');
    requestPersistentStorage();
    initInstallPrompt();
    initCloud().then(updateCloudUI).catch(() => updateCloudUI());
    if (shouldShowOnboarding()) {
      // Slight delay so dashboard paints first
      setTimeout(openOnboarding, 280);
    } else {
      // After onboarding window, still refresh install banner visibility
      setTimeout(updateInstallUI, 400);
    }
  }

  init();
})();
