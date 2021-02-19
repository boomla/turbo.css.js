# TURBO-SPEC-FORMAT-V1

# TITLE
Origin

# SHORT
Transformation origin.

# LONG
Transformation origin.

# SYNTAX
origin-{xKeyword}
transform-origin: {xKeyword};

# SYNTAX
origin-{yKeyword}
transform-origin: {yKeyword};

# SYNTAX
origin-{yKeyword}-{xKeyword}
transform-origin: {yKeyword} {xKeyword};

# SYNTAX
origin-{xKeyword}-{yKeyword}
transform-origin: {xKeyword} {yKeyword};

# SYNTAX
origin-{x}-{y}
transform-origin: {x} {y};


# ARGUMENT
xKeyword left | center | right

# ARGUMENT
yKeyword top | center | bottom

# ARGUMENT NAME
x

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
left | center | right


# ARGUMENT NAME
y

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
top | center | bottom


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: top
==================================================
t1 origin-top
--------------------------------------------------
.t1.origin-top {
	transform-origin: top;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: bottom
==================================================
t1 origin-bottom
--------------------------------------------------
.t1.origin-bottom {
	transform-origin: bottom;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: left
==================================================
t1 origin-left
--------------------------------------------------
.t1.origin-left {
	transform-origin: left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: right
==================================================
t1 origin-right
--------------------------------------------------
.t1.origin-right {
	transform-origin: right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: center
==================================================
t1 origin-center
--------------------------------------------------
.t1.origin-center {
	transform-origin: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: top left
==================================================
t1 origin-top-left
--------------------------------------------------
.t1.origin-top-left {
	transform-origin: top left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: top center
==================================================
t1 origin-top-center
--------------------------------------------------
.t1.origin-top-center {
	transform-origin: top center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: top right
==================================================
t1 origin-top-right
--------------------------------------------------
.t1.origin-top-right {
	transform-origin: top right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: center left
==================================================
t1 origin-center-left
--------------------------------------------------
.t1.origin-center-left {
	transform-origin: center left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: center center
==================================================
t1 origin-center-center
--------------------------------------------------
.t1.origin-center-center {
	transform-origin: center center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: center right
==================================================
t1 origin-center-right
--------------------------------------------------
.t1.origin-center-right {
	transform-origin: center right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: bottom left
==================================================
t1 origin-bottom-left
--------------------------------------------------
.t1.origin-bottom-left {
	transform-origin: bottom left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: bottom center
==================================================
t1 origin-bottom-center
--------------------------------------------------
.t1.origin-bottom-center {
	transform-origin: bottom center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: bottom right
==================================================
t1 origin-bottom-right
--------------------------------------------------
.t1.origin-bottom-right {
	transform-origin: bottom right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: 10px 20px provided as unitless numbers
==================================================
t1 origin-10-20
--------------------------------------------------
.t1.origin-10-20 {
	transform-origin: 10px 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: 10px 20px provided as length values
==================================================
t1 origin-10px-20px
--------------------------------------------------
.t1.origin-10px-20px {
	transform-origin: 10px 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Origin: 10% 20%
==================================================
t1 origin-10%-20%
--------------------------------------------------
.t1.origin-10\%-20\% {
	transform-origin: 10% 20%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


