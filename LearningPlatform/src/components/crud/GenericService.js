class GenericService {
    constructor(key) {
        let localStorageSuffix = "myApp"

        this.key = key;
        this.storageObject = {
            key: key + "_" + localStorageSuffix,
            idAutoIncrement: 0,
            itemDictionary: {},
            items: []
        }
    }

    hasData() {
        const data = localStorage.getItem(this.storageObject.key)

        return !!data
    }

    getSingle(id) {
        const db = this.storageObject;
        
        return db.itemDictionary[id]    
    }

    getAll() {
        const db = this.storageObject;

        return db.items.map(id => db.itemDictionary[id])
    }


    save(object) {
        const db = this.storageObject;

        if (!object["id"] || object["id"] <= 0) {
            object.id = db.idAutoIncrement + 1;       
            db.idAutoIncrement = object.id     
        }

        if (!db.items.includes(object.id)) {
            db.items.push(object.id)            
        }

        db.itemDictionary[object.id] = object

        this.storageObject = db;    
        this.persist()
    }

    edit(object) {
        const db = this.storageObject;

        if (!object["id"] || object["id"] <= 0) {
            throw new Error("Nema objekta")   
        }

        const id = object.id

        db.itemDictionary[id] = object

        this.storageObject = db
        this.persist();
    }

    delete(object) {
        const db = this.storageObject;

        if (!object["id"] || object["id"] <= 0) {
            throw new Error("Nema objekta")   
        }

        db.items = db.items.filter(it => it != object.id)
        delete db.itemDictionary[object.id]

        this.storageObject = db;
        this.persist()
    }


    load() {
        const stringData = localStorage.getItem(this.storageObject.key)

        // nema ništa
        if (!stringData) {
            localStorage.setItem(this.storageObject.key, JSON.stringify(this.storageObject))
        } else {
            const jsonData = JSON.parse(stringData)
            // primitivna provjera
            if (jsonData.key !== this.storageObject.key) {
                throw new Error("Nije dobro")
            }

            this.storageObject = jsonData
        }    
    }


    persist() {
        const stringData = JSON.stringify(this.storageObject)
        localStorage.setItem(this.storageObject.key, stringData)
    }

}


export default GenericService