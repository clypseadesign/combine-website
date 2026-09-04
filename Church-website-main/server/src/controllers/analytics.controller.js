import { db, collections } from '../config/firebase.js';
import { catchAsync } from '../middleware/errorHandler.js';
import { logger } from '../config/logger.js';

export const trackPageView = catchAsync(async (req, res) => {
  const { page, referrer, userAgent } = req.body;

  const analyticsData = {
    page: page || req.get('referer'),
    referrer: referrer || '',
    userAgent: userAgent || req.get('user-agent'),
    ipAddress: req.ip,
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0]
  };

  await db.collection(collections.ANALYTICS).add(analyticsData);

  res.status(200).json({ success: true, message: 'Page view tracked' });
});

export const getAnalytics = catchAsync(async (req, res) => {
  const days = parseInt(req.query.days) || 30;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const snapshot = await db
    .collection(collections.ANALYTICS)
    .where('timestamp', '>=', startDate.toISOString())
    .get();

  const analytics = {
    totalViews: snapshot.size,
    pageViews: {},
    dailyViews: {},
    topPages: []
  };

  snapshot.forEach(doc => {
    const data = doc.data();
    
    // Count by page
    analytics.pageViews[data.page] = (analytics.pageViews[data.page] || 0) + 1;
    
    // Count by date
    analytics.dailyViews[data.date] = (analytics.dailyViews[data.date] || 0) + 1;
  });

  // Get top pages
  analytics.topPages = Object.entries(analytics.pageViews)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, views]) => ({ page, views }));

  res.status(200).json({ success: true, data: analytics });
});
