
function vxTreeControl (divID) {

	// First create the Tree Control
 	this.divID = divID;
    this.tree = document.createElement("DIV");
    this.tree.classList.add("tree-control");

    document.getElementById(divID).appendChild(this.tree);
}


vxTreeControl.prototype.SetRootNode = function(newNode) {
	this.tree.appendChild(newNode.treenode);
};


function vxTreeNode (id, text, icon) {

	// Set up variables
	this.IsChecked = true;

	if(!icon)
	{
		icon = "default";
	}



	// Now create the HTML elements

	// First, the UL
    this.treenode = document.createElement("ul");
    this.treenode.classList.add("tree-node");

	// Next, the Arrow
	//<input type="checkbox" id="toggle">
	//<label for="toggle" class="tree-node-arrow"></label>
    this.arrowInpt = document.createElement("input");
    this.arrowInpt.setAttribute("type", "checkbox");
    
    this.arrowInpt.setAttribute("id", "arw_"+id);
	this.treenode.appendChild(this.arrowInpt);

    this.arrowLabel = document.createElement("label");
    this.arrowLabel.classList.add("tree-node-arrow");
	this.arrowLabel.setAttribute("for", "arw_"+id);
	this.arrowLabel.setAttribute("show", "no");
	this.treenode.appendChild(this.arrowLabel);
	

	//<button class="tree-node-chkbx"><img class="tree-node-chkbx-img"/></button>
	//<span>Hello</span>
    this.CheckBox = document.createElement("button");
    this.CheckBox.classList.add("tree-node-chkbx");
    this.CheckBox.addEventListener("click", function(e) {
    	var img = e.path[0];
    	if(img.getAttribute("status")=="checked")
    	{
    		this.setAttribute("toggle", false); // added line
			img.setAttribute("status", "not-checked"); // added line
    	}
    	else
    	{
    		this.setAttribute("toggle", true); // added line
    		img.setAttribute("status", "checked"); // added line
    	}
    });
    
    this.chkBxImg = document.createElement("img");
    this.chkBxImg.setAttribute("status", "checked"); // added line
    this.chkBxImg.classList.add("tree-node-chkbx-img");
    this.CheckBox.appendChild(this.chkBxImg);
	this.treenode.appendChild(this.CheckBox);

	this.Text = document.createElement("span");	
	this.Text.innerHTML = text;
	this.Text.setAttribute("icon", icon);
	this.treenode.appendChild(this.Text);

}

vxTreeNode.prototype.AddNode = function(newNode) {
	var li = document.createElement("li");
	li.appendChild(newNode.treenode);
	this.treenode.appendChild(li);
	this.arrowLabel.setAttribute("show", "yes");
};


vxTreeNode.prototype.Expand = function(newNode) {
	this.arrowInpt.setAttribute("checked", "checked"); // added line
};

vxTreeNode.prototype.Collapse = function(newNode) {
this.arrowInpt.setAttribute("checked", ""); // added line
};