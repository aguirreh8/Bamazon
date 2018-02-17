const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
	host: "localhost",
	port: 8889,

	user: "root",
	password: "root",

	database: "bamazon"
});

const runUserQuery = (query) => {
	inquirer.prompt([
		{
			name: "userSelection",
			message: "What item would you like to buy (use the item ID to select)?",
			type: "list",
			choices: function() {
				const choicesArray = [];
				for (let i = 0; i < query.length; i++) {
					choicesArray.push(`${query[i].item_id} | ${query[i].product_name} | ${query[i].price}`);
				}
				return choicesArray;
			}
		},
		{
			name: "buyQuantity",
			message: "How many would you like to buy?",
			type: "input"
		}
	]).then(response => {
		const quantity = parseInt(response.buyQuantity);
		console.log(`You have selected ${response.userSelection} and bought ${quantity} of them`);
		connection.end();
	})
}

const readAll = () => {
	connection.query(
		"SELECT * FROM products",
		function(error, results) {
			runUserQuery(results);
		}
	)
}

readAll();