use callback hook is used to memorize a function instead of caching a computed value of a function .

you can also use useMemo but sometimes other devs can get confused because of its poor readability .

simple bhasa mai bolu toh uska syntax dekhne pe aaisa lagta hai woh koi function hai jiski value kisi varible mai store ho rahi hai jiski wajah se devs mai confusion create hoti hai ki iss line or piece of code ko as a function treat kerma hai ya as a value .

and one tip : more use of performance hook will not increase your website performance it will only increase complexity of your code .

and useCAllback and react.memo should be use together to increase your performance more because it works together well.
