// Поменял цены для тестрования отображения цен
// Добавил номера в описание для тестирования модального окна
function getProducts() {
  return (
    {
      "product": [
        {
          "name": "Парикмахерское кресло",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "50"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое 2 очень длинное",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "999"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое 3",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "1000"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое 4",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "1001"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое 5",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое 6",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "27090"
        }
      ]
    }
  );
}

function getPriceAsStr(inputPrice) {
  const price = parseInt(inputPrice);
  let result = price;
  if (price > 999) {
    const thousands = Math.floor(price/1000);
    let rest = `${price - thousands * 1000}`;
    while (rest.length < 3) {
      rest = '0' + rest;
    }
    result = `${thousands} ${rest}`
  }
  return `${result} ₽`;
}

function openModal(e) {
  const parentCardEl = e.target.closest('.card');
  modalProductName.value = parentCardEl.querySelector('.card-description').innerText;
  modalEl.style.top =
    + parentCardEl.getBoundingClientRect().top
    + parentCardEl.getBoundingClientRect().height
    + window.scrollY
    - modalEl.scrollHeight
    + 'px';
  modalEl.style.left = parentCardEl.getBoundingClientRect().left + 'px';
  modalEl.classList.add('isOpen');
}


// Нужно ли вызывать ресет формы, когдазакрываем окно?
// Может и нет, чтобы сохранялись введенные данные
function closeModal() {
  modalEl.classList.remove('isOpen');
}

function modalFormSubmitHandler(e) {
  e.preventDefault();
  modalForm.reset();
  closeModal();
}

function productClickHandler(e) {
  openModal(e);
}

// innerHTML может быть опасен для инъекций. Лучше пользоваться innerText, но для тестового так быстрее
function renderProducts(products, parentEl) {
  products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('products-item');
    productEl.classList.add('card');
    productEl.innerHTML = `
      <img class="card-image" src=${product.img} alt="${product.name}">
      <div class="card-description">${product.name}</div>
      <div class="card-price">${getPriceAsStr(product.price)}</div>
      <button class="card-button button" type="button">Купить</button>
    `;
    const button = productEl.querySelector('.card-button');
    button.addEventListener('click', (e)=> {
      productClickHandler(e);
    });
    parentEl.appendChild(productEl);
  });
}

// init products
const products = getProducts().product;
const productContainer = document.querySelector('.products');
renderProducts(products, productContainer);

// init modal
const modalEl = document.querySelector('.modal');
const closeModalEl = modalEl.querySelector('.modal-close');
const modalProductName = modalEl.querySelector('.input-product');
const modalForm = modalEl.querySelector('.modal-form');
closeModalEl.addEventListener('click', () => {
  closeModal();
});
modalForm.addEventListener('submit', (e) => {
  modalFormSubmitHandler(e);
});