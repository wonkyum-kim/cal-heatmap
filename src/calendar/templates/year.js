const yearTemplate = (DateHelper) => ({
  name: 'year',
  level: 60,
  row() {
    return 1;
  },
  column() {
    return 1;
  },
  position: {
    x() {
      return 1;
    },
    y() {
      return 1;
    },
  },
  format: {
    date: 'Y',
    legend: 'Y',
    connector: 'in',
  },
  extractUnit(d) {
    return DateHelper.date(d).startOf('year').valueOf();
  },
});

export default yearTemplate;
