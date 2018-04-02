window.onload = function() {

var tree = new vxTreeControl("js-treediv");
var rootNode = new vxTreeNode("rootNode", "Root Node");
tree.SetRootNode(rootNode);

var node1 = new vxTreeNode("node1", "World");
var node2 = new vxTreeNode("node2", "Hello There");
var node3 = new vxTreeNode("node3", "Hello Again");
rootNode.Expand();
node1.Expand();
    

rootNode.AddNode(node1);
node1.AddNode(node2);
node1.AddNode(node3);

for(i = 0; i < 10; i++)
{
	var nodei = new vxTreeNode("node_"+i, "node"+i);
	rootNode.AddNode(nodei);
	for(j = 0; j < 5; j++)
	{
		var nodej = new vxTreeNode("node_"+i+"_"+j, "node"+i+"_"+j);
		nodei.AddNode(nodej);
		for(k = 0; k< 3; k++)
		{
			var nodeK = new vxTreeNode("node_"+i+"_"+j+"_"+k, "node"+i+"_"+j+"_"+k);
			nodej.AddNode(nodeK);
		}
	}

}

}