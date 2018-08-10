function Player(layer, startState){
    // Instance variables
    this.xx = 100;
    this.yy = 100;

    this.sprite = new Square(this.xx, this.yy);

    this.state = startState;

    this.visible = true;
    this.updateCheck = true;

    // Add to layer
    layer.children.push(this);

    // Instance Functions
    this.Draw = function(){
        if (this.visible){
            this.sprite.Draw();
           
        }
    }

    // State machine system
    this.Update = function() {
        if (this.updateCheck) {
            this[this.state](); // 
        }
    }

    //State functions
    this.MoveState = function() {
        this.xx++;
    }

    this.IdleState = function() {

    }

    this.JumpingState = function() {

    }

    this.RunningState = function() {

    }

    this.DeadState = function() {

    }

}
        