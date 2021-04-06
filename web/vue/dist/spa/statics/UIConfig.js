// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

const CONFIG = {
  headless: true,
  api: {
    host: '0.0.0.0',
    port: 3000,
    timeout: 600000 // 10 minutes
  },
  ui: {
    ssl: false,
    host: '52.178.163.152',
//    host: '10.133.1.216',
    port: 3000,
    path: '/'
  },
  adapter: 'postgresql',
  persist: {
    enabled: false,
    adapter: 'filestream'
  },

  /**
   * Gordon UI - configure your additional Indicator names here
   * (standard TA-Lib and Tulip ones are already defined)
   * patterns: for Pattern-Recognizing indicators
   * indicators: for RSI and so on - should not be displayed as Overlay
   * overlays: all Indicators that can be put into the main-chart as overlay, for Example SMA, EMA, Bollinger-Bands etc.
   * Example-Configuration done for tulip-macd - strat
   * If name on chart contains an '_', add the name after the '_' to this array.
   */
  userChartConfig: {
    //patterns:['hasInvertedHammer']
    indicators: [
      "macd",
      "macdSignal",
      "macdHistogram",
      "mystdev",
      "dmPlus",
      "dmLow",
      "momentum"
    ]
    //overlays: []
  }
};

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
