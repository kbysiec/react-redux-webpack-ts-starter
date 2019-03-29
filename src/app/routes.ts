import { lazy, LazyExoticComponent } from 'react';
import { ComponentType } from 'enzyme';

type Route = {
  path: string;
  label: string;
  component: LazyExoticComponent<ComponentType<any>>;
};

export const homeComponentImport = () =>
  import('./home/HomeComponent');
export const bookContainerImport = () =>
  import('./books/BookListContainer');

const HomeComponent = lazy(homeComponentImport);
export const BookListContainer = lazy(bookContainerImport);

export const HOME: Route = {
  path: '/',
  label: 'Home',
  component: HomeComponent,
};

export const BOOKS: Route = {
  path: '/books',
  label: 'Books',
  component: BookListContainer,
};

export const DEFAULT_ROUTE = HOME.path;

const routes = [HOME, BOOKS];

export default routes;
