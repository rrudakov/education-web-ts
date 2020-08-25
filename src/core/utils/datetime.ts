import moment, { Moment } from 'moment';
import 'moment/locale/ru';

const format = 'DD.MM.YYYY, HH:mm';

export const toDateTime = (s: string): Moment => moment(s);

export const formatRelativeDateTime = (dateTime: Moment): string => dateTime.locale('ru').fromNow();

export const formatDateTime = (dateTime: Moment): string => dateTime.locale('ru').format(format);
