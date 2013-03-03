var Trie = function () {
	var _this = this;

	this._children = {};

	this._isWord = false;

	this.addValue = function (value) {

		if (value.length === 0) {
			_this._isWord = true;
			return;
		}

		var nextLetter = value[0];

		if (_this._children[nextLetter] === undefined) {
			_this._children[nextLetter] = new Trie();
		}

		value = value.slice(1,value.length);
		_this._children[nextLetter].addValue(value);
	};

	this.isWord = function () {
		return _this._isWord;
	};
}

exports.Trie = Trie;