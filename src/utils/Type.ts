import type Value from "./Value";
import type Config from "./Config";

export default interface Type {
	// Parse parses the provided arguments and returns a list of parsed argument Values,
	// plus the remaining unparsed arguments that have been unused.
	// When an error is returned, it is immediately propagated to the end-user, no other
	// signatures will be tried. Thus, an error shall only be returned when parsing the
	// the provided arguments according to the last signature of the same utility function.
	// For previous variants, ok=false shall be returned instead so that the next variant
	// cna be tried.
	parse(config: Config, strArgs: Array<string>): [arg: Value, remainder: Array<string>] | undefined;
}

