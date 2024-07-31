const TICKET_PRICE = 25;

function canSellTickets(tickets: number[], ticketPrice: number) {
  let cashRegister = 0;
  for (const ticket of tickets) {
    const change = ticket - ticketPrice;
    if (change > cashRegister) return 'NO';
    cashRegister += ticketPrice;
    cashRegister -= change;
  }
  return 'SI';
}

console.log(canSellTickets([25, 25, 50], TICKET_PRICE)); // SI
console.log(canSellTickets([25, 100], TICKET_PRICE)); // NO
console.log(canSellTickets([25, 25, 50, 50, 100], TICKET_PRICE)); // NO
console.log(canSellTickets([25, 25, 25, 25, 50, 100], TICKET_PRICE)); // SI
console.log(canSellTickets([25, 25, 25, 25, 50, 100, 50, 100], TICKET_PRICE)); // NO
