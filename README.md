# pseudoizer

A javascript library for pseudo-izing strings to aid with localization.

This idea is borrowed (but not directly ported) from Scott Hanselmans .Net Pseudoizer library for use in Node. (Original library)[https://github.com/shanselman/Psuedoizer].

## Installing

Install to your local project

	npm install --save pseudoizer

## Clone from git

	git clone git@github.com:ianllewellyn/pseudoizer.git

## Run unit tests

	npm test

## Examples

Pseudoize a string from a Node module

	var pseudoizer = require('pseudoizer');
	console.log(pseudoize.pseudoize('Hello World !!')); // Ħęľľő Ŵőřľđ !!
