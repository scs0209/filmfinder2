# FilmFinder

## 프로젝트 정보

> **1인 개발** <br/> **개발기간: 2023.4.24 ~ 2023.4.29**

## 개발자 소개

|                                                              성창수                                                              |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/110822847/229564340-070947f1-3f34-4cf4-b25f-ffe2d274be50.jpg" width="160px"> |
|                                              [@changsu](https://github.com/scs0209)                                              |

| 순천향대 화학과 졸업

## 프로젝트 소개

React와 Redux의 기본 개념을 익히고, 실제 프로젝트에 적용해보기 위해 만들었습니다.
FilmFinder는 React와 TypeScript를 사용하여 영화 검색 기능을 구현한 프론트엔드 웹 애플리케이션입니다. TMDB API를 사용하여 검색한 영화 정보를 가져와 보여주고, 사용자가 영화를 클릭하면 해당 영화에 대한 상세 정보를 볼 수 있습니다.

## 시작 가이드

For building and running the application you need:

## Available Scripts

### Requirements

In th project directory, you can run:

- [Npm 8.19.2](https://www.npmjs.com/package/npm/v/8.19.2)

### Installation

```bash
$ git clone https://github.com/scs0209/filmfinder2.git
$ cd filmfinder2
```

#### Frontend

```
$ cd filmfinder2
$ npm i
$ npm run start
```

---

## Stack🤡

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

---

## 화면 구성 📺

|                                                           메인 페이지                                                            |                                                      영화 상세 정보 페이지                                                      |
| :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src= "https://user-images.githubusercontent.com/110822847/229567497-b5607bb5-5d3c-44e3-b32e-0b3edbf83564.PNG"/> | <img width="329" src="https://user-images.githubusercontent.com/110822847/229567670-2b7d644f-4e1e-4b93-a168-89c2d32f0b68.PNG"/> |

---

## 주요 기능 📦

### ⭐️ 영화 검색

- 영화를 검색하여 리덕스 store에 데이터를 저장

---

## 아키텍쳐

### 디렉터리 구조

```bash
src/
├── actions/              // 액션 타입과 액션 생성자 함수 정의
│   ├── index.ts
│   └── types.ts
├── api/                  // API 호출 함수 정의
│   ├── index.ts
│   └── tmdb.ts
├── components/           // 컴포넌트들
│   ├── App.tsx
│   ├── MovieCard.tsx
│   ├── MovieDetails.tsx
│   ├── MovieList.tsx
│   └── SearchBar.tsx
├── reducers/             // 리듀서 정의
│   ├── index.ts
│   └── movies.ts
├── types/                // 인터페이스와 타입 정의
│   ├── index.ts
│   ├── movie.ts
│   └── state.ts
├── utils/                // 유틸리티 함수
│   └── index.ts
├── App.tsx               // 라우터와 레이아웃 컴포넌트
├── index.tsx             // 앱 엔트리 포인트
└── react-app-env.d.ts    // CRA 타입 정의
```
