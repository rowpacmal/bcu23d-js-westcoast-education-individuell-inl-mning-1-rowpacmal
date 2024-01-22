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
  ];

  imgAttributes.forEach((attribute) => {
    img.setAttribute(attribute.name, attribute.value);
  });

  logo.appendChild(img);
  container.appendChild(logo);

  const key = localStorage.getItem('weCacheKey');
  const links = [
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

  const checkbox = document.createElement('input');
  checkbox.classList.add('toggle-menu');
  checkbox.setAttribute('type', 'checkbox');

  container.appendChild(checkbox);

  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');

  container.appendChild(hamburger);

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const list = createLinkList(links.slice(0, 3));

  menu.appendChild(list);

  if (key === 'admin') {
    const admin = links.slice(5);
    admin.reverse().splice(2, 1);

    const list = createLinkList(admin);

    menu.appendChild(list);
  } else if (key) {
    const user = links.slice(5);
    user.splice(2, 1);

    const list = createLinkList(user);

    menu.appendChild(list);
  } else {
    const list = createLinkList(links.slice(3).splice(0, 2));

    menu.appendChild(list);
  }

  container.appendChild(menu);

  return container;
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
