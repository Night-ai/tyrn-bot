const fs = require('fs')
class DB{

    constructor(){
    }
    //yaz
    set(data, value){
        if (!data) throw new TypeError('Data Undefined')
        if (!value) throw new TypeError('Value Undefined')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        file[data] = value
        return fs.writeFileSync('database.json', JSON.stringify(file, null, 1))
    }
    //bul
    get(data){
        if (!data) throw new TypeError('Undefined Data')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        if (!file) throw new TypeError('Undefined')
        return file[data]
    }
    //kontrol
    has(data){
        if (!data) throw new TypeError('Undefined Data')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        return file[data] ? true : false

    }
    //sil
    delete(data){
        if (!data) throw new TypeError('Undefined Data')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        if (!file[data]) throw new TypeError('Undefined')
        delete file[data]
        return fs.writeFileSync('database.json', JSON.stringify(file, null, 1))
    }
    //ekle
    add(data, value){
        if (!data) throw new TypeError('Undefined Data')
        if (typeof value !== 'number') throw new TypeError("Undefined Count")
        if (!this.has(data)) throw new TypeError("This data not found " + __dirname)
        if (typeof this.get(data) !== 'number') throw new TypeError('This value must be a number')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        file[data] += value
        return fs.writeFileSync('database.json', JSON.stringify(file, null, 1))
    }
    //kaldır
    remove(data, value){
        if (!data) throw new TypeError('Undefined Data')
        if (typeof value !== 'number') throw new TypeError("Undefined Count")
        if (!this.has(data)) throw new TypeError("This data not found")
        if (typeof this.get(data) !== 'number') throw new TypeError('This value must be a number')
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        file[data] -= value
        return fs.writeFileSync('database.json', JSON.stringify(file, null, 1))
    }
    //yedek
    backup(fileName){
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        return fs.writeFileSync(`${fileName}.json`, JSON.stringify(file, null, 1))
    }
    //destroy
    destroy(){
        const file = JSON.parse(fs.readFileSync('database.json', 'utf-8'))
        return fs.writeFileSync('database.json', JSON.stringify({}, null, 1))
    }


}

module.exports = new DB()
