"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var counter = 0;
var hand = document.getElementsByClassName('hand')[0];
var fingerTop = document.getElementsByClassName('fingerTop')[0];

var PraiseButton = function () {
	function PraiseButton(counter, hand, fingerTop) {
		_classCallCheck(this, PraiseButton);

		this.counter = counter;
		this.hand = hand;
		this.fingerTop = fingerTop;
	}

	_createClass(PraiseButton, [{
		key: 'toCount',
		value: function toCount() {
			var add = this.counter + 1;
			this.counter = add;
		}
	}, {
		key: 'bindEvent',
		value: function bindEvent() {
			hand.onclick = this.doSomeThing.bind(this);
		}
	}]);

	return PraiseButton;
}();

var Thumb = exports.Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb() {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
	}

	_createClass(Thumb, [{
		key: 'doSomeThing',
		value: function doSomeThing() {
			this.toCount();
			this.eleP = document.createElement('p');
			fingerTop.appendChild(this.eleP);
			this.setAnimate();
			this.disappearAnimate();
		}
	}, {
		key: 'setAnimate',
		value: function setAnimate() {
			var eleP = this.eleP;
			var counter = this.counter;
			setTimeout(function () {
				eleP.className = 'animateP';
				eleP.innerText = '+' + counter;
			}, 100);
		}
	}, {
		key: 'disappearAnimate',
		value: function disappearAnimate() {
			var eleP = this.eleP;
			var removeEle = this.removeEle;
			var fingerTop = this.fingerTop;
			setTimeout(function () {
				eleP.className = 'disappearP';
				removeEle(eleP, fingerTop);
			}, 1100);
		}
	}, {
		key: 'removeEle',
		value: function removeEle(eleP, fingerTop) {
			setTimeout(function () {
				fingerTop.removeChild(eleP);
			}, 1200);
		}
	}]);

	return Thumb;
}(PraiseButton);

var start = new Thumb(counter, hand, fingerTop);
start.bindEvent();
