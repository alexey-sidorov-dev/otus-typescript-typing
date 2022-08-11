/*
  В функцию приходит массив состояний заказа и фильтруется.
  Нужно заменить FIXME на тип, который вычисляется на основе OrderState.
*/

type FIXME<P, S extends OrderState> = Array<Exclude<P, S>>;

type FilteredState = "buyingSupplies" | "producing";

const orderStates = ["initial", "inWork", "buyingSupplies", "producing", "fullfilled"] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (states: OrderState[]): FIXME<OrderState, FilteredState> => {
  const filteredStates = [] as FIXME<OrderState, FilteredState>;
  states.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });

  return filteredStates;
};
