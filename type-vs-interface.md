# TypeScript-এ `type` alias বনাম `interface`: কখন কোনটা ব্যবহার করবেন?

## Introduction

TypeScript শিখতে গিয়ে প্রায় সবাই একটা প্রশ্নে আটকে যায়: অবজেক্টের আকৃতি বোঝাতে `type` লিখব, নাকি `interface`? দুটো দেখতে প্রায় একই রকম, কিন্তু এদের ক্ষমতা পুরোপুরি এক নয়। এই লেখায় আমরা পার্থক্যগুলো দেখব এবং কোনটা কখন বেছে নেবেন তা জানব।

## Body

অবজেক্টের আকৃতি বর্ণনা করতে দুটোই সমানভাবে কাজ করে।

```ts
type TUser = { name: string; age: number };
interface IUser { name: string; age: number }
```

তবে `type` আরও অনেক কিছু পারে। এটা দিয়ে union, literal, tuple ও primitive-এর নাম দেওয়া যায়, যা `interface` পারে না।

```ts
type Role = "admin" | "member";   // union
type Point = [number, number];    // tuple
```

অন্যদিকে `interface`-এর বিশেষ ক্ষমতা হলো declaration merging। একই নামে দুবার লিখলে দুটো মিলে একটি interface হয়ে যায়। `type` একই নামে দুবার লিখলে error দেয়।

```ts
interface Employee { name: string }
interface Employee { id: number }   // এখন name ও id দুটোই লাগবে
```

বাড়ানোর (extend) পদ্ধতিও আলাদা। `interface` ব্যবহার করে `extends`, আর `type` ব্যবহার করে intersection (`&`)।

## Conclusion

সংক্ষেপে বললে, অবজেক্ট বা API-র আকৃতির জন্য `interface` ভালো, বিশেষ করে যখন পরে বাড়ানোর দরকার হতে পারে। Union, literal, tuple বা ফাংশন টাইপের জন্য `type` ছাড়া উপায় নেই। সবচেয়ে গুরুত্বপূর্ণ হলো, একটি প্রজেক্টে একটি নিয়ম ধারাবাহিকভাবে মেনে চলা।

*— MD. ABDUS SALAM*
