# Using nullish coalescing in variable

```js
    const product = {
        dataValid: '10/08/2028',
        type: 0
    }

    // const inforType = product.type || "unavailable information"; // this generates bugs in the code
    const inforType = product.type ?? "unavailable information"; // 
    dataValid = product.dataValid


    console.log(dataValid, inforType)
```
