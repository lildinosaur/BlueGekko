(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{eb64:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("backtester")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-h4 q-mb-md"},[t._v("Backtest")]),a("p",[t._v("Backtest you strategies against historical data here.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("config-builder",{on:{config:t.check}})],1)]),t.backtestable?a("div",{staticClass:"row justify-center q-mt-md"},[a("q-btn",{attrs:{color:"primary",loading:"fetching"===t.backtestState,disabled:"fetching"===t.backtestState},on:{click:function(e){return e.preventDefault(),t.run(e)}}},[t._v("Backtest")])],1):t._e(),t.backtestable?a("div",{staticClass:"row justify-center q-mt-md"},["fetching"===t.backtestState?a("div",{staticClass:"text-center"},[a("h4",[t._v("Running backtest...")]),a("q-spinner-bars",{attrs:{color:"secondary",size:"48px"}})],1):t._e()]):t._e(),t.backtestResult&&"fetched"===t.backtestState?a("result",{attrs:{result:t.backtestResult}}):t._e()],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dataset-picker",{on:{dataset:t.updateDataset}}),a("strat-picker",{on:{stratConfig:t.updateStrat}}),a("paper-trader",{on:{settings:t.updatePaperTrader}})],1)},o=[],l=(a("f751"),a("967e")),d=a.n(l),u=(a("96cf"),a("fa84")),p=a.n(u),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-h5 q-mb-md"},[t._v("Select a dataset "+t._s(t.selectedText))]),"idle"===t.datasetScanstate?a("div",{staticClass:"text-center"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.scan(e)}}},[t._v("Scan available data")])],1):t._e(),a("div",{staticClass:"text-center"},["scanning"===t.datasetScanstate?a("q-spinner-bars",{attrs:{color:"secondary",size:"48px"}}):t._e()],1),"scanned"===t.datasetScanstate?a("div",[t.datasets.length?a("q-table",{attrs:{title:"Local Datasets","row-key":"id",data:t.datasets,columns:t.tblColumns,dense:"",filter:t.dsFilter,selection:"single",selected:t.selectedRows,separator:"vertical"},on:{"update:selected":function(e){t.selectedRows=e}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[a("q-input",{staticClass:"col-6",attrs:{debounce:"300","hide-underline":"",color:"secondary"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:t.dsFilter,callback:function(e){t.dsFilter=e},expression:"dsFilter"}})]}}],null,!1,2465650170)}):t._e(),t.datasets.length?a("div",{staticClass:"text-center q-pa-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"primary",icon:"av_timer",disabled:!this.selectedRow||0===this.selectedRow.length},on:{click:function(e){return e.preventDefault(),t.openRange(e)}}},[t._v("Adjust range\n      ")]),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"amber",icon:"refresh"},on:{click:function(e){return e.preventDefault(),t.scan(e)}}},[t._v("reload datasets")])],1):t._e(),t.rangeVisible?a("div",{staticClass:"row"},[a("p",{staticClass:"caption"},[t._v("Here you can adjust the range of the dataset.")])]):t._e(),t.rangeVisible?a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",dense:"",label:"From",hint:"Pick a start date and time"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1)],1)]},proxy:!0}],null,!1,206458887),model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1),a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",dense:"",label:"To",hint:"Pick an end date and time"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)],1)]},proxy:!0}],null,!1,4226184359),model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)]):t._e(),t.datasets.length?t._e():a("div",[a("em",[t._v("No Data found\n        "),a("router-link",{attrs:{to:"data/importer"}},[t._v("Lets add some")])],1)])],1):t._e()])},f=[],h=a("c1df"),v=a.n(h),g=a("2b0e"),b=a("c41d"),x={data:function(){return{customTo:!1,customFrom:!1,rangeVisible:!1,selectedRows:[],selectedRow:null,minSelectableRange:null,maxSelectableRange:null,dsFilter:""}},mixins:[b["a"]],computed:{isScanning:function(){return"scanning"===this.datasetScanstate},selectedText:function(){return this.selectedRow?"(current: ".concat(this.selectedRow.currency," - ").concat(this.selectedRow.asset,")"):""}},mounted:function(){this.scan()},methods:{fmt:function(t){return v()(t).utc().format("YYYY-MM-DD HH:mm")},openRange:function(){this.updateCustomRange(),this.rangeVisible=!0},updateCustomRange:function(){this.customTo=this.fmt(this.selectedRow.to),this.customFrom=this.fmt(this.selectedRow.from)},emitSet:function(t){var e;t&&(this.customTo?(e=g["a"].util.extend({},t),e.to=v.a.utc(this.customTo,"YYYY-MM-DD HH:mm").format(),e.from=v.a.utc(this.customFrom,"YYYY-MM-DD HH:mm").format()):e=t,this.$emit("dataset",e))}},watch:{selectedRows:function(t){t&&t.length&&(this.selectedRow=g["a"].util.extend({},this.selectedRows[0]),this.selectedRow.from=this.selectedRow.from.toDate(),this.selectedRow.to=this.selectedRow.to.toDate(),this.minSelectableRange=this.selectedRow.from,this.maxSelectableRange=this.selectedRow.to,this.updateCustomRange(),this.emitSet(this.selectedRow[0]))},customTo:function(){this.emitSet(this.selectedRow)},customFrom:function(){this.emitSet(this.selectedRow)}}},k=x,C=a("2877"),w=Object(C["a"])(k,m,f,!1,null,null,null),y=w.exports,q=a("e969"),R=a("ae5a"),S=a("2ef0"),T=a.n(S),Y={created:function(){var t=this;return p()(d.a.mark((function e(){var a;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.$store.state.config.apiBaseUrl+"configPart/performanceAnalyzer");case 3:a=e.sent,t.performanceAnalyzer=toml.parse(a.data.part),t.performanceAnalyzer.enabled=!0,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$q.notify({type:"negative",message:"Error getting Perfomance-Analyser config from server."});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},data:function(){return{dataset:{},strat:{},paperTrader:{},performanceAnalyzer:{}}},components:{stratPicker:q["a"],datasetPicker:y,paperTrader:R["a"]},computed:{market:function(){return this.dataset.exchange?{exchange:this.dataset.exchange,currency:this.dataset.currency.toUpperCase(),asset:this.dataset.asset.toUpperCase()}:{}},range:function(){return this.dataset.exchange?{from:this.dataset.from,to:this.dataset.to}:{}},config:function(){var t={};return Object.assign(t,{watch:this.market},{paperTrader:this.paperTrader},this.strat,{backtest:{daterange:this.range},backtestResultExporter:{enabled:!0,writeToDisk:!1,data:{stratUpdates:!0,roundtrips:!0,stratCandles:!0,stratCandleProps:["open","close","high","low","vwp","volume"],trades:!0}}},{performanceAnalyzer:this.performanceAnalyzer}),t.valid=this.validConfig(t),t.backtestResultExporter.enabled=!0,t}},methods:{validConfig:function(t){if(!t.backtest)return!1;if(!t.backtest.daterange)return!1;if(T.a.isEmpty(t.backtest.daterange))return!1;if(!t.watch)return!1;if(!t.tradingAdvisor)return!1;var e=t.tradingAdvisor.method;if(T.a.isEmpty(t[e]))return!1;if(t.tradingAdvisor){if(T.a.isNaN(t.tradingAdvisor.candleSize))return!1;if(0===t.tradingAdvisor.candleSize)return!1}return!0},updateDataset:function(t){this.dataset=t,this.$emit("config",this.config)},updateStrat:function(t){this.strat=t,this.$emit("config",this.config)},updatePaperTrader:function(t){this.paperTrader=t,this.paperTrader.enabled=!0,this.$emit("config",this.config)}}},D=Y,F=Object(C["a"])(D,c,o,!1,null,null,null),$=F.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md"},[a("div",{staticClass:"text-h5 q-mb-md"},[t._v("Backtest result")]),a("div",[t.result&&t.result.performanceReport?a("result-summary",{attrs:{report:t.result.performanceReport}}):t._e()],1),t.candles.length?a("div",[a("q-card",{staticClass:"q-my-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"bg-cyan-1"},[a("div",{staticClass:"text-h6"},[t._v("Market graph")])]),a("q-separator"),a("q-card-section",[a("echart",{attrs:{candles:t.candles,trades:t.trades,indicators:t.indicators}})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"around"}},[a("excel-json",{attrs:{data:t.genExportable(),name:"Backtest-Result.csv",type:"csv"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"backtest CSV",color:"amber"}})],1),a("excel-json",{attrs:{data:t.genExportable(),name:"Backtest-Result.xls",type:"xls"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"backtest XLS",color:"amber"}})],1),t.result.roundtrips&&t.result.roundtrips.length?a("excel-json",{attrs:{data:t.result.roundtrips,name:"Backtest-Roundtrips.xls",type:"xls"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"roundtrips XLS",color:"teal"}})],1):t._e(),t.result.roundtrips&&t.result.roundtrips.length?a("excel-json",{attrs:{data:t.result.roundtrips,name:"Backtest-Roundtrips.csv",type:"csv"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"roundtrips csv",color:"teal"}})],1):t._e()],1)],1)],1):t._e(),a("div",[t.result&&t.result.performanceReport?a("roundtrip-table",{attrs:{roundtrips:t.result.roundtrips,asset:t.result.performanceReport.asset,currency:t.result.performanceReport.currency}}):t._e()],1)])},B=[],j=(a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-6"},[a("q-card",{staticClass:"q-pa-sm bg-cyan-1",attrs:{dense:"",flat:"",bordered:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start time")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.startTime))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End time")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.endTime))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Timespan")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.timespan))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start price")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.startPrice))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End price")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.endPrice))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Market")]),a("div",{staticClass:"col text-weight-medium text-italic",class:{"text-negative":t.report.market<0,"text-positive":t.report.market>0}},[t._v("\n            "+t._s(t.report.market.toFixed(6))+" %\n          ")])])])],1),a("div",{staticClass:"col-6"},[a("paper-trade-summary",{attrs:{report:t.report}})],1)])])}),M=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-pa-sm bg-cyan-1",attrs:{dense:"",flat:"",bordered:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Amount of trades")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.trades))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Sharpe ratio")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round2(t.report.sharpe)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start Balance")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round(t.report.startBalance)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End Balance")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round(t.report.balance))+" "+t._s(t.report.currency))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Simulated profit")]),a("div",{staticClass:"col text-italic text-h6",class:t.profitClass},[t._v(t._s(t.round(t.report.relativeProfit))+" %")])])])},P=[],A={props:["report"],methods:{round2:function(t){return(+t).toFixed(2)},round:function(t){return(+t).toFixed(5)}},computed:{profitClass:function(){return this.report.relativeProfit>0?"text-positive":"text-negative"}}},z=A,O=Object(C["a"])(z,H,P,!1,null,null,null),W=O.exports,U={props:["report"],components:{paperTradeSummary:W},methods:{round:function(t){return(+t).toFixed(5)}}},L=U,V=Object(C["a"])(L,j,M,!1,null,null,null),N=V.exports,J=a("bdfd"),X=a("1a90"),G=a("f2d9"),I={props:["result"],data:function(){return{}},computed:{candles:function(){return this.result.stratCandles||[]},trades:function(){return this.result.trades||[]},indicators:function(){return this.result.stratUpdates||[]}},methods:{genExportable:function(){if(this.candles&&this.candles.length&&this.trades&&this.trades.length){var t=T.a.cloneDeep(this.candles);return T.a.each(this.trades,(function(e){var a=T.a.indexOf(t,T.a.find(t,(function(t){return t.start===e.date})));a>=0&&T.a.set(t[a],"advice",e.action)})),T.a.each(t,(function(t){t.advice||T.a.set(t,"advice","")})),t}return[]}},components:{roundtripTable:J["a"],resultSummary:N,echart:X["a"],ExcelJson:G["a"]}},K=I,Q=Object(C["a"])(K,E,B,!1,null,null,null),Z=Q.exports,tt=a("469d"),et={mixins:[tt["a"]],data:function(){return{backtestable:!1,backtestState:"idle",config:!1,candleWriter:null}},created:function(){var t=this;this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/candleWriter").then((function(e){t.candleWriter=toml.parse(e.data.part)})).catch((function(t){console.log("error getting candlewriter-config",t)}))},computed:{backtestResult:function(){return this.$store.getters["backtest/result"]}},methods:{check:function(t){if(this.config=t,!t.valid)return this.backtestable=!1;this.backtestable=!0},run:function(){var t=this;this.backtestState="fetching";this.$axios.post(this.$store.state.config.apiBaseUrl+"backtest",this.config).then((function(e){t.backtestState="fetched",t.$store.dispatch("backtest/setBacktestResult",e.data)})).catch((function(e){console.error(e),t.$q.notify({type:"negative",message:"Error during backtest-fetching of data."}),t.backtestState="error"}))},startLiveGekko:function(t){var e=this;this.candleWriter&&(this.config["candleWriter"]=this.candleWriter,this.config["watch"]["candleWriter"]=this.candleWriter),this.config.type=t?"paper trader":"tradebot",t||_.set(this.config,"paperTrader.enabled",!1),this.$q.dialog({title:"Start live "+this.config.type+"?",message:"Do you really want to start a live "+this.config.type+" for "+this.config.watch.currency+"-"+this.config.watch.asset+" on "+this.config.watch.exchange+" with the current backtest settings?",ok:"Yes",cancel:"No"}).then((function(){t||_.set(e.config,"trader.enabled",!0),e.start()}))}},components:{configBuilder:$,result:Z}},at=et,st=Object(C["a"])(at,n,i,!1,null,null,null),rt=st.exports,nt={name:"BacktesterPage",components:{Backtester:rt}},it=nt,ct=Object(C["a"])(it,s,r,!1,null,null,null);e["default"]=ct.exports}}]);