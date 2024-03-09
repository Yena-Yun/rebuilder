# AI 회사 사이트 페이지 구현

RebuilderAI 회사 소개 사이트의 '/technology' 페이지를 구현하였습니다.

### AWS 배포: https://d29jsyxb34kmjf.cloudfront.net/
<br/>

|목차|
|------|
|[기술 스택](#기술-스택)|
|[구현 사항](#구현-사항)|
|[S3 + CloudFront 배포](#s3--cloudfront-배포)|
|[이슈 해결](#이슈-해결)|
|[UX 개선](#ux-개선)|
|[코드 개선](#코드-개선)|
|[부가 구현](#부가-구현)|



# 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# 구현 사항

## 헤더 서브 메뉴 클릭 시 자동 섹션 이동 + 쿼리 스트링 추가
* 헤더의 'Technology' 서브 메뉴 중 하나를 클릭
* 해당 기술을 소개하는 페이지 내 섹션으로 이동 + URL에 섹션을 나타내는 쿼리 스트링 추가

![헤더 서브 메뉴 클릭 후 섹션 이동](https://github.com/Yena-Yun/rebuilder/assets/68722179/7f166082-5831-43e3-be6d-7f64dfa2b6be)

## 시간차가 있는 fade-in 애니메이션 구현
(화면에 마우스가 등장하고 잠깐 기다려주세요! - 스크롤해야 동작하는 fade-in 애니메이션) <br/>

<img src="https://github.com/Yena-Yun/rebuilder/assets/68722179/c15b997f-923e-47dc-873f-81c7ec0e475c" width="500" />


## 스크롤 위치에 따라 분기 CSS 적용
* 스크롤 중 뒷배경 스크롤 고정 
* 섹션을 벗어날 때 다시 스크롤

![스크롤 3가지 분기](https://github.com/Yena-Yun/rebuilder/assets/68722179/f28a1ed1-744a-4e1c-b372-7c30538c7fcb)


## 다국어 적용 (ko, en)
- i18next, react-i18next 사용
- 기본 언어: 한국어(ko) / fallback language: 영어(en)
  
<img src="https://github.com/Yena-Yun/rebuilder/assets/68722179/7965ab5c-5a39-4e06-bf55-7dbdac283bc0" width="500" />


## 반응형 구현 (breakpoint: 600/768/1024/1200/1280)
특정 breakpoint에서 화면 크기에 맞는 영상을 불러옴 (오른쪽 네트워크 탭, 1280/768/600일 때)

<img src="https://github.com/Yena-Yun/rebuilder/assets/68722179/b882db23-32b3-414b-b7eb-82e7154e3b06" width="500" />

## CRA → Vite 마이그레이션

* CRA로 시작한 프로젝트를 Vite로 마이그레이션
* 렌더링 속도 87.5% 감소 (16초 → 2초)

## Lighthouse 최적화

- 차세대 이미지 포맷 사용 (webp)
  - 브라우저 호환을 위해 png 추가 제공 (picture, source 태그 사용)
- 검색엔진최적화(SEO)
- 최종 검사 결과 (배포 사이트 기준)

<img src="https://github.com/Yena-Yun/rebuilder/assets/68722179/4c548239-8977-4190-9413-b38d448c70a9" width="500" />

# S3 + CloudFront 배포

- 프로젝트를 빌드한 후 정적 파일 저장소인 **S3**에 업로드
- 더 가까운 엣지 서버에서 리소스를 가져올 수 있도록 **CloudFront**를 거쳐서 배포

# 이슈 해결

### Github Actions로 CI/CD 구축

CI/CD를 설정하여 재배포 과정을 간편화 (🔗[관련 블로그](https://velog.io/@yena1025/S3%EC%99%80-CloudFront%EB%A1%9C-%EB%B0%B0%ED%8F%AC-Github-Actions%EB%A1%9C-%EC%9E%AC%EB%B0%B0%ED%8F%AC-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0))

### 영상 lazy load

뷰포트에 없는 영상을 지연 로드하여 네트워크 부하를 줄임 (🔗[커밋](https://github.com/Yena-Yun/rebuilder/commit/f447d5754e393a6dac3f673aa011eb9c7fc79910))

### 폰트 preload

렌더링 전 폰트를 미리 불러와서 FOUT 현상 제거 (🔗[관련 블로그](https://velog.io/@yena1025/font-%ED%8F%B0%ED%8A%B8-preload%ED%95%98%EA%B8%B0-jquirlcw))


# UX 개선

- 첫 렌더링 때 항상 화면 최상단으로 이동 (ScrollToTop 컴포넌트)
- 서브 메뉴 텍스트의 등장 시간 지연 (setTimeout)

# 코드 개선

- 컴포넌트가 UI 렌더링에만 집중하도록 자바스크립트 로직을 **커스텀 훅**으로 분리
- 반복되는 **UI 모듈화** (🔗[코드](https://github.com/Yena-Yun/rebuilder/blob/main/src/components/Technology/ObserverSections(4-7)/ObserverUIContainer/index.tsx))
- 렌더링 간 변하지 않는 고정 값을 **상수(constant)** 처리

# 부가 구현

- 2가지 이상의 타입이 혼합된 배열에서 **타입 가드** 활용
- 404 에러 안내를 위한 **NotFound** 화면 구현
- Vite **절대 경로** 설정
