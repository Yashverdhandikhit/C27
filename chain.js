class Chain{
    constructor(Body1,Body2){
      var options={ 
        bodyA:Body1.body,
        bodyB: Body2.body,
        length: 100,
        stiffness:0.04
      }
      this.chain=Constraint.create(options);
      World.add(world,this.chain);
        }
        display(){
            var p1,p2;
            p1=this.chain.bodyA.position;
            p2=this.chain.bodyB.position;
        line(p1.x,p1.y,p2.x,p2.y);
    }

}