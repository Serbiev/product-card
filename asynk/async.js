const statusEl = document.getElementById('status');
const usersContainer = document.getElementById('usersContainer');
const userCardTemplate = document.getElementById('userCardTemplate');

const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

async function loadUsers() {
  const cached = localStorage.getItem('users');

  if (cached) {
    const users = JSON.parse(cached);
    renderUsers(users);
    return;
  }

  statusEl.textContent = 'Данные загружаются...';

  try {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Данные не загрузились');
    }

    const users = await response.json();

    localStorage.setItem('users', JSON.stringify(users));

    statusEl.textContent = '';
    renderUsers(users);

  } catch (error) {
    statusEl.textContent = 'Ошибка при загрузке данных';
    console.error(error.message);
  }
}

function renderUsers(users) {
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const card = createUserCard(user);
    usersContainer.appendChild(card);
  });
}

function createUserCard(user) {
  const clone = userCardTemplate.content.cloneNode(true);

  clone.querySelector('.user-name').textContent = user.name;
  clone.querySelector('.user-surname').textContent = user.surname;
  clone.querySelector('.user-email').textContent = user.email;
  clone.querySelector('.user-age').textContent = `Возраст: ${user.age}`;

  const deleteBtn = clone.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteUser(user.id);
  });

  return clone;
}

function deleteUser(id) {
  const users = JSON.parse(localStorage.getItem('users'));
  const updatedUsers = users.filter(user => user.id !== id);

  localStorage.setItem('users', JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

function deleteAllUsers() {
  localStorage.removeItem('users');
  usersContainer.innerHTML = '';
  statusEl.textContent = 'Все карточки удалены';
}

function getAllUsers() {
  const cached = localStorage.getItem('users');

  if (!cached) {
    statusEl.textContent = 'Пользователей нет, они ещё не загружены';
    return;
  }

  const users = JSON.parse(cached);

  if (users.length === 0) {
    statusEl.textContent = 'Пользователей больше нет';
    return;
  }

  const currentlyShown = usersContainer.children.length;

  if (currentlyShown === users.length) {
    statusEl.textContent = 'Все пользователи уже отображены';
    return;
  }

  statusEl.textContent = '';
  renderUsers(users);
}

getAllBtn.addEventListener('click', getAllUsers);
deleteAllBtn.addEventListener('click', deleteAllUsers);

loadUsers();