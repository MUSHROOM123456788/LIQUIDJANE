window.onload = () => {
  const pages = document.querySelectorAll('.page');

  // Title clickable to return home
  document.querySelectorAll('.title').forEach(title=>{
    title.addEventListener('click', ()=>{
      pages.forEach(p=>p.style.display='none');
      document.getElementById('mainPage').style.display='block';
    });
  });

  // Fish click to open respective page
  document.querySelectorAll('.fish').forEach(fish=>{
    fish.addEventListener('click', ()=>{
      const target = fish.dataset.target;
      pages.forEach(p=>p.style.display='none');
      document.getElementById(target).style.display='block';
    });
  });

  // Mermaid cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  cursor.innerText = '🧜‍♀️';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
};
