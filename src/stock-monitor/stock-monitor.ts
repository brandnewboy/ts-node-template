// 假设使用Alpha Vantage API获取股票数据，需要替换为你自己的API密钥
const API_KEY = 'YOUR_API_KEY'
const SYMBOL = 'AAPL' // 选择苹果公司的股票作为示例
const CHANGE_THRESHOLD = 0.05 // 5%的变动阈值

let previousPrice: number | null = null;

async function getStockPrice() {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        const price = parseFloat(data['Global Quote']['05. price'])
        return price
    } catch (error) {
        console.error('Error fetching stock price:', error)
        return null;
    }
}

export async function monitorStock() {
    const currentPrice = await getStockPrice()
    if (currentPrice === null) return

    if (previousPrice !== null) {
        const change = (currentPrice - previousPrice) / previousPrice
        if (Math.abs(change) > CHANGE_THRESHOLD) {
            window.alert(`Stock price of ${SYMBOL} has changed by ${(change * 100).toFixed(2)}%!`)
        }
    }

    previousPrice = currentPrice
}

// 初始调用
monitorStock()
