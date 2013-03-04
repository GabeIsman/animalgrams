var Trie = function () {
	var _this = this;

	this._children = {};

	this._isWord = false;

	this._value = '';

	this.addValue = function (value) {

		if (value.length === 0) {
			_this._isWord = true;
			return;
		}

		var nextLetter = value[0];

		if (_this._children[nextLetter] === undefined) {
			_this._children[nextLetter] = new Trie();
			_this._children[nextLetter]._value = _this._value + nextLetter;
		}

		value = value.slice(1,value.length);
		_this._children[nextLetter].addValue(value);
	};

	this.isWord = function () {
		return _this._isWord;
	};

	this.getChild = function (value) {
		if (value.length > 1) value = value[0];
		return _this._children[value];
	}
}

exports.Trie = Trie;