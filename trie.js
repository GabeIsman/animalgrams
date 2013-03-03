var Trie = function() {
	return {
		word: false,

		connections: {},

		add: function(word) {
			if (word.length === 0) {
				return this.word = true;
			}

			if (this.connections[word[0]]) {
				this.connections[word[0]].add(word[1,word.length]);
			} else {
				this.connections[word[0]] = Trie();
			}
		}
	}
}