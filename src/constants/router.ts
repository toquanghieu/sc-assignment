import {
  CalendarMenuIcon,
  HomeMenuIcon,
  MessageMenuIcon,
  MoreMenuIcon,
  SearchMenuIcon,
} from '~/components/Icons';

export const menu = [
  {
    name: '홈',
    icon: HomeMenuIcon,
    path: '/home',
  },
  {
    name: '검색',
    icon: SearchMenuIcon,
    path: '/search',
  },
  {
    name: '피드',
    icon: MessageMenuIcon,
    path: '/message',
  },
  {
    name: '내 예약',
    icon: CalendarMenuIcon,
    path: '/calendar',
  },
  {
    name: '메뉴',
    icon: MoreMenuIcon,
    path: '/more-settings',
  },
];
