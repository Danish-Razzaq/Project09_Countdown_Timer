class CountdownTimer {
    private targetTime: Date;
    private intervalId: NodeJS.Timeout | null;

    constructor(targetTime: Date) {
        this.targetTime = targetTime;
        this.intervalId = null;
    }

    public start() {
        this.intervalId = setInterval(() => {
            const now = new Date();
            const timeLeftMs = this.targetTime.getTime() - now.getTime();
            if (timeLeftMs <= 0) {
                this.stop();
                console.log("Countdown complete!");
            } else {
                console.log(`Time left: ${timeLeftMs}ms`);
            }
        }, 1000);
    }

    public stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}


const targetTime = new Date(Date.now() + 6 * 1000); // 6 seconds from now
const timer = new CountdownTimer(targetTime);
timer.start();