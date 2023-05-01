const cssVars = new Map();

function refresh() {
  let values = [];
  for (let [key, value] of cssVars) {
    values.push(`--${key}:${value}`);
  }
  document.documentElement.style.cssText = values.join(';');
}

export const set = (name, value) => {
  cssVars.set(name, value);
  refresh();
};

export const del = (name) => {
  cssVars.delete(name);
  refresh();
};

export const getCssMap = () => {
  return document.documentElement.style.cssText
    .split(';')
    .filter((x) => x)
    .reduce((prv: Map<string, string>, curr: string) => {
      const attr = curr.split(':');

      prv.set(attr[0].replaceAll('--', '').trim(), attr[1].trim());
      return prv;
    }, new Map<string, string>());
};
