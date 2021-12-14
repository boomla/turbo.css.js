import Namespace from "./Namespace";

const LIBRARY_U1_SRC = `t1

._headingBase {
	my-8
	line-1.25
	font-weight-500
	color-heading
	font-sans
}
.h1 {
	_headingBase
	font-28
	w7:font-40
}
.h2 {
	_headingBase
	font-24
	w7:font-32
}
.h3 {
	_headingBase
	font-22
	w7:font-28
}
.h4 {
	_headingBase
	font-20
	w7:font-24
}
.h5 {
	_headingBase
	font-18
	w7:font-20
}
.h6 {
	_headingBase
	font-16
}
.display {
	line-1.25
	font-weight-200
	color-gray-900
	font-sans
}

.a {
	line-1.5
	text-decoration-none
	color-link
	font-sans
	cursor-pointer
	hover:underline
	hover:color-linkHover
}
.code {
	px-5
	py-1
	line-1.5
	rounded-3
	shadow-contrast-inset
	font-mono
	bg-c-gray-100
}
.ol {
	line-1.5
	list-decimal
	list-inside
}
.ul {
	line-1.5
	list-disc
	list-inside
}
.p {
    font-16
    color-text
    my-16
    font-sans
    line-1.5
}


._defaultTransition {
	transition
	duration-150
	ease-in-out
}



// Button base styles, applying to all buttons
.btn {
	whitespace-nowrap
	select-none
	b-1
	b-solid
	inline-flex
	align-items-center
	justify-content-center
	line-1.5

	rounded-3
	relative
	cursor-pointer
	text-decoration-none
	_defaultTransition
}

.btn-xs { h-24 px-8 font-14 }
.btn-s { h-32 px-16 font-16 }
.btn-m { h-40 px-24 font-16 }
.btn-l { h-48 px-48 font-18 }
.btn-xl { h-64 px-64 font-20 }

.btn-action {
	bg-c-action-500
	color-white
	b-c-transparent
	shadow-2
	hover:bg-c-action-450
	hover:shadow-4
	active:bg-c-action-550
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action-500-50
}
.btn-neutral {
	bg-c-gray-700
	color-white
	b-c-transparent
	shadow-2
	hover:bg-c-gray-650
	hover:shadow-4
	active:bg-c-gray-750
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-gray-500-50
}
.btn-danger {
	bg-c-danger-500
	color-white
	b-c-transparent
	shadow-2
	hover:bg-c-danger-450
	hover:shadow-4
	active:bg-c-danger-550
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger-500-50
}
.btn-action-2 {
	color-action-500
	b-c-action-500
	shadow-none
	hover:shadow-2
	active:bg-c-action-500-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action-500-50
}
.btn-neutral-2 {
	color-gray-700
	b-c-gray-700
	shadow-none
	hover:shadow-2
	active:bg-c-gray-700-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-gray-700-50
}
.btn-danger-2 {
	color-danger-500
	b-c-danger-500
	shadow-none
	hover:shadow-2
	active:bg-c-danger-500-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger-500-50
}
.btn-action-3 {
	color-action-500
	b-c-transparent
	shadow-none
	hover:shadow-2
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action-500-50
}
.btn-neutral-3 {
	color-gray-700
	b-c-transparent
	shadow-none
	hover:shadow-2
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-gray-500-50
}
.btn-danger-3 {
	color-danger-500
	b-c-transparent
	shadow-none
	hover:shadow-2
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger-500-50
}

.btn-dark-action {
	bg-c-white
	color-action-500
	b-c-transparent
	shadow-2
	hover:shadow-none
	active:bg-c-action-50
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action-500
}
.btn-dark-neutral {
	bg-c-white
	color-gray-700
	b-c-transparent
	shadow-2
	active:bg-c-gray-50
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-white-50
}
.btn-dark-danger {
	bg-c-white
	color-danger
	b-c-transparent
	shadow-2
	active:bg-c-danger-50
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger
}
.btn-dark-action-2 {
	color-action-400
	b-c-action-400
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action
}
.btn-dark-neutral-2 {
	color-white-90
	b-c-white-90
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-white-50
}
.btn-dark-danger-2 {
	color-danger
	b-c-danger
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger
}
.btn-dark-action-3 {
	color-action-400
	b-c-transparent
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-action
}
.btn-dark-neutral-3 {
	color-white-90
	b-c-transparent
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-white-50
}
.btn-dark-danger-3 {
	color-danger
	b-c-transparent
	hover:shadow-2
	active:bg-c-black-10
	active:shadow-none
	focus:outline-0
	focus:shadow-outline-danger
}

.icon-btn-xs { w-24 h-24 }
.icon-btn-s { w-32 h-32 }
.icon-btn-m { w-40 h-40 }
.icon-btn-l { w-48 h-48 }
.icon-btn-xl { w-64 h-64 }

.btn-icon-xs { fill-current h-12 w-12 }
.btn-icon-s { fill-current h-16 w-16 }
.btn-icon-m { fill-current h-16 w-16 }
.btn-icon-l { fill-current h-16 w-16 }
.btn-icon-xl { fill-current h-24 w-24 }



// Input base styles
.input {
	relative
	inline-flex
	appearance-none
	b-1-gray-200
	align-items-center
	min-w-0
	line-1.5
	p-0
	rounded-3
	bg-c-white
	color-gray-800

	focus:shadow-outline-action-500-50
	focus:outline-0
	focus:b-c-action-600

	placeholder:color-gray-300
	placeholder:italic

	mode-valid:color-success-500
	mode-valid:b-c-success-500
	mode-valid:placeholder:color-success-500-60
	focus:mode-valid:shadow-outline-success-500-50
	focus:mode-valid:b-c-success-600

	mode-invalid:color-danger-500
	mode-invalid:b-c-danger-500
	mode-invalid:placeholder:color-danger-500-60
	focus:mode-invalid:shadow-outline-danger-500-50
	focus:mode-invalid:b-c-danger-600

	disabled:color-gray-500
	disabled:b-c-gray-300
	disabled:bg-c-gray-100
	disabled:placeholder:color-gray-400
	disabled:cursor-not-allowed

	_defaultTransition
}

.input-xs {
	h-24
	px-8
	font-16
	w6:font-14 // iOS mobile zooms on the element if font is smaller than 16px - prevent this
}
.input-s { h-32 px-8 font-16 }
.input-m { h-40 px-12 font-16 }
.input-l { h-48 px-16 font-18 }
.input-xl { h-64 px-20 font-20 }

.input-with-icon-xs-left { h-24 pl-24 pr-6 font-14 }
.input-with-icon-s-left { h-32 pl-32 pr-8 font-16 }
.input-with-icon-m-left { h-40 pl-40 pr-12 font-16 }
.input-with-icon-l-left { h-48 pl-48 pr-16 font-18 }
.input-with-icon-xl-left { h-64 pl-64 pr-20 font-20 }

.input-with-icon-xs-right { h-24 pl-6 pr-24 font-14 }
.input-with-icon-s-right { h-32 pl-8 pr-32 font-16 }
.input-with-icon-m-right { h-40 pl-12 pr-40 font-16 }
.input-with-icon-l-right { h-48 pl-16 pr-48 font-18 }
.input-with-icon-xl-right { h-64 pl-20 pr-64 font-20 }

.input-icon-container-left {
	absolute top-0 bottom-0 flex align-items-center
	left-1
}
.input-icon-container-right {
	absolute top-0 bottom-0 flex align-items-center
	right-1
}

.input-icon-svg {
	fill-gray-700
	mode-valid:+/fill-success
	mode-invalid:+/fill-danger
}

.input-icon-xs-left { h-12 w-12 ml-6 }
.input-icon-s-left { h-16 w-16 ml-8 }
.input-icon-m-left { h-16 w-16 ml-12 }
.input-icon-l-left { h-16 w-16 ml-16 }
.input-icon-xl-left { h-24 w-24 ml-20 }

.input-icon-xs-right { h-12 w-12 mr-6 }
.input-icon-s-right { h-16 w-16 mr-8 }
.input-icon-m-right { h-16 w-16 mr-12 }
.input-icon-l-right { h-16 w-16 mr-16 }
.input-icon-xl-right { h-24 w-24 mr-20 }


@css ._bg-img-checkbox {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M4 7l2 2m0 0l4-4' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E");
}
@css ._bg-img-radio {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Ccircle cx='7' cy='7' r='3' fill='%23fff'/%3E%3C/svg%3E");
}
@css ._bg-img-select-xs {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8' viewBox='0 0 16 8'%3E%3Cpath d='M0 2h8L4 8z' fill='%233C4144'/%3E%3C/svg%3E")
}
@css ._bg-img-select-s {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8' viewBox='0 0 16 8'%3E%3Cpath d='M0 2h8L4 8z' fill='%233C4144'/%3E%3C/svg%3E")
}
@css ._bg-img-select-m {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8' viewBox='0 0 20 8'%3E%3Cpath d='M0 2h8L4 8z' fill='%233C4144'/%3E%3C/svg%3E")
}
@css ._bg-img-select-l {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='9' viewBox='0 0 25 9'%3E%3Cpath d='M0 2h10L5 9z' fill='%233C4144'/%3E%3C/svg%3E")
}
@css ._bg-img-select-xl {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='10' viewBox='0 0 30 10'%3E%3Cpath d='M0 2h12l-6 8z' fill='%233C4144'/%3E%3C/svg%3E")
}


.select {
	b-1-gray-200
	rounded-3
	color-gray-800
	bg-c-white
	line-1.5
	appearance-none
	bg-no-repeat
	bg-right

	focus:outline-0
	focus:b-c-action-600
	focus:shadow-outline-action-500-50

	_defaultTransition
}
.select-xs { h-24 pl-8 pr-24 font-14 _bg-img-select-xs }
.select-s { h-32 pl-8 pr-24 font-16 _bg-img-select-s }
.select-m { h-40 pl-12 pr-32 font-16 _bg-img-select-m }
.select-l { h-48 pl-16 pr-40 font-18 _bg-img-select-l }
.select-xl { h-64 pl-20 pr-48 font-20 _bg-img-select-xl }


.checkbox {
	relative
	flex-none
	appearance-none
	fill-transparent
	bg-no-repeat
	bg-center
	bg-cover
	bg-c-white
	b-1-gray-200
	rounded-3
	_bg-img-checkbox

	checked:fill-white

	_defaultTransition
}

.checkbox-xs { w-16 h-16 }
.checkbox-s { w-16 h-16 }
.checkbox-m { w-16 h-16 }
.checkbox-l { w-20 h-20 }
.checkbox-xl { w-24 h-24 }

.checkbox-action {
	checked:bg-c-action-500
	checked:b-c-action-500
	focus:outline-0
	focus:b-c-action-600
	focus:shadow-outline-action-500-50
	active:b-c-action-600
	active:bg-c-action-500-50
}
.checkbox-success {
	checked:bg-c-success-500
	checked:b-c-success-500
	focus:outline-0
	focus:b-c-success-600
	focus:shadow-outline-success-500-50
	active:b-c-success-600
	active:bg-c-success-500-50
}
.checkbox-danger {
	checked:bg-c-danger-500
	checked:b-c-danger-500
	focus:outline-0
	focus:b-c-danger-600
	focus:shadow-outline-danger-500-50
	active:b-c-danger-600
	active:bg-c-danger-500-50
}


.radio {
	appearance-none
	fill-transparent
	bg-no-repeat
	bg-center
	bg-cover
	bg-c-white
	b-1-gray-200
	rounded-full
	checked:fill-white
	_bg-img-radio
	flex-none

	_defaultTransition
}
.radio-xs { w-16 h-16 }
.radio-s { w-16 h-16 }
.radio-m { w-16 h-16 }
.radio-l { w-20 h-20 }
.radio-xl { w-24 h-24 }

.radio-action {
	checked:bg-c-action-500
	checked:b-c-action-500
	focus:outline-0
	focus:b-c-action-600
	focus:shadow-outline-action-500-50
	active:b-c-action-600
	active:bg-c-action-500-50
}
.radio-success {
	checked:bg-c-success-500
	checked:b-c-success-500
	focus:outline-0
	focus:b-c-success-600
	focus:shadow-outline-success-500-50
	active:b-c-success-600
	active:bg-c-success-500-50
}
.radio-danger {
	checked:bg-c-danger-500
	checked:b-c-danger-500
	focus:outline-0
	focus:b-c-danger-600
	focus:shadow-outline-danger-500-50
	active:b-c-danger-600
	active:bg-c-danger-500-50
}


.file-hidden {
    opacity-0 absolute w-0 h-0
}


.textarea {
	appearance-none
	b-1-gray-200
	rounded-3
	color-gray-800
	line-1.5

	focus:outline-0
    focus:b-c-action-600
    focus:shadow-outline-action-500-50

	placeholder:color-gray-300
	placeholder:italic
}
.textarea-xs { px-8 py-4 font-14 }
.textarea-s { px-8 py-4 font-16 }
.textarea-m { px-12 py-8 font-16 }
.textarea-l { px-16 py-8 font-18 }
.textarea-xl { px-20 py-8 font-20 }


.range {
	appearance-none
	bg-c-gray-200
	b-1-gray-200
	rounded-full
	line-1.5
	thumb:appearance-none
	thumb:rounded-full
	thumb:cursor-pointer
	thumb:b-0

	_defaultTransition
}
.range-action {
	thumb:bg-c-action-500
	focus:outline-0
	focus:bg-c-action-500
	thumb:focus:bg-c-action-600
}
.range-success {
	thumb:bg-c-success-500
	focus:outline-0
	focus:bg-c-success-500
	thumb:focus:bg-c-success-600
}
.range-danger {
	thumb:bg-c-danger-500
	focus:outline-0
	focus:bg-c-danger-500
	thumb:focus:bg-c-danger-600
}

.range-xs { h-4 thumb:w-16 thumb:h-16 }
.range-s { h-4 thumb:w-16 thumb:h-16 }
.range-m { h-4 thumb:w-16 thumb:h-16 }
.range-l { h-4 thumb:w-20 thumb:h-20 }
.range-xl { h-4 thumb:w-24 thumb:h-24 }


._focus-base {
	b-1
	b-solid
	outline-0
	outline-none
}
.focus-action {
	_focus-base
	b-c-action-600
	shadow-outline-action-500-50
}
.focus-success {
	_focus-base
	b-c-success-600
	shadow-outline-success-500-50
}
.focus-danger {
	_focus-base
	b-c-danger-600
	shadow-outline-danger-500-50
}


.font-body {
    font-sans
}
.font-heading {
    font-sans
}
.font-display {
    font-sans
}


.textContainerNoColors {
	font-sans

	@/../p:font-16
	@/../p:my-16
	@/../p:line-1.5

	@/../first:p:mt-0
	@/../last:p:mb-0
		
	@/../h1:font-sans
	@/../h2:font-sans
	@/../h3:font-sans
	@/../h4:font-sans
	@/../h5:font-sans
	@/../h6:font-sans

	@/../h1:font-weight-500
	@/../h2:font-weight-500
	@/../h3:font-weight-500
	@/../h4:font-weight-500
	@/../h5:font-weight-500
	@/../h6:font-weight-500

	@/../h1:my-8
	@/../h2:my-8
	@/../h3:my-8
	@/../h4:my-8
	@/../h5:my-8
	@/../h6:my-8

	@/../h1:line-1.25
	@/../h2:line-1.25
	@/../h3:line-1.25
	@/../h4:line-1.25
	@/../h5:line-1.25
	@/../h6:line-1.25

	@/../h1:font-40
	@/../h2:font-32
	@/../h3:font-28
	@/../h4:font-24
	@/../h5:font-20
	@/../h6:font-16
	
	@/../a:text-decoration-none
	@/../a:cursor-pointer
	@/../hover:a:underline
	
	@/../code:font-mono
	@/../code:rounded-3
	@/../code:shadow-contrast-inset
	@/../code:py-1
	@/../code:px-5
	
	@/../ul:list-disc
	@/../ul:ml-32

	@/../ol:list-decimal
	@/../ol:ml-32

	@/../ol:/../ol:ml-24
	@/../ul:/../ul:ml-24
	
	@/../li:/p:inline
	@/../li:/p:my-0
}
`

let libName = "u1";
let libPath = "<STDLIB:u1>";
const LIBRARY_U1 = Namespace.evalLibrary(libName, libPath, LIBRARY_U1_SRC);

export {
	LIBRARY_U1,
	LIBRARY_U1_SRC,
};

