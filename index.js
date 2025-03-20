let original = {
    name: 'Maxim',
    age: 24,
    someArray: [
        1,
        2,
        3,
        4,
        5
    ],
    isObj: true,
    someObj: {
        testObj: true
    },
    someDate: new Date(),
    someMap: new Map([[1, 2], [3, 4]]),
    someSet: new Set([1, 2, 3]),
    someFunction: (value) => {
        let valueForFunction = value;
        return true;
    },
    someSymbol: Symbol("testSymbol")
};
let protoObj = {
    isProto: true
};
original.__proto__ = protoObj;

const dipperCopyOfObject = (objectForCopy) => {
    const functionForCopy = objectForCopy.someFunction;
    delete objectForCopy.someFunction;
    const symbolForCopy = objectForCopy.someSymbol;
    delete objectForCopy.someSymbol;
    let copyOfObject = structuredClone(objectForCopy);
    copyOfObject.someFunction = functionForCopy;
    copyOfObject.someSymbol = symbolForCopy;
    copyOfObject.__proto__ = objectForCopy.__proto__;
    return copyOfObject
}

const copy = dipperCopyOfObject(original)