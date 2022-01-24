import { CronJob } from 'cron';
import redditService from './redit';

export default {
  redditCron: () =>
    new CronJob(
      process.env.CRON_JOB_REDDIT,
      async () => {
        console.log('started');
        await redditService.getPerPeriod();
      },
      null,
      true,
      'America/Sao_Paulo'
    ),
};
