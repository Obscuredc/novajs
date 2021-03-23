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
		this.direction = direction; //in 360 degrees type
		this.height = height;
		this.width = width;
	}
}

class gameObject extends physicsObject {
	constructor (x, y, isAnchored, isCollidable, speed, direction, width, height) {
		super(x, y, isAnchored, isCollidable, speed, direction, width, height);
	}
}


		function nclamp (int, add, max, mode) {
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
		}
		function isPositive (int) {
			if (int >= 0) {
				return true;
			} else {
				return false;
			}
		}
		function isCollisionPoint (objectA, ex, ey) {
			var ax = objectA.x + objectA.width / 2;
			var ay = objectA.y + objectA.height / 2;
			var bx = objectA.x - objectA.width / 2;
			var cy = objectA.y - objectA.height / 2;
			// -------------------------------------
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
		function isCollision (objectA, objectB) {
			var aax = objectA.x + objectA.width / 2;
			var aay = objectA.y + objectA.height / 2;
			var abx = objectA.x - objectA.width / 2;
			var acy = objectA.y - objectA.height / 2
			var bax = objectA.x + objectA.width / 2;
			var bay = objectA.y + objectA.height / 2;
			var bbx = objectA.x - objectA.width / 2;
			var bcy = objectA.y - objectA.height / 2;
				if (
					isCollisionPoint(objectA, bax) == true ||
					isCollisionPoint(objectA, bay) == true ||
					isCollisionPoint(objectA, bbx) == true ||
					isCollisionPoint(objectA, bcy) == true ||
					isCollisionPoint(objectB, aax) == true ||
					isCollisionPoint(objectB, aay) == true ||
					isCollisionPoint(objectB, abx) == true ||
					isCollisionPoint(objectB, acy) == true 
				) {
					return true;
				} else {
					return false;
				}
					}
		function returnCollisionModeTypeIsHorizontalBoolean (objectA, objectB) {
			if (180 - objectA.direction == objectB.direction) {
				return	false;
			} else if (180 - objectA.direction + 360 == objectB.direction) {
				return false;	
			} else {
				return  true;
			}
		}
		function getCollidedAngleForObjectA (objectA, objectB) {
				var a = objectA.direction;
			if (returnCollisionModeTypeIsHorizontalBoolean(objectA, objectB) == true) {
				if (a == 360 || a == 0) {
					return 0;	
				} else if (a == 45) {
					return 135;	
				} else if (a == 90) {
					return 90;	
				} else if (a == 135) {
					return 45;
				} else if (a == 180) {
					return 180;	
				} else if (a == 225) {
					return 315;	
				} else if (a == 270) {
					return 270;
				} else if (a == 315) {
					return 225;	
				} else {
					throw new Error("NovaJS getCollidedAngleError");	
				}
			} else if (returnCollisionModeTypeIsHorizontalBoolean(objectA, objectB) == false) {
				if (a == 360 || a == 0) {
					return 0;	
				} else if (a == 45) {
					return 315;	
				} else if (a == 90) {
					return 90;	
				} else if (a == 135) {
					return 225;
				} else if (a == 180) {
					return 180;	
				} else if (a == 225) {
					return 135;	
				} else if (a == 270) {
					return 270;
				} else if (a == 315) {
					return 45;	
				} else {
					throw new Error("NovaJS getCollidedAngleError");	
				}
			} else {
				throw new Error("NovaJS getCollidedAngleError");	
			}
		}
		function calculateNextFramePosition (objectA, bool_forX) {
			var ax = objectA.x;
			var ay = objectA.y;
			var s = objectA.speed;
			var d = objectA.direction;
			if (d == 0 || d == 360) {
				if (bool_forX == true) {
					return ax + s;
				} else if (bool_forX == false) {
					return ay + 0;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 45) {
				if (bool_forX == true) {
					return s / 2 + ax;
				} else if (bool_forX == false) {
					return s / 2 + ay;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 90) {
				if (bool_forX == true) {
					return ax + 0;
				} else if (bool_forX == false) {
					return ay + s;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 135) {
				if (bool_forX == true) {
					return -1 * s / 2 + ax;
				} else if (bool_forX == false) {
					return s / 2 + ay;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 180) {
				if (bool_forX == true) {
					return -1 * s + ax;
				} else if (bool_forX == false) {
					return ay + 0;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 225) {
				if (bool_forX == true) {
					return -1 * s / 2 + ax;
				} else if (bool_forX == false) {
					return -1 * s / 2 + ay;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 270) {
				if (bool_forX == true) {
					return ax + 0;
				} else if (bool_forX == false) {
					return -1 * s + ay;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else if (d == 315) {
				if (bool_forX == true) {
					return s / 2 + ax;
				} else if (bool_forX == false) {
					return -1 * s / 2 + ay;	
				} else {
					throw new Error("NovaJS calculateNextFramePosition error");
				}
			} else {
				throw new Error("NovaJS incorrect angle applied to object cannot calculate");
			}
		}

function transform (object, x, y) {
	object.x = object.x + x;	
	object.y = object.y + y;
}
function applyVelocity (object, speed, angle) {
	object.speed = speed;
	object.angle = angle;
}
function addVelocity (object, speed) {
	object.speed = object.speed + speed;
}
