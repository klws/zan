"use strict";
		let counter = 0;
		let hand = document.getElementsByClassName('hand')[0];
		let fingerTop = document.getElementsByClassName('fingerTop')[0];

		class PraiseButton {
			constructor(counter,hand,fingerTop){
				this.counter = counter;
				this.hand = hand;
				this.fingerTop = fingerTop;
			}
			toCount(){
				let add = this.counter + 1;
				this.counter = add;
			}
			bindEvent(){
				hand.onclick = this.doSomeThing.bind(this);
			}
			
		}
		export class Thumb extends PraiseButton{
			doSomeThing(){
				this.toCount();
				this.eleP = document.createElement('p') ;
				fingerTop.appendChild(this.eleP);
				this.setAnimate();
				this.disappearAnimate();
			}
			setAnimate(){
				let eleP = this.eleP;
				let counter  = this.counter;	
				setTimeout(function(){
					eleP.className = 'animateP';
					eleP.innerText = `+${counter}`;
				},100)	

			}
			disappearAnimate(){
				let eleP = this.eleP;	
				let removeEle = this.removeEle;
				let fingerTop = this.fingerTop;
				setTimeout(function(){
					eleP.className = 'disappearP';	
					removeEle(eleP,fingerTop);			
				},1100)		
			}
			removeEle(eleP,fingerTop){
				setTimeout(function(){
					fingerTop.removeChild(eleP);
				},1200)				
			}
		}

		let start = new Thumb(counter,hand,fingerTop);
		start.bindEvent();