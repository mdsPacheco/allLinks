import {
  IconDashboard,
  IconProducts,
  IconReports,
  IconMessages,
  IconCalendar,
  IconUsers
} from './Icones';


export function IconCustom({icon}: any) {
  switch (icon) {
    case 'IconDashboard':
      return IconDashboard();
    case 'IconProducts':
      return IconProducts();
    case 'IconReports':
      return IconReports();
    case 'IconMessages':
      return IconMessages();
    case 'IconCalendar':
      return IconCalendar();
    case 'IconUsers':
      return IconUsers();
    default:
      return IconDashboard();
  }
}



