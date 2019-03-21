class UserService {
    public getAll(): Promise<[]> {
        return new Promise<[]>((resolve, reject) => {
            resolve([]);
        });
    }

    public get(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve({});
        });
    }

    public create(user: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve({});
        });
    }

    public update(user: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve({});
        });
    }

    public delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            resolve();
        });
    }
}

export default new UserService();
