const defObject = (...data) => {
    return (key, setter = false, value = undefined) => {
        if (setter) {
            data= [key,value, ...data]
        }
        const location = data.indexOf(key);
        return (location === -1) ? undefined :data[location+1];
    }
}
const extendObject = (parent, ...data) => {
    data = ["__parent__", parent, ...data];
    return (key, setter = false, value = undefined) => {
        if (setter) {
            data = [key, value, ...data];
        }

        const location = data.indexOf(key);
        return (location === -1) ? getProperty(parent, key) : data[location+1];
    }
}





const obj = defObject(
    "name", "Anam",
     "age", 20,
     "sayHi", (self) => `Hi: ${getProperty(self,"name")}`,
     "eat",(self, food)=> `${getProperty(self,"name")} is eating ${food}`);

const getProperty = (object, property)=> object.apply(null,[property]);
const setProperty = (object, property, value)=> object.apply(null,[property,true,value]);
const parent = (object) => getProperty(object, "__parent__");

const call = (object, method, ...args) =>{
    const fn = getProperty(object, method);
    return fn.apply(null,[object, ...args]);
}

console.log(obj("age",true, 1234));
console.log(getProperty(obj,"age"));
console.log(setProperty(obj,"age",56789));
console.log(getProperty(obj,"age"));
console.log(call(obj,"sayHi"))
console.log(call(obj,"eat","fries"))

const obj2 = extendObject(obj, "pets", "fish");
console.log(getProperty(obj2, "pets"));
console.log(getProperty(obj2, "name"));

const obj3 = extendObject(obj2, "pets", "cat");
console.log(getProperty(obj3, "pets"));
console.log(getProperty(obj3, "name"));
console.log(call(obj3,"sayHi"));
console.log(getProperty(parent(obj3), "pets"))