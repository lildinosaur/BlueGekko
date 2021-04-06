var _ = require('lodash');
const filestreamUtil = require('./util');
const fs = require('fs');
const core = require('../../core/util');
const now = () => moment().format('YYYY-MM-DD HH:mm');
const moment = require('moment');
const dirs = core.dirs();
const gekkosFile = __dirname + '/../../data/gekkos.json';
const archivedGekkosFile = __dirname + '/../../data/archivedGekkos.json';
const modesFile = __dirname + '/../../data/modes.json';
const configsFile = __dirname + '/../../data/configs.json';

var Persist = function() {
    _.bindAll(this);
}

Persist.prototype.store = function(gekkos,archivedGekkos,modes,configs,id) {
    var gekkoToPersist = JSON.parse(JSON.stringify(gekkos));
    var archivedGekkosToPersist = JSON.parse(JSON.stringify(archivedGekkos));
    for (var k in gekkoToPersist) 
    {
        delete gekkoToPersist[k]["events"];
    }

    for (var k in archivedGekkosToPersist) 
    {
        if(archivedGekkosToPersist[k].events.initial.lastTrades){
            delete archivedGekkosToPersist[k].events.initial.lastTrades["data"];
        }
    }

    var writeStream = fs.createWriteStream(gekkosFile);
    writeStream.write(JSON.stringify(gekkoToPersist));
    writeStream.end();

    writeStream = fs.createWriteStream(archivedGekkosFile);
    writeStream.write(JSON.stringify(archivedGekkosToPersist));
    writeStream.end();    

    writeStream = fs.createWriteStream(modesFile);
    writeStream.write(JSON.stringify(modes));
    writeStream.end();

    writeStream = fs.createWriteStream(configsFile);
    writeStream.write(JSON.stringify(configs));
    writeStream.end();
}

Persist.prototype.retrieve = function() {
    var gekkos = filestreamUtil.storageFile(gekkosFile);
    var modes = filestreamUtil.storageFile(modesFile);
    var configs = filestreamUtil.storageFile(configsFile);
    var archivedGekkos = filestreamUtil.storageFile(archivedGekkosFile);

    return {gekkos,modes,configs,archivedGekkos};
}

Persist.prototype.get = function(id) {
    
}

module.exports = Persist;
