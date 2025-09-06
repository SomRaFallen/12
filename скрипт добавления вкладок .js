(function() {
  const url = https://github.com/SomRaFallen/12/blob/main/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.html; // путь к твоему HTML-файлу с новой вкладкой

  fetch(url)
    .then(response => response.text())
    .then(html => {
      // создаем контейнер для новой вкладки
      const container = document.createElement('div');
      container.className = 'new-tab-container';
      container.innerHTML = html;

      // вставляем в существующий wrap (или куда нужно)
      const wrap = document.querySelector('.wrap');
      if(wrap) wrap.appendChild(container);

      // выполняем скрипты из подгруженного HTML
      container.querySelectorAll('script').forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(err => console.error('Ошибка при загрузке новой вкладки:', err));
})();
