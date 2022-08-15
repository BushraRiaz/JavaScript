// we can make one default function in every module
export default function(){
  console.log("User default function");
}

import{code} from "./user.js"
let account_no = 89779018437;
let account_type = "saving";

function widthdraw(){
  console.log("amount deducted");
}

function deposit(){
  console.log("Account Deposit...");
  code();
}
export{account_no,account_type,deposit}