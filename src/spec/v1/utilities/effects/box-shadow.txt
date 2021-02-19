# TURBO-SPEC-FORMAT-V1

# TITLE
Box shadow

# SHORT
Add shadow effects around the element.

# LONG
Add shadow effects around the element.

An element with class `.shadow-8-20` shall feel like being
8px distant from the background along the Z axis.
Darkness 20 means it is a very subtle shadow.


# SYNTAX
shadow-{distance}
box-shadow: {...};

# SYNTAX
shadow-{distance}-{darkness}
box-shadow: {...};

# SYNTAX
shadow-outline-{...color}
box-shadow: 0 0 0 3px {color};

# SYNTAX
shadow-{distance}-inset
box-shadow: {...} inset;

# SYNTAX
shadow-{distance}-{darkness}-inset
box-shadow: {...} inset;

# SYNTAX
shadow-contrast-inset
box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;

# SYNTAX
shadow-none
box-shadow: 0 0 #0000;


# ARGUMENT
distance 1 | 2 | 4 | 8 | 16 | 32 <uint32>
Perceived shadow distance in pixels relative to the background along the Z axis.

# ARGUMENT
darkness <uint32>
Perceived shadow darkness on a scale between `0-100`. Default: `20`.

# ARGUMENT
...color <...color>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Subtle shadow 4px distant from the background.
==================================================
t1 shadow-4-20
--------------------------------------------------
.t1.shadow-4-20 {
	box-shadow: 0 1px 4px -0.5px rgba(0,0,0,0.14);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shadow 8px distant from the background with darkness 40.
==================================================
t1 shadow-8-40
--------------------------------------------------
.t1.shadow-8-40 {
	box-shadow: 0 3px 8px -2px rgba(0,0,0,0.34);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Inset subtle shadow 4px distant from the background.
==================================================
t1 shadow-4-inset
--------------------------------------------------
.t1.shadow-4-inset {
	box-shadow: 0 1px 4px -0.5px rgba(0,0,0,0.14) inset;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Inner shadow 4px distant from the background with darkness 40.
==================================================
t1 shadow-4-40-inset
--------------------------------------------------
.t1.shadow-4-40-inset {
	box-shadow: 0 1px 4px -0.5px rgba(0,0,0,0.28) inset;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Inner shadow for increased contrast.
==================================================
t1 shadow-contrast-inset
--------------------------------------------------
.t1.shadow-contrast-inset {
	box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
No shadows.
==================================================
t1 shadow-none
--------------------------------------------------
.t1.shadow-none {
	box-shadow: 0 0 #0000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shadow outline
==================================================
t1 shadow-outline-hex-123456
--------------------------------------------------
.t1.shadow-outline-hex-123456 {
	box-shadow: 0 0 0 3px #123456;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


