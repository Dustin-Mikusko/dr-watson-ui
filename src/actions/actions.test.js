import * as actions from '../actions';

describe('actions,', () => {
  it('should have a type of CREATE_USER', () => {
    const mockUser = {
      id: 12,
      firstName: 'Jose',
      lastName: 'Altuve',
      feeling: 'happy'
    }
    const expectedAction = {
      type: 'CREATE_USER',
      user: mockUser
    };
    const result = actions.createUser(mockUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER'
    };
    const result = actions.removeUser();
    
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const mockErrorMsg = 'This is an error';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockErrorMsg
    };
    const result = actions.hasErrored(mockErrorMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_MESSAGE', () => {
    const mockMessage = 'This is a message';
    const mockIsUser = true
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: { message: mockMessage, isUser: mockIsUser },
    };
    const result = actions.addMessage(mockMessage, mockIsUser);

    expect(result).toEqual(expectedAction)
  });

  it('should have a type CLEAR_MESSAGES', () => {
    const expectedAction = {
      type: 'CLEAR_MESSAGES'
    };
    const result = actions.clearMessages();

    expect(result).toEqual(expectedAction);
  })
})

