import { createStack } from "./stack"

describe('операция pop для абстрактного стека', () => {
  it('завершается аварийно для пустого стека', () => {
    const limit = 0;
    const { pop } = createStack(limit);

    expect(() => pop()).toThrow(/underflow/i)
  })
})
