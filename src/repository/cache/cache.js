/**
 * Singleton, garantir que teremos apenas uma instância de Cache
 */

class Cache{

    constructor(){
        this.data = new Map();
    }
    get(key){
        console.log(this)
        return this.data.get(key);
    }

    set(key, value){
        this.data.set(key, value)
    }

    execute(){
        this.data.clear();
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new Cache(); 
        return this.instance
    }
}

exports.Cache = Cache.getInstance();