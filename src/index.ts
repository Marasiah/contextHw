import  { calculateAveragePrice, calculateTotalPrice, filterItems } from "./ruleEngine";
const items: itemInfo[] = [
    { name: 'Item A', attributes: { color: 'BLUE', price: 15, quantity: 800 }, price: 15.99 },
    { name: 'Item B', attributes: { color: 'RED', price: 20, quantity: 500 }, price: 20.50 },

];

const rules: Rule[] = [
    {
        conditions: [
            { attribute: 'color', value: 'BLUE', operator: '==' },
            { attribute: 'price', value: 17.75, operator: '<' },
            { attribute: 'quantity', value: 750, operator: '>' }
        ],
        score: 100,
        negative: false
    },
    // Add more rules as needed
];

// Filter items based on rules
const filtereditems = filterItems(items, rules, 50);

// Calculate total and average prices of filtered items
const totalPrice = calculateTotalPrice(filtereditems);
const averagePrice = calculateAveragePrice(filtereditems);

console.log('Filtered items:', filtereditems);
console.log('Total Price:', totalPrice);
console.log('Average Price:', averagePrice);
