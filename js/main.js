function calculate() {
		let total = 0
		let subTotal = 0
		let profit = 0
		let finalTotal = 0

		for (let i = 1; i < 10; i++) {
			var rate = parseFloat(document.getElementById('rate' + i).value)
			var weight = parseFloat(document.getElementById('weight' + i).value)
			if (rate && weight || rate === 0 || weight === 0) {
				total = rate * weight
				document.getElementById('total' + i).value = total.toFixed(2)
				subTotal = subTotal + (rate * weight)
				profit = subTotal * 0.1
				finalTotal = subTotal + profit
				document.getElementById('finalTotal').value = finalTotal.toFixed(2)

			}
		}
	}

	function defaultZero(id) {
		var rate = document.getElementById('rate' + id).value
		var weight = document.getElementById('weight' + id).value

		if (rate === '') {
			document.getElementById('rate' + id).value = 0
		}

		if (weight === '') {
			document.getElementById('weight' + id).value = 0
		}
		calculate()
	}