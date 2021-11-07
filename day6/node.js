let coffList = "";
const addE = (name) => {
  coffList = name;
  console.log(coffList);
  setTimeout(addA, 500, "a");
};

const addA = (name) => {
  coffList += ", " + name;
  console.log(coffList);
  setTimeout(addm, 500, "m");
};

const addm = (name) => {
  coffList += ", " + name;
  console.log(coffList);
  setTimeout(addl, 500, "l");
};

const addl = (name) => {
  coffList += ", " + name;
  console.log(coffList);
};

setTimeout(addE, 500, "es");
