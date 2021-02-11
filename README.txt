# TESTING

Test all files from the project root by running:

`npm test`

Run tests in files starting with the name `RuleSet` by running:

`npm run test-match './src/**/RuleSet*'`



# README-TODO

- explain test files are in `NAME.x._test.ts`
  - one file per method being tested
  - the `x` is to sort the files nicely after the base file.
- explain architecture
  - functional core (everything but the Turbo class)
