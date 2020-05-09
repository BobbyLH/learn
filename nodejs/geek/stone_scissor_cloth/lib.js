// console.log(process.hrtime())

// console.log(process.cpuUsage());
// console.log(process.memoryUsage());

// console.log(process.env)

// console.log(process.argv);
module.exports = function (playerAction) {
	const random = Math.random() * 3;

	const computerAction = random < 1 ? 'stone' : random > 2 ? 'scissors' : 'cloth'

	if (playerAction === computerAction) {
		console.log('平局');
		return 0;
	} else if (
		(computerAction === 'cloth' && playerAction === 'scissors') ||
		(computerAction === 'scissors' && playerAction === 'stone') ||
		(computerAction === 'stone' && playerAction === 'cloth')
	) {
		console.log('玩家胜利');
		return -1;
	} else {
		console.log('电脑胜利');
		return 1;
	}
}