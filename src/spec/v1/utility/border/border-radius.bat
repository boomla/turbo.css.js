# TURBO-SPEC-FORMAT-V1

# TITLE
Border radius

# SHORT
Set the element border's radius.

# LONG
Set the element border's radius.


# SYNTAX
rounded-{value}
border-radius: {value};

# SYNTAX
rounded-t-{value}
border-top-left-radius: {value};
border-top-right-radius: {value};

# SYNTAX
rounded-r-{value}
border-top-right-radius: {value};
border-bottom-right-radius: {value};

# SYNTAX
rounded-b-{value}
border-bottom-left-radius: {value};
border-bottom-right-radius: {value};

# SYNTAX
rounded-l-{value}
border-top-left-radius: {value};
border-bottom-left-radius: {value};

# SYNTAX
rounded-tl-{value}
border-top-left-radius: {value};

# SYNTAX
rounded-tr-{value}
border-top-right-radius: {value};

# SYNTAX
rounded-br-{value}
border-bottom-right-radius: {value};

# SYNTAX
rounded-bl-{value}
border-bottom-left-radius: {value};



# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
full
Shorthand for `9999px`.


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on all sides provided as unitless number.
==================================================
t1 rounded-1
--------------------------------------------------
.t1.rounded-1 {
	border-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on all sides provided as length value.
==================================================
t1 rounded-2px
--------------------------------------------------
.t1.rounded-2px {
	border-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on all sides.
==================================================
t1 rounded-50%
--------------------------------------------------
.t1.rounded-50\% {
	border-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on all sides.
==================================================
t1 rounded-full
--------------------------------------------------
.t1.rounded-full {
	border-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on top side provided as unitless number.
==================================================
t1 rounded-t-1
--------------------------------------------------
.t1.rounded-t-1 {
	border-top-left-radius: 1px;
	border-top-right-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on top side provided as length value.
==================================================
t1 rounded-t-2px
--------------------------------------------------
.t1.rounded-t-2px {
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on top side.
==================================================
t1 rounded-t-50%
--------------------------------------------------
.t1.rounded-t-50\% {
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on top side.
==================================================
t1 rounded-t-full
--------------------------------------------------
.t1.rounded-t-full {
	border-top-left-radius: 9999px;
	border-top-right-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on right side provided as unitless number.
==================================================
t1 rounded-r-1
--------------------------------------------------
.t1.rounded-r-1 {
	border-top-right-radius: 1px;
	border-bottom-right-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on right side provided as length value.
==================================================
t1 rounded-r-2px
--------------------------------------------------
.t1.rounded-r-2px {
	border-top-right-radius: 2px;
	border-bottom-right-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on right side.
==================================================
t1 rounded-r-50%
--------------------------------------------------
.t1.rounded-r-50\% {
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on right side.
==================================================
t1 rounded-r-full
--------------------------------------------------
.t1.rounded-r-full {
	border-top-right-radius: 9999px;
	border-bottom-right-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on bottom side provided as unitless number.
==================================================
t1 rounded-b-1
--------------------------------------------------
.t1.rounded-b-1 {
	border-bottom-left-radius: 1px;
	border-bottom-right-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on bottom side provided as length value.
==================================================
t1 rounded-b-2px
--------------------------------------------------
.t1.rounded-b-2px {
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on bottom side.
==================================================
t1 rounded-b-50%
--------------------------------------------------
.t1.rounded-b-50\% {
	border-bottom-left-radius: 50%;
	border-bottom-right-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on bottom side.
==================================================
t1 rounded-b-full
--------------------------------------------------
.t1.rounded-b-full {
	border-bottom-left-radius: 9999px;
	border-bottom-right-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on left side provided as unitless number.
==================================================
t1 rounded-l-1
--------------------------------------------------
.t1.rounded-l-1 {
	border-top-left-radius: 1px;
	border-bottom-left-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on left side provided as length value.
==================================================
t1 rounded-l-2px
--------------------------------------------------
.t1.rounded-l-2px {
	border-top-left-radius: 2px;
	border-bottom-left-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on left side.
==================================================
t1 rounded-l-50%
--------------------------------------------------
.t1.rounded-l-50\% {
	border-top-left-radius: 50%;
	border-bottom-left-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on left side.
==================================================
t1 rounded-l-full
--------------------------------------------------
.t1.rounded-l-full {
	border-top-left-radius: 9999px;
	border-bottom-left-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on top-left side provided as unitless number.
==================================================
t1 rounded-tl-1
--------------------------------------------------
.t1.rounded-tl-1 {
	border-top-left-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on top-left side provided as length value.
==================================================
t1 rounded-tl-2px
--------------------------------------------------
.t1.rounded-tl-2px {
	border-top-left-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on top-left side.
==================================================
t1 rounded-tl-50%
--------------------------------------------------
.t1.rounded-tl-50\% {
	border-top-left-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on top-left side.
==================================================
t1 rounded-tl-full
--------------------------------------------------
.t1.rounded-tl-full {
	border-top-left-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on top-right side provided as unitless number.
==================================================
t1 rounded-tr-1
--------------------------------------------------
.t1.rounded-tr-1 {
	border-top-right-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on top-right side provided as length value.
==================================================
t1 rounded-tr-2px
--------------------------------------------------
.t1.rounded-tr-2px {
	border-top-right-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on top-right side.
==================================================
t1 rounded-tr-50%
--------------------------------------------------
.t1.rounded-tr-50\% {
	border-top-right-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on top-right side.
==================================================
t1 rounded-tr-full
--------------------------------------------------
.t1.rounded-tr-full {
	border-top-right-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on bottom-right side provided as unitless number.
==================================================
t1 rounded-br-1
--------------------------------------------------
.t1.rounded-br-1 {
	border-bottom-right-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on bottom-right side provided as length value.
==================================================
t1 rounded-br-2px
--------------------------------------------------
.t1.rounded-br-2px {
	border-bottom-right-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on bottom-right side.
==================================================
t1 rounded-br-50%
--------------------------------------------------
.t1.rounded-br-50\% {
	border-bottom-right-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on bottom-right side.
==================================================
t1 rounded-br-full
--------------------------------------------------
.t1.rounded-br-full {
	border-bottom-right-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px border radius on bottom-left side provided as unitless number.
==================================================
t1 rounded-bl-1
--------------------------------------------------
.t1.rounded-bl-1 {
	border-bottom-left-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
2px border radius on bottom-left side provided as length value.
==================================================
t1 rounded-bl-2px
--------------------------------------------------
.t1.rounded-bl-2px {
	border-bottom-left-radius: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
50% border radius on bottom-left side.
==================================================
t1 rounded-bl-50%
--------------------------------------------------
.t1.rounded-bl-50\% {
	border-bottom-left-radius: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Full border radius on bottom-left side.
==================================================
t1 rounded-bl-full
--------------------------------------------------
.t1.rounded-bl-full {
	border-bottom-left-radius: 9999px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Definition order
==================================================
t1
rounded-1
rounded-t-1
rounded-r-1
rounded-b-1
rounded-l-1
rounded-tr-1
rounded-br-1
rounded-bl-1
rounded-tl-1
--------------------------------------------------
.t1.rounded-1 {
	border-radius: 1px;
}
.t1.rounded-t-1 {
	border-top-left-radius: 1px;
	border-top-right-radius: 1px;
}
.t1.rounded-r-1 {
	border-top-right-radius: 1px;
	border-bottom-right-radius: 1px;
}
.t1.rounded-b-1 {
	border-bottom-left-radius: 1px;
	border-bottom-right-radius: 1px;
}
.t1.rounded-l-1 {
	border-top-left-radius: 1px;
	border-bottom-left-radius: 1px;
}
.t1.rounded-tr-1 {
	border-top-right-radius: 1px;
}
.t1.rounded-br-1 {
	border-bottom-right-radius: 1px;
}
.t1.rounded-bl-1 {
	border-bottom-left-radius: 1px;
}
.t1.rounded-tl-1 {
	border-top-left-radius: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


