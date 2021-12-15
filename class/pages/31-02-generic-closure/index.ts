/* eslint-disable no-unused-vars */
// 클로저(함수선언식) - 기초
function firstFunc(arg1: string) {
  return function secondFunc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const resultClosure1 = firstFunc("영희")(20);

// 클로저(함수선언식) - 기초(any)
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const resultClosure2 = firstFunc2("영희")(20);

// 클로저(함수선언식) - 기초(generic)
function firstFunc3<T, U>(arg1: T) {
  return function secondFunc3(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const resultClosure3 = firstFunc3("영희")(20);

// 클로저(화살표함수)
// prettier-ignore
const firstArrow=<T, U>(arg1: T)=>(arg2: U): [T, U]=>{
    return [arg1, arg2]
}

const resultArrow = firstArrow("영희")(20);

// 클로저(화살표함수)
// prettier-ignore
const firstArrow2=<C, P extends { aaa: string }>(component: C)=>(props: P): [C, P]=>{
    return [component, props]
}

const resultArrow2 = firstArrow("Presenter")({ aaa: "철수" });
