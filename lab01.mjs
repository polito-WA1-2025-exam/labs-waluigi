const MAX_REGULAR = 10;
const MAX_MEDIUM = 8;
const MAX_LARGE = 6;

function DailyOrders() {
    this.orders = [];
    this.daily_regular = MAX_REGULAR
    this.daily_medium = MAX_MEDIUM
    this.daily_large = MAX_LARGE  

    // Add order
    this.add = (order) => {
        const sizes = order.filter(bowl => bowl.size)
        for (size of sizes) {
            switch(size) {
                case "R":
                    this.daily_regular--
                case "M":
                    this.daily_medium--
                case "L":
                    this.daily_large--
            }
        }
        if((this.daily_regular < 0) || (this.daily_regular < 0)  || (this.daily_regular < 0)) {
            throw "Too many bowls"
        } else this.orders.push(order)
    }

    // Finds all orders with a specific number of bowls
    this.find = (n_bowls) => {
        this.orders.filter(order => order.bowls.lenght == n_bowls)
    }

    
}

function Order(id) {
    this.id = id;
    this.bowls = [];

    this.add = (bowl) => {
        this.bowls.push(bowl);
    }
}

function Bowl(id, size, base) {
    this.id = id;
    this.size = size;
    this.base = base;
    this.proteins = [];
    this.ingredients = [];

    this.add = (protein) => {
        if (protein.type === "Protein") {
            switch(this.size) {
                case "R":
                    if(proteins.lenght < 1) {
                        this.proteins.append(protein)
                    }
                case "M":
                    if(proteins.lenght < 2) {
                        this.proteins.append(protein)
                    }
                case "L":
                    if(proteins.lenght < 3) {
                        this.proteins.append(protein)
                    }
            }
        }
        else {
            throw "Protein needed,instead ingredient given"
        }
    }

    // TO FIX: need to be at least 1 (Should be fixed but not sure)
    this.add = (ingredient) => {
        if (ingredient.type === "Ingredient") {
            switch(this.size) {
                case "R" || "M":
                    if(ingredients.lenght < 4) {
                        this.ingredients.append(ingredient)
                    }
                case "L":
                    if(ingredients.lenght < 6) {
                        this.ingredients.append(ingredient)
                    }
                }
            }
        else {
                throw "Ingredient needed, instead protein given"
            }

        if (this.ingredients.lenght < 1) {
            throw "Need at least 1 ingredient"
        }
    }
}

function ingredient(name, type) {
    this.name = name;
    this.type = type;
}

/* DB creation
import sqlite from 'sqlite3';
const poke = new sqlite.Database('poke',
(err) => { if (err) throw err; });

poke.run('CREATE TABLE IF NOT EXISTS ingredient (id INTEGER PRIMARY KEY, name VARCHAR NOT NULL, type VARCHAR NOT NULL)');
poke.run('CREATE TABLE IF NOT EXISTS bowl (id INTEGER PRIMARY KEY, size CHAR NOT NULL, base VARCHAR NOT NULL)');
poke.run('CREATE TABLE IF NOT EXISTS ingredient_bowl (id_ingredient INTEGER NOT NULL REFERENCES ingredient(id) ON UPDATE CASCADE, id_bowl INTEGER NOT NULL REFERENCES bowl(id) ON UPDATE CASCADE)');
poke.run('CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, id_bowl INTEGER NOT NULL REFERENCES bowl(id) ON UPDATE CASCADE)');
poke.run('CREATE TABLE IF NOT EXISTS daily_order (date DATE NOT NULL, id_order INTEGER NOT NULL REFERENCES orders(id) ON UPDATE CASCADE)');
 */