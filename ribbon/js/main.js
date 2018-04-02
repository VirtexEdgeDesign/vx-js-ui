window.onload = function() {
	
    var ribbon = new RibbonControl("ribbondiv");
    var irisTab = new RibbonTab("Iris");
    var mainTab = new RibbonTab("Main");
    var viewTab = new RibbonTab("View");
    var toolTab = new RibbonTab("Tools");

    ribbon.addTab(irisTab);
    ribbon.addTab(mainTab);
    ribbon.addTab(viewTab);
    ribbon.addTab(toolTab);

    var mainGroup = new RibbonGroup("Main");
    mainTab.addItem(mainGroup);

    var aboutGroup = new RibbonGroup("About");
    mainTab.addItem(aboutGroup);
    aboutGroup.control.style.width = "120px";

    // Iris Tab
    irisTab.tabBtn.addEventListener("click", function() {
          console.log("Iris Clicked");
      });
    mainTab.tabBtn.click();

    

    // Add in Controls
    var newBtn = new RibbonButton("New", "new_32", false);
    mainGroup.addItem(newBtn);
    var openBtn = new RibbonButton("Open", "open_32", false);

    openBtn.control.addEventListener("click", function() {
          console.log("Open Clicked");
      });

    mainGroup.addItem(openBtn);
    mainGroup.addItem(new RibbonButton("Save", "save"));
    mainGroup.addItem(new RibbonButton("Save As", "saveas"));
    mainGroup.addBreak();
    mainGroup.addItem(new RibbonButton("Import", "import"));
    mainGroup.addItem(new RibbonButton("Export", "export"));
    //mainGroup.addSeperator();

    var drpdwn= new RibbonDropdown("Save As");
    aboutGroup.addItem(drpdwn);
    drpdwn.addItem("Item 1", "save");
    drpdwn.addItem("Item 2", "export");
    drpdwn.addItem("Item 3");
    drpdwn.addItem("Item 4");
    drpdwn.addItem("Item 5", "save");

function SendMessage(e) {
	console.log(e);
}
    document.addEventListener("OnRibbonSelectionChange", SendMessage, false);
    
    aboutGroup.addItem(new RibbonButton("Save As"));
    aboutGroup.addItem(new RibbonButton("Save As"));
    aboutGroup.addItem(new RibbonButton("Save As"));
    aboutGroup.addItem(new RibbonButton("Save As"));



    ribbon.init();

}