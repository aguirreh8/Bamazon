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
	const choicesArray = [];
	console.log("~~~~~~~~~~~ Welcome to Bamazon! Please take a log at our wares:");
	console.log(`ID\t| Product Name| Price | Quantity`);
	for (let i = 0; i < query.length; i++) {
		console.log(`${query[i].item_id}\t| ${query[i].product_name} | ${query[i].price} | ${query[i].stock_quantity}`);
		choicesArray.push(JSON.stringify(query[i].item_id));
	}

	inquirer.prompt([
		{
			name: "userSelection",
			message: "What item would you like to buy (use the item ID to select)?",
			type: "list",
			choices: choicesArray
		},
		{
			name: "buyQuantity",
			message: "How many would you like to buy?",
			type: "input"
		}
	]).then(response => {
		const quantity = parseInt(response.buyQuantity);
		const itemID = parseInt(response.userSelection);
		checkInventory(itemID, quantity);
	})
};

const readAll = () => {
	connection.query(
		"SELECT * FROM products",
		function(error, results) {
			runUserQuery(results);
		}
	)
};

const checkInventory = (itemID, quantity) => {
	connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [itemID], function(err, res) {
		const inventory = parseInt(res[0].stock_quantity) - quantity;
		if (inventory >= 0) {
			commitTranscation(itemID, quantity);
		}
		else {
			console.log("We're sorry, but we do not have enough in our inventory to fufill your request.");
			continueShopping();
		}
	});
};

const commitTranscation = (itemID, quantity) => {
	connection.query(
		"UPDATE products SET stock_quantity = (stock_quantity - ?) WHERE item_id = ?",
		[quantity, itemID],
		function(error) {
			if (error) throw error;;
		});

	connection.query(
		"SELECT product_name, price FROM products WHERE item_id = ?",
		[itemID],
		function(error, results) {
			let total = quantity * results[0].price;
			console.log(`Thank you for buying ${quantity} ${results[0].product_name}(s) for $${total}.`);
			continueShopping();
		}
	)
};


const continueShopping = () => {
		inquirer.prompt([
		{
			name: "continue",
			message: "Would you like to keep shopping?",
			type: "confirm"
		}
	]).then(response => {
		if (response.continue) {
			readAll();
		} else {
			console.log("Come again!");
			connection.end();
		}
	})
};

readAll();