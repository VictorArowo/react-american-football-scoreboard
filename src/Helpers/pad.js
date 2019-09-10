const pad = number => {
  let s = '000' + number;
  return s.substring(s.length - 4);
};

export default pad;
