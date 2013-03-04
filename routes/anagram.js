
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

var generateAnagrams = function (baseAlphabet, baseDict) {

	var recursivelyGenerateAnagrams = function (alphabet, dict) {

		var results = [];

		// base case
		if (alphabet.length === 0) return dict.isWord() ? [''] : [];

		// if we're currently at the end of a word, insert a space, start
		// with a fresh dictionary and keep going. Also continue as though
		// this weren't a word however
		if (dict.isWord() === true) {
			results = results.concat(
				_.map(
					recursivelyGenerateAnagrams(alphabet, baseDict), // note the dictionary used here
					function (str) {
						return ' ' + str; // add the space
					}
				)
			);
		}

		// try adding each remaining letter and see make recursive calls for the
		// ones that are still valid words
		var currentLetter = lastLetter = '';
		for (var i = 0; i < alphabet.length; i++) {

			// avoid duplicates
			currentLetter = alphabet[i];
			if (currentLetter === lastLetter) continue;
			lastLetter = currentLetter;

			// check for a valid continuation
			childDict = dict.getChild(currentLetter);
			if (childDict !== undefined) {

				var newAlphabet = alphabet.slice(0); // clone the array
				newAlphabet.splice(i,1); // remove the element that we just used

				results = results.concat(
					_.map(
						recursivelyGenerateAnagrams(newAlphabet, childDict),
						function (str) {
							return currentLetter + str;
						}
					)
				);
			}
		}
		return results;
	}

	return recursivelyGenerateAnagrams(baseAlphabet, baseDict);
}