let array = [
    {
        title: "title1",
        description: "description1",
        imageUrl: "https://images.unsplash.com/photo-1631580693563-ed73220605b7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "title2",
        description: "description2",
        imageUrl: "https://images.unsplash.com/photo-1631604124953-fbbc915dd82f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "title3",
        description: "description3",
        imageUrl: "https://images.unsplash.com/photo-1631553071797-19d0bdefe519?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
]

function main(id, data) {
    // Получение целевого элемента из документа
    let parentElement = document.querySelector(`#${id}`);
    // Главный счетчик для переключения слайдов
    let counter = 0;
    // Массив с данными, разворачиваем массив с помощью ...
    let dataArray = [...data];


    // Функция для создания кнопок, для переключения слайдов
    function createButton(parentId, childId, textButton) {
        // Создаем элемент
        let buttonElement = document.createElement("button");
        // Создаем ему уникальный id, состоящий из id родительского блока, и id для создаваемого элемента
        buttonElement.id = `${parentId}-${childId}`;
        // Добавляем контент
        buttonElement.textContent = textButton;
        // Возвращаем готовый элемент
        return buttonElement;
    }
    // Создаем кнопки для переключения слайда через функцию
    let buttonPrev = createButton(id, "button-prev", "Prev");
    let buttonNext = createButton(id, "button-next", "Next");
    // Вставляем кнопки в целевой элемент
    parentElement.insertAdjacentElement("beforeend", buttonPrev);
    parentElement.insertAdjacentElement("beforeend", buttonNext);


    // Функции для создания элементов слайда
    // Создание заголовка слайда
    function createSlideTitle(parentId, childId, item) {
        // Создаем элемент
        let slideTitle = document.createElement("h2");
        // Создаем ему уникальный id, состоящий из id родительского блока, и id для создаваемого элемента
        slideTitle.id = `${parentId}-${childId}`;
        // Добавляем контент из массива с данными
        slideTitle.textContent = item;
        // Возвращаем готовый элемент
        return slideTitle;
    }

    // Создание описания слайда
    function createSlideDescription(parentId, childId, item) {
        // Создаем элемент
        let slideDescription = document.createElement("p");
        // Создаем ему уникальный id, состоящий из id родительского блока, и id для создаваемого элемента
        slideDescription.id = `${parentId}-${childId}`;
        // Добавляем контент из массива с данными
        slideDescription.textContent = item;
        // Возвращаем готовый элемент
        return slideDescription;
    }

    // Создание картинки
    function createSlideImage(parentId, childId, item) {
        // Создаем элемент
        let slideImage = document.createElement("img");
        // Создаем ему уникальный id, состоящий из id родительского блока, и id для создаваемого элемента
        slideImage.id = `${parentId}-${childId}`;
        // Добавляем url адрес картинки из массива с данными
        slideImage.src = item;
        // Возвращаем готовый элемент
        return slideImage;
    }

    // Функция для создания слайда
    function createSlide(array, counterItem) {
        // Создаем элементы слайдера, передаем id родительского блока, id создаваемого блока, данные из массива данных
        let slideTitle = createSlideTitle(id, "slide-title", array[counterItem].title);
        let slideDescription = createSlideDescription(id, "slide-description", array[counterItem].description);
        let slideImage = createSlideImage(id, "slide-image", array[counterItem].imageUrl);
        // Вставляем элементы в целевой элемент
        parentElement.insertAdjacentElement("beforeend", slideTitle);
        parentElement.insertAdjacentElement("beforeend", slideDescription);
        parentElement.insertAdjacentElement("beforeend", slideImage);
    }
    // Запускаем функцию для создания слайда
    createSlide(dataArray, counter)


    // Функция для смены информации в слайде, передаем массив с данными, и счетчик
    function changeSlideContent(array, counterItem) {
        // Ищем в документе только что созданные элементы слайдера, и передаем им данные переданные в аргументах
        document.querySelector(`#${id}-slide-title`).textContent = array[counterItem].title;
        document.querySelector(`#${id}-slide-description`).textContent = array[counterItem].description;
        document.querySelector(`#${id}-slide-image`).src = array[counterItem].imageUrl;
    }


    // Добавляем прослушку событий на созданные кнопки
    buttonPrev.addEventListener("click", () => {
        // Уменьшаем счетчик
        counter--;
        // Если счетчик меньше нуля
        if (counter < 0) {
            // То присваиваем ему индекс последнего элемента в массива
            counter = dataArray.length - 1;
        }
        // Запускаем функцию по смене информации в слайде, на каждое нажатие мыши
        changeSlideContent(dataArray, counter)
    });

    buttonNext.addEventListener("click", () => {
        // Увеличиваем счетчик
        counter++;
        // Ксли счетчик больше или равен длине массива с данными
        if (counter >= dataArray.length) {
            // То присваиваем ему индекс первого элемента в массива
            counter = 0;
        }
        // Запускаем функцию по смене информации в слайде, на каждое нажатие мыши
        changeSlideContent(dataArray, counter)
    });
}

main("main-slider", array);
main("second-slider", array);


// Добавить классы для общей стилизации
// Добавить стили
// Сделать индексную страницу
// Написать файл readme
// Подключить гитхаб пейджес
// Сделать гифку
// Подключить шрифты и иконки