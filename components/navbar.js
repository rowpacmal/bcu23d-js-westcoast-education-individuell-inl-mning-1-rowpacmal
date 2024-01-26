export const createNavbar = () => {
  const container = document.createElement('div');
  container.classList.add('navbar');

  const logo = document.createElement('a');
  logo.classList.add('logo');
  logo.setAttribute('href', '/');

  const img = document.createElement('img');
  img.classList.add('logo-img');

  const imgAttributes = [
    { name: 'src', value: '/assets/images/logo.svg' },
    { name: 'alt', value: 'WestCoast Education Logo' },
    { name: 'width', value: 600 },
    { name: 'height', value: 400 },
    { name: 'loading', value: 'lazy' },
  ];
  imgAttributes.forEach((attribute) => {
    img.setAttribute(attribute.name, attribute.value);
  });

  logo.appendChild(img);
  container.appendChild(logo);

  const checkbox = document.createElement('input');
  checkbox.classList.add('toggle-menu');
  checkbox.setAttribute('type', 'checkbox');
  container.appendChild(checkbox);

  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  container.appendChild(hamburger);

  const menu = document.createElement('div');
  menu.classList.add('menu');

  // key cache is used to remember the user that's signed-in.
  const key = localStorage.getItem('weLoginKey');
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Catalog',
      href: '/pages/catalog.html',
    },
    {
      name: 'About',
      href: '/pages/about.html',
    },
    {
      name: 'Contact',
      href: '/pages/contact.html',
    },
    {
      name: 'Sign In',
      href: '/pages/sign-in.html',
    },
    {
      name: 'Sign Up',
      href: '/pages/sign-up.html',
    },
    {
      name: 'Profile',
      href: `/pages/user.html?id=${key}`,
    },
    {
      name: 'Sign Out',
      href: '?sign-out',
    },
    {
      name: 'Admin',
      href: '/pages/admin/admin.html',
    },
  ];

  const list = createLinkList(links.slice(0, 4));
  menu.appendChild(list);

  if (key === 'admin') {
    const adminList = createUserProfileList(links, key);
    menu.appendChild(adminList);
  } else if (key) {
    const userList = createUserProfileList(links, key);
    menu.appendChild(userList);
  } else {
    const newUserList = createLinkList(links.slice(4).splice(0, 2));
    menu.appendChild(newUserList);
  }

  container.appendChild(menu);

  return container;
};

const createUserProfileList = (links, key) => {
  const user = links.slice(6);

  if (key === 'admin') {
    user.reverse().splice(2, 1);
  } else {
    user.splice(2, 1);
  }

  const list = createLinkList(user);

  return list;
};

const createLinkList = (links) => {
  const list = document.createElement('ul');
  list.classList.add('list');

  links.forEach((link) => {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const a = document.createElement('a');
    a.classList.add('list-link');
    a.setAttribute('href', link.href);
    a.appendChild(document.createTextNode(link.name));

    li.appendChild(a);
    list.appendChild(li);
  });

  return list;
};
