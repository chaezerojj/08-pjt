// 카테고리 목록을 저장하는 함수
function getCategories() {
  return JSON.parse(localStorage.getItem('categories')) || [];
}

// 카테고리 데이터를 추가하는 함수
function addCategory(newCategory) {
  const categories = getCategories();
  categories.push(newCategory);
  localStorage.setItem('categories', JSON.stringify(categories));
}

// 카테고리 목록을 화면에 표시하는 함수 (select 옵션 추가)
function populateCategories() {
  const categories = getCategories();
  const categorySelect = document.querySelector('#category-input');
  categorySelect.innerHTML = categories.map(category => `
    <option value="${category.id}">${category.name}</option>
  `).join('');
}

// 초기 로딩 시 카테고리 목록 표시
populateCategories();


export  const categoryRawData = [
  {
    id: 1,
    name: '소설/시/희곡',
  },
  {
    id: 2,
    name: '경제/경영',
  },
  {
    id: 3,
    name: '자기계발',
  },
  {
    id: 4,
    name: '인문/교양',
  },
  {
    id: 5,
    name: '취미/실용',
  },
  {
    id: 6,
    name: '어린이/청소년',
  },
  {
    id: 7,
    name: '과학',
  },
]
