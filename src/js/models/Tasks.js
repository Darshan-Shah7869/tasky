const shortid = require("shortid");
export default class Tasks {
  constructor() {
    this.tasks = [];
  }

  addTask(text, description) {
    const task = {
      id: shortid.generate(),
      text,
      description,
    };

    this.tasks.push(task);
    console.log(this.tasks);
    this.saveInLocalStorage();
  }

  getTasks() {
    return this.tasks;
  }

  deleteTask(id) {
    let taskIndex;
    this.tasks.forEach((el, index) => {
      if (el.id === id) {
        taskIndex = index;
      }
    });
    console.log(taskIndex);
    this.tasks.splice(taskIndex, 1);
    console.log(this.tasks);
    this.saveInLocalStorage();
  }

  updateTask(id, text, description) {
    this.tasks.forEach((el) => {
      if (el.id === id) {
        el.text = text;
        el.description = description;
      }
    });
    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  readFromLocalStorage() {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    if (storage) {
      this.tasks = storage;
    }
  }

  // addItem(id,recipeName,source,recipeImage){
  //     const item = {
  //         id,
  //         recipeName,
  //         source,
  //         recipeImage
  //     };
  //     this.likesItems.push(item);

  //     // Save inside the local storage
  //     this.saveInLocalStorage();

  // }

  // deleteItem(id){
  //     const index = this.likesItems.findIndex(el => id === el.id);
  //     this.likesItems.splice(index, 1);

  //     // Save inside the local storage
  //     this.saveInLocalStorage();
  // }

  // saveInLocalStorage(){
  //     localStorage.setItem('likes', JSON.stringify(this.likesItems));
  // }

  // readFromLocalStorage(){
  //     const storage = JSON.parse(localStorage.getItem('likes'));
  //     if(storage){
  //         this.likesItems = storage;
  //     };
  // }
}
