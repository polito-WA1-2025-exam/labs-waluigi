# Group "GROUP NAME"

## Members
- s316908 SARACENO MICHELA LUCIA
- s347341 ELENA FAVERO
- s339309 Tumolo Federico

# Exercise "NAME OF EXERCISE"
Lab 02 - Sql

DB is made of 5 tables: Ingredient, Bowl, Ingredient_Bowl, Order, Daily_order.

Ingredient is the table where poke's ingredients are stored. Attributes: Id (int), Name (varchar; name of the ingredient, es: rice), Type (varchar; type of ingredient, either protein or ingredient)
Bowl is the table where all bowls ordered are stored. Attributes: Id (int), Size (char; size of bowl ordered, either R, M, L), Base (varchar; base chosen from user)
Ingredient_Bowl is the table where are stored what ingredients compose each bowl. Attributes: Id_Ingredient (int), Id_Bowl (int).
Order is the table where all orders are stored. Attributes: Id (int), Id_Bowl (int; an order can be composed of many bowls).
Daily_order is the table where are stored all the orderes of each day. Attributes: Date (date as DD/MM/YYYY; works as Id since there cannot be two days with same date but different sets of bowls), Id_order (int)

Links: Ingredient -> Bowl (many to many, therefore Ingredient_Bowl), Bowl -> Order (one to many), Order -> Daily_order (one to many) 

# Lab Journal

(you may update this file to keep track of the progress of your group work, throughout the weeks)
