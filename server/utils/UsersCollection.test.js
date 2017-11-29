const expect = require('expect');
const UsersCollection = require('./UsersCollection');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new UsersCollection();
        users.users = [{
            id: '1',
            name: 'John',
            room: 'The Marvel fans'
        }, {
            id: '2',
            name: 'Jane',
            room: 'The React fans'
        }, {
            id: '3',
            name: 'Jon',
            room: 'The Marvel fans'
        }];
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should add new user', () => {
        var users = new UsersCollection();
        var user = {
            id: '1',
            name: 'John',
            room: 'The Marvel fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names by room name', () => {
        var userList = users.getUserList('The Marvel fans');
        expect(userList).toEqual(['John', 'Jon']);
    });
});