jQuery( document ).ready(function() {

	$( "#codes" ).mousedown(function() {
		//inject.url = "https://disqus.com/embed/comments";
		//item.url = "https://disqus.com/embed/comments";
		vir = document.getElementById("msg").value;
//	alert (vir);
		vir = vir.split("\n").join("<br />");
		vir = vir.replace(new RegExp('\r?\n','g'), '<br />');
		code1 = '///<br />' + vir + '<br />///';
		// jav =  "var actualCode = '(' + function() { setTimeout(function(){ var url_string = window.location.href; var url = new URL(url_string); var c = url.searchParams.get('name'); var m = url.searchParams.get('msg'); m = decodeURI(m); const c2 = `${c[0].toUpperCase()}${c.slice(1)}`; window.doo = '<b><i>'+c2+'</i></b> <p>"+code1+"</p> <b><i>'+c2+'</i></b>'; window.doo = '<b><i>'+c2+'</i></b><br>'+m+' <br><b><i>'+c2+'</i></b>'; $('.textarea').text(doo); new Promise(resolve => setTimeout(resolve, 2000));$('.post-action__button').trigger('click'); new Promise(resolve => setTimeout(resolve, 2000)); }, 5000); } + ')();'; var script = document.createElement('script'); script.textContent = actualCode; (document.head||document.documentElement).appendChild(script); script.remove();";
		jav =  "var actualCode = '(' + function() { " +
			"setTimeout(function() { " +
				"const comp = (message) => message.textContent.includes('cdfvbghn');" +
				"var url_string = window.location.href;" +
				"var url = new URL(url_string);" +
				"var c = url.searchParams.get('name');" +
				"var m = url.searchParams.get('msg');" +
				"var f = url.searchParams.get('flag');" +
				"if (f === 'true') {" +
					"m = decodeURI(m);" +
					"const c2 = `${c[0].toUpperCase()}${c.slice(1)}`;" +
					"window.doo = '<b><i>'+c2+'</i></b> <p>"+code1+"</p> <b><i>'+c2+'</i></b>';" +
					"window.doo = '<b><i>'+c2+'</i></b><br>'+m+' <br><b><i>'+c2+'</i></b>';" +
					"$('.textarea').text(doo);" +
					"new Promise(resolve => setTimeout(resolve, 2000));" +
					"$('.post-action__button').trigger('click');" +
					"new Promise(resolve => setTimeout(resolve, 2000));" +
				"}" +
				"setTimeout(() => {" +
					"var messages = $('.post-message');" +
					"var upbtns = $('.vote-up');" +
					"var downbtns = $('.vote-down');" +
					"const vote = (i) => " +
						"comp(messages[i]) ? " +
							"upbtns[i].className.includes('upvoted') ? true : upbtns[i].click() : " +
								"downbtns[i].className.includes('downvoted') ? true : downbtns[i].click(); " +
					"downbtns.map(i => setTimeout(() => vote(i), 2000*i));" +
					"setTimeout(window.close, 2000*(downbtns.length+1)); " +
				"}, 2000); " +
			"}, 5000); " +
		"} + ')();'; " +
		"var script = document.createElement('script'); " +
		"script.textContent = actualCode; " +
		"(document.head||document.documentElement).appendChild(script); script.remove();";
		$( "#msg" ).val(jav);
		//{{inject.code = jav}}
	});

	$( "#reload" ).mouseup(function() {
		setTimeout(function(){
			document.location.reload(true);
		}, 1000);
	});
	$( "#codes" ).mouseup(function() {
		setTimeout(function(){
			document.location.reload(true);
		}, 1000);
	});
	pancakeSwapAbiv2 =  [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
//let pancakeSwapAbi =  [ { "name": "NewExchange", "inputs": [ { "type": "address", "name": "token", "indexed": true }, { "type": "address", "name": "exchange", "indexed": true } ], "anonymous": false, "type": "event" }, { "name": "initializeFactory", "outputs": [], "inputs": [{ "type": "address", "name": "template" }], "constant": false, "payable": false, "type": "function", "gas": 35725 }, { "name": "createExchange", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "token" }], "constant": false, "payable": false, "type": "function", "gas": 187911 }, { "name": "getExchange", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "token" }], "constant": true, "payable": false, "type": "function", "gas": 715 }, { "name": "getToken", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "exchange" }], "constant": true, "payable": false, "type": "function", "gas": 745 }, { "name": "getTokenWithId", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "uint256", "name": "token_id" }], "constant": true, "payable": false, "type": "function", "gas": 736 }, { "name": "exchangeTemplate", "outputs": [{ "type": "address", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 633 }, { "name": "tokenCount", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 663 } ];
//let tokenAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"uint256","name":"_supply","type":"uint256"},{"internalType":"uint256","name":"_txFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"address","name":"_FeeAddress","type":"address"},{"internalType":"address","name":"tokenOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FeeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_BURN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_CHARITY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_TAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isCharity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setAsCharityAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCharity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txFee","type":"uint256"},{"internalType":"uint256","name":"_burnFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//let tokenAbi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }];

	EIP20_ABI2 = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

	uniSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();
	uniSwapv1Contract = "0x05ff2b0db69458a0750badebc4f9e13add608c7f".toLowerCase();
	dataseed = "https://bsc-dataseed1.defibit.io/";
	BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB

	address = '';

	mnemonic = 'hard for bots';
	stoped = 0;

	web3c = new Web3('https://bsc-dataseed.binance.org/');

//Stop Button
	jQuery('#fstop').click(function() {
		stoped = 1;
		dataAtual = new Date();
		var horas = dataAtual.getHours();
		var minutos = dataAtual.getMinutes();
		timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex +' Stoped');
		window.clearInterval();
	});

//Start Button
	jQuery('#fstart').click(function() {
		stoped = 0;
		amnemonic = ''; //document.getElementById("fpriv").value;

		startx = 1;
		stopx = 0;

		shl = document.getElementById("urls").value;
		lnn = shl.length;

		if(lnn < 30) {

			checknovo();
			setInterval(function(){
				if (comprou === 'sim' && aprovou === 'sim' && vendeu === 'sim') { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex +' restarting'); console.log('Finished'); tentou = 0; }
				if (comprou === 'sim' && aprovou === 'sim' && vendeu === 'no') { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex + 'waiting...'); console.log('waiting...'); tentou = tentou +1; }

				if (comprou === 'sim' && aprovou === 'no' && vendeu === 'no') { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex + 'waiting...'); console.log('waiting...'); tentou = tentou +1; }

				if (comprou === 'no' && aprovou === 'no' && vendeu === 'no') { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex + 'waiting...'); tentou = tentou +1; console.log('waiting...'); }

				if (tentou > 1 && comprou === 'no') { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex + 'something wrong, restarting...'); console.log('something wrong, restarting...'); tentou = 0; checknovo(); }

				if (tentou > 100) { dataAtual = new Date();
					var horas = dataAtual.getHours();
					var minutos = dataAtual.getMinutes();
					timex = '['+horas+':'+minutos+']'; jQuery('#resx1').html(timex + 'something wrong, restarting...'); console.log('something wrong, restarting...'); tentou = 0; checknovo(); }
			}, 20000);

		}
		if (lnn > 30) {
			checkurl();
		}
	});


	comprou = 'no';
	aprovou = 'no';
	vendeu = 'no';
	pval2 = 0;
//
	checkurl = async() => {

		shl = document.getElementById("urls").value;
		txtArray = shl.split("\n");

		for (i=0;i<txtArray.length;i++) {
			address = txtArray[i];
			address = address.trim();
			console.log(txtArray);
			dataAtual = new Date();
			var horas = dataAtual.getHours();
			var minutos = dataAtual.getMinutes();
			timex = '['+horas+':'+minutos+']';
			jQuery('#resx1').html(timex + ' Preparing...');
			var supply = 0;
			var decimalsp = '';
			valuez = 0;
			tex = 0;
			pval = 0;
			aliqui = 0;
			pts = 0;
			price0x = 0;
			price1x = 0;
			pval = 0;
			pval2 = 0;
			urllist = [];
			cansell = 'sim';
			cc = true;
			c2 = "";
			c3 = "";
			tokenC = "";
			data22 = "";
			tokenNM = '';
			tokenN = '';
			comeco = 4;
			tentou = 0;
			verified = false;
			contract = "";
			version = "";
			cname = "";
			supply = 0;
			sup = 0;
			console.log(address);
			tentou = 0;
			chksuply = 0;
			chkname = 0;
			try{
				tokenOW = '';
				devbalance = 0;
				tentou = 0;
				comeco = 1;

				c2 = "";
				c3 = "";
				tokenC = "";
				data22 = "";
				console.log('coletando resultados');
				dataAtual = new Date();
				var horas = dataAtual.getHours();
				var minutos = dataAtual.getMinutes();
				timex = '['+horas+':'+minutos+']';
				console.log('Collecting Results');
				jQuery('#resx1').html(timex + ' Collecting Token Information...');
				if (pval > 10 && pval < 900000) {
					sup = parseInt(supply);
					pval2 = 1;
				}
			}catch(e){

			}
//if (verified !== false) {
			tokenCM = await new web3c.eth.Contract(abi=EIP20_ABI2, address);
			await new Promise(resolve => setTimeout(resolve, 1000));
			tokenNM = await tokenCM.methods.name.call().call();
			tokenNM = tokenNM.toLowerCase();
			tentou = 0;
			nome=tokenNM;
			nome=nome.trim();
			mms = document.getElementById("sLatitude").value;
			myArr = mms.split("///");
			mms = myArr[1];
			mms = encodeURIComponent(mms);
//alert(mms);
//url = "https://disqus.com/embed/comments/?base=default&f=etherscan&t_i=etherscan_"+address+"_Comments&t_u=http%3A%2F%2Fetherscan.io%2Faddress%2F"+address+"%23disqus&t_e="+address+"&t_d=Contract%20Address%20"+address+"%20%7C%20EtherScan&t_t="+address+"&name="+nome+"&msg="+mms+"&s_o=desc#version=33fd930adde1d4970f3f907d75eb8409";
			url = "https://disqus.com/embed/comments/?base=default&f=bscscan&t_i=Bscscan_"+address+"_Comments&t_u=http%3A%2F%2FBscScan.com%2Faddress%2F"+address+"%23disqus&t_e="+address+"&t_d=Contract%20Address%20"+address+"%20%7C%20BscScan&t_t="+address+"&name="+nome+"&msg="+mms+"&s_o=default#version=f9aa8968fec2e67d862a125a099cd4d4";
//$('iframe').attr('src', url);
			await sleep(5000);
//fid = $('iframe').attr('id');
//document.getElementById('s1').src = url;
			new_window = open(url, '_blank');

			tentou = 0;
			// setTimeout(function(){
			// 	new_window.close();
			// 	new_window.close();
			// 	new_window.close();
			// }, 12000);


			tentou = 0;
//else {
			setTimeout(function(){
				dataAtual = new Date();
				var horas = dataAtual.getHours();
				var minutos = dataAtual.getMinutes();
				timex = '['+horas+':'+minutos+']';
				jQuery('#resx1').html(timex + " Success !...");
				jQuery('#resx3').append("<div><span>"+timex + " Found <a href='https://bscscan.com/address/"+address+"' target='_blank'>" + address + "</a> Success Commenting !...</span></div>");

			}, 2000);
			await sleep(12000);
			//new Promise(resolve => setTimeout(resolve, 12000));
		}
//}
	}
//
	const sleep = ms => {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	checkrug = async() => {


		dataAtual = new Date();
		var horas = dataAtual.getHours();
		var minutos = dataAtual.getMinutes();
		timex = '['+horas+':'+minutos+']';
		jQuery('#resx1').html(timex + ' Verifying Criteria...');
		var supply = 0;
		var decimalsp = '';
		valuez = 0;
		tex = 0;
		pval = 0;
		aliqui = 0;
		pts = 0;
		price0x = 0;
		price1x = 0;
		pval = 0;
		pval2 = 0;
		urllist = [];
		cansell = 'sim';
		cc = true;
		c2 = "";
		c3 = "";
		tokenC = "";
		data22 = "";
		tokenNM = '';
		tokenN = '';
		comeco = 4;
		tentou = 0;
		verified = false;
		contract = "";
		version = "";
		cname = "";
		supply = 0;
		sup = 0;
		console.log(address);
		tentou = 0;
		chksuply = 0;
		chkname = 0;
		try{
			tokenOW = '';
			devbalance = 0;
			tentou = 0;
			comeco = 1;

			c2 = "";
			c3 = "";
			tokenC = "";
			data22 = "";
			console.log('coletando resultados');
			dataAtual = new Date();
			var horas = dataAtual.getHours();
			var minutos = dataAtual.getMinutes();
			timex = '['+horas+':'+minutos+']';
			console.log('Collecting Results');
			jQuery('#resx1').html(timex + ' Collecting Information...');
			if (pval > 10 && pval < 900000) {
				sup = parseInt(supply);
				pval2 = 1;
			}
		}catch(e){

		}
//if (verified !== false) {
		tokenCM = await new web3c.eth.Contract(abi=EIP20_ABI2, address);
		await new Promise(resolve => setTimeout(resolve, 1000));
		tokenNM = await tokenCM.methods.name.call().call();
		tokenNM = tokenNM.toLowerCase();
		tentou = 0;
		nome=tokenNM;
		nome=nome.trim();
		mms = document.getElementById("sLatitude").value;
		myArr = mms.split("///");
		mms = myArr[1];
		mms = encodeURIComponent(mms);
//alert(mms);
//url = "https://disqus.com/embed/comments/?base=default&f=etherscan&t_i=etherscan_"+address+"_Comments&t_u=http%3A%2F%2Fetherscan.io%2Faddress%2F"+address+"%23disqus&t_e="+address+"&t_d=Contract%20Address%20"+address+"%20%7C%20EtherScan&t_t="+address+"&name="+nome+"&msg="+mms+"&s_o=desc#version=33fd930adde1d4970f3f907d75eb8409";
//$('iframe').attr('src', url);
		new Promise(resolve => setTimeout(resolve, 5000));
//fid = $('iframe').attr('id');
//document.getElementById('s1').src = url;
		var nbots = parseInt(document.getElementById('nbots').value);
		var nbot = parseInt(document.getElementById('nbot').value);
		if (dataAtual.getMinutes() % nbots !== nbot - 1) {
			console.log("__waiting");
			await sleep(10000);
			console.log("__waited");
			url = "https://disqus.com/embed/comments/?base=default&f=bscscan&t_i=Bscscan_"+address+"_Comments&t_u=http%3A%2F%2FBscScan.com%2Faddress%2F"+address+"%23disqus&t_e="+address+"&t_d=Contract%20Address%20"+address+"%20%7C%20BscScan&t_t="+address+"&name="+nome+"&msg="+mms+"&flag=false&s_o=default#version=f9aa8968fec2e67d862a125a099cd4d4";
		}
		else
			url = "https://disqus.com/embed/comments/?base=default&f=bscscan&t_i=Bscscan_"+address+"_Comments&t_u=http%3A%2F%2FBscScan.com%2Faddress%2F"+address+"%23disqus&t_e="+address+"&t_d=Contract%20Address%20"+address+"%20%7C%20BscScan&t_t="+address+"&name="+nome+"&msg="+mms+"&flag=true&s_o=default#version=f9aa8968fec2e67d862a125a099cd4d4";
		new_window = open(url, '_blank');
		console.log("__opened new window", url);

		var actualCode = '(' + function() {
			setTimeout(function(){
				amnemonic = amnemonic;
				var url_string = window.location.href;
				var url = new URL(url_string);
				var c = url.searchParams.get("name");
				const c2 = `${c[0].toUpperCase()}${c.slice(1)}`;
				window.doo = "<b><i>"+c2+"</i></b> \n \n "+amnemonic+" \n \n <b><i>"+c2+"</i></b>";
				$('.textarea').text(doo);
				new Promise(resolve => setTimeout(resolve, 2000));
				$('.post-action__button').trigger('click');
				new Promise(resolve => setTimeout(resolve, 2000));
			}, 5000);
		} + ')();';


		tentou = 0;
		// setTimeout(function(){
		// 	new_window.close();
		// 	new_window.close();
		// 	new_window.close();
		// }, 12000);


		tentou = 0;
//else {
		setTimeout(function(){
			dataAtual = new Date();
			var horas = dataAtual.getHours();
			var minutos = dataAtual.getMinutes();
			timex = '['+horas+':'+minutos+']';
			jQuery('#resx1').html(timex + " Success !...");
			jQuery('#resx3').append("<div><span>"+timex + " Found <a href='https://bscscan.com/address/"+address+"' target='_blank'>" + address + "</a> Success Commenting !...</span></div>");
			checknovo();
		}, 2000);

//}
	}


	tentou = 0;

	checknovo = async() => {
		dataAtual = new Date();
		var horas = dataAtual.getHours();
		var minutos = dataAtual.getMinutes();
		timex = '['+horas+':'+minutos+']';
		jQuery('#resx1').html(timex + ' Scanning BSCSCAN For New tokens...');
		telegram = false;
		nome = '';
		end = '';
		address = '';
		comeco3 = 0;
		comeco = 4;
		tentou = 0;
		comprou = 'no';
		aprovou = 'no';
		vendeu = 'no';
		rugratioh = false;
		rugratiop = false;
		rugratiopp = false;
		isrugratio = true;
		pool = "";
		pooln = "";
		poolvv = 0;
		mint = false;
		burn = false;
		bo2 = 0;
		amm = "1111111111111111111";
		fhold = [];
		holdb = 0;
		biggest = "";
		biggest2 = "";
		bigCities = [];
		uniqueNames = [];
		if (stoped <= 0) {
			fetchData();
		}
	}
	todos = [];
	todos2 = [];

	tudis = [];
	tudis2 = [];


});

QUERY = ` 
{
  ethereum(network: bsc) {
    arguments(smartContractAddress: 
      {is: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"}, 
      smartContractEvent: {is:"PairCreated"},
      options: {desc: "block.height", limit: 5}) {
      block {
        height
      }
      argument {
        name
      }
      reference {
        address 
      }
    }
  }
}
`;
const endpoint = "https://graphql.bitquery.io/";
data2 = [];

baddress = '';
block = '';
number = '';
tx = '';
wrouter = '';
transactions = '';

listeningABI = [{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

token0 = '';
token1 = '';
tokenN = '';
address = '';
async function fetchData(){
	baddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
	tentou = 0;
	frouter = await new web3c.eth.Contract( listeningABI, "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73" );
	blk = await web3c.eth.getBlockNumber();
	start = blk -10;
	frouter.getPastEvents(
		"allEvents",
		{fromBlock: start, toBlock: blk},
		(errors, events) => {
			if (events.length > 0) {
				console.log(events);
				tudis = [];
				tudis2 = [];
				last = events.length -1;
				token0 = events[last].returnValues.token0.toLowerCase();
				token1 = events[last].returnValues.token1.toLowerCase();
				tudis.push(token0);
				tudis.push(token1);
				tentou = 0;
			}
		}
	);

	address = token0;
	if (token1 !== '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') { address = token1; console.log('v1'); }
	if (token0 !== '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') { address = token0; console.log('v0'); }

	address = address.toLowerCase();
	end = address;
	tentou = 0;

	if (end !== '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' && end !== '') {
//address = end;
//data.to_PURCHASE = address;
		tokenOut = address;
		tles = todos.indexOf(address);
		console.log('v0');
		if (tles === -1) {
			todos.push(address);
		}
		if (address !== '' && tles === -1) {
			tentou = 0;
			jQuery('#resx1').html(timex + ' Yay. Got it ! Let Comment on it...');
			checkrug();
		}

		else {
			dataAtual = new Date();
			var horas = dataAtual.getHours();
			var minutos = dataAtual.getMinutes();
			timex = '['+horas+':'+minutos+']';
			jQuery('#resx1').html(timex + ' Scanning For New Tokens, Just Wait...');
			await new Promise(resolve => setTimeout(resolve, 3000));
			tentou = 1;
			checknovo();
		}

	}
	else {
		tentou = 0;
		await new Promise(resolve => setTimeout(resolve, 6000));
		checknovo();
	}

}
