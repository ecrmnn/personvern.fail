import dayjs from 'dayjs';
import 'dayjs/locale/nb';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('nb');
dayjs.extend(relativeTime);

// eslint-disable-next-line
export default ({ app }, inject) => {
  inject('dayjs', (x) => dayjs(x));
};
