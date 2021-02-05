# TURBO-SPEC-FORMAT-V1

# TITLE
Library

# SHORT
Create custom utilities and components.

# LONG
Create custom utilities and components.


# SYNTAX
.{name} { ...utility }
.{name} {
	{utility...}
}


# ARGUMENT
name string
Name of the utility or component.

# ARGUMENT
utility Utility
Utilities and other components to be applied.



# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a utility called btn.
==================================================
t1
.btn {
	h-32
	px-16
	font-16
}
--------------------------------------------------
t1 btn
--------------------------------------------------
.t1.btn {
	height: 32px;
	padding-left: 16px;
	padding-right: 16px;
	font-size: 16px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a utility called btn on a single line.
==================================================
t1
.btn { h-32 px-16 font-16 }
--------------------------------------------------
t1 btn
--------------------------------------------------
.t1.btn {
	height: 32px;
	padding-left: 16px;
	padding-right: 16px;
	font-size: 16px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Custom utilities can be overriden by system
utilities as they are inserted higher in the
generated CSS.
==================================================
t1
.btn {
	h-32
	px-16
	font-16
}
--------------------------------------------------
t1 h-40 btn
--------------------------------------------------
.t1.btn {
	height: 32px;
	padding-left: 16px;
	padding-right: 16px;
	font-size: 16px;
}
.t1.h-40 {
	height: 40px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Comments are supported. Comments must be preceeded
by a whitespace char: space, tab or new-line.
They can also be the at the start of the file.
==================================================
// Comment
t1
.btn { // Comment
	// Comment
	h-32 // Comment
	px-16
	font-16
}
--------------------------------------------------
t1 btn
--------------------------------------------------
.t1.btn {
	height: 32px;
	padding-left: 16px;
	padding-right: 16px;
	font-size: 16px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Turbo utility names are not reserved, they can
be redefined.

The key benefit of this is that you can be sure
future utilities added to the core language will
not break your code.
==================================================
t1
.font-16 {
	font-32
}
--------------------------------------------------
t1 font-16
--------------------------------------------------
.t1.font-16 {
	font-size: 32px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
User defined utilities may reference other user
defined utilities that are defined later.
==================================================
t1
.font-16 {
	font-32
}
.font-32 {
	font-64
}
--------------------------------------------------
t1 font-16 font-32
--------------------------------------------------
.t1.font-16 {
	font-size: 64px;
}
.t1.font-32 {
	font-size: 64px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Utilities can not be defined 2x.
==================================================
t1
.foo {
	w-16
}
.foo {
	h-8
}
--------------------------------------------------
t1 foo
--------------------------------------------------
Error: utility [foo] is already defined in library [<anonymous>]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Override earlier CSS declarations.
==================================================
t1
.my-width {
	w-4
	w-8
}
--------------------------------------------------
t1 my-width
--------------------------------------------------
.t1.my-width {
	width: 8px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
One user-defined utility may depend on another.
==================================================
t1
.foo {
	w10:color-black
}
.bar {
	foo
}
--------------------------------------------------
t1 bar
--------------------------------------------------
@media (min-width: 1024px) {
	.t1.bar {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Merge complex utilities.
==================================================
t1
.btn-base {
	focus:outline-none
}
.btn-32 {
	h-32
	px-16
	font-16
	b-1-transparent
}
.btn-blue {
	color-white
	bg-c-hex-4080FF
	hover:bg-c-hex-60A0FF
	active:bg-c-hex-2060FF
}
.btn-32-blue {
	btn-base
	btn-32
	btn-blue
}
--------------------------------------------------
t1 btn-32-blue
--------------------------------------------------
.t1.btn-32-blue {
	height: 32px;
	padding-left: 16px;
	padding-right: 16px;
	font-size: 16px;
	border: 1px solid transparent;
	color: #FFFFFF;
	background-color: #4080FF;
}
.t1.btn-32-blue:focus {
	outline-style: none;
}
.t1.btn-32-blue:hover {
	background-color: #60A0FF;
}
.t1.btn-32-blue:active {
	background-color: #2060FF;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All combinators are supported.
==================================================
t1
.foo {
	/color-black
	~color-black
	+color-black
	/../color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
* + .t1.foo {
	color: #000000;
}
* .t1.foo {
	color: #000000;
}
* > .t1.foo {
	color: #000000;
}
* ~ .t1.foo {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All DOM structure selectors are supported.
==================================================
t1
.foo {
	empty:color-black
	not-empty:color-black
	first:color-black
	not-first:color-black
	last:color-black
	not-last:color-black
	even:color-black
	odd:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
.t1.foo:empty {
	color: #000000;
}
.t1.foo:not(:empty) {
	color: #000000;
}
.t1.foo:first-child {
	color: #000000;
}
.t1.foo:not(:first-child) {
	color: #000000;
}
.t1.foo:last-child {
	color: #000000;
}
.t1.foo:not(:last-child) {
	color: #000000;
}
.t1.foo:nth-child(even) {
	color: #000000;
}
.t1.foo:nth-child(odd) {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All interaction selectors are supported.
==================================================
t1
.foo {
	color-black
	visited:color-black
	focus:color-black
	hover:color-black
	active:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
.t1.foo {
	color: #000000;
}
.t1.foo:visited {
	color: #000000;
}
.t1.foo:focus {
	color: #000000;
}
.t1.foo:hover {
	color: #000000;
}
.t1.foo:active {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All state selectors are supported.
==================================================
t1
.foo {
	checked:color-black
	unchecked:color-black
	enabled:color-black
	disabled:color-black
	valid:color-black
	invalid:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
.t1.foo:checked {
	color: #000000;
}
.t1.foo:not(:checked) {
	color: #000000;
}
.t1.foo:enabled {
	color: #000000;
}
.t1.foo:disabled {
	color: #000000;
}
.t1.foo:valid {
	color: #000000;
}
.t1.foo:invalid {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All pseudo-element selectors are supported.
==================================================
t1
.foo {
	after:color-black
	before:color-black
	placeholder:color-black
	selection:color-black
	thumb:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
.t1.foo:after {
	color: #000000;
	content: "";
}
.t1.foo:before {
	color: #000000;
	content: "";
}
.t1.foo::placeholder {
	color: #000000;
}
.t1.foo::selection {
	color: #000000;
}
.t1.foo::slider-thumb {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All device selectors are supported.
==================================================
t1
.foo {
	print:color-black
	screen:color-black
	speech:color-black
	hoverable:color-black
	not-hoverable:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
@media (hover: hover) {
	.t1.foo {
		color: #000000;
	}
}
@media (hover: none) {
	.t1.foo {
		color: #000000;
	}
}
@media screen {
	.t1.foo {
		color: #000000;
	}
}
@media print {
	.t1.foo {
		color: #000000;
	}
}
@media speech {
	.t1.foo {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
All viewport selectors are supported.
==================================================
t1
.foo {
	w3:color-black
	w6:color-black
	w7:color-black
	w10:color-black
	w12:color-black
	w14:color-black
	w15:color-black
	w19:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
@media (min-width: 375px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 640px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 768px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1024px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1280px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1440px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1536px) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1920px) {
	.t1.foo {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
The order or various selectors may change over
time. This is a simple test case for the current
ordering.
==================================================
t1
.foo {
	+color-black
	empty:color-black
	focus:color-black
	checked:color-black
	before:color-black
	placeholder:color-black
	print:color-black
	hoverable:color-black
	w10:color-black
}
--------------------------------------------------
t1 foo
--------------------------------------------------
* + .t1.foo {
	color: #000000;
}
.t1.foo:focus {
	color: #000000;
}
.t1.foo:empty {
	color: #000000;
}
.t1.foo:before {
	color: #000000;
	content: "";
}
.t1.foo::placeholder {
	color: #000000;
}
.t1.foo:checked {
	color: #000000;
}
@media (hover: hover) {
	.t1.foo {
		color: #000000;
	}
}
@media (min-width: 1024px) {
	.t1.foo {
		color: #000000;
	}
}
@media print {
	.t1.foo {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Selectors can be applied to user defined
utilities as well.
==================================================
t1
.foo {
	color-black
}
.bar {
	hover:foo
}
--------------------------------------------------
t1 w10:bar
--------------------------------------------------
@media (min-width: 1024px) {
	.t1.w10\:bar:hover {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Raw CSS declarations can be added via an `@css`
block.
==================================================
t1
@css .bg-img-checkbox {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M4 7l2 2m0 0l4-4' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E");
}
.checkbox {
	w-24 h-24 b-1-black bg-img-checkbox
}
--------------------------------------------------
t1 checkbox
--------------------------------------------------
.t1.checkbox {
	width: 24px;
	height: 24px;
	border: 1px solid #000000;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M4 7l2 2m0 0l4-4' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E");
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Raw CSS can be overridden by base utilities.
==================================================
t1
@css .my-width-32 {
	width: 32px;
}
--------------------------------------------------
t1
my-width-32
w-32
--------------------------------------------------
.t1.my-width-32 {
	width: 32px;
}
.t1.w-32 {
	width: 32px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


