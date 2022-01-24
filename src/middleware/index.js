export function validateQuery(req, res, next) {
  const { order, initDate, endDate } = req.query;
  const { path } = req.route;
  const timestampInitDate = new Date(initDate);
  const timestampEndDate = new Date(endDate);
  if (path === '/post/by-date') {
    if (timestampInitDate > timestampEndDate) {
      res.json({
        code: 500,
        data: [],
        message: 'Initial Date must be bigger than end Date',
      });
    }
  }
  if (!order || (order !== 'ups' && order !== 'comments')) {
    res.json({
      code: 500,
      data: [],
      message: 'Order was specified wrongly or not specified',
    });
  }
  next();
}
