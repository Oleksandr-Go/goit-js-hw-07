# goit-js-hw-07

Завдання 1

HTML містить список категорій ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

    Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

Завдання 2

Напиши скрипт для створення галереї зображень на основі масиву даних. HTML
містить список ul.gallery.

<ul class="gallery"></ul>

Використовуй масив об'єктів images для створення елементів <img>, вкладених в
<li>.

Ти можеш створити й додати HTML-елементи, використовуючи
document.createElement() і elem.append() або шаблонні рядки і
elem.insertAdjacentHTML().

    Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
    Додай мінімальне оформлення галереї флексбоксами через CSS класи.
