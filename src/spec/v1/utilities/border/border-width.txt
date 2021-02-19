# TURBO-SPEC-FORMAT-V1

# TITLE
Border width

# SHORT
Set the width of an element's border.

# LONG
Set the width of an element's border.


# SYNTAX
b-{value}
border-width: {value};

# SYNTAX
bx-{value}
border-left-width: {value};
border-right-width: {value};

# SYNTAX
by-{value}
border-top-width: {value};
border-bottom-width: {value};

# SYNTAX
bt-{value}
border-top-width: {value};

# SYNTAX
br-{value}
border-right-width: {value};

# SYNTAX
bb-{value}
border-bottom-width: {value};

# SYNTAX
bl-{value}
border-left-width: {value};


# ARGUMENT
value <length unsigned default-unit=1px>



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Border width of 1px on all sides, provided as unitless number.
==================================================
t1 b-1
--------------------------------------------------
.t1.b-1 {
	border-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Border width of 1px on all sides, provided as length.
==================================================
t1 b-1px
--------------------------------------------------
.t1.b-1px {
	border-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left and right border width of 1px, provided as
unitless number.
==================================================
t1 bx-1
--------------------------------------------------
.t1.bx-1 {
	border-left-width: 1px;
	border-right-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left and right border width of 1px, provided as
length.
==================================================
t1 bx-1px
--------------------------------------------------
.t1.bx-1px {
	border-left-width: 1px;
	border-right-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top and bottom border width of 1px, provided as
unitless number.
==================================================
t1 by-1
--------------------------------------------------
.t1.by-1 {
	border-top-width: 1px;
	border-bottom-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top and bottom border width of 1px, provided as
length.
==================================================
t1 by-1px
--------------------------------------------------
.t1.by-1px {
	border-top-width: 1px;
	border-bottom-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top border width of 1px, provided as unitless number.
==================================================
t1 bt-1
--------------------------------------------------
.t1.bt-1 {
	border-top-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top border width of 1px, provided as length.
==================================================
t1 bt-1px
--------------------------------------------------
.t1.bt-1px {
	border-top-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Right border width of 1px, provided as unitless number.
==================================================
t1 br-1
--------------------------------------------------
.t1.br-1 {
	border-right-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Right border width of 1px, provided as length.
==================================================
t1 br-1px
--------------------------------------------------
.t1.br-1px {
	border-right-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Bottom border width of 1px, provided as unitless number.
==================================================
t1 bb-1
--------------------------------------------------
.t1.bb-1 {
	border-bottom-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Bottom border width of 1px, provided as length.
==================================================
t1 bb-1px
--------------------------------------------------
.t1.bb-1px {
	border-bottom-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left border width of 1px, provided as unitless number.
==================================================
t1 bl-1
--------------------------------------------------
.t1.bl-1 {
	border-left-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left border width of 1px, provided as length.
==================================================
t1 bl-1px
--------------------------------------------------
.t1.bl-1px {
	border-left-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
More specific border widths shall override less
specific border widths. (They shall come later in
the generated CSS.)
==================================================
t1
bl-1
bb-1
br-1
bt-1
bx-1
by-1
b-1
--------------------------------------------------
.t1.b-1 {
	border-width: 1px;
}
.t1.bx-1 {
	border-left-width: 1px;
	border-right-width: 1px;
}
.t1.by-1 {
	border-top-width: 1px;
	border-bottom-width: 1px;
}
.t1.bt-1 {
	border-top-width: 1px;
}
.t1.br-1 {
	border-right-width: 1px;
}
.t1.bb-1 {
	border-bottom-width: 1px;
}
.t1.bl-1 {
	border-left-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


