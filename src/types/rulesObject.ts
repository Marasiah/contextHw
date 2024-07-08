//the conditions  the store uses to eval data the provided info
// includes the rule the store provides 
export interface ruleCondition {
    attribute: string;
    value: any;
    operator: '==' | '!=' | '<' | '>' | '<=' | '>=';
}

export interface rule {
    conditions: ruleCondition[];
    score: number;
    negative?: boolean; // if true, scoring should be negative when rule matches
}
