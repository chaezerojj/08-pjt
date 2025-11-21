// 제공 데이터 import
import { authorRawData } from './authors.js'
import { categoryRawData } from './categories.js'
import { bookRawData } from './books.js'

// 데이터 초기화
const categories = categoryRawData
const authors = authorRawData
const books = bookRawData


// 전역 상태 (즐겨찾기 배열)
let favoriteBooks = []


// 렌더링 함수 (기본 도서 목록)
function renderBooks(bookList) {
  const listRow = document.querySelector('#book-list-row')
  listRow.innerHTML = ''

  bookList.forEach(book => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3'

    const card = document.createElement('div')
    card.className = 'card h-100'

    // 이미지
    const img = document.createElement('img')
    img.className = 'card-img-top'
    img.src = book.cover && book.cover.length > 0 ? book.cover : 'stack-of-books.png'

    // 카드 바디
    const body = document.createElement('div')
    body.className = 'card-body'

    const title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = book.title

    const desc = document.createElement('p')
    desc.className = 'card-text'
    desc.textContent = book.description.slice(0, 80) + '...'

    // 즐겨찾기 버튼
    const favBtn = document.createElement('button')
    favBtn.className = 'btn btn-warning btn-sm'

    if (favoriteBooks.includes(book)) {
      favBtn.textContent = '취소'
    } else {
      favBtn.textContent = '즐겨찾기'
    }

    favBtn.addEventListener('click', () => toggleFavorite(book))

    // 구성
    body.appendChild(title)
    body.appendChild(desc)
    body.appendChild(favBtn)

    card.appendChild(img)
    card.appendChild(body)
    col.appendChild(card)
    listRow.appendChild(col)
  })
}


// 즐겨찾기 렌더링
function renderFavorites() {
  const favContainer = document.querySelector('#favorites-list-row')
  favContainer.innerHTML = ''

  if (favoriteBooks.length === 0) {
    const msg = document.createElement('p')
    msg.className = 'text-center'
    msg.textContent = '즐겨찾기에 추가한 도서가 없습니다.'
    favContainer.appendChild(msg)
    return
  }

  favoriteBooks.forEach(book => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3'

    const card = document.createElement('div')
    card.className = 'card h-100'

    const img = document.createElement('img')
    img.className = 'card-img-top'
    img.src = book.cover && book.cover.length > 0 ? book.cover : 'stack-of-books.png'

    const body = document.createElement('div')
    body.className = 'card-body'

    const title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = book.title

    const removeBtn = document.createElement('button')
    removeBtn.className = 'btn btn-danger btn-sm'
    removeBtn.textContent = '취소'
    removeBtn.addEventListener('click', () => toggleFavorite(book))

    body.appendChild(title)
    body.appendChild(removeBtn)

    card.appendChild(img)
    card.appendChild(body)
    col.appendChild(card)
    favContainer.appendChild(col)
  })
}


// 즐겨찾기 토글
function toggleFavorite(book) {
  const idx = favoriteBooks.indexOf(book)

  if (idx === -1) {
    favoriteBooks.push(book)
  } else {
    favoriteBooks.splice(idx, 1)
  }

  // 즐겨찾기 탭일 때는 즐겨찾기 목록 갱신
  if (!document.querySelector('#favorites-container').classList.contains('d-none')) {
    renderFavorites()
  }

  // 홈 탭 목록 갱신
  renderBooks(books)
}


// 검색 기능
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


// 탭 전환 기능
const homeNav = document.querySelector('#home-nav')
const createNav = document.querySelector('#create-nav')
const favoritesNav = document.querySelector('#favorites-nav')

const homeContainer = document.querySelector('#home-container')
const createContainer = document.querySelector('#create-container')
const favoritesContainer = document.querySelector('#favorites-container')

homeNav.addEventListener('click', () => {
  homeContainer.classList.remove('d-none')
  createContainer.classList.add('d-none')
  favoritesContainer.classList.add('d-none')
  renderBooks(books)
})

createNav.addEventListener('click', () => {
  homeContainer.classList.add('d-none')
  createContainer.classList.remove('d-none')
  favoritesContainer.classList.add('d-none')
})

favoritesNav.addEventListener('click', () => {
  homeContainer.classList.add('d-none')
  createContainer.classList.add('d-none')
  favoritesContainer.classList.remove('d-none')
  renderFavorites()
})


// 도서 추가 기능 (F04)
document.querySelector('#create-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.querySelector('#title-input').value.trim()
  const authorName = document.querySelector('#author-input').value.trim()
  const img = document.querySelector('#img-input').value.trim()
  const desc = document.querySelector('#desc-input').value.trim()
  const cateName = document.querySelector('#category-input').value.trim()

  if (!title || !authorName || !desc || !cateName) {
    alert("모든 값을 입력하세요.")
    return
  }

  const authorObj = authors.find(a => a.name === authorName)
  const cateObj = categories.find(c => c.name === cateName)

  const newBook = {
    title,
    description: desc,
    cover: img,
    authorId: authorObj?.id || 1,
    categoryId: cateObj?.id || 1,
  }

  books.unshift(newBook)

  homeNav.click()
  renderBooks(books)
})


// 초기 목록 렌더링
renderBooks(books)

// 검색 버튼 이벤트
document.querySelector('#search-btn').addEventListener('click', searchBooks)
