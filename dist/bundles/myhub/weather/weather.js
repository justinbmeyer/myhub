define("myhub@1.0.0#weather/weather",["exports","jquery"],function(e,t){"use strict";function n(e){return e.toLowerCase().replace(/ /g,"-")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){(0,a.default)(e).html("Loading..."),a.default.ajax({url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places%20where%20text%3D%22sanjose ca%22)&format=json&diagnostics=true&callback="}).then(function(t){var s=t.query.results.channel.item.forecast.map(function(e){return'\n          <li>\n            <span class="date">'+e.date+'</span>\n            <span class="description '+n(e.text)+'">'+e.text+'</span>\n            <span class="high-temp">'+e.high+'<sup>&deg;</sup></span>\n            <span class="low-temp">'+e.low+"<sup>&deg;</sup></span>\n          </li>\n        "});(0,a.default)(e).html('\n        <div class="forecast">\n          <ul>\n            '+s.join("")+"\n          </ul>\n        </div>\n      ")})};var a=function(e){return e&&e.__esModule?e:{default:e}}(t)});