# 08-pjt
* JavaScript · Bootstrap 기반 도서 관리 서비스

## 📌 0. 사용 기술 (개발환경)

* VSCode
  
* JavaScript (DOM 조작)

* HTML5

* Bootstrap 5.3

* CSS3


## 📌 1. 프로젝트 개요

* 본 프로젝트는 제공된 도서/작가/카테고리 데이터를 기반으로,
도서 검색, 목록 조회, 신규 도서 추가, 즐겨찾기 기능을 구현하는 웹 애플리케이션입니다.

* Bootstrap을 기반으로 UI를 구성하고,
JavaScript DOM 조작을 통해 데이터를 동적으로 렌더링합니다.

## 📌 2. 제공 파일
| 파일명                | 설명                           |
| ------------------ | ---------------------------- |
| index.html         | 메인 화면(HOME/CREATE/FAVORITES) |
| script.js          | 전체 기능 구현(JavaScript DOM 조작)  |
| authors.js         | 작가 데이터                       |
| books.js           | 도서 데이터                       |
| categories.js      | 카테고리 데이터                     |
| stack-of-books.png | 기본 이미지(커버 없음 fallback)       |

## 📌 3. 기능 요구사항 (Functional Requirements)
### ✅ F01. 도서 목록 출력

* Bootstrap Grid System 기반 카드 UI 구성
(col-12 col-sm-6 col-md-4 col-lg-3)

* 도서 이미지가 없을 경우 → stack-of-books.png 출력

* 제목, 소개, 이미지 표시

* 책 데이터는 books.js, authors.js, categories.js 사용

### ✅ F02. 도서 검색 기능

* 검색 기준:
  * 제목
  * 작가명
  * 분류명

* 검색창 UI 구현(index.html)

* 검색어 입력 후 검색 버튼 → 필터링된 목록 표시

* 검색 결과 없음 → 빈 목록 출력

* 검색어 미입력 시 → alert("검색어를 입력하세요")


### ✅ F03. 도서 데이터 입력 탭 기능

* 탭 목록에 Home, Create, Favorites 구성

* Create 버튼 클릭 → 입력 폼이 있는 Create 영역 표시

* Home/Favorites는 Create 영역을 숨겨야 함

* HTML 내부의 d-none 클래스로 show/hide 구현


### ✅ F04. 도서 데이터 추가 기능

* 사용자가 입력한 정보(title, author, desc, category, image)로
새로운 도서 객체 생성해 books 배열에 추가

* 새로운 도서는 가장 상단에 위치

* 도서 추가 후 Home 탭으로 이동하여 목록 재출력

* 입력 누락 시 오류 메시지 출력(또는 alert)


### ✅ F05. 즐겨찾기 기능
#### 요구사항 (명세서 기반)

✔ 탭 목록에 Favorites 추가
✔ 각 도서 카드에 "즐겨찾기" 버튼 표시
✔ 즐겨찾기 여부에 따라 버튼 상태 변경

* 추가 전: “즐겨찾기”

* 추가됨: “취소”
    ✔ Favorites 탭에서 즐겨찾기된 도서만 출력
    ✔ 즐겨찾기가 비어 있으면 메시지 출력

* “즐겨찾기에 추가한 도서가 없습니다.”
    ✔ Favorites 탭에서 모든 도서 즐겨찾기 취소 → 자동으로 Home 탭으로 이동
    ✔ 즐겨찾기와 일반 목록에서 동일한 도서 click 시 상태 동기화


## 📌 4. 출력 예시 (명세서 기반)

명세서 예시에 있는 내용을 기반으로 합니다:

#### ▶ 즐겨찾기 탭 및 버튼 표시

카드 우측 하단에 “즐겨찾기/취소” 버튼 활성화

#### ▶ Favorites 탭 화면

즐겨찾기에 등록된 도서 카드만 표시됨

#### ▶ Favorites 탭 비어 있을 때
* `즐겨찾기에 추가한 도서가 없습니다.`


## 📌 5. 폴더 구조
```
08-pjt
│── index.html
│── script.js
│── authors.js
│── books.js
│── categories.js
│── stack-of-books.png
└── README.md
```