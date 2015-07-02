How to run project. 
- Open build directory and opne index.html file in browser

Critical rendering path
- I have used ngrok to tunnel my local host to web, then I have used PageSpeed Insights to optimaze page speed. 

Pizza part
- I have identify two bootle necks in jscript "views/js/main.js". One in function "changePizzaSizes" and another in function "updatePositions". The problem was almost the same in both places, expensive jscript calculation in loop.
