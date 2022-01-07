import Tasks from "./models/Tasks";
import Weather from "./models/Weather";
import { elements } from "./views/elements";

import * as taskViews from "./views/tasksView";
import * as weatherViews from "./views/weather";

// Create a state

const state = {};

// Initial state

state.tasks = new Tasks();

const getWeatherData = async () => {
  const data = await state.weather.getData();
  console.log(data);
  return data;
};

state.showPopup = true;
state.text = "";
state.description = "";
state.newText = "";
state.newDescription = "";
state.showUpdatePopup = true;

// No taskBox Controler

const showNoTaskBox = () => {
  console.log(state.tasks.tasks);
  if (state.tasks.tasks.length === 0) {
    // Remove all the children from Left node
    renderTaskBox();
  }
};

showNoTaskBox();

// Add task Popup Controller

const setTaskText = (e) => {
  state.text = e.target.value;
  if (state.text.length > 0 && state.description.length > 0) {
    document.querySelector(".addTaskPopupBtn").disabled = false;
  }
};

const setTaskDescription = (e) => {
  state.description = e.target.value;
  if (state.text.length > 0 && state.description.length > 0) {
    document.querySelector(".addTaskPopupBtn").disabled = false;
  }
};

// Delete Handler

const setUpDeleteHandler = () => {
  console.log("settting up delete handelr");
  document.querySelectorAll(".deleteIcon").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = e.target.closest(".task").id;
      // state.tasks.
      state.tasks.deleteTask(id);
      renderTasks();
      setUpDeleteHandler();
      setupUpdateHandler();
    });
  });
};

// update Handler

const setupUpdateHandler = () => {
  console.log("setting up update handler");
  document.querySelectorAll(".updateIcon").forEach((el) => {
    el.addEventListener("click", (e) => {
      //   console.log("clicked", e.target.closest(".task").id);
      const id = e.target.closest(".task").id;
      // state.tasks.
      state.showUpdatePopup = true;
      toggleUpdatePopup(id);
      //   state.tasks.updateTask(id, state.newText, state.newDescription);
      //   renderTasks();
      //   setupUpdateHandler();
    });
  });
};

const renderTasks = () => {
  const output = taskViews.renderTaskList(state.tasks.getTasks());
  let child = elements.left.lastElementChild;
  while (child) {
    elements.left.removeChild(child);
    child = elements.left.lastElementChild;
  }

  elements.left.insertAdjacentHTML("afterbegin", output);
  //   setUpDeleteHandler();

  if (state.tasks.getTasks.length !== 0) {
    console.log("hi");
    elements.left.insertAdjacentHTML("afterbegin", output);

    // setUpDeleteHandler();
  } else {
    showNoTaskBox();
  }
};

const toggleUpdatePopup = (id) => {
  if (state.showUpdatePopup) {
    elements.homepage.insertAdjacentHTML(
      "afterbegin",
      `<div class="popup updatePopup">
          <div class="loginForm form-group">
            <input
              type="text"
              placeholder="Enter new Title"
              class="form-control input mb-5 updateTaskTextInput"
            />
            <input
              type="text"
             
              placeholder="Enter new description"
              style={ height: 16rem; marginTop: -4rem; }}
              class="form-control input mb-5 updateTaskDescriptionInput"
            />
          </div>
          <button
            
            class="loginBtn btn btn-dark mt-5 d-block  mx-auto text-center updateTaskBtn"
          >
            Add task
          </button>
        </div>`
    );

    document.querySelector(".updateTaskBtn").innerHTML = "Update";

    document
      .querySelector(".updateTaskTextInput")
      .addEventListener("change", (e) => {
        state.newText = e.target.value;
        if (state.newText.length !== 0) {
          document.querySelector(".updateTaskBtn").disabled = false;
        } else {
          document.querySelector(".updateTaskBtn").disabled = true;
        }
      });

    document
      .querySelector(".updateTaskDescriptionInput")
      .addEventListener("change", (e) => {
        state.newDescription = e.target.value;
        if (state.newDescription.length !== 0) {
          document.querySelector(".updateTaskBtn").disabled = false;
        } else {
          document.querySelector(".updateTaskBtn").disabled = true;
        }
      });

    document.querySelector(".updateTaskBtn").addEventListener("click", () => {
      if (state.newText.length > 0 && state.newDescription.length > 0) {
        state.tasks.updateTask(id, state.newText, state.newDescription);

        // Remove Popup
        // state.showUpdatePopup = false;
        elements.addTaskBtn.innerHTML = "Add Task";
        document
          .querySelector(".homepage")
          .removeChild(document.querySelector(".popup"));
        // Add task to the view
        renderTasks();

        // Add delete and update Handlers
        setUpDeleteHandler();
        setupUpdateHandler();
      } else {
        // Disable the add btn
        document.querySelector(".updateTaskBtn").disabled = true;
      }
    });
  }
};

const togglePopup = () => {
  if (state.showPopup) {
    // Show Popup
    elements.homepage.insertAdjacentHTML(
      "afterbegin",
      `<div class="popup">
    <div class="loginForm form-group">
      <input
        type="text"
        placeholder="Enter task Title"
        class="form-control input mb-5 addTaskTextInput"
      />
      <input
        type="text"
       
        placeholder="Enter task description"
        style={ height: 16rem; marginTop: -4rem; }}
        class="form-control input mb-5 addTaskDescriptionInput"
      />
    </div>
    <button
      
      class="loginBtn btn btn-dark mt-5 d-block  mx-auto text-center addTaskPopupBtn"
    >
      Add task
    </button>
  </div>`
    );

    // Change the text of btn
    elements.addTaskBtn.innerHTML = "Cancel";

    document
      .querySelector(".addTaskTextInput")
      .addEventListener("change", setTaskText);

    document
      .querySelector(".addTaskDescriptionInput")
      .addEventListener("change", setTaskDescription);

    // Add the task to the task list with auto Id

    document.querySelector(".addTaskPopupBtn").addEventListener("click", () => {
      if (state.text.length > 0 && state.description.length > 0) {
        state.tasks.addTask(state.text, state.description);
        console.log(state.tasks.getTasks());
        // Remove Popup
        state.showPopup = true;
        elements.addTaskBtn.innerHTML = "Add Task";
        document
          .querySelector(".homepage")
          .removeChild(document.querySelector(".popup"));
        // Add task to the view
        renderTasks();

        // Add delete and update Handlers
        setUpDeleteHandler();
        setupUpdateHandler();
      } else {
        // Disable the add btn
        document.querySelector(".addTaskPopupBtn").disabled = true;
      }
    });
  } else {
    // Remove the popup
    document
      .querySelector(".popup")
      .parentNode.removeChild(document.querySelector(".popup"));

    // Change the text of btn
    elements.addTaskBtn.innerHTML = "Add Task";
  }

  state.showPopup = !state.showPopup;

  // set event lister task text and description

  // Delete the task while clicking on a delete icon
};

// Show and hide the popup on click

elements.addTaskBtn.addEventListener("click", togglePopup);

function renderTaskBox() {
  let child = elements.left.lastElementChild;
  while (child) {
    elements.left.removeChild(child);
    child = elements.left.lastElementChild;
  }
  // NO task avaialable text to the left side of the page
  elements.left.insertAdjacentHTML(
    "afterbegin",
    ` <div
        style="height: 100vh; margin-left: 5rem;"
        class="d-flex align-items-center"
      >
        <div class="motivationBox display-2">
          No task available
        </div>
      </div>`
  );
}

// When loading the page do this

window.addEventListener("load", async () => {
  // Create the state.likes
  state.tasks = new Tasks();
  state.weather = new Weather();

  // Store all the data that is in the local storage in the state likes
  state.tasks.readFromLocalStorage();

  // Check if there is data in the state likes and if there is then Render all the date to the screen
  if (state.tasks.getTasks().length !== 0) {
    // console.log(state.tasks.getTasks());
    renderTasks();
    setUpDeleteHandler();
    setupUpdateHandler();
  }

  const weatherData = await getWeatherData();
  console.log(weatherData);
  const output = weatherViews.renderWeather(weatherData.data);
  document
    .querySelector(".welcomeBox")
    .insertAdjacentHTML("afterbegin", output);
});
