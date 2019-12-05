export class MyEvent {
    
    
   
    private _id: number;
    
  
    private name: string;
    
   
    private type: string;
    
   
    private members_count: string;
    
    constructor(){
    }
    
    
    public getEventId(): number {
        return this._id;
    }
    
    public setEventId(_id: number) {
        this._id = _id;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = name;
    }
    
    
    
    public getType(): string {
        return this.type;
    }
    
    public setType(type: string) {
        this.type =type;
    }
    
    public getMembersCount(): string {
        return this.members_count;
    }
    
    public setMembersCount(members_count: string) {
        this.members_count= members_count;
    }
    
}