// بيانات مبدئية للكتب
const books = [
    {
      name: "الكتاب الأول",
      price: "50 جنيه",
      author: "أحمد خالد توفيق",
      pages: 250,
      image: "https://st-takla.org/Gallery/var/albums/Books/General-and-Writing/www-St-Takla-org--Books-01.gif?m=1419425451"
    },
    {
      name: "رحلة إلى المستقبل",
      price: "80 جنيه",
      author: "نبيل فاروق",
      pages: 300,
      image: "https://static.sayidaty.net/styles/900_scale/public/2023-05/253607.jpg.webp"
    },
    {
      name: "كتاب الفكر العميق",
      price: "65 جنيه",
      author: "يوسف زيدان",
      pages: 220,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJatV_hYMRd00_JpuxW97VyOTrF5itHV_5V4eIeRwYKve39F-eowf6bMvae2QKbVbdWc&usqp=CAU"
    },
    {
      name: "الذكاء الاصطناعي",
      price: "100 جنيه",
      author: "علي مصطفى مشرفة",
      pages: 280,
      image: "https://ebooklibery.com/storage/media/5mrhX3cJM3ZzvPDFNKi2dYL957eGVzWMnj2Gscix.webp"
    },
    {
      name: "الخيال العلمي",
      price: "75 جنيه",
      author: "إسحاق عظيموف",
      pages: 320,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl99YoGA-rQKP5pd9EveAAWshG3ogsPhvaVQ&s"
    },
    {
      name: "رواية عربية",
      price: "90 جنيه",
      author: "علاء الأسواني",
      pages: 270,
      image: "https://www.independentarabia.com/sites/default/files/styles/1368x911/public/article/mainimage/2022/12/23/670376-1421274239.png"
    }
  ];
  
  // عرض الكتب في الصفحة
  function renderBooks() {
    const section = document.getElementById("books-section");
    if (!section) return;
  
    section.innerHTML = "";
    books.forEach((book, index) => {
      const div = document.createElement("div");
      div.className = "book-item";
      div.innerHTML = `
        <img src="${book.image}" alt="${book.name}">
        <h3>${book.name}</h3>
        <p>السعر: ${book.price}</p>
      `;
      div.onclick = () => showPopup(index);
      section.appendChild(div);
    });
  }
  
  // عرض البوباب بالتفاصيل
  function showPopup(index) {
    const book = books[index];
    const popup = document.getElementById("popup");
    const details = document.getElementById("popupDetails");
    details.innerHTML = `
      <h3>${book.name}</h3>
      <p><strong>السعر:</strong> ${book.price}</p>
      <p><strong>المؤلف:</strong> ${book.author}</p>
      <p><strong>عدد الصفحات:</strong> ${book.pages}</p>
    `;
    popup.style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // إضافة كتاب جديد
  const addForm = document.getElementById("addBookForm");
  if (addForm) {
    addForm.onsubmit = function (e) {
      e.preventDefault();
      const name = document.getElementById("bookName").value;
      const price = document.getElementById("bookPrice").value;
      const author = document.getElementById("bookAuthor").value;
      const pages = document.getElementById("bookPages").value;
      const payment = document.getElementById("payment").value;
  
      const newBook = {
        name,
        price: price + " - " + payment,
        author,
        pages,
        image: "https://via.placeholder.com/200x250?text=كتاب+جديد"
      };
  
      books.push(newBook);
      renderBooks();
      addForm.reset();
    };
  }
  
  // تنفيذ عند تحميل الصفحة
  window.onload = renderBooks;
  document.getElementById("requestBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("تم إرسال طلبك بنجاح! هنرجعلك في أقرب وقت ❤️");
    this.reset();
  });
  let cart = [];

  function addToCart(book) {
    if (!cart.find(item => item.name === book.name)) {
      cart.push(book);
      updateCartUI();
    } else {
      alert("الكتاب ده موجود بالفعل في السلة 😊");
    }
  }
  
  function updateCartUI() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.name} - ${book.price}`;
      cartList.appendChild(li);
    });
  }
  fetch('html1.json')
  .then(res => res.json())
  .then(data => {
    const section = document.getElementById("books-section");
    data.forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";

      const img = document.createElement("img");
      img.src = book.image;
      img.alt = book.name;
      img.addEventListener("click", () => {
        addToCart(book);
      });

      const name = document.createElement("h3");
      name.textContent = book.name;

      const price = document.createElement("p");
      price.textContent = book.price;

      bookDiv.appendChild(img);
      bookDiv.appendChild(name);
      bookDiv.appendChild(price);

      section.appendChild(bookDiv);
    });
  });
