# ✅ Git Branch 규칙 (VSCode + GitHub/GitLab 기준)
## 1. 기본 Branch 구조
### 🔵 main

- 배포 / 최종 제출용

- 항상 안정적인 코드만 존재

- 직접 push 금지(보호)

- 오직 Pull Request/Merge Request 승인 후 merge 가능

### 🟢 develop

- 개발용 통합 브랜치

- 모든 기능 브랜치가 여기로 merge

- 팀원 전체가 develop 기반으로 작업

### 🟡 feature/{기능명}-{이름}

- 개별 기능 개발을 위한 브랜치

- 예)
  - feature/search-jcy
  - feature/favorite-hk
  - feature/create-book-ys

=> 기능 단위 + 작성자 이름 조합으로 충돌 최소화!

## 2. Branch 생성 규칙

1. 작업 시작 전 develop을 최신으로 당긴다

- `git switch develop`
- `git pull origin develop`

2. 기능 브랜치 생성

- `git switch -c feature/search-jcy`

3. 기능 개발 완료 → commit / push → PR

## 3. Commit 규칙

명세서에서도 “commit 목적이 명확해야 한다”고 했기 때문에 아래 규칙을 추천!

### 형식
- `타입: 내용 (선택: 관련 기능/이슈 ID)`

- `feat`:	새로운 기능 추가
- `fix`:	버그 수정
- `refactor`:	코드 리팩터링 (기능 변경 없음)
- `style`	CSS, UI 스타일 작업
- `docs`:	문서 수정(README 등)
- `test`:	테스트 코드 수정
- `chore`:	빌드/의존성/기타 작업

- 예시
  ```
  feat: 검색 기능 추가 (F02)
  fix: 도서 이미지 없을 때 기본 이미지 출력 오류 수정
  refactor: create 탭 렌더링 코드 함수화
  docs: Git 브랜치 규칙 README 작성
  style: 카드 UI 간격 조정
  ```

## 4. Pull Request / Merge 규칙
### 🔸 feature → develop

- 기능이 다 끝나면 PR 생성

- PR 제목 예시

  ```
  [F03] 도서 입력 탭 기능 구현 완료
  ```

### 🔸 리뷰 필수

- 최소 1명 이상 승인해야 merge 가능

- 충돌(conflict) 발생 시, **기능 브랜치를 가진 담당자가 해결**

### 🔸 develop → main

- 전체 기능이 합쳐지고 테스트 끝나면

- 팀장 또는 역할 분담된 사람이 merge


## 5. 작업 흐름 예시 (3명 팀 기준)
담당자	기능	브랜치명
A	F01 도서 목록 출력	feature/book-list-A
B	F02 검색 기능	feature/search-B
C	F03 데이터 입력 탭, F04 데이터 추가	feature/form-C

작업 순서:

1. 각자 develop에서 새로운 feature 브랜치 생성

2. 기능 개발

3. commit → push

4. GitHub/GitLab에서 PR 생성

5. 리뷰 후 merge

6. 팀원들은 develop을 pull하여 코드 동기화



## 6. .gitignore 규칙
```
node_modules/
.vscode/
dist/
.env
*.log
```


## 7. README에 반드시 포함해야 할 내용 (명세서 요구사항)

명세서 NF01에 나와있는 항목 충족을 위해 작성해야 하는 구성:

### ✔ 1. 브랜치 전략 설명

- main / develop / feature 구조

- 각 브랜치 역할

### ✔ 2. Commit 메시지 규칙

- 타입, 예시 포함

### ✔ 3. Merge 규칙

- 리뷰 → merge 과정 설명

### ✔ 4. 실제 branch 사용 예시

- 예: feature/search-jcy

### ✔ 5. GitLab 스크린샷

- commit log

- branch 목록

- merge 기록

## 🔥 마지막으로, 팀원 3명 기준 권장 역할 분배
### 👤 팀원 A – UI/초기 구조

- HTML 구조 정리

- F01 도서 목록 출력

- Bootstrap Card 구성

### 👤 팀원 B – 검색 기능

- F02 검색 구현

- 검색 기준(제목/작가/분류) 추가

### 👤 팀원 C – 입력/추가 기능

- F03 입력 탭 전환

- F04 도서 추가 기능

- → 나중에 즐겨찾기(F05) 기능은 전체 구조 파악 후 가장 시간 남는 사람이 맡기.