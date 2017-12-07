class Clock {
  constructor() {
    let date = new Date();
    // console.log(date);
    this.hrs = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    let that = this;

    // this.printTime();
    setInterval(function(){ that._tick(); }, 1000);
  }
}

Clock.prototype.printTime = function () {
  console.log(`${this.hrs}:${this.min}:${this.sec}`);
}

Clock.prototype._tick = function(){
  this.sec += 1;
  if (this.sec > 59){
    this.sec = 00;
    this.min += 1;
  }
  if (this.min > 59){
    this.min = 00;
    this.hrs += 1;
  }

  if (this.hrs > 23){
    this.hrs = 00;
  }

  this.printTime();
}

const clock = new Clock;
