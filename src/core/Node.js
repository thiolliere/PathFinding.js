/**
 * A node in grid. 
 * This class holds some basic information about a node and custom 
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node on the grid.
 * @param {number} y - The y coordinate of the node on the grid.
 * @param {boolean} [walkable] - Whether this node is walkable.
 */
function Node(x, y, walkable) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * Whether this node can be walked through.
     * @type boolean
     */
    this.walkable = (walkable === undefined ? true : walkable);

	/**
	 * key of not used Node
	 * @type {Array<string>}
	 */
	this.virginKeys = ["x","y","walkable","virginKeys"];
}

Node.prototype.clean = function() {
	var key;
	for (key in this) {
		if (this.virginKeys.indexOf(key) === -1) {
			this[key] = undefined;
		}
	};
}

module.exports = Node;
