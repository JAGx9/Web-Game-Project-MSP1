function Player(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.5;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;
    this.active = true;
    
    this.step = function(){
        if(this.active) {
            //horizontal movement
            if(!leftKey && !rightKey || leftKey && rightKey) {
                this.xspeed *= this.friction;
            } else if (rightKey) {
                this.xspeed ++;
            }else if (leftKey) {
                this.xspeed --;
            }
            //vertical movement

            //speed correction
           if (this.xspeed > this.maxSpeed) {
               this.xspeed = this.maxSpeed;
           } else if (this.xspeed < -this.maxSpeed) {
               this.xspeed = -this.maxSpeed;
           }
            
            this.x += this.xspeed;
            this.y += this.yspeed;
         
        }

    }
    
    
    this.draw = function(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}