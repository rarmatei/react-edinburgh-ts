interface IEmail {
    from: string;
    to: string[];
    body: string;
  }
  
  interface ITodo {
    isCompleted: boolean;
    text: string;
    linkedEmail: IEmail;
  }
  
  interface IRootState {
    userId: string;
    showCompletedOnly: boolean;
    todoTypes: string[];
    todos: ITodo[];
    iconGrid: string[][];
  }
  
  type IReadonlyRootState = DeepReadonly<IRootState>;
  
  function rootReducer(action: any, state: IReadonlyRootState): IReadonlyRootState {
    // case action 1...
    // case action 2...
    return state;
  }
  






















  type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };
  
  type DeepReadonly<T> = T extends (infer E)[][] ?
      ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>> :
    T extends (infer E)[] ? ReadonlyArray<DeepReadonlyObject<E>> :
    T extends object ? DeepReadonlyObject<T> :
    T;