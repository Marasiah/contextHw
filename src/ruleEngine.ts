
//Each condition is made up of an attribute name, a value, and a comparison operator.
/*Score all of the salesman’s products on how well they match their product definitions by calculating the sum of the rule scores, which is the percentage of conditions which match, multiplied by the score.
Filter the potential products to just those that pass a given threshold (assume 50% as the cutoff).
Calculate the total and average prices for all the products that score sufficiently highly.*/
import "./types/itemInfoObject.js"
import fs from 'fs'
import itemData from "./types/itemInfo.json";
import ruleArray from "./types/rules.json";

const myRuleMap = new Map<string, string>();

function updateRuleMap() {

};

function calculateScoreAgainstRule()) {// this returns as a number but it is understood as a percent
    //alculating the sum of the rule scores, which is the percentage of conditions which match, multiplied by the score.
    itemData.forEach(element => {
        if (myRuleMap.has(element.name)) {
            //calculate score agains rule 
        }

    });
}

function parseRule(itemData[element], ruleArray[element]) {
    let ruleString = ruleArray[element].rule;
    let fields = ruleString.split('&&');
    let numberOfRules = 0; //how  many clauses match
    switch operator {
        case "==":
            {

                break;
            };
        case ">":
            {

                break;
            };
        case ">=":
            {
                break;
            };
        case "<":
            {

                break;
            }
        case "<=":
            {
                break;

            };
        default:
            {

                break;
            }

    }

}



