//the conditions  the store uses to eval data the provided info
// includes the rule the store provides 
interface RuleCondition {
    attribute: string;
    value: any;
    operator: '==' | '!=' | '<' | '>' | '<=' | '>=';
}

interface Rule {
    conditions: RuleCondition[];
    score: number;
    negative?: boolean; // if true, scoring should be negative when rule matches
}
