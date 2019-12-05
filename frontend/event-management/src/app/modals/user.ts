export class User {
    
    
   
    private _id: number;
    
  
    private name: string;
    
   
    private email: string;
    
   
    private password: string;
    
    constructor(){
    }
    
    
    public getUserId(): number {
        return this._id;
    }
    
    public setUserId(_id: number) {
        this._id = _id;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = name;
    }
    
    
    
    public getEmail(): string {
        return this.email;
    }
    
    public setEmail(email: string) {
        this.email = email;
    }
    
    public getPassword(): string {
        return this.password;
    }
    
    public setPassword(password: string) {
        this.password = password;
    }
    
}