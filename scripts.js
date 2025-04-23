/*document.addEventListener('DOMContentLoaded', () => {
 // Находим контейнер со слайдами
 const slides = document.querySelector('.slides');

 // Определяем количество слайдов
 const slideCount = document.querySelectorAll('.slide').length;

 // Находим кнопки «Назад» и «Вперёд»
 const prevButton = document.querySelector('.prev');
 const nextButton = document.querySelector('.next');

 let currentIndex = 0; // Переменная для хранения текущего слайда

 // Функция смены слайдов
 function goToSlide(index) {
     if (index < 0) {
         index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
     } else if (index >= slideCount) {
         index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
     }

     currentIndex = index; // Запоминаем текущий слайд
     slides.style.transform = `translateX(${-index * 100}%)`; // Сдвигаем контейнер со слайдами
 }

 // Добавляем обработчик клика для кнопки «Назад»
 prevButton.addEventListener('click', () => {
     goToSlide(currentIndex - 1);
 });

 // Добавляем обработчик клика для кнопки «Вперёд»
 nextButton.addEventListener('click', () => {
     goToSlide(currentIndex + 1);
 });

 // Устанавливаем первый активный слайд при загрузке страницы
 goToSlide(0);
})
*/
function checkmail() {
    let email = document.querySelector('#EmailField').value;

    //If изменить, чтобы записи в какую-нибудь бд записывались
    if (!email.includes('@') && (!email.includes('.ru') || (!email.includes('.com'))))
        alert('Неверный адрес электронной почты!');
}

function filterCourses() {
    const input = document.getElementById("courseSearch").value.toLowerCase();
    const blocks = document.querySelectorAll(".course-block");

    blocks.forEach(block => {
        const title = block.querySelector("h3").textContent.toLowerCase();
        const text = block.querySelector("p").textContent.toLowerCase();
        if (title.includes(input) || text.includes(input)) {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });
}