/*
? iki parametre alır
> > state: bielşen içersinde tuttuğumuz veri
> > action : state'i değiştirmek için gönderilen emirler
! > Görevi: action'ları type'larına göre analiz edip state'i günceller 
? > reducerdan return edilen son değer state'e aktarılır
*/
export function reducer(state, action) {
  console.log(action);

  if (action.type === 'SET_TEXT') {
    return { ...state, text: action.payload };
  }

  if (action.type === 'ADD_TODO') {
    action.payload.id = new Date().getTime();
    return { ...state, todos: [...state.todos, action.payload] };
  }

  if (action.type === 'DELETE_TODO') {
    const filtred = state.todos.filter(
      (i) => i.id !== action.payload
    );

    return { ...state, todos: filtred };
  }
}
