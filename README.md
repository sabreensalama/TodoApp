# TodoApp
. Create a nodejs script that manages a task list 
## features
- We should be able to add a todo to the list
- We should be able to edit a todo
- We should be able to remove a todo
- We should be able to check the todo
- We should be able to uncheck the todo
-  We should be able to list:
-  All todo
-  completed todo only. (checked)
-  Uncompleted todo only (unchecked)

## steps
- to add new todo
```
node todo.js add   title="node3" body="node3" 
```
- to edit
```
node todo.js edit id=1  title="node3" body="node3" 
```
- to remove 
```
node todo.js delete id=4
```
- to check the todo
```
node todo.js check id=1
```
- to uncheck 
```
node todo.js uncheck id=1
```
- list all
```
node todo.js list value=all
```
- list checked 
```
node todo.js list value=checked
```
- list unchecked 
```
node todo.js list value=unchecked
```
