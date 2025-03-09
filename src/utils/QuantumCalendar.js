export class QuantumCalendar {
  constructor() {
    // Constants for Quantum Calendar
    this.DAYS_PER_WEEK = 7;
    this.WEEKS_PER_MONTH = 4;
    this.MONTHS_PER_YEAR = 13;
    this.DAYS_PER_YEAR = this.DAYS_PER_WEEK * this.WEEKS_PER_MONTH * this.MONTHS_PER_YEAR + 1; // +1 for leap day
    this.DAYS_PER_QUANTUM_CYCLE = this.DAYS_PER_YEAR * 4 + 1; // +1 for quantum day every 4 years
    
    // A.D. Timeline start (January 1, 1 AD - beginning of Gregorian calendar)
    this.AD_START = new Date('January 1, 0001');
    
    // Personal timeline start (birth date) - adjust this to your actual birth date
    this.LIFETIME_START = new Date('December 28, 1993');
    this.LIFETIME_START_FULL = new Date('December 29, 1993'); // First full day alive
    
    // Project timeline start
    this.PROJECT_LEAP_START = new Date('March 4, 2025'); // Leap Day
    this.PROJECT_START = new Date('March 5, 2025'); // Day 1
    
    // Project end date (1 year after start)
    this.PROJECT_END = new Date('March 5, 2026');
    
    // Life expectancy (120 quantum years)
    this.LIFE_EXPECTANCY_QUANTUM_YEARS = 120;
    this.LIFE_EXPECTANCY_DAYS = this.LIFE_EXPECTANCY_QUANTUM_YEARS * this.DAYS_PER_YEAR;
  }
  
  // Convert standard date to days since start of A.D. timeline
  getDaysSinceADStart(date = new Date()) {
    // This is an approximation since JavaScript Date can't precisely handle dates from 1 AD
    // We're calculating the approximate number of days since January 1, 1 AD
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    
    // Calculate days in complete years (accounting for leap years)
    let days = (year - 1) * 365;
    days += Math.floor((year - 1) / 4); // Add leap days
    days -= Math.floor((year - 1) / 100); // Subtract century years that aren't leap years
    days += Math.floor((year - 1) / 400); // Add back century years divisible by 400
    
    // Add days for the months in current year
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      daysInMonth[1] = 29; // Leap year
    }
    
    for (let i = 0; i < month; i++) {
      days += daysInMonth[i];
    }
    
    // Add days in current month
    days += day;
    
    return days;
  }
  
  // Get years completed in A.D. timeline
  getYearsCompleted(date = new Date()) {
    return date.getFullYear() - 1; // -1 because we're counting completed years
  }
  
  // Convert standard date to days since start of personal timeline
  getDaysSinceLifetimeStart(date = new Date()) {
    return Math.floor((date - this.LIFETIME_START_FULL) / (24 * 60 * 60 * 1000)) + 1;
  }
  
  // Convert standard date to days since start of Project timeline
  getDaysSinceProjectStart(date = new Date()) {
    return Math.floor((date - this.PROJECT_START) / (24 * 60 * 60 * 1000)) + 1;
  }
  
  // Get days remaining in project
  getDaysRemainingInProject(date = new Date()) {
    return Math.max(0, Math.floor((this.PROJECT_END - date) / (24 * 60 * 60 * 1000)));
  }
  
  // Calculate Quantum Calendar position (day, week, year) for a timeline
  getQuantumPosition(daysSinceStart) {
    if (daysSinceStart <= 0) return { day: 0, week: 0, month: 0, year: 0 };
    
    // Account for leap days and quantum days
    const quantumCycles = Math.floor(daysSinceStart / this.DAYS_PER_QUANTUM_CYCLE);
    const remainingDays = daysSinceStart % this.DAYS_PER_QUANTUM_CYCLE;
    
    let year, dayOfYear;
    
    if (remainingDays <= this.DAYS_PER_YEAR) {
      // First year of quantum cycle
      year = quantumCycles * 4 + 2;
      dayOfYear = remainingDays - this.DAYS_PER_YEAR;
    } else if (remainingDays <= this.DAYS_PER_YEAR * 3) {
      // Third year of quantum cycle
      year = quantumCycles * 4 + 3;
      dayOfYear = remainingDays - (this.DAYS_PER_YEAR * 2);
    } else {
      // Fourth year of quantum cycle (has quantum day)
      year = quantumCycles * 4 + 4;
      dayOfYear = remainingDays - (this.DAYS_PER_YEAR * 3);
    }
    
    // Regular days calculation (excluding leap day)
    let regularDay = dayOfYear;
    if (dayOfYear > 1) regularDay -= 1; // Account for leap day at start of year
    
    if (dayOfYear === 1) {
      // This is the leap day
      return { day: "Leap", week: 0, month: 0, year };
    } else if (dayOfYear === this.DAYS_PER_YEAR && year % 4 === 0) {
      // This is the quantum day
      return { day: "Quantum", week: 0, month: 0, year };
    } else {
      // Regular day calculation
      const totalDaysInRegularCalendar = this.DAYS_PER_WEEK * this.WEEKS_PER_MONTH * this.MONTHS_PER_YEAR;
      const dayOfRegularCalendar = ((regularDay - 1) % totalDaysInRegularCalendar) + 1;
      
      const day = ((dayOfRegularCalendar - 1) % this.DAYS_PER_WEEK) + 1;
      const week = Math.floor((dayOfRegularCalendar - 1) / this.DAYS_PER_WEEK) % this.WEEKS_PER_MONTH + 1;
      const month = Math.floor((dayOfRegularCalendar - 1) / (this.DAYS_PER_WEEK * this.WEEKS_PER_MONTH)) + 1;
      
      return { day, week, month, year };
    }
  }
  
  // Get current hour of the day (1-based)
  getCurrentHour(date = new Date()) {
    return date.getHours() + 1; // 1-based
  }
  
  // Get current position in day (normal format but 1-based counting)
  getDayPosition(date = new Date()) {
    const milliseconds = date.getMilliseconds() + 1; // 1-based
    const seconds = date.getSeconds() + 1; // 1-based
    const minutes = date.getMinutes() + 1; // 1-based
    const hours = date.getHours() + 1; // 1-based
    
    return { milliseconds, seconds, minutes, hours };
  }
  
  // Get hour progress percentage
  getHourProgress(date = new Date()) {
    return (date.getMinutes() * 60 + date.getSeconds()) / (60 * 60) * 100;
  }
  
  // Get minute progress percentage
  getMinuteProgress(date = new Date()) {
    return date.getSeconds() / 60 * 100;
  }
  
  // Get second progress percentage
  getSecondProgress(date = new Date()) {
    return date.getMilliseconds() / 1000 * 100;
  }
  
  // Get ordinal suffix (1st, 2nd, 3rd, etc.)
  getOrdinalSuffix(number) {
    const j = number % 10;
    const k = number % 100;
    
    if (j === 1 && k !== 11) {
      return number + "st";
    }
    if (j === 2 && k !== 12) {
      return number + "nd";
    }
    if (j === 3 && k !== 13) {
      return number + "rd";
    }
    return number + "th";
  }
}1;