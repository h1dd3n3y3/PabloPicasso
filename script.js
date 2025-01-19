const sideMenu = document.querySelector(".left-panel"); // Select the side menu element
const contentWrapper = document.querySelector(".content-wrapper"); // Select the content wrapper

let activeNavButton = null; // Keep track of the active navigation button

function updateSideMenu(class_name, navButtonId) {
  // Update the side menu based on the top navigation section clicked

  if (activeNavButton !== navButtonId) {
    // Only clear content if a new section is being activated

    const allSections = contentWrapper.querySelectorAll("div"); // Select all sections inside .content-wrapper

    allSections.forEach((section) => {
      // Hide all sections
      section.style.display = "none";
    });

    activeNavButton = navButtonId; // Update the active navigation button
  }

  sideMenu.querySelectorAll("ul").forEach((menu) => {
    // Hide all menus
    menu.style.display = "none";
  });

  const selectedMenu = sideMenu.querySelector(class_name); // Select the menu based on the class name

  if (selectedMenu) {
    // If the menu exists, display it
    selectedMenu.style.display = "block";
  }
}

const navButtons = ["bio", "work", "where", "ref", "admin"]; // List of top navigation buttons

navButtons.forEach((id) => {
  // Add an event listener for all top navigation buttons
  document
    .getElementById(id)
    .addEventListener("click", () => updateSideMenu(`.${id}`, id));
});

// ########################################################################################################

const buttons = document.querySelectorAll(".bio li"); // Select all side menu buttons

buttons.forEach((button) => {
  // Add an event listener for all side menu buttons
  button.addEventListener("click", function () {
    const sectionName = button.id; // Get the section name based on the button clicked
    const allSections = contentWrapper.querySelectorAll("div"); // Select all sections inside .content-wrapper

    allSections.forEach((section) => {
      // Hide all sections inside .content-wrapper
      section.style.display = "none";
    });

    const sectionToShow = contentWrapper.querySelector(`.${sectionName}`); // Select the section to show based on the button clicked
    sectionToShow.style.display = "block"; // Display the section
    contentWrapper.scrollTop = 0; // Scroll to the top of the section
  });
});

// ########################################################################################################
