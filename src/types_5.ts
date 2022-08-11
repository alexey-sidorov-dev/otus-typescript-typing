/*
    Есть функция, которая достает из реакт компонента (любого: и Functional, и Class) его defaultProps.
    Нужно заменить FIXME на правильный тип.
*/

type FIXME = React.ComponentType extends { defaultProps?: infer P } ? P | undefined : never;

export const getDefaultProps = <T>(component: React.ComponentType<T>): FIXME => component.defaultProps;
