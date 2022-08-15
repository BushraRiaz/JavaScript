// 1-For import one variable or function
// import{name} form "./modules/user.js"
// console.log(name);

// 2-For import two or more unctions
// import{name,age,code,cook,deposit} from "./modules/user.js"
// cook();

// 3-When we import multiple functions, define any key word like--urs,when we use any thing from tis file then we always must put urs before that like---urs.deposit();
// import * as urs from "./modules/user.js"
// urs.deposit();
// 
// when there is two functions has same name then we can change one function name
import {account_type, default as df,deposit as dp } from "./modules/account.js";
// console.log(account_type);
// console.log(name);
// cook();
// deposit();
// dp();
df();