class Observable{
    constructor(){
        this.observers = [];
    }

    subscribe(obj){
        this.observers.push(obj)
    }

    unsubscribe(func){
        this.observers = this.observers.filter(subscriber => subscriber !== obj);
    }

    notify(){
        this.observers.forEach(observer => observer.execute());
    }
}

exports.Observable = Observable;