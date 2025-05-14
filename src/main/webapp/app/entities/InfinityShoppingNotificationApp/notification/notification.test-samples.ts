import dayjs from 'dayjs/esm';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 10110,
  title: 'reclassify makeover',
  description: 'muscat',
  isRead: true,
  createTime: dayjs('2025-05-13T12:13'),
};

export const sampleWithPartialData: INotification = {
  id: 27987,
  title: 'despite anesthetize because',
  description: 'ack',
  isRead: false,
  createTime: dayjs('2025-05-13T17:18'),
};

export const sampleWithFullData: INotification = {
  id: 5787,
  title: 'some extra-large',
  description: 'bruised',
  isRead: false,
  createTime: dayjs('2025-05-13T13:56'),
};

export const sampleWithNewData: NewNotification = {
  title: 'consequently voluntarily ew',
  description: 'honesty depart acquaintance',
  isRead: false,
  createTime: dayjs('2025-05-13T13:49'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
