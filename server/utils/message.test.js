const expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'John';
        var text = 'Some messsage';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should geneerate message with location url', () => {
        var from = 'Admin';
        var lat = 123;
        var lng = 456;
        var message = generateLocationMessage(from, lat, lng);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            url: 'https://www.google.com/maps?q=123,456'
        });
    });
});
