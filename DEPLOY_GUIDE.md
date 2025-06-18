# 🚀 Vercel 배포 가이드

## 방법 1: Vercel 웹사이트 사용 (가장 쉬움)

### 1단계: Vercel 계정 생성

1. [vercel.com](https://vercel.com) 접속
2. "Sign Up" 클릭
3. GitHub 또는 이메일로 가입

### 2단계: 프로젝트 업로드

1. 대시보드에서 "Add New..." 클릭
2. "Project" 선택
3. "Browse" 버튼 클릭
4. **이 전체 프로젝트 폴더** 선택
5. "Upload" 클릭

### 3단계: 배포 설정

1. Project Name: `number-matching-game` (또는 원하는 이름)
2. Framework Preset: "Vite" 선택
3. Build Command: `npm run build` (자동 설정됨)
4. Output Directory: `dist` (자동 설정됨)
5. "Deploy" 클릭

### 4단계: 완료!

- 2-3분 후 `https://your-project-name.vercel.app` URL 제공
- 전 세계 어디서나 접속 가능!

---

## 방법 2: GitHub 연결 (더 고급)

### 1단계: GitHub에 업로드

```bash
git init
git add .
git commit -m "Number matching game"
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

### 2단계: Vercel과 GitHub 연결

1. Vercel 대시보드에서 "Import Git Repository"
2. GitHub 레포지토리 선택
3. 자동 배포 설정 완료

---

## 🎯 데모 URL 예시

배포 완료 후 이런 URL을 받게 됩니다:

- `https://number-matching-game-abc123.vercel.app`
- `https://your-custom-name.vercel.app`

## 📱 모바일 최적화

- 자동으로 모바일 최적화됨
- PWA 지원으로 홈 화면에 추가 가능
- 빠른 로딩 속도

## 🔗 데모 시연 팁

1. **URL 공유**: QR코드 생성하여 모바일에서 쉽게 접속
2. **기능 설명**:
   - 2초 대기 → 힌트 팝업 시연
   - 레벨 완료 → 자동 진행 시연
3. **반응형**: 다양한 기기 크기에서 테스트
