const _ = require('lodash');
const fs = require('fs');
const request = require('request-promise');
const Promise = require('bluebird');
var moment = require('moment');
const https = require('https');
const fetch = require('node-fetch');
var DataFrame = require('dataframe-js').DataFrame;

const recoverableErrors = [
  'SOCKETTIMEDOUT',
  'TIMEDOUT',
  'CONNRESET',
  'CONNREFUSED',
  'NOTFOUND',
  'Service:Unavailable',
  'Request timed out',
  'Empty response',
  'API:Invalid nonce',
  'General:Temporary lockout',
  'Response code 525',
  'Service:Busy'
];

// errors that might mean
// the API call succeeded.
const unknownResultErrors = [
  'Response code 502',
  'Response code 504',
  'Response code 522',
  'Response code 520',
]

var Reader = function() {
  this.data = {};
  this.api_url = 'https://api.pro.coinbase.com/products/';
  this.api_sandbox = 'https://api.pro.coinbase.com/products/BTC-EUR/candles?granularity=86400&start=2021-01-01&end=2021-01-20';
  _.bindAll(this);
}

Reader.prototype.mostRecentWindow = function(from, to, next) {
  var row = {};
  return next(null,row);
}

Reader.prototype.tableExists = function (name, next) {
  next(null, 1);
}

Reader.prototype.get = function(from, to, what, next) {

  const pairs = 'BTC-EUR';
  const granularity = '86400';

  var url = `${this.api_url}${pairs}/candles?granularity=${granularity}&start=${from}&end=${to}`;

  fetch(url)
  .then(res => res.text())
  .then(text => {
    var array = JSON.parse(text);
    this.data = new DataFrame(array,  ['start', 'low', 'high', 'open', 'close', 'volume']).toCollection();
  
    return next(null,this.data);
  })
}

Reader.prototype.count = function(from, to, next) {
  return next(null,null);
}

Reader.prototype.countTotal = function(next) {
  var row = {};
  return next(null,row);
  //next(null, _.first(rows).count);
}

Reader.prototype.getBoundry = function(next) {
  var row = {};
  return next(null,row);
}

Reader.prototype.close = function() {

}

module.exports = Reader;
