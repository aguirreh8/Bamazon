# Bamazon
A mock replica of an online retail application written in node. Includes MySQL database backup.

## bamazonCustomer.js
When the user runs this file, the program will first read all the data inside the database, and display it in the console.
The user will then be asked to select an item's ID value and how many they would like to buy using **inquerer prompt**.

![GitHub Logo](/img/bamazonCustomer1.JPG)

When all questions are answered, the program will first check if database inventory value is high enough to satisfy the user's asking quantity.
If yes, the program will then verify the user's request and final amount. 

![GitHub Logo](/img/bamazonCustomer2.JPG)

If no, the user will be notified and asked if they want to continue shopping.

![GitHub Logo](/img/bamazonCustomer3.JPG)

The porgram will contiously run until the user chooses not to continue shopping.

![GitHub Logo](/img/bamazonCustomer4.JPG)

## bamazonManager.js

**Coming Soon!!**

## bamazonSupervisor.js

**Coming Soon!!**