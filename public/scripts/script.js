var player0=document.querySelector(".js-player--0"),score0=document.querySelector(".js-player__0--score"),current0=document.querySelector(".js-player__0--current"),player1=document.querySelector(".js-player--1"),score1=document.querySelector(".js-player__1--score"),current1=document.querySelector(".js-player__1--current"),diceBlk=document.querySelector(".js-die--blk"),diceWht=document.querySelector(".js-die--wht"),btnRoll=document.querySelector(".js-die--roll"),btnHold=document.querySelector(".js-die--hold"),btnStart=document.querySelector(".js-btn--start"),btnNew=document.querySelector(".js-btn--new"),btnInfo=document.querySelector(".js-info"),btnClose=document.querySelector(".js-close"),currentPlayer=void 0,scores=void 0,currentScore=void 0,playing=void 0,init=function(){current0.textContent=0,score0.textContent=0,current1.textContent=0,score1.textContent=0,scores=[currentPlayer=0,0],playing=!(currentScore=0),player0.classList.remove("player--winner"),player1.classList.remove("player--winner"),player0.classList.add("js-active"),player1.classList.remove("js-active")},switchPlayer=(init(),function(){currentScore=0,document.querySelector(".js-player__"+currentPlayer+"--current").textContent=currentScore,currentPlayer=0===currentPlayer?1:0,player0.classList.toggle("js-active"),player1.classList.toggle("js-active")});function randomNum(e,r){r=Math.random()*(r-e)+e;return Math.floor(r)}btnRoll.addEventListener("click",function(){var e=randomNum(1,7),r=randomNum(1,7),t=e+r;playing&&(diceBlk.src="images/dice-bk-"+e+".svg",diceWht.src="images/dice-wt-"+r+".svg",console.log(e),console.log(r),1!=e&&1!=r&&(currentScore+=t,document.querySelector(".js-player__"+currentPlayer+"--current").textContent=currentScore),1==e&&1==r&&(scores[""+currentPlayer]=0,document.querySelector(".js-player__"+currentPlayer+"--score").textContent=scores[""+currentPlayer]),1!=e&&1!=r||switchPlayer())}),btnHold.addEventListener("click",function(){playing&&(scores[""+currentPlayer]+=currentScore,document.querySelector(".js-player__"+currentPlayer+"--score").textContent=scores[""+currentPlayer],100<=scores[""+currentPlayer]?(document.querySelector(".js-player__"+currentPlayer+"--score").classList.add("player--winner"),document.querySelector(".js-final").classList.remove("js-hidden"),playing=!1):switchPlayer())}),btnStart.addEventListener("click",function(){init(),document.querySelector(".js-title").classList.add("js-start"),document.querySelector(".js-rules").classList.toggle("js-rules--open"),setTimeout(function(){document.querySelector(".js-title__logo").classList.add("js-container-lg"),document.querySelector(".js-title__copy").classList.add("js-container-sm"),document.querySelector(".js-rules").classList.toggle("js-hidden")},"250")}),btnNew.addEventListener("click",function(){init(),document.querySelector(".js-final").classList.add("js-start")}),btnInfo.addEventListener("click",function(){document.querySelector(".js-rules").classList.toggle("js-rules--open")}),btnClose.addEventListener("click",function(){document.querySelector(".js-rules").classList.remove("js-rules--open")});