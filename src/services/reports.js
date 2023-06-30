import { DefaultPeriodTime, PeriodTimeLabel, REPORTS } from '../config/reports.config'

export function getReportsByCalendar(calendarOption = DefaultPeriodTime) {
  return REPORTS.map((report) => {
    const { timeframes, title } = report

    const subtitle = `${PeriodTimeLabel[calendarOption]} - ${timeframes[calendarOption].previous}hrs`

    return {
      title,
      subtitle,
      hours: timeframes[calendarOption].current
    }
  })
}
