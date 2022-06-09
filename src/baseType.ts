/* 
    ES6 的数据类型
        Boolean, Number, String, 
        Array, Function, Object
        Symbol
        undefined
        null

    TypeScript 新增的数据类型
        void
        any
        never
        元组
        枚举
        高级类型

*/


/**
 * 类型注解，相当于强类型语言的类型声明
 * 
 * @syntax (varibale/function): type
 */
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';

// str = 123;   变量的数据类型不可以改变

/**
 * 数组类型
 */
let arr1: number[] = [1,2,3,]
let arr2: Array<number> = [1,2,3]
let arr3: Array<number | string> = [1,2,3, 'abc']


/**
 * 元组类型
 */
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log("🚀 ~ file: baseType.ts ~ line 44 ~ tuple", tuple)
// tuple[2]     //虽然添加成功，但是无法引用。

// let fn = (x, y) => x + y
let fn = (x: number, y: number): number => x + y
// 通常返回值类型可以省略，类型推断。
let fn2 = (x: number, y: number) => x + y
// 定义一种函数类型的变量
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

/**
 * 对象
 */
let obj: object = {x:1, y:1}
// Property 'x' does not exist on type 'object'.ts(2339), 因为简单的定义了 object 类型，没定义它的属性。
// obj.x = 3
let obj2: {x: number, y: number} = {x: 1, y: 1}
obj2.x = 3

/**
 * Symbol 唯一值
 */
let s1: symbol = Symbol()   // 显示的指定s1类型
let s2 = Symbol()   // 类型推断，省略s2的类型


/**
 * undefined 类型
 * 
 * 该类型的变量不能修改为其他任何类型
 * 
 * 其他类型的变量
 * 
 * ts 官方：undefined 和 null 是任何类型的子类型，说明可以复制给其他类型，需要设置 tsconfig.json.
 *  compilerOptions.strictNullChecks: false, 不建议。
 */
let undef: undefined = undefined;

// Type '1' is not assignable to type 'undefined'.ts(2322)
// undef = 1;

// Type 'undefined' is not assignable to type 'number'.ts(2322)
// num = undefined


/**
 * null 类型
 */
let nu: null = null;

// Type 'null' is not assignable to type 'number'.ts(2322)
// num = null

/**
 * void 类型: 没有任何返回值; 
 * 
 *  js 中 void 是一种操作符，可以让任何表达式返回 undefined, eg: void 0
 * 
 *  js 中 undefined 不是一个保留字，可以自定义 undefined 变量去覆盖全局的 undefined
 */
let noReturn = () => {}

// test js undefined
(function() {
    // let undefined = 0
    console.log("🚀 ~ file: baseType.ts ~ line 107 ~ undefined", undefined)
})()


/**
 * any 类型
 * 
 * 不指定类型的变量默认为 any 类型，可以赋值任意类型的值
 * 
 * 不建议使用
 */
let x
x = 1;
x = 'a'
x = true;
x = [];
x = {}
x = () => {}

/**
 * never 类型
 * 
 * 永远不会有返回值
 */
let error = () => {
    throw new Error('error')
}

// 死循环函数
let endless = () => {
    while(true) {}
}