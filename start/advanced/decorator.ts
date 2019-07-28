type fetch = any;

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Get(url: string) {
  return function(target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const init = () => {
      return fetch(url)
        .then(response => response.json());
    };

    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  }
}

class TodoService {
  @Get('https://jsonplaceholder.typicode.com/todos')
  todos: Promise<ITodo[]>;
}

const todoService = new TodoService();

todoService.todos.then(todos => {
  console.log(todos);
});

