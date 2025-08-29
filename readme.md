#Emergency Service

### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

When need to select just one element id we can use normally .getElementById(),
and some time we need to select same classes element in many space. and we can use .getElementByClassName(),

querySelector use when need just single element (.class / #id / div / p / span etc.),
querySelectorAll use when need same element in every space all and we can use loop.

### 2.How do you create and insert a new element into the DOM?

We can use new element create .createElement()
and append to parent div and set innerText or innerHTML.
```const div = document.createElement('div');
    div.innerHTML = `
            
            `
            parentDiv.appendChild(div);
```

### 3.What is Event Bubbling and how does it work?

Event Bubbling is javaScript Propagation steps. When clicked child item trigered its bubble parent and grandparent continues to go body and document. and its usefull to handler smothly.

### 4.What is Event Delegation in JavaScript? Why is it useful?

Event Delegation it can use to parent div we not use event handler in all child div. its bubbling and find child div in uses eventListner. 
Its uses to clean code. and smothly workable when create new element not need set to click event for child element.

### 5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() uses for reloding off . suppose we use form and here every time continues reloding website , this time use to it.

and stopPropagation() uses for event bubbling of which time child element trigered its start bubling to go parent div,, and if use stopPropagation() its stop bubbling.
