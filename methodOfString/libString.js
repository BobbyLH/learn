function backwardString(string , index1 , index2 , isReverse){
	if (typeof(string) != 'string' && typeof(string) != 'object') {
		throw new Error('please pass string ');
	};
	if (!index1) {
		throw new Error('please pass initial position ');
	};
	if (typeof(index1) == 'string' || typeof(index2) == 'string') {
		throw new Error('please pass number ');
	};
	if (index1 >= 0 || index2 >= 0 && index2 !== true) {
		throw new Error('please pass minus ');
	};
	var a = string.split('');
	if (arguments.length == 4 && isReverse === true) {
		var b = a.reverse().slice(-index1-1 , -index2).join('');
		return b;
	}else if (arguments.length == 3 && index2 === true) {
		var b = a.reverse().slice(-index1-1).join('');
		return b;
	};
	if (!index2) {
		var b = a.reverse().slice(-index1-1).reverse().join('');
		return b;
	}else if (index2 && typeof(index2) == 'number') {
		var b = a.reverse().slice(-index1-1 , -index2).reverse().join('');
		return b;
	};
	
}; //函数的第一个参数是字符串或者字符串对象，第二个参数为要截取字符串的倒数起始位置（倒数第一个为-1）
// 第三个参数为可选参数，代表要截取字符串的结束位置（倒数，负数），不传入，则会从起始位置截取到正数第一个字符串 ,若传入true，则返回倒数反转的字符串
// 第四个参数为可选参数，代表是否将倒数截取的字符串反转，若要反转则传入布尔值true
// 第一个参数要求传入字符串或者字符串对象；
// 第二个参数要求传入数字或者数字对象；
// 第三个参数要求传入数字或者数字对象或者布尔值true;
// 第四个参数要求传入布尔值true;



