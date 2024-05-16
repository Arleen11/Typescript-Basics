abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter :string
    ){}
        abstract getSepia(): void;
        getReelTime(): number{

            return 8;
        }
    }

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode, filter)
        this.burst = burst
    }
    getSepia(): void{
        console.log('sepia');
        
    }
}
const shyam = new Instagram('test', 'Test', 3)
console.log(shyam.getReelTime())