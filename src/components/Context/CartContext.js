import { createContext } from 'react';

export const cartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export const CartContext = createContext(cartItems);

// total price calculation
export function PriceTotal({ items }) {
  let totalPrice = 0;
  items.map(product => {
    totalPrice += (product.price * product.quantity);
    return totalPrice;
  });
  return (
    <span>{'$' + totalPrice}</span>
  )
}


