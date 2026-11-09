# `any` বনাম `unknown` বনাম `never`: কেন `unknown` বেশি নিরাপদ?

## Introduction

TypeScript-এ তিনটি বিশেষ টাইপ আছে যেগুলো নতুনদের প্রায়ই বিভ্রান্ত করে: `any`, `unknown` ও `never`। প্রথম দুটি যেকোনো মান রাখতে পারে, আর তৃতীয়টি কোনো মানই রাখতে পারে না। এই লেখায় দেখব এদের পার্থক্য কী এবং কেন `any`-এর বদলে `unknown` ব্যবহার করা উচিত।

## Body

`any` দিলে TypeScript ওই ভেরিয়েবলের টাইপ চেক পুরোপুরি বন্ধ করে দেয়। ফলে ভুল কোডেও কোনো error আসে না, কিন্তু প্রোগ্রাম চলার সময় crash করতে পারে।

```ts
let data: any = "Hello";
data.foo.bar();   // কোনো error নেই, কিন্তু runtime-এ crash!
```

`unknown`-ও যেকোনো মান রাখতে পারে, তবে চেক না করে ব্যবহার করতে দেয় না। আগে narrowing করে নিশ্চিত হতে হয় মানটি কোন টাইপের।

```ts
let value: unknown = "Hello";
value.length;                  // ❌ Error
if (typeof value === "string") {
  console.log(value.length);   // ✅ এখন নিরাপদ
}
```

তাই API রেসপন্স, `JSON.parse`-এর ফলাফল বা `catch`-এর error-এর মতো অজানা ডেটার জন্য `unknown` সবচেয়ে উপযুক্ত। অনেক কোডিং গাইডলাইনে "Do not use any" লেখা থাকে ঠিক এই কারণেই।

অন্যদিকে `never` হলো এমন টাইপ যা কখনোই ঘটে না। যে ফাংশন সবসময় error ছোড়ে, তার রিটার্ন টাইপ `never`।

```ts
const fail = (msg: string): never => {
  throw new Error(msg);
};
```

## Conclusion

`any` সুবিধাজনক মনে হলেও এটা TypeScript-এর সুরক্ষা বন্ধ করে দেয়। `unknown` একই নমনীয়তা দেয়, কিন্তু ব্যবহারের আগে চেক করতে বাধ্য করে, তাই এটাই নিরাপদ পছন্দ। আর `never` ব্যবহার করুন এমন জায়গায়, যেখানে কোনো মান আসা অসম্ভব।

*— MD. ABDUS SALAM*
