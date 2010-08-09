test("1. init", function() {
	var edible = $("#edible").edible();
	deepEqual( edible.data("edible").element[0], edible[0] );
});

test("2. replace on click", function() {
	var edible = $("#edible").edible();
	edible.click();
	ok( edible.is(":hidden") );
});

test("3. insert input", function() {
	var edible = $("#edible").edible();
	edible.click();
	var input = edible.next(":input:visible");
	ok( input.length, "there should be an input next to the hidden element" );
	equal( input.val(), "text content" );
	deepEqual( input[0], document.activeElement );
});

test("4. toggle back on blur", function() {
	var edible = $("#edible").edible();
	edible.click();
	edible.next(":input").blur();
	ok( edible.is(":visible") );
	ok( edible.next("input").is(":hidden") );
});

test("5. update when typing", function() {
	var edible = $("#edible").edible();
	edible.click();
	var input = edible.next(":input:visible");
	input.val("hello world").keyup();
	equal( edible.text(), "hello world" );
});
