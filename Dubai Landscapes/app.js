const addTodo = () => {
  const ul = document.getElementsByTagName('ul')[0];
  const input = document.getElementById('todoInput').value;

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__backInDown'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__rubberBand'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__backInRight'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__backInLeft'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__bounceInLeft'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__bounceInLeft'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

  if (input.length > 0) {
    const li = document.createElement('li');

    const animations = [
      'animate__bounceIn'
    ];

    li.classList.add(...animations);
    li.appendChild(document.createTextNode(input));

    ul.appendChild(li);

    document.getElementById('todoInput').value = '';
  }

};


