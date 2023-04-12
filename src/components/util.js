/* 특정 글자 수 넘으면 ... 으로 넘기기 */
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export { truncate };
