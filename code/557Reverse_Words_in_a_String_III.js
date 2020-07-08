/* 
  557. 反转字符串中的单词 III
  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序
*/

/* export default (str) => {
  let _result = str.split(' ').map((i) => {
    return i.split('').reverse().join('');
  });
  return _result.join(' ');
}; */

export default (str) => {
  return str
    .split(' ')
    .map((i) => {
      return i.split('').reverse().join('');
    })
    .join(' ');
};
