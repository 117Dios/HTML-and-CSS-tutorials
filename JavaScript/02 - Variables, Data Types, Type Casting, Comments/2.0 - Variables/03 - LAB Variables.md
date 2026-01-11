# Estimated time
15-30 minutes

# Level of difficulty
Easy

# Objectives
Familiarize the student with:
- variables (i.e. naming, declaring, initializing and modifying their values)

# Scenario
Our task will be to create a list of contacts. Initially, the list will be quite simple: we will only write three people to it using the data shown in the table below. In the rest of the course, you will return to this script and systematically extend it with new functionality, using the newly learned elements of JavaScript.

|Name  |Phone   |Email   |
|---|---|---|
|  Maxwell Wright | (0191) 719 6495  | Curabitur.egestas.nunc@nonummyac.co.uk  |
|  Raja Villarreal | 0866 398 2895  | posuere.vulputate@sed.com  |
|   Helen Richards| 0900 1111  | libero@convallis.edu  |

Declare and initialize the variables where you will store all the information (nine variables in total). Display in the console information about the first and last contact in the form: name/phone/email.

<details>
<summary>My solution</summary>

```javascript
let name_1, name_2, name_3, phone_1, phone_2, phone_3, email_1, email_2, email_3;

name_1 = "Maxwell Wright";
name_2 = "Raja Villarreal";
name_3 = "Helen Richards";

phone_1 = "(0191) 719 6495"
phone_2 = "0866 398 2895";
phone_3 = "0900 1111";

email_1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
email_2 = "posuere.vulputate@sed.com";
email_3 = "libero@convallis.edu";

console.log(name_1,"/",phone_1,"/",email_1);
console.log(name_3,"/",phone_3,"/",email_3);
```
</details>