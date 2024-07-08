class itemInfo {//the info the sales man provides

//name, type, color, cost and weight
  name!: string;

  type!: string; //could potentially be an enum based on different reqs

  cost!: number;

  weight!: number;

  itemInfo ( name: string , type: string, cost: number, weight:number){
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.weight = weight;
  };

}
export itemInfo;