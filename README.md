# AI 회사 사이트 페이지 구현

## 배포 링크: https://d29jsyxb34kmjf.cloudfront.net/

(전체 화면 시연하는 영상)

RebuilderAI 회사 사이트의 'Technology' 화면을 구현하였습니다.

## 배운 점

- 이미지, 영상 다루기 + 최적화
- 자바스크립트 애니메이션
- AWS 클라우드 배포
- CI/CD 구축

## ⚒️ 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## ✨ 구현 사항

### 헤더 서브 메뉴 클릭 시 자동 섹션 이동 + 쿼리 스트링 추가

(시연 영상)

### 시간차가 있는 fade-in 애니메이션 구현

(시연 영상)

### 스크롤 위치에 따라 분기 CSS 적용

(시연 영상)

### 다국어 적용 (ko, en)

(시연 영상)

## 반응형 구현 (600/768/1024/1200/1280)

(시연 영상)

### CRA → Vite 마이그레이션

### Lighthouse 최적화

- 차세대 이미지 포맷 사용
- 검색엔진최적화(SEO)
- 최종 검사 결과 (배포 사이트 기준)

![lighthouse.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1e8c61a7-1a5c-41bc-98db-fb0806ab61f1/158a6a4e-c7a4-4df4-a8fc-7153d5a298ca/lighthouse.png)

## 📢 S3 + CloudFront 배포

- 프로젝트를 빌드한 후 정적 파일 저장소인 S3에 업로드
- 더 가까운 엣지 서버에서 리소스를 가져올 수 있도록 CloudFront를 거쳐서 배포

## 🌌 이슈 해결

### Github Actions로 CI/CD 구축

- CI/CD를 설정하여 배포 과정을 간편화
- [관련 블로그]()

### 영상 lazy load

- 뷰포트에 없는 영상을 지연 로드하여 네트워크 부하를 줄임
- [관련 블로그]()

### 폰트 preload

- 렌더링 전 폰트를 미리 불러와서 FOUT 현상 제거
- [관련 블로그]()

## 🎿 UX 개선

- 첫 렌더링 때 항상 화면 최상단으로 이동
- 서브 메뉴 텍스트의 등장 시간 지연 (setTimeout)

## 🔫 코드 개선

- 컴포넌트가 UI 렌더링에만 집중하도록 자바스크립트 로직을 커스텀 훅으로 분리
- 반복되는 UI 컴포넌트 모듈화 (components/ObserverUIContainer)
- 렌더링 간 변하지 않는 고정 값을 상수 처리

## 🏷️ 부가 구현

- 2가지 이상의 타입이 혼합된 배열에서 타입 가드 활용
- 원본 사이트 중 'Technology' 페이지만 구현하여 ‘/’로 진입 시 리다이렉트
- 404 에러 안내를 위한 NotFound 화면 구현
- Vite 절대 경로 설정
