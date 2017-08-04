export default function timeSort(p1, p2) {
    const time1 = p1.createTime, time2 = p2.createTime;
    if (time1.year > time2.year) {
      return -1;
    } else if (time1.year === time2.year) {
      if (time1.month > time2.month) {
        return -1;
      } else if (time1.month === time2.month) {
        if (time1.date > time2.date) {
          return -1;
        } else if (time1.date === time2.date) {
          if (time1.hour > time2.hour) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  }
