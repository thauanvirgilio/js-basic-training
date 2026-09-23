# Optional chaining in object
I learned how to apply optional chaining to a nested object

```js
const product = {
    name: 'toilet',
    attributes: {
        tech: true,
        premiumQuality: true,
        manualControls: undefined,
    },
    brand: 'nameExample'
};

const hasTech = product.attributes === null || product.attributes === undefined ? "no attributes" : product.attributes.tech;
const hasTechOptionalChaining = product.attributes?.tech;
const hasManualControls = product.attributes?.manualControls;

console.log(hasTech) //ture
console.log(hasTechOptionalChaining); //true
console.log(hasManualControls); // undefined
```
