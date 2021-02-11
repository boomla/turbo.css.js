import Declaration from './Declaration';
import Rule from './Rule';

export interface BrowserRewriteRules {
	propertyPrefixes: { [key: string]: Array<string> };
	declarationMap: { [key: string]: { [key: string]: Array<Declaration> }};
	rewriteRuleFuncs: Array<RewriteRule>;
}

export interface RewriteRule {
	(rule: Rule): Array<Rule>;
}

