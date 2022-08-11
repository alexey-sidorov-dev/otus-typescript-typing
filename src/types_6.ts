/*
    Задача состоит в том, чтобы написать калькулято для натуральных чисел, но только на типах.
    Ниже приведена заготовка.
    Хочется поддержки сложения и вычитания; если хочется еще челленджа, то деление и умножение.
    Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально.
*/

type Zero = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetTupleLength<T extends any[]> = T extends { length: infer L } ? L : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BuildTuple<L extends number, T extends any[] = []> = T extends {
  length: L;
}
  ? T
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BuildTuple<L, [...T, any]>;

type Addition<A extends number, B extends number> = B extends Zero
  ? A
  : GetTupleLength<[...BuildTuple<A>, ...BuildTuple<B>]>;

type Subtraction<A extends number, B extends number> = B extends Zero
  ? A
  : BuildTuple<A> extends [...infer S, ...BuildTuple<B>]
  ? GetTupleLength<S>
  : never;

type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

type Add<A extends number, B extends number> = Addition<A, B>;
type Subtract<A extends number, B extends number> = Subtraction<A, B>;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;
