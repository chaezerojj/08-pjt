/**
 * 제공 코드
 */
// 기본 작가, 분류, 도서 데이터 (JavaScript Array)
import { authorRawData } from './authors.js';  // authors.js에서 authorRawData를 가져옵니다.
import { categoryRawData } from './categories.js'; // categories.js에서 categoryRawData를 가져옵니다.
import { bookRawData } from './books.js'; // categories.js에서 categoryRawData를 가져옵니다.
    
const categories = categoryRawData
const authors = authorRawData
const books = bookRawData
// 데이터 확인
console.log(categories.length)
console.log(categories[0])
console.log(authors.length)
console.log(authors[0])
console.log(books.length)
console.log(books[0])

/**
 * 대부분의 작업은 script.js에서 진행해도 무방하나 원한다면 js 파일 추가 가능
 * HTML 요소 추가를 위한 `.innerHTML` 사용 금지, 요소의 내용을 비우는 용도로는 사용 가능 (`.innerHTML = ```)
 */

// 예시 books 데이터
// const books = [
//   {
//     title: "자바스크립트 입문",
//     description: "자바스크립트의 기초를 배울 수 있는 책입니다.",
//     coverImage: "js-book.jpg"
//   },
//   {
//     title: "HTML과 CSS",
//     description: "웹 디자인의 기본을 다룹니다.",
//     coverImage: ""
//   },
//   {
//     title: "React 완벽 가이드",
//     description: "React를 활용한 프론트엔드 개발서.",
//     coverImage: "react-guide.jpg"
//   }
// ];

// // 도서 목록을 출력하는 함수
// function displayBooks() {
//   const bookListRow = document.getElementById("book-list-row");
//   bookListRow.innerHTML = ""; // 기존 내용 초기화

//   books.forEach(book => {
//     const cover = book.coverImage && book.coverImage.trim() !== ""
//       ? book.coverImage
//       : "stack-of-books.png";

//     const col = document.createElement("div");
//     col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

//     col.innerHTML = `
//       <div class="card h-100">
//         <img src="${cover}" class="card-img-top" alt="${book.title}">
//         <div class="card-body">
//           <h5 class="card-title">${book.title}</h5>
//           <p class="card-text">${book.description}</p>
//         </div>
//       </div>
//     `;

//     bookListRow.appendChild(col);
//   });
// }

// // DOM이 준비되면 실행
// document.addEventListener("DOMContentLoaded", displayBooks);\\

function renderBooks(bookList) {
  const listRow = document.querySelector('#book-list-row')
  listRow.innerHTML = ''   // 요소 비우기만 innerHTML 사용 가능

  bookList.forEach(book => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3'

    const card = document.createElement('div')
    card.className = 'card h-100'

    // 이미지
    const img = document.createElement('img')
    img.className = 'card-img-top'
    img.src = book.cover && book.cover.length > 0 
      ? book.cover 
      : 'stack-of-books.png'   // 제공 이미지

    // 카드 바디
    const body = document.createElement('div')
    body.className = 'card-body'

    const title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = book.title

    const desc = document.createElement('p')
    desc.className = 'card-text'
    desc.textContent = book.description.slice(0, 80) + '...'

    body.appendChild(title)
    body.appendChild(desc)
    card.appendChild(img)
    card.appendChild(body)
    col.appendChild(card)
    listRow.appendChild(col)
  })
}

function searchBooks() {
  const keyword = document.querySelector('#search-input').value.trim()
  const type = document.querySelector('#search-type').value

  if (!keyword) {
    alert("검색어를 입력하세요.")
    return
  }

  const result = books.filter(book => {
    if (type === 'title') return book.title.includes(keyword)
    if (type === 'author') {
      const author = authors.find(a => a.id === book.authorId)
      return author.name.includes(keyword)
    }
    if (type === 'category') {
      const cate = categories.find(c => c.id === book.categoryId)
      return cate.name.includes(keyword)
    }
  })

  renderBooks(result)
}

renderBooks(books)
const btn = document.querySelector('#search-btn')
btn.addEventListener('click', searchBooks)
