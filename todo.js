//Example item object
const item1 = {
	id : 1,
	title : 'Launch Skills Challenge',
	description : 'Software Engineering Skills Challenge',
	create_date : new Date(),
	due_date : new Date(2020, 10, 16, 23, 59),
	status : 'Working On',
	rank : 1
};

//Example to do list object
const toDoList = {
	items : [item1],
	deleteItem (id) {
        delete items[id];
    },
	reorder (id, rank) {
        items[id].rank = rank;
    },
	editItem (id, title, description, due_date, status, rank) {
        items[id].title = title;
        items[id].description = description;
        items[id].due_date = due_date;
        items[id].status = status;
        this.reorder(id, rank);
    },
	addItem (title, description, due_date) {
        var item = {
            id : this.items[this.items.length - 1].id + 1,
            title : title,
            description : description,
            create_date : new Date(),
            due_date : due_date,
            status : 'New',
            rank : this.items[this.items.length - 1].rank + 1,
        }
        this.items.push(item)
    }
};
