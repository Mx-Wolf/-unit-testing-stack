import { createStack } from "./stack"

describe('операцию push простого абстрактного стека', () => {
  it('когда операция не приведет к переполнению стека завершается успешно', () => {
    // arrange
    const limit = 1;
    const item = {};
    const { push } = createStack(limit);
    // act
    // assert
    expect(() => push(item)).not.toThrow();
  })
  it('завершается аварийно при достижении установленного предела', () => {
    const limit = 0;
    const item = {};
    const { push } = createStack(limit);
    expect (()=>push(item)).toThrow(/overflow/i);
  })
})
