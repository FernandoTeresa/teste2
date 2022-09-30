export interface iTask {
    id: number;
    name: string;
    time: string;
    completed: boolean;
}

export class Task implements iTask{
    id: number;
    name: string;
    time: string;
    private _completed: boolean = false;

    public get completed(): boolean {
        return this._completed;
    }
    private set completed(value: boolean) {
        this._completed = value;
    }

    constructor(parametros: Task){
        let {id,name,time} = parametros;
        this.id = id;
        this.name = name;
        this.time = time;
    }

    updatename(name:string){
        this.name = name;
    }

    updatetime(time:string){
        this.time = time;
    }

    updatecomplete(completed:boolean){
        this.completed = completed;
    }

}

