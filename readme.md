A salesman is selling a set of products. Each product is described by a set of attributes, such as name, type, color, cost and weight, each of which may have a different data type (String, Boolean, Number). 

A company is looking to buy products at the best possible prices, and which best match it’s needs. It has many different products it is looking to purchase. It defines the products it wishes to buy with a set of rules. Each rule is defined by a set of conditions, and a score for if that rule matches. Each condition is made up of an attribute name, a value, and a comparison operator. Some rules might be negative, meaning that if the rule matches, the scoring should be negative. A rule might look like:

      color == BLUE && price < 17.75 && quantity > 750 🡪 100

The company realizes that it is very time consuming and error prone to sort through the salesman’s goods and is looking to implement a system that will:

Score all of the salesman’s products on how well they match their product definitions by calculating the sum of the rule scores, which is the percentage of conditions which match, multiplied by the score.
Filter the potential products to just those that pass a given threshold (assume 50% as the cutoff).
Calculate the total and average prices for all the products that score sufficiently highly.


2 Objects and 1 engine to calculate the it

2 Objects:
- ItemInfo (made up of customer reqs as listed above)
- Rules (this will contain the rule and the product name so it can be indexed together )

There will be a rules engine that will perform the required calculations on a map of items called Inventory, where the key of the map will be the name of the item.

Assumptions:
- The names don't change and are consistent between the company  and the vendor (otherwise there issues with searching that can be mitigated but at least initially they must match)
- The rules always terminate their last clause with 🡪 . (ie there can be any number of clauses before that but none after)
- Even if there are no values (ie color) there must be a value  (empty string is ok)