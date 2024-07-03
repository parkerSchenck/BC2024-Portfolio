let homeHeader = document.querySelector(".home-header");
let aboutMeHeader = document.querySelector(".about-me-header");
let aspirationsHeader = document.querySelector(".aspirations-header");
let skillsHeader = document.querySelector(".skills-header");
let projectsHeader = document.querySelector(".projects-header");
let contactMeHeader = document.querySelector(".contact-me-header");
let aboutMeButton = document.querySelector(".about-me-button");
let aspirationsButton = document.querySelector(".aspirations-button");
let skillsButton = document.querySelector(".skills-button");
let projectsButton = document.querySelector(".projects-button");
let contactMeButton = document.querySelector(".contact-me-button");
let portraitImg = document.querySelector(".portrait-img");
let aspirationsBody = document.querySelector(".aspirations-body");
let contactMeBody = document.querySelector(".contact-me-body");
let skillsBody = document.querySelector(".skills-body");
let homeButton = document.querySelector(".home");
let welcomeHeader = document.querySelector(".welcome-header");
let settings = document.querySelector(".settings")
let darkButton = document.querySelector(".dark-button");
let lightButton = document.querySelector(".light-button");
let plusButton = document.querySelector(".plus-button");
let minusButton = document.querySelector(".minus-button");
let bodyItems = document.querySelector(".body");
let htmlItems = document.querySelector(".html");
let buttonText = document.querySelector("h2");
let projectsRow = document.querySelector(".projects-row");
let projectsColumn = document.querySelector(".projects-column");
let projectsColumn2 = document.querySelector(".projects-column2");
let projectsColumn3 = document.querySelector(".projects-column3");
let aboutMeColumn = document.querySelector(".about-me-column");
let aboutMeRow = document.querySelector(".about-me-row");
let aboutMeColumnMiddle = document.querySelector(".about-me-column.middle");
let aboutMeColumnSide = document.querySelector(".about-me-column.side");
let aboutMeColumnSide2 = document.querySelector(".about-me-column.side2");
let P = document.querySelector(".p");
let P2 = document.querySelector(".p2");
let P3 = document.querySelector(".p3");
let P4 = document.querySelector(".p4");
let sourcesButton = document.querySelector(".sources-button");
let sourcesHeader = document.querySelector(".sources.header");
let sourcesBody = document.querySelector(".sources-body");


homeButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "block"
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "block";
    aspirationsBody.style.display = "none";
    contactMeBody.style.display = "none";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "block";
    projectsRow.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "none";
})


aboutMeButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "block";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "none";
    contactMeBody.style.display = "none";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "block";
    aboutMeRow.style.display = "block";
    aboutMeColumnMiddle.style.display = "block";
    aboutMeColumnSide.style.display = "block";
    aboutMeColumnSide2.style.display = "block";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "none";
})

aspirationsButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "block";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "block"
    contactMeBody.style.display = "none";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "none";
    projectsRow.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "none";
})

skillsButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "block";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "none"
    contactMeBody.style.display = "none";
    skillsBody.style.display = "block";
    welcomeHeader.style.display = "none";
    projectsRow.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "none";
})

projectsButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "block";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "none";
    contactMeBody.style.display = "none";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "none";
    projectsRow.style.display = "block";
    projectsColumn.style.display = "block";
    projectsColumn2.style.display = "block";
    projectsColumn3.style.display = "block";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "none";
})

contactMeButton.addEventListener("click", function() {
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "block";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "none"
    contactMeBody.style.display = "block";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "none";
    projectsRow.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    sourcesHeader.style.display = "none";
    sourcesBody.style.display = "none";
    sourcesButton.style.display = "block";
    
})

darkButton.addEventListener("click", function() {
    htmlItems.style.backgroundImage = "url('https://64.media.tumblr.com/17c959d20b8657d699efeea44760ab02/tumblr_petzq2fidq1uzwgsuo1_400.gif')";
    bodyItems.style.backgroundImage = "url('https://64.media.tumblr.com/17c959d20b8657d699efeea44760ab02/tumblr_petzq2fidq1uzwgsuo1_400.gif')";
    welcomeHeader.style.color = "rgb(225, 255, 159)";
    homeHeader.style.color = "rgb(225, 255, 159)";
    aboutMeHeader.style.color = "rgb(225, 255, 159)";
    aspirationsHeader.style.color = "rgb(225, 255, 159)";
    skillsHeader.style.color = "rgb(225, 255, 159)";
    contactMeHeader.style.color = "rgb(225, 255, 159)";
    projectsHeader.style.color = "rgb(225, 255, 159)";
    aspirationsBody.style.color = "rgb(225, 255, 159)";
    skillsBody.style.color = "rgb(225, 255, 159)";
    contactMeBody.style.color = "rgb(225, 255, 159)";
    settings.style.color = "rgb(225, 255, 159)";
    settings.style.backgroundColor = "rgb(64,64,64)";
    buttonText.style.color = "rgb(225, 255, 159)";
    homeButton.style.color = "rgb(225, 255, 159";
    aboutMeButton.style.color = "rgb(225, 255, 159";
    aspirationsButton.style.color = "rgb(225, 255, 159";
    skillsButton.style.color = "rgb(225, 255, 159";
    projectsButton.style.color = "rgb(225, 255, 159";
    contactMeButton.style.color = "rgb(225, 255, 159";
    homeButton.style.backgroundColor = "rgb(64,64,64)";
    aboutMeButton.style.backgroundColor = "rgb(64,64,64)";
    aspirationsButton.style.backgroundColor = "rgb(64,64,64)";
    skillsButton.style.backgroundColor = "rgb(64,64,64)";
    projectsButton.style.backgroundColor = "rgb(64,64,64)";
    contactMeButton.style.backgroundColor = "rgb(64,64,64)";
    homeButton.style.borderBottomColor = "rgb(225, 255, 159";
    aboutMeButton.style.borderBottomColor = "rgb(225, 255, 159";
    aspirationsButton.style.borderBottomColor = "rgb(225, 255, 159";
    skillsButton.style.borderBottomColor = "rgb(225, 255, 159";
    projectsButton.style.borderBottomColor = "rgb(225, 255, 159";
    contactMeButton.style.borderBottomColor = "rgb(225, 255, 159";
    settings.style.borderColor = "rgb(225, 255, 159)";
    portraitImg.style.borderColor = "rgb(225, 255, 159)";
    projectsRow.style.backgroundColor = "rgb(64,64,64)";
    projectsColumn.style.backgroundColor = "rgb(64,64,64)";
    projectsColumn2.style.backgroundColor = "rgb(64,64,64)";
    projectsColumn3.style.backgroundColor = "rgb(64,64,64)";
    projectsRow.style.color = "rgb(225, 255, 159)";
    projectsColumn.style.color = "rgb(225, 255, 159)";
    projectsColumn2.style.color = "rgb(225, 255, 159)";
    projectsColumn3.style.color = "rgb(225, 255, 159)";
    portraitImg.style.boxShadow = "1px 7px rgb(225, 255, 159, 0.6)";
    settings.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    homeButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aspirationsButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    skillsButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    projectsButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    contactMeButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    projectsRow.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    projectsColumn.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    projectsColumn2.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    projectsColumn3.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeColumn.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeColumnMiddle.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeColumnSide.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeColumnSide2.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aboutMeRow.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    aspirationsBody.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    skillsBody.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";

    aboutMeColumn.style.color = "rgb(225, 255, 159)";
    aboutMeColumnMiddle.style.color = "rgb(225, 255, 159)";
    aboutMeColumnSide.style.color = "rgb(225, 255, 159)";
    aboutMeColumnSide2.style.color = "rgb(225, 255, 159)";
    aboutMeRow.style.color = "rgb(225, 255, 159)";

    aboutMeColumn.style.backgroundColor = "rgb(64,64,64)";
    aboutMeColumnMiddle.style.backgroundColor = "rgb(64,64,64)";
    aboutMeColumnSide.style.backgroundColor = "rgb(64,64,64)";
    aboutMeColumnSide2.style.backgroundColor = "rgb(64,64,64)";
    aboutMeRow.style.backgroundColor = "rgb(64,64,64)";
    skillsBody.style.backgroundColor = "rgb(64,64,64)";
    aspirationsBody.style.backgroundColor = "rgb(64,64,64)";
    sourcesButton.style.color = "rgb(225, 255, 159)";
    sourcesButton.style.backgroundColor = "rgb(64,64,64)";
    sourcesButton.style.boxShadow = "4px 7px rgb(225, 255, 159, 0.6)";
    sourcesButton.style.borderBottomColor = "rgb(225, 255, 159";

    P.style.color = "rgb(225, 255, 159)";
    P2.style.color = "rgb(225, 255, 159)";
    P3.style.color = "rgb(225, 255, 159)";
    P4.style.color = "rgb(225, 255, 159)";
    

})

lightButton.addEventListener("click", function() {
    htmlItems.style.backgroundImage = "url('https://64.media.tumblr.com/4e8a1e46bc0a8b6aa2f533892c472e2d/tumblr_pvyv8x2Ezg1uzwgsuo1_400.gif')";
    bodyItems.style.backgroundImage = "url('https://64.media.tumblr.com/4e8a1e46bc0a8b6aa2f533892c472e2d/tumblr_pvyv8x2Ezg1uzwgsuo1_400.gif')";
    welcomeHeader.style.color = "rgb(37, 4, 249)";
    homeHeader.style.color = "rgb(37, 4, 249)";
    aboutMeHeader.style.color = "rgb(37, 4, 249)";
    aspirationsHeader.style.color = "rgb(37, 4, 249)";
    skillsHeader.style.color = "rgb(37, 4, 249)";
    contactMeHeader.style.color = "rgb(37, 4, 249)";
    projectsHeader.style.color = "rgb(37, 4, 249)";
    aspirationsBody.style.color = "rgb(37, 4, 249)";
    skillsBody.style.color = "rgb(37, 4, 249)";
    contactMeBody.style.color = "rgb(37, 4, 249)";
    settings.style.color = "rgb(37, 4, 249)";
    settings.style.backgroundColor = "white";
    buttonText.style.color = "rgb(37, 4, 249)";
    homeButton.style.color = "rgb(37, 4, 249)";
    aboutMeButton.style.color = "rgb(37, 4, 249)";
    aspirationsButton.style.color = "rgb(37, 4, 249)";
    skillsButton.style.color = "rgb(37, 4, 249)";
    projectsButton.style.color = "rgb(37, 4, 249)";
    contactMeButton.style.color = "rgb(37, 4, 249)";
    homeButton.style.backgroundColor = "white";
    aboutMeButton.style.backgroundColor = "white";
    aspirationsButton.style.backgroundColor = "white";
    skillsButton.style.backgroundColor = "white";
    projectsButton.style.backgroundColor = "white";
    contactMeButton.style.backgroundColor = "white";
    homeButton.style.borderBottomColor = "rgb(37, 4, 249)";
    aboutMeButton.style.borderBottomColor = "rgb(37, 4, 249)";
    aspirationsButton.style.borderBottomColor = "rgb(37, 4, 249)";
    skillsButton.style.borderBottomColor = "rgb(37, 4, 249)";
    projectsButton.style.borderBottomColor = "rgb(37, 4, 249)";
    contactMeButton.style.borderBottomColor = "rgb(37, 4, 249)";
    settings.style.borderColor = "rgb(37, 4, 249)";
    portraitImg.style.borderColor = "rgb(37, 4, 249)"
    projectsRow.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    projectsColumn.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    projectsColumn2.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    projectsColumn3.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    projectsRow.style.color = "rgb(37, 4, 249)";
    projectsColumn.style.color = "rgb(37, 4, 249)";
    projectsColumn2.style.color = "rgb(37, 4, 249)";
    projectsColumn3.style.color = "rgb(37, 4, 249)";
    portraitImg.style.boxShadow = "1px 7px rgb(37, 4, 249, 0.6)";
    settings.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6";
    homeButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aspirationsButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    skillsButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    projectsButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    contactMeButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    projectsRow.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    projectsColumn.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    projectsColumn2.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    projectsColumn3.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeColumn.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeColumnMiddle.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeColumnSide.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeColumnSide2.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aboutMeRow.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    aspirationsBody.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    skillsBody.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";

    aboutMeColumn.style.color = "rgb(37, 4, 249)";
    aboutMeColumnMiddle.style.color = "rgb(37, 4, 249)";
    aboutMeColumnSide.style.color = "rgb(37, 4, 249)";
    aboutMeColumnSide2.style.color = "rgb(37, 4, 249)";
    aboutMeRow.style.color = "rgb(37, 4, 249)";

    aboutMeColumn.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    aboutMeColumnMiddle.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    aboutMeColumnSide.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    aboutMeColumnSide2.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    aboutMeRow.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    skillsBody.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    aspirationsBody.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    sourcesButton.style.color = "rgb(37, 4, 249)";
    sourcesButton.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    sourcesButton.style.boxShadow = "4px 7px rgb(37, 4, 249, 0.6)";
    sourcesButton.style.borderBottomColor = "rgb(37, 4, 249)";

    P.style.color = "rgb(21, 0, 159)";
    P2.style.color = "rgb(21, 0, 159)";
    P3.style.color = "rgb(21, 0, 159)";
    P4.style.color = "rgb(21, 0, 159)";
    
})

plusButton.addEventListener("click", function() {
    welcomeHeader.style.fontSize = "xx-large";
    homeHeader.style.fontSize = "xx-large";
    aboutMeHeader.style.fontSize = "xx-large";
    aspirationsHeader.style.fontSize = "xx-large";
    skillsHeader.style.fontSize = "xx-large";
    projectsHeader.style.fontSize = "xx-large";
    contactMeHeader.style.fontSize = "xx-large";
    aspirationsBody.style.fontSize = "xx-large";
    skillsBody.style.fontSize = "xx-large";
    contactMeBody.style.fontSize = "xx-large";
    homeButton.style.fontSize = "x-large";
    aboutMeButton.style.fontSize = "x-large";
    aspirationsButton.style.fontSize = "x-large";
    skillsButton.style.fontSize = "x-large";
    projectsButton.style.fontSize = "x-large";
    contactMeButton.style.fontSize = "x-large";


})

minusButton.addEventListener("click", function() {
    welcomeHeader.style.fontSize = "x-large";
    homeHeader.style.fontSize = "x-large";
    aboutMeHeader.style.fontSize = "x-large";
    aspirationsHeader.style.fontSize = "x-large";
    skillsHeader.style.fontSize = "x-large";
    projectsHeader.style.fontSize = "x-large";
    contactMeHeader.style.fontSize = "x-large";
    aspirationsBody.style.fontSize = "x-large";
    skillsBody.style.fontSize = "x-large";
    contactMeBody.style.fontSize = "x-large";
    homeButton.style.fontSize = "large";
    aboutMeButton.style.fontSize = "large";
    aspirationsButton.style.fontSize = "large";
    skillsButton.style.fontSize = "large";
    projectsButton.style.fontSize = "large";
    contactMeButton.style.fontSize = "large";


})

contactMeButton.addEventListener("mouseOver", function() {
    contactMeButton.style.opacity = 1
})

sourcesButton.addEventListener("click", function() {
    sourcesHeader.style.display = "block";
    sourcesBody.style.display = "block";
    sourcesButton.style.display = "none";
    aboutMeHeader.style.display = "none";
    homeHeader.style.display = "none";
    aspirationsHeader.style.display = "none";
    skillsHeader.style.display = "none";
    projectsHeader.style.display = "none";
    contactMeHeader.style.display = "none";
    portraitImg.style.display = "none";
    aspirationsBody.style.display = "none"
    contactMeBody.style.display = "none";
    skillsBody.style.display = "none";
    welcomeHeader.style.display = "none";
    projectsRow.style.display = "none";
    projectsColumn.style.display = "none";
    projectsColumn2.style.display = "none";
    projectsColumn3.style.display = "none";
    aboutMeColumn.style.display = "none";
    aboutMeRow.style.display = "none";
    aboutMeColumnMiddle.style.display = "none";
    aboutMeColumnSide.style.display = "none";
    aboutMeColumnSide2.style.display = "none";
    
})