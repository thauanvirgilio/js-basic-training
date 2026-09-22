# Four ways to show output in the browser

```js
document.getElementById("firstOutput").innerHTML = "First output type with getElementById";
// also accepts numbers
alert('third output type with alert');
console.log("fourth output type");
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Learning Js</h1>
    <p id="firstOutput"></p>

    <!-- always reference the js at the end of the file -->
    <script src="./outputs.js"></script>

    <script>
        document.write('Second output type with document write');
    </script>
</body>
</html>
```
