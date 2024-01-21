export const createNavbar = () => {
  const div = document.createElement('div');

  const logo = document.createElement('a');
  logo.setAttribute('href', '/');

  const img = document.createElement('img');
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
  div.appendChild(logo);

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
      href: '/pages/auth/admin/edit.html',
    },
  ];

  const ul = createLinkList(links.slice(0, 3));
  div.appendChild(ul);

  if (key === 'admin') {
    const admin = links.slice(5);
    admin.reverse().splice(2, 1);

    const ul = createLinkList(admin);

    div.appendChild(ul);
  } else if (key) {
    const user = links.slice(5);
    user.splice(2, 1);

    const ul = createLinkList(user);

    div.appendChild(ul);
  } else {
    const ul = createLinkList(links.slice(3).splice(0, 2));

    div.appendChild(ul);
  }

  return div;
};

const createLinkList = (links) => {
  const ul = document.createElement('ul');

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.appendChild(document.createTextNode(link.name));

    li.appendChild(a);
    ul.appendChild(li);
  });

  return ul;
};
