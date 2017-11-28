class UsersCollection {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        const user = { id, name, room };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    getUser(id) {
        return this.users.filter(user => user.id === id)[0];
    }

    getUserList(room) {
        return this.users
            .filter(user => user.room === room)
            .map(user => user.name);
    }
}

module.exports = { UsersCollection };