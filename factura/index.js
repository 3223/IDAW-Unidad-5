const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Oscar Alberto Posadas Lino",
    address: "Ocampo 7",
    city: "Mineral de Pozos",
    state: "GTO",
    country: "MEX",
    postal_code: 37910
  },
  items: [
    {
      item: "Orquilla Izq",
      description: "Compatible Flex-Explore-Edge 2013-2015",
      quantity: 1,
      amount: 230000
    },
    {
      item: "Balatas Delanteras",
      description: "Journey 2009-2013",
      quantity: 1,
      amount: 48000
    },
    {
      item: "Cremallera",
      description: "Reparacion de reten Altima 2010 CVT",
      quantity: 1,
      amount: 350000
    },
    {
      item: "cigueñal",
      description: "motor 2.2 s10-blazer",
      quantity: 1,
      amount: 220000
    },
    {
      item: "Radiador",
      description: "Chevy-monza 2004-2007",
      quantity: 1,
      amount: 78000
    },
    {
      item: "Castrol edge 5L",
      description: "Aceite sintetico 10w-50",
      quantity: 1,
      amount: 120000
    }
  ],
  subtotal: 1046000,
  paid: 0,
  invoice_nr: 64848741
};

createInvoice(invoice, "invoice.pdf");
