import { messages } from './messages';

describe('messagesReducer', () => {
  it('should return state with a new message if the type is ADD_MESSAGE', () => {
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: { message: 'This is a message',
      isUser: false }
    };
    const expected = [mockAction.message];
    const result = messages([], mockAction);

    expect(result).toEqual(expected);
  });

  it('should clear message if the type is CLEAR_MESSAGES', () => {
    const mockState = [{ message: 'This is a message', isUser: true }];
    const mockAction = {
      type: 'CLEAR_MESSAGES'
    };
    const result = messages(mockState, mockAction);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it('should return state the initial state if no type', () => {
    const mockState = [{ message: 'This is a message', isUser: true }];
    const result = messages(mockState, {});

    expect(result).toEqual(mockState);
  })
})


