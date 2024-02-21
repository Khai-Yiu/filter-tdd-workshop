*** Test Driven Development ***
Red - Write failing test
Green - Write only enough code to pass the test
Refactor - Change code to improve readaibility and efficiency but maintain same behaviour

Tests ensure software specifications are met
Rewrite or extend tests if specifications change over time
Keep tests running to make sure you don't violate the principle of writing the minimal amount of code

Set up TDD:
	npm init
	Set up jest with BABEL
	Add "test:watch": "jest --watch" under package.json and "scripts"
	git init
	Put test and source code file in "src" directory

*** Implement filter function with TDD ***
Filter function returns a new copy of a data structure, typically arrays, to contain values which fulfill a predicate
Filter accepts 2 parameters, a callback function and an array to filter
The callback function determines if an item remains in the filtered array, it abstracts the responsibility from the filter function which just produces the filtered array
The callback function will accept a parameter, the item, and return a truthy/falsy value to determine if it's part of the filter array

*** Test file ***
At the top, add:
	describe('filter', () => {}) # Testing filter.js, omit the '.js' in this case
				     # describe accepts 2 arguments, name and callback function
	
Describe the assumptions of how the function is used, not the behaviour:
	describe('filter', () => {
    		describe('Given a callback function and an array', () => {})
	})			

'it' is a test function that accepts 2 arguments, name and a function which contains the expectations to test
Describe behaviour of filter using 'it':
	describe('filter', () => {
    		describe('Given a callback function and an array', () => {
        		it('Invokes the callback function once per item in the array', () => {})
    		})
	})

'expect' asserts the expected value of the test, it returns an object with a bunch of matcher functions to determine equality
'toBe' is 1 of these matcher functions:
	it('Invokes the callback function once per item in the array', () => {
            expect(numberOfTimesCallbackFunctionWasInvoked).toBe(numberOfItemsInArrayToFilter)
        })

The current code has a compile error, but just reading the test case provides us a good idea of what to expect
Work backwards and define the variables until the errors are fixed, for example:
	it('Invokes the callback function once per item in the array', () => {
            const arrayToFilter = [1, 2, 3]
            const numberOfItemsInArrayToFilter = arrayToFilter.length
            let numberOfTimesCallbackFunctionWasInvoked = 0
            function callbackFunction() {
                numberOfTimesCallbackFunctionWasInvoked++;
            }
            filter(callbackFunction, arrayToFilter)
            expect(numberOfTimesCallbackFunctionWasInvoked).toBe(numberOfItemsInArrayToFilter)
        })
        
The only thing left is the 'filter' function is not implemented, yet. But, the test logic is completed
Add an import at the top of the test file to reference 'filter.js' to use the 'filter' function we're testing:
	import filter from './filter'
	
Add test cases and slowly increase functionality in the 'filter' function until all tests pass
Commit new test cases after adding them, but use 'git reset HEAD^' later to remove from commit history, but maintain file contents

*** Source file ***
Export the function you want to test:
	function filter() { }	# Write export line independently rather than one-line, more readable

	export default filter

Test: Invoke callback one per item
	function filter(callbackFunction, arrayToFilter) {
    		for(let item of arrayToFilter) {
        		callbackFunction()
    		}
	}
	
Test: Invoke callback with parameter
	callbackFunction(item)	# Change this line from previous

Test: Return an array
	return filteredArray	# Add to bottom of function, return the original array

Test: Return new array
	const filteredArray = []	# Create new array and return, don't modify the original array	
	...
	return filteredArray
	
Test: For callback function which is truthy, return an array of items
	if(callbackFunction(item)) {	# If callback function returns a truthy value, add item to new array
            filteredArray.push(item)
        }
