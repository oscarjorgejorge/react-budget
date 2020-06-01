import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 243,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "4",
    description: "Water Bill",
    note: "",
    amount: 6354,
    createdAt: moment(0).add(8, "days").valueOf(),
  },
];
