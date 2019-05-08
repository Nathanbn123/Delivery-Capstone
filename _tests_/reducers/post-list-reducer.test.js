import postListReducer from './../../src/reducers/post-list-reducer'

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    title : 'This is a post',
    text : 'This is the body to the text post',
    id : 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add a new post to postList', ()=> {
    const { title, text, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      title,
      text,
      id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title,
        text,
        id
      }
    });
  });
});
