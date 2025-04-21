why we use memo.

if parent component render then its child components also gets rendered even their states is not changed . so to prevent this unneccessary rendering we use memo hook .

but it has been depreciated in react 19 and introduced a compiler which does the same work as react.memo() hook