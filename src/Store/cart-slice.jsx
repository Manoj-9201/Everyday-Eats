import { createSlice } from "@reduxjs/toolkit";

const Items = [
  {
    id: "1",
    count: 0,
    name: "Greek salad",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "2",
    count: 0,
    name: "Veg salad",
    price: 18,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "3",
    count: 0,
    name: "Clover Salad",
    price: 16,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "4",
    count: 0,
    name: "Chicken Salad",
    price: 24,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "5",
    count: 0,
    name: "Lasagna Rolls",
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "6",
    count: 0,
    name: "Peri Peri Rolls",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "7",
    count: 0,
    name: "Chicken Rolls",
    price: 20,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "8",
    count: 0,
    name: "Veg Rolls",
    price: 15,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "9",
    count: 0,
    name: "Ripple Ice Cream",
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "10",
    count: 0,
    name: "Fruit Ice Cream",
    price: 22,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "11",
    count: 0,
    name: "Jar Ice Cream",
    price: 10,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "12",
    count: 0,
    name: "Vanilla Ice Cream",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "13",
    count: 0,
    name: "Chicken Sandwich",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "14",
    count: 0,
    name: "Vegan Sandwich",
    price: 18,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "15",
    count: 0,
    name: "Grilled Sandwich",
    price: 16,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "16",
    count: 0,
    name: "Bread Sandwich",
    price: 24,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "17",
    count: 0,
    name: "Cup Cake",
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "18",
    count: 0,
    name: "Vegan Cake",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "19",
    count: 0,
    name: "Butterscotch Cake",
    price: 20,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "20",
    count: 0,
    name: "Sliced Cake",
    price: 15,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "21",
    count: 0,
    name: "Garlic Mushroom ",
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "22",
    count: 0,
    name: "Fried Cauliflower",
    price: 22,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "23",
    count: 0,
    name: "Mix Veg Pulao",
    price: 10,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "24",
    count: 0,
    name: "Rice Zucchini",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "25",
    count: 0,
    name: "Cheese Pasta",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "26",
    count: 0,
    name: "Tomato Pasta",
    price: 18,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "27",
    count: 0,
    name: "Creamy Pasta",
    price: 16,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "28",
    count: 0,
    name: "Chicken Pasta",
    price: 24,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "29",
    count: 0,
    name: "Buttter Noodles",
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "30",
    count: 0,
    name: "Veg Noodles",
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "31",
    count: 0,
    name: "Somen Noodles",
    price: 20,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "32",
    count: 0,
    name: "Cooked Noodles",
    price: 15,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: { Items, cartContents: [] },
  reducers: {
    increaseCount(state, action) {
      state.Items.forEach((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
    },
    decreaseCount(state, action) {
      state.Items.forEach((item) => {
        if (item.id === action.payload && item.count > 0) {
          item.count--;
        }
      });
    },
    removeItem(state, action) {
      state.Items = state.Items.filter((item) => item.name !== action.payload);
    },
    updateCartContents(state) {
      state.cartContents = state.Items.filter((item) => item.count > 0);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
