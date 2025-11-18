## ৩ নং প্রশ্নের উত্তর
any, unknown এবং never এর পার্থক্য 
১. any এর মাধ্যমে যেকোনো টাইপের ভ্যালুর জন্য ব্যবহার করা যায়।
যেমনঃ 
```
let myVar: any;
myVar = "Next Level Web Development";
myVar = 560;
myVar = false;
```

২. unknown এর অর্থ হচ্ছে ওই ভ্যালুটার টাইপ ফিক্স করা হয়নি অথবা জানা নেই কিন্ত পরবর্তীতে এই ভ্যালুটার টাইপ ফিক্স করা হবে।
যেমনঃ 
```
let unknownInfo: unknown = "I don’t know";
unknownInfo = 2441139; // 

if (typeof unknownInfo === "string") {
  unknownInfo.toFixed(); 
}
```

৩. Never হচ্ছে এমন একটি টাইপ যেটি কিনা কখনোই হওয়া সম্ভব নয়। 
যেমনঃ
```
type Shape = "classmate" | "bestfriend";
```

## ৫ নং প্রশ্নের উত্তর
Example of Union Type:
```
type contactType = 'emailAddress' | 'phoneNumber';
type ID = number | string; 
function sendNotificationMessage(method: contactType, recipientIdNo: ID) {
  if (method === 'emailAddress') {
    console.log(`Send email to ID: ${recipientIdNo}`);
  } else {
    console.log(`Call the number for ID: ${recipientIdNo}`);
  }
}

sendNotificationMessage('emailAddress', 346);
sendNotificationMessage('phoneNumber', 'mahmud346');
```
Example of Intersection Type:
```
interface studentName {
  name: string;
}
interface studentAge {
  age: number;
}
type studentInfo= studentName & studentAge; 

const userStudentInformation: studentInfo= {
  name: 'Mahmudur Rahman’',
  age: 25,
};
console.log(`${userStudentInformation.name} is ${userStudentInformation.age} years old.`);
```
