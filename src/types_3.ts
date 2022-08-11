/*
  Есть общая функция omit, которая удаляет поле из объекта и возвращает его без этого поля.
  Нужно заменить FIXME на соответствующий тип.
*/

type FIXME<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const omit = <T extends Record<any, any>, K extends keyof T>(obj: T, keyToOmit: K): FIXME<T, K> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [keyToOmit]: _, ...withoutKey } = obj;

  return withoutKey;
};
