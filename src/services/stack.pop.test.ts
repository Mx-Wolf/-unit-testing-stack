import { createStack } from "./stack"

describe('операция pop для абстрактного стека', () => {
  it('завершается аварийно для пустого стека', () => {
    const limit = 0;
    const { pop } = createStack(limit);

    expect(() => pop()).toThrow(/underflow/i)
  })
  it('Извлекает помещенный элемент', () => {
    // arrange
    const limit = 1;
    const item = {};
    const { pop, push } = createStack(limit);
    // act
    push(item);
    const result = pop();
    // assert
    expect(result).toBe(item);
  })
})
