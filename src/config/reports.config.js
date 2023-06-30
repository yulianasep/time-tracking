import data from '../mocks/data.json'

export const REPORTS = Array.from(data)

export const CalendarOptions = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly'
}

export const PeriodTimeLabel = {
  [CalendarOptions.DAILY]: 'Ultimo dia',
  [CalendarOptions.WEEKLY]: 'Ultima semana',
  [CalendarOptions.MONTHLY]: 'Ultimo mes'
}

export const DefaultPeriodTime = CalendarOptions.DAILY

Object.freeze(CalendarOptions)
