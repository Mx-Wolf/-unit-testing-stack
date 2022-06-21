const UNDERFLOW_ERROR = 'underflow';
const OVERFLOW_ERROR = 'overflow';
interface ListItem<T> {
  prev: ListItem<T> | undefined;
  value: T;
}
const willOverflow = (count: number, limit: number) => count >= limit;
const ensureCapacity = (count: number, limit: number) => {
  if (willOverflow(count, limit)) {
    throw new Error(OVERFLOW_ERROR)
  }
}
export const createStack = <T>(limit: number) => {
  let top: ListItem<T> | undefined = undefined;
  let count = 0;
  return ({
    push: (item: T) => {
      ensureCapacity(count, limit);
      top = {
        prev: top,
        value: item,
      };
    },
    pop: () => {
      if (typeof top === "undefined") {
        throw new Error(UNDERFLOW_ERROR);
      }
      const { prev, value } = top;
      top = prev;
      return value;
    }
  });
};
