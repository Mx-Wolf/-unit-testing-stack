import { createStack } from './stack';
describe('реализацию абстрактного стека', () => {
  it('стек можно создать с помощью фабрики', () => {
    const limit = 0;
    const stack = createStack(limit);
    expect(stack).not.toBeNull();
  });
  it('предоставляет операцию push', () => {
    const limit = 0;
    const { push } = createStack(limit);
    expect(push).toBeDefined();
  });

  it('предоставляет операцию pop', () => {
    const limit = 0;
    const { pop } = createStack(limit);
    expect(pop).toBeDefined();
  })

});
