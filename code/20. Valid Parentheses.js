/**
 * @param {string} s
 * @return {boolean}
 */
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
示例 :
输入: "()"
输出: true
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/* 
 2 看到的不错的方法
*/
var isValid = (s) => {
	if (s.length % 2 === 1) {
		return false;
	}
	let stack = [];
	let map = new Map();
	map.set('{', '}');
	map.set('(', ')');
	map.set('[', ']');
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (map.has(c)) {
			stack.push(c);
		} else {
			const t = stack[stack.length - 1];
			if (map.get(t) === c) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
};
