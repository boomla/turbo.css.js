# Turbo CSS - JavaScript implementation (TypeScript)

Turbo CSS is a utility first CSS ~~framework~~ programming language.

See [https://turbocss.com/](https://turbocss.com/).

It's like a framework, except the class names are dynamically compiled
to CSS either on the server or on the client.
Thus, it offers infinite possibilities and significantly faster iteration
in contrast to other CSS framworks.

This repository contains the JavaScript (TypeScript) implementation.
All test cases are imported (vendored) from the Turbo CSS specification
and executed with the rest of the tests.


# Pre-built distributions

You can download pre-built distributions from [https://turbocss.com/](https://turbocss.com/).


# API

See `src/Turbo.ts` for the public API.


# Testing

Test all files from the project root by running:

`npm test`

Run tests in files starting with the name `RuleSet` by running:

`npm run test-match './src/**/RuleSet*'`


# Filenames

Test files are in files named after the tested classes/functions like
`NAME.x._test.ts`. There is one file per function/method being tested.
The `x` is there to sort the test files after the base file.


# Architecture overview

The package has a functional core with an imperative wrapper around it,
the `Turbo` class.

Errors are thrown, it is up to the callee to catch and handle them.


# LICENSE

See the LICENSE file.

