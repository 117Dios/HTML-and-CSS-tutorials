# User interaction

Most of the programs we deal with on a daily basis are dependent on user interaction. The user enters data, makes choices, and confirms the options given by the program. Thanks to this interaction, the program can start to use the data that is provided to it by the user during its execution (this data was not known when the program was started, nor was it known when it was written). Secondly, the program can perform certain actions conditionally, in other words, the user influences not only the data, but also its execution. An example of this is a calculator program, where the user decides not only the data, but also the operator to use.

The division between client-side and server-side JavaScript also influences potential interactions, with Node.js JavaScript not requiring user interactionm usually. At most, it's just about pointing out certain files for the program to run, though this is already rare by itself.

Client-side applications, instead, require continuous interaction with the user through HTML components. It isn't difficult by itself, but it requires basic understanding of DOM (Document Object Model) and HTML.

Example of HTML page using two interactive elements that leverage JavaScript:

```javascript
<!DOCTYPE html>
<html>
     <head></head>
     <body>
      <input id="myId" type="text"></input>
      <button onClick="console.log(document.getElementById('myId').value)">Get Text</button>
     </body>
</html>
```

- The `<input>` element is an input field where you can enter any text.
    - In our case, we’ve given the `<input>` element the `myId` identifier.
    
- The `<button>` element, as you can guess, corresponds to a button.

- Using the `onClick` attribute, we have indicated that if the button is clicked, a piece of JavaScript code is to be run.

In this code, we refer to the document object (a fragment of the DOM model), which represents our website. We search for the element with the `myId` identifier, retrieve its value (i.e. the text entered) and print the result on the console.

However, DOM model and HTML are beyond the scope of what we're doing, so we use another solution to communicate with the user. This solution is **Dialog boxes**. It is **NOT** used in modern applications, but will be used for this course as it allows the user to input data or make decisions, simulating dummy communications.

# Dialog Box

Dialog boxes are integral part of web browser, available in almost all of them. They are pop-up (or modal) windows, so the user can't interact with the page while using them. This inconvenience is why they have to be used in moderation.

There are three dialog boxes available.

## Alert dialog box

It's the simplest dialog box. To show it, we have to call the method `alert()`.

`alert()` accepts one optional parameter: the text to be displayed. It is the method of the `window` object, but it can be used without typing `window.alert()`, so both forms are correct.

The `window` object is a generalization of the browser window or tab, giving the developer access to data related to the state of the window (for example, scroll position), and some other methods.

Example:

```javascript
alert("Hello, World!")
window.alert("Hello, World! for the second time");
alert(4 * 7);
alert(true);
alert("text 1", "text 2"); // only "text 1" will be displayed
```

Like `console.log()`, we can insert any type into `alert()` and it will be converted to String. The difference is that `console.log()` accepts any number of parameters, while `alert()` accepts, at most, 1.

The `alert()` pop-up will be visible until the user clicks the `OK` button, and code execution will be halted until this dialog box is closed.

## Confirm dialog box

Like `alert()`, the `confirm()` dialog box accepts, at most, 1 parameter; the message to be displayed. The difference is that the `confirm()` dialogue shows 2 buttons: `OK` and `Cancel`. Depending on the button pressed, `confirm()` returns a Boolean value.

- `OK` returns `true`.
- `Cancel` returns `false`.

These values allow for conditional execution of some actions. For example:

```javascript
let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"
 
console.log(message);
```

## Prompt dialog box

It's a developed version of `confirm()`. Like `confirm()`, `prompt()` contains the `OK` and `Cancel` buttons, but also contains a text box for the user to interact with.

`prompt()` accepts up to 2 parameters. The first will be the message displayed, the second one is a default value automatically filled in the text box.

Like `confirm()`, `prompt()` will return a result based on user input.

- `OK`: anything in the text field will be returned from `prompt()` as a String. If nothing has been written, it will return an empty string (`""`).
- `Cancel`: the value returned is `null`.

Since the value returned with the `OK` button is **always** a String, we may need to convert it to another type. As for anything done by a user, we need to be prepared for the fact that the data provided may be invalid, so always treat these values with care.

Example:

```javascript
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
 
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
```