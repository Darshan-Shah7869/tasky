export const renderTaskList = (tasks) => {
  console.log(tasks);
  const tasksArray = tasks.map((el, index) => {
    return ` <div id=${el.id} class="task">
        <div
        class="taskTitleBox d-flex justify-content-between align-items-center"
      >
        <div class="taskTitle">${index + 1}) ${el.text}</div>
        <div class="taskIconBox">
        <svg  style="margin-top: -2rem; margin-right: 2rem; cursor: pointer"
        class="taskIcon updateIcon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 6L23 1L3 21L1 28L8 26L28 6ZM19 5L24 10L19 5ZM3 21L8 26L3 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        

        <svg
        style="margin-top: -2rem; margin-right: 2rem; cursor: pointer"
        class="taskIcon deleteIcon"
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 47.8125C19.5824 47.8125 13.9071 45.4617 9.72268 41.2773C5.53827 37.0929 3.1875 31.4176 3.1875 25.5C3.1875 19.5824 5.53827 13.9071 9.72268 9.72268C13.9071 5.53827 19.5824 3.1875 25.5 3.1875C31.4176 3.1875 37.0929 5.53827 41.2773 9.72268C45.4617 13.9071 47.8125 19.5824 47.8125 25.5C47.8125 31.4176 45.4617 37.0929 41.2773 41.2773C37.0929 45.4617 31.4176 47.8125 25.5 47.8125ZM25.5 51C32.263 51 38.749 48.3134 43.5312 43.5312C48.3134 38.749 51 32.263 51 25.5C51 18.737 48.3134 12.251 43.5312 7.46878C38.749 2.6866 32.263 0 25.5 0C18.737 0 12.251 2.6866 7.46878 7.46878C2.6866 12.251 0 18.737 0 25.5C0 32.263 2.6866 38.749 7.46878 43.5312C12.251 48.3134 18.737 51 25.5 51V51Z"
          fill="#F6FFEF"
        />
        <path
          d="M34.9664 15.8417C34.9437 15.8637 34.9224 15.8872 34.9026 15.9119L23.8324 30.0165L17.161 23.3419C16.7078 22.9196 16.1084 22.6897 15.4891 22.7007C14.8697 22.7116 14.2788 22.9625 13.8408 23.4005C13.4028 23.8385 13.1519 24.4294 13.141 25.0488C13.1301 25.6681 13.36 26.2675 13.7822 26.7207L22.2164 35.158C22.4436 35.3848 22.7141 35.5635 23.0119 35.6835C23.3097 35.8034 23.6286 35.8622 23.9496 35.8562C24.2705 35.8503 24.587 35.7797 24.8801 35.6488C25.1733 35.5179 25.437 35.3293 25.6557 35.0942L38.3802 19.1886C38.8135 18.7338 39.0504 18.1268 39.0396 17.4988C39.0289 16.8708 38.7715 16.2722 38.323 15.8325C37.8745 15.3927 37.2709 15.1472 36.6428 15.1489C36.0147 15.1507 35.4125 15.3995 34.9664 15.8417V15.8417Z"
          fill="#F6FFEF"
        />
      </svg>
    </div>
   
        </div>
        <div class="taskDescription">
        ${el.description}
        </div>
    </div>
    `;
  });

  const output = tasksArray.join(" ");

  return `<div class="taskBox">
 
    ${tasksArray}
  
</div>`;
};
