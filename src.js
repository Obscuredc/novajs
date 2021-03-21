class Vector2 {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
}

/**
		Useful Diagram
	Width (x)
	+---+ 
	|   | Height (y)
	|   | 
	+---+
	
**/

class physicsObject {
	constructor (x, y, isAnchored, isCollidable, speed, direction, width, height) {
		this.x = x;
		this.y = y;
		this.isAnchored = isAnchored;
		this.isCollidable = isCollidable;
		this.speed = speed;
		this.direction = direction;
		this.height = height;
		this.width = width;
	}
}

var nova = {
	"helper" : {
		nclamp : function (int, add, max, mode) {
			if (mode == true) {
				if (int + add > max) {
					return int + add - max;
				} else {
					return int + add;
				}
			} else if (mode == false) {
				if (int - add < 0) {
					return max - add + int;
				} else {
					return int - add;
				}
			}
		},
		isPositive : function (int) {
			if (int >= 0) {
				return true;
			} else {
				return false;
			}
		}
	},
	"physics" : {
		isCollision : function (objectA, objectB) {
			var ax = objectA.x + objectA.width / 2;
			var ay = objectA.y + objectA.height / 2;
			var bx = objectA.x - objectA.width / 2;
			var cy = objectA.y - objectA.height / 2;
			// -------------------------------------
			var ex = objectB.x;
			var ey = objectB.y;
				if (
					ex >= bx &&
					ex <= ax &&
					ey >= cy &&
					ey <= ay
				) {
					return true;
				} else {
					return false;
				}
		}
	}
}
