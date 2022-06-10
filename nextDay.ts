import { staticBlock } from "@babel/types"

export class nextDayCaculator {
    static add(day: number, month: number, year: number): string {
        //Day and month of the year
        const isDayofMonth = 1
        const isMonthOfYear = 1

        //month of the year
        const lastMonthOfYear = month === 12

        //month of year
        const oddDay = day === 31
        const evenDay = day === 30

        //2sth
        const oddDayof2sth = day === 29
        const evenDayof2sth = day === 28

       
        if (oddDay && lastMonthOfYear){
            return `${isDayofMonth}/${isMonthOfYear}/${year + 1}`
        }

        else if (oddDay || evenDay) {
            return `${isDayofMonth}/${month + 1}/${year}`
        }

        else if (oddDayof2sth || evenDayof2sth) {
            return `${isDayofMonth}/${month + 1}/${year}`
        }

      

        return `${day + 1}/${month}/${year}`

    }
}