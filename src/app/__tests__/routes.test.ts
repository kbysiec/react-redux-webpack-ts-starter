import routes, { homeComponentImport, bookContainerImport } from '../routes';

describe('app / routes ', () => {
  test('should home and books routes be defined', () => {
    const [HOME, BOOKS] = routes;
    expect(HOME).toBeDefined();
    expect(BOOKS).toBeDefined();
  });

  test('should HomeComponent be imported ', () => {
    expect(homeComponentImport()).toBeDefined();

    return homeComponentImport().then(result => {
      const HomeComponent = result.default({});
      expect(HomeComponent).toBeDefined();
    });
  });

  test('should BookListContainer be imported ', () => {
    expect(bookContainerImport()).toBeDefined();

    return bookContainerImport().then(result => {
      const BookListContainer = result.default;
      expect(BookListContainer).toBeDefined();
    });
  });
});
