import dayjs from 'dayjs/esm';

export interface INotification {
  id: number;
  title?: string | null;
  description?: string | null;
  isRead?: boolean | null;
  createTime?: dayjs.Dayjs | null;
}

export type NewNotification = Omit<INotification, 'id'> & { id: null };
