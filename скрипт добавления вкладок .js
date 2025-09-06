(async function() {
  try {
    const url = https://github.com/SomRaFallen/12/blob/main/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.html; // путь к твоей новой вкладке
    const response = await fetch(url);
    const html = await response.text();

    // Создаем контейнер для новой вкладки
    const container = document.createElement('div');
    container.className = 'new-tab-container';
    container.innerHTML = html;

    // Вставляем DOM в страницу
    const wrap = document.querySelector('.wrap');
    if(!wrap) throw new Error('Элемент .wrap не найден');
    wrap.appendChild(container);

    // Выполняем все скрипты из подгруженного HTML
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      if(oldScript.src) {
        newScript.src = oldScript.src;
        newScript.onload = () => console.log('Подключен внешний скрипт:', oldScript.src);
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });

  } catch (err) {
    console.error('Ошибка при подгрузке новой вкладки:', err);
  }
})();
