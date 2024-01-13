// !================================! //
// !dom creation and manipulation ==! //
// !================================! //
// *create* //
const createElement = (element, parent, text) => {
  const child = document.createElement(element);

  testRegExp(text, child);

  if (parent) {
    parent.appendChild(child);

    return child;
  } else {
    return child.outerHTML;
  }
};

const createContainer = (container, element, parent, text, output = false) => {
  // value of output must be a boolean
  if (typeof output !== 'boolean') {
    throw new Error(
      `An error occurred with the createContainer() function's output parameter. Please resolve the aforementioned issue.`
    );
  }

  const child = document.createElement(container);
  const grandChild = createElement(element, child);

  testRegExp(text, grandChild);

  parent.appendChild(child);

  if (output) {
    // return the container
    return child;
  } else {
    // return the element
    return grandChild;
  }
};

const createTextNode = (text, parent) => {
  const child = document.createTextNode(text);

  parent.appendChild(child);

  return child;
};

// *utilities* //
const testRegExp = (text, parent) => {
  // a regular expression that check if the text is HTML
  const regex = /<\/?[a-z][\s\S]*>/i;

  if (text) {
    if (regex.test(text)) {
      parent.innerHTML = text;
    } else {
      createTextNode(text, parent);
    }
  }
};

// *export* //
export { createElement, createContainer };
