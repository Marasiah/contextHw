
//Each condition is made up of an attribute name, a value, and a comparison operator.
/*Score all of the salesman’s items on how well they match their item definitions by calculating the sum of the rule scores, which is the percentage of conditions which match, multiplied by the score.
Filter the potential items to just those that pass a given threshold (assume 50% as the cutoff).
Calculate the total and average prices for all the items that score sufficiently highly.*/
import "./types/itemInfoObject.js"
import "./types/rulesObject.js"




export function matchCondition(attributeValue: any, condition: RuleCondition): boolean {
    switch (condition.operator) {
        case '==':
            return attributeValue === condition.value;
        case '!=':
            return attributeValue !== condition.value;
        case '<':
            return attributeValue < condition.value;
        case '>':
            return attributeValue > condition.value;
        case '<=':
            return attributeValue <= condition.value;
        case '>=':
            return attributeValue >= condition.value;
        default:
            return false;
    }
}

export function calculateItemScore(item: itemInfo, rules: Rule[]): number {
    let totalScore = 0;
    for (const rule of rules) {
        let ruleMatchCount = 0;
        for (const condition of rule.conditions) {
            const attributeValue = item.attributes[condition.attribute];
            if (attributeValue !== undefined && matchCondition(attributeValue, condition)) {
                ruleMatchCount++;
            }
        }
        const ruleMatchPercentage = ruleMatchCount / rule.conditions.length;
        const ruleScore = ruleMatchPercentage * rule.score;
        totalScore += rule.negative ? -ruleScore : ruleScore;
    }
    return totalScore;
}


export function filterItems(items: itemInfo[], rules: Rule[], threshold: number): itemInfo[] {
    return items.filter(product => {
        const score = calculateItemScore(product, rules);
        const passThreshold = score >= threshold;
        return passThreshold;
    });
}

export function calculateTotalPrice(items: itemInfo[]): number {
    return items.reduce((total, product) => total + product.price, 0);
}

export function calculateAveragePrice(items: itemInfo[]): number {
    const total = calculateTotalPrice(items);
    return total / items.length;
}

