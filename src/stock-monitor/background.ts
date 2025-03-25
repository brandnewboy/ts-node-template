import  "./stock-monitor.ts"
import { monitorStock } from "./stock-monitor"

// 每隔一段时间执行一次股票监控
setInterval(() => {
    monitorStock()
}, 60000) // 每分钟检查一次
