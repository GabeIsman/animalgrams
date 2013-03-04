
var trieLib = require('../lib/trie.js');
var fs = require('fs');
var _ = require('underscore');

/**
 *
 */
exports.anagram = function (req, resp, dict) {

	resp.send(dict.isWord());
};

exports.loadDictionary = function (filename) {
	filename = filename || '/usr/share/dict/words';

	var trie = new trieLib.Trie();

	fs.readFile(filename, 'utf-8', function (err, data) {
		if (err) throw err;
		var lines = data.split('\n'); // this is lazy and bad
		lines.forEach(function (line) {
			line = line.trim();
			if (line.length !== 0) {
				trie.addValue(line);
			}
		});
		console.log('Dictionary loaded');
	});

	return trie;
}