const game = require('./lib');

// const playerAction = process.argv[process.argv.length - 1];

let loss_count = 0;

process.stdin.on('data', function (e) {
		const playerAction = e.toString().trim();
		
		const res = game(playerAction);
		res === -1 && loss_count++;

		if(loss_count >= 3) {
			console.log('你真牛逼，我不完了！');
			process.exit(0);
		}
})