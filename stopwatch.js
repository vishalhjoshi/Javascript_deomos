function Stopwatch() {
    let duration = 0,
        startTime, endTime, running;
    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
        set: function (val) {
            duration = val
        }
    })
    Object.defineProperty(this, "running", {
        get: function () {
            return running;
        },
        configurable: true
    })
    Object.defineProperty(this, "startTime", {
        get: function () {
            return startTime;
        },
        configurable: true
    })
    Object.defineProperty(this, "endTime", {
        get: function () {
            return endTime;
        },
        configurable: true
    })

}

Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error("Stopwatch Runnig Allredy");
    this.running = true
    // Object.defineProperty(this, "running", {
    //     set: function () {
    //         this.running = true
    //     }
    // })
    this.startTime = new Date();
    // Object.defineProperty(this, "startTime", {
    //     set: new Date()
    // })
}

Stopwatch.prototype.end = function () {
    if (!(this.running))
        throw new Error("Stopwatch Not started yet..");
    this.running = false;
    // Object.defineProperty(this, "running", {
    //     set: false
    // })
    this.endTime = new Date();
    // Object.defineProperty(this, "endTime", {
    //     set: new Date()
    // })
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;

    // Object.defineProperty(this, "duration", {
    //     set: (this.duration + seconds)
    // })
}

Stopwatch.prototype.reset = function () {
    this.duration = 0;
    // Object.defineProperty(this, "duration", {
    //     set: 0
    // })
    this.startTime = null;
    // Object.defineProperty(this, "startTime", {
    //     set: null
    // })
    this.endTime = null;
    // Object.defineProperty(this, "endTime", {
    //     set: null
    // })
    this.running = false
    // Object.defineProperty(this, "running", {
    //     set: false
    // })
}

const sw = new Stopwatch()