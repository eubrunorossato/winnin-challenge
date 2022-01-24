export function checkDate(req, res, next) {
  const { order, initDate, endDate } = req.query;
  const timestampInitDate = new Date(initDate);
  const timestampEndDate = new Date(endDate);
  if (timestampInitDate > timestampEndDate) {
    res.json({
      code: 500,
      data: [],
      message: 'Initial Date must be bigger than end Date',
    });
  } else if (!order || (order !== 'ups' && order !== 'comments')) {
    res.json({
      code: 500,
      data: [],
      message: 'Order was specified wrongly or not specified',
    });
  }
  next();
}
