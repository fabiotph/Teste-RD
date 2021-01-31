/**
 * Singleton, garantir que teremos apenas uma instância de RouteModel
 */
const file = require('../utils/csvFile');
const { validInput } = require('../utils/validation')

class RouteModel{

    constructor(){
        this.graph = new Map();
        this.load();
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
/**
 * 
 * @param {Array} data 
 */
    addRouteFromArray(data){
        for(let i = 0; i<data.length; i+=3){
            let input = {
                from: data[i],
                to: data[i+1],
                price: parseInt(data[i+2])
            }
            try{
                validInput(input);
                this.addRoute(input)
            }catch(err){
                console.error(err)
            }
        }
    }

    /**
     * 
     * @param {String} from 
     * @param {String} to 
     * @returns {Object}
     */

    calculateRoute(from, to){
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
        let data = file.load();
        this.addRouteFromArray(data);
    }
    
}

exports.RouteModel = RouteModel.getInstance();