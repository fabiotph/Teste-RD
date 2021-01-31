/**
 * Singleton, garantir que teremos apenas uma instância de RouteModel
 */
const file = require('../utils/file');
class RouteModel{

    constructor(){
        this.graph = new Map();

        //this.load();
        this.addRoute({from: "GRU", to: "BRC", price: 10})
        this.addRoute({from: "GRU", to: "SCL", price: 18})
        this.addRoute({from: "GRU", to: "ORL", price: 56})
        this.addRoute({from: "GRU", to: "CDG", price: 75})
        this.addRoute({from: "SCL", to: "ORL", price: 20})
        this.addRoute({from: "BRC", to: "SCL", price: 5})
        this.addRoute({from: "ORL", to: "CDG", price: 5})
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new RouteModel(); 
        return this.instance
    }

    /**
     * 
     * @param {Object} obj 
     */
    addRoute(obj){
        let {from, to, price} = obj;
        if (this.graph.get(from) === undefined){
            this.graph.set(from, new Map());
        }
        if (this.graph.get(to) === undefined){
            this.graph.set(to, new Map());
        }
        this.graph.get(from).set(to, price)
    }

    addRouteFromArray(paths){

    }

    /**
     * 
     * @param {String} from 
     * @param {String} to 
     * @returns {Object}
     */

    calculateRoute(from, to){
        console.log("calculateRoute")
        let explored = new Map();
        let distance = {};
        let previous = {};

        if (!this.graph.get(from) || !this.graph.get(to)) return null;

        for(const v of this.graph.keys()){
            distance[v] = Math.min();
            explored.set(v, false)
            previous[v] = "";
        }
        distance[from] = 0;

        for (const vertex of this.graph){
            let current = this.minDistance(explored, distance);
            let neighbors = this.graph.get(current);
            explored.set(current, true);
            if (current == to) break;
            
            if (current)
                for (const neighbor of neighbors){
                    let possibleDistance = distance[current] + neighbor[1];
                        if(possibleDistance < distance[neighbor[0]]){
                            distance[neighbor[0]] = possibleDistance;
                            previous[neighbor[0]] = current;
                        }
                }
            }
        console.log(distance);
        console.log(previous);

        if (distance[to] == Math.min()) return null;

        let path = [];
        let current = to;

        while (current != ""){
            path.push(current)
            current = previous[current]
        }
        return {route: path.reverse(), price: distance[to]}
    }

    minDistance(explored, distance){
        let minDistance = Math.min();
        let vertice = null;
        
        for(const v of Object.keys(distance)){
            if(explored.get(v) == false && distance[v] < minDistance){
                minDistance = distance
                vertice = v;
            }
        }
        return vertice;
    }

    load(){
        let value = file.loadCSV();
        this.addRouteFromArray(value);
    }
    
}

exports.RouteModel = RouteModel.getInstance();