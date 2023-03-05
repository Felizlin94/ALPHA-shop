import { createContext } from 'react';

export const creditCardInfo = [
  {
    holderName: 'name',
    cardNumber: 'card-number',
    expirationDate: 'date',
    ccv: '000',
  }]


export const CreditCardContext = createContext(creditCardInfo);