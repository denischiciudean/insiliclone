const mongoose = require("mongoose");
// const FTXRest = require("ftx-api-rest")
const bybit_wrapper = require("../../components/exchanges/wrappers/bybit_wrapper");

(async () => {
    // get orderbook
    const book = await bybit_wrapper.getOrderBook({symbol: "BTCUSD"})
    const tickers = await bybit_wrapper.getSymbols({symbol: "BTCUSD"})
    // const prices = await bybit_wrapper.getKline({
    //     symbol: "BTCUSD",
    //     interval: 60,
    //     from: Date.now() - 100000
    // })


    // get live price feed
    // console.log(prices.result)
// console.log(book)
})()