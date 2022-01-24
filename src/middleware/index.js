export function validateQuery(req, res, next) {
  const { order, initDate, endDate } = req.query;
  const { path } = req.route;
  const timestampInitDate = new Date(initDate);
  const timestampEndDate = new Date(endDate);
  if (path === '/post/by-date') {
    if (timestampInitDate > timestampEndDate) {
      res.status(500).json({
        data: [],
        message: 'Initial Date must be bigger than end Date',
      });
    }
  }
  if (!order || (order !== 'ups' && order !== 'comments')) {
    res.status(500).json({
      data: [],
      message: 'Order was specified wrongly or not specified',
    });
  }
  next();
}
