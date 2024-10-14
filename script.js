document.getElementById('burgerMenu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});





// Расписание занятий с временем
const schedule = {
    Понедельник: [
        { name: 'Йога', time: '10:00 - 11:00', description: 'Уроки для улучшения гибкости и концентрации.' },
        { name: 'Пилатес', time: '12:00 - 13:00', description: 'Упражнения для укрепления мышц кора.' }
    ],
    Вторник: [
        { name: 'Флай-йога', time: '10:00 - 11:00', description: 'Занятия в гамаке для растяжки и силы.' },
        { name: 'Массаж', time: '14:00 - 15:00', description: 'Расслабляющий массаж для восстановления.' }
    ],
    Среда: [
        { name: 'Растяжка', time: '18:00 - 19:00', description: 'Интенсивная тренировка для всех уровней.' },
        { name: 'Йога', time: '19:30 - 20:30', description: 'Уроки для улучшения гибкости и концентрации.' }
    ],
    Четверг: [
        { name: 'Пилатес', time: '10:00 - 11:00', description: 'Упражнения для укрепления мышц кора.' },
        { name: 'Флай-йога', time: '12:00 - 13:00', description: 'Занятия в гамаке для растяжки и силы.' }
    ],
    Пятница: [
        { name: 'Массаж', time: '14:00 - 15:00', description: 'Расслабляющий массаж для восстановления.' },
        { name: 'Растяжка', time: '18:00 - 19:00', description: 'Интенсивная тренировка для всех уровней.' }
    ],
    Суббота: [
        { name: 'Йога', time: '10:00 - 11:00', description: 'Уроки для улучшения гибкости и концентрации.' },
        { name: 'Флай-йога', time: '12:00 - 13:00', description: 'Занятия в гамаке для растяжки и силы.' }
    ],
    Воскресенье: [
        { name: 'Массаж', time: '14:00 - 15:00', description: 'Расслабляющий массаж для восстановления.' },
        { name: 'Пилатес', time: '16:00 - 17:00', description: 'Упражнения для укрепления мышц кора.' }
    ]
};

// Обработчик нажатия кнопки для выбора дня
document.querySelectorAll('.week button').forEach(button => {
    button.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        const selectedDay = document.getElementById('selected-day');
        const classesList = document.getElementById('classes-list');
        
        selectedDay.textContent = ``;
        classesList.innerHTML = ''; // Очищаем список занятий перед обновлением
        
        // Добавляем занятия для выбранного дня
        schedule[day].forEach(classInfo => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${classInfo.name}</strong> (${classInfo.time}): ${classInfo.description}`;
            
            const bookButton = document.createElement('button');
            bookButton.textContent = 'Записаться';
            bookButton.className = 'book-class-btn';
            bookButton.setAttribute('data-class', classInfo.name);
            li.appendChild(bookButton); // Добавляем кнопку "Записаться"
            classesList.appendChild(li);
        });
    });
});

// Массив для хранения записанных занятий
let bookedClasses = [];

// Функция для обновления списка занятий в личном кабинете
function updateBookedClasses() {
    const bookedList = document.getElementById('booked-classes');
    bookedList.innerHTML = ''; // Очищаем список перед обновлением
    bookedClasses.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item} (Занятие ${index + 1})`;
        bookedList.appendChild(li);
    });
}

// Обработчик нажатия кнопки записи на занятие
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('book-class-btn')) {
        const className = event.target.getAttribute('data-class');
        bookedClasses.push(className); // Добавляем занятие в массив
        updateBookedClasses(); // Обновляем личный кабинет
        alert(`Вы записались на ${className}`);
    }
});