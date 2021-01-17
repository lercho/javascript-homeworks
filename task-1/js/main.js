let shoppingList = [
    {
        name: "Apples",
        quantity: 5,
        bought: true,
    },
    {
        name: "Oranges",
        quantity: 3,
        bought: false,
    },
    {
        name: "Pears",
        quantity: 2,
        bought: true,
    },
    {
        name: "Potatoes",
        quantity: 10,
        bought: false,
    },
    {
        name: "Milk",
        quantity: 3,
        bought: false,
    },
    {
        name: "Drill",
        quantity: 1,
        bought: false,
    },
    {
        name: "Bread",
        quantity: 1,
        bought: true,
    },
    {
        name: "Carrots",
        quantity: 3,
        bought: false,
    },
    {
        name: "Meat",
        quantity: 2,
        bought: false,
    },
    {
        name: "Ketchup",
        quantity: 1,
        bought: false,
    },

]

function showList(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought) {
            console.log(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought == false) {
            console.log(arr[i]);
        }
    }
}

function addItem(arr, obj) {
    let isInList = false;
    for (let i = 0; i < arr.length; i++) {
        if (obj.name == arr[i].name) {
            arr[i].quantity += obj.quantity;
            isInList = true;
            break;
        }
    }
    if (isInList == false) {
        arr.push(obj);
    }
}

function isBought(arr, obj) {

}

// showList(shoppingList);

// let newItem = {}
// newItem.name = prompt("Введите название продукта");
// newItem.quantity = +prompt("Введите количество");
// newItem.bought = false;

// addItem(shoppingList, newItem);

