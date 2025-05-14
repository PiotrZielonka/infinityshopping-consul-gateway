import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'infinityShoppingGatewayApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'store',
    data: { pageTitle: 'infinityShoppingGatewayApp.infinityShoppingStoreStore.home.title' },
    loadChildren: () => import('./InfinityShoppingStore/store/store.routes'),
  },
  {
    path: 'notification',
    data: { pageTitle: 'infinityShoppingGatewayApp.infinityShoppingNotificationAppNotification.home.title' },
    loadChildren: () => import('./InfinityShoppingNotificationApp/notification/notification.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
