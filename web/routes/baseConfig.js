var UIconfig = require('../vue/dist/spa/statics/UIConfig');

var config = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.silent = false;
config.debug = true;
config.persist = UIconfig.persist.enabled;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING TRADING ADVICE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.tradingAdvisor = {
}

config.candleWriter = {
  enabled: false
}

config.backtestResultExporter = {
  enabled: false,
  writeToDisk: false,
  data: {
    stratUpdates: false,
    roundtrips: true,
    stratCandles: true,
    trades: true
  }
}

config.childToParent = {
  enabled: false,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING ADAPTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// configurable in the UIconfig
config.adapter = UIconfig.adapter;
config.persistAdapter = UIconfig.persist.adapter;

config.sqlite = {
  path: 'plugins/sqlite',
  version: 0.1,
  dataDirectory: 'history',
  journalMode: require('../isWindows.js') ? 'PERSIST' : 'WAL',
  dependencies: [{
    module: 'sqlite3',
    version: '3.1.4'
  }]
}

  // Postgres adapter example config (please note: requires postgres >= 9.5):
config.postgresql = {
  path: 'plugins/postgresql',
  version: 0.1,
  connectionString: 'postgres://gekkodbuser:1234@localhost:5432', // if default port
  database: 'gekkodb', // if set, we'll put all tables into a single database.
  schema: 'public',
  dependencies: [{
    module: 'pg',
    version: '7.4.3'
  }]
}

// Mongodb adapter, requires mongodb >= 3.3 (no version earlier tested)
config.mongodb = {
  path: 'plugins/mongodb',
  version: 0.1,
  connectionString: 'mongodb://mongodb/gekko', // connection to mongodb server
  dependencies: [{
    module: 'mongojs',
    version: '2.4.0'
  }]
}

// Filestream
config.filestream = {
  path: 'plugins/filestream',
  version: 0.1
}

config.adviceWriter = {
  enabled: false,
  muteSoft: true,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING BACKTESTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Note that these settings are only used in backtesting mode, see here:
// @link: https://github.com/askmike/gekko/blob/stable/docs/Backtesting.md

config.backtest = {
  daterange: 'scan',
  batchSize: 50
}

config.importer = {
  daterange: {
    // NOTE: these dates are in UTC
    from: "2016-06-01 12:00:00"
  }
}

module.exports = config;