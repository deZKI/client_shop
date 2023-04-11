// export class BasketStore {
//     constructor() {
//         const [items, setItems] = useState([]);
//         const [itemCount, setItemCount] = useState(0);
//         const [total, setTotal] = useState(0);
//
//     }
//     useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify({items, itemCount, total}));
// }, [items, itemCount, total]);
//
// useEffect(() => {
//     console.log('из локал сторедж')
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     if (savedCart) {
//         setItems(savedCart.items);
//         setItemCount(savedCart.itemCount);
//         setTotal(savedCart.total);
//     }
// }, []);
//
// function addToCart(itemName, itemPrice) {
//     // Check if the item already exists in the cart
//     const itemIndex = items.findIndex(item => item.name === itemName);
//     if (itemIndex !== -1) {
//         // If the item exists, increase its count by 1
//         const newItems = [...items];
//         newItems[itemIndex].count += 1;
//         setItems(newItems);
//     } else {
//         // If the item does not exist, add it to the cart with count = 1
//         setItems([...items, {name: itemName, price: itemPrice, count: 1}]);
//     }
//     setItemCount(itemCount + 1);
//     setTotal(total + itemPrice);
// }
//
// function removeCart(itemName, itemPrice) {
//     // Find the item in the cart
//     const itemIndex = items.findIndex(item => item.name === itemName);
//     if (itemIndex !== -1) {
//         const newItems = [...items];
//         // Decrease the count of the item by 1
//         if (newItems[itemIndex].count > 1) {
//             newItems[itemIndex].count -= 1;
//         } else {
//             // If the count is 1, remove the item from the cart
//             newItems.splice(itemIndex, 1);
//         }
//         setItems(newItems);
//         setItemCount(itemCount - 1);
//         setTotal(total - itemPrice);
//     }
// }
// }

