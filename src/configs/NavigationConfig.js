import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'basic',
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [{
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Дашборд',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  }, {
    key: 'catalog',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'Каталог',
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'goods',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Товары',
      breadcrumb: false,
      submenu: []
    },{
      key: 'categories',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Категории',
      breadcrumb: false,
      submenu: []
    },{
      key: 'collections',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Коллекции',
      breadcrumb: false,
      submenu: []
    },{
      key: 'combos',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Комбо',
      breadcrumb: false,
      submenu: []
    },]
  }, {
    key: 'orders',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Заказы',
    icon: ShoppingOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'clints',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Клиенты',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'clintList',
      path: `${APP_PREFIX_PATH}/clientlist`,
      title: 'Список клиентов',
      breadcrumb: false,
      submenu: []
    },{
      key: 'clintGroup',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Группы клиентов',
      breadcrumb: false,
      submenu: []
    }]
  },{
    key: 'banners',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Баннеры',
    icon: PictureOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'promo',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Промокоды',
    icon: GiftOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'offline',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Оффлайн точки',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'addresses',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Адреса',
      breadcrumb: false,
      submenu: []
    },{
      key: 'geoZones',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Геозоны',
      breadcrumb: false,
      submenu: []
    }]
  },{
    key: 'employees',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Сотрудники',
    icon: UsergroupAddOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'mailings',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Рассылки',
    icon: MailOutlined,
    breadcrumb: false,
    submenu: []
  }]
}, {
  key: 'systemic',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Системные',
  breadcrumb: false,
  submenu: [{
    key: 'settings',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Настройки',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'mobileApp',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Мобильное приложение',
    icon:  MobileOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'logs',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Логи',
    icon:  FileTextOutlined,
    breadcrumb: false,
    submenu: []
  }]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
