import { appCreation } from './modules/appCreation.js'
import { todoListItemsCreation } from './modules/todoListItems.js'

appCreation();

todoListItemsCreation({id:0, text: '1', isDone: true})
