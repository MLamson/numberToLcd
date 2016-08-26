import {convertNumber} from "../src/numberToLCD";

describe('Numbers to LCD', () => {
    it('should take number 1 and return LCD 1', () => {
        expect(convertNumber.convert(1)).toBe("   \n  |\n  |");
    });
    it('should take number 2 and return LCD 2', () => {
        expect(convertNumber.convert(2)).toBe(" _ \n _|\n|_ ");
    });
    it('should take number 12 and return LCD 12', () => {
        expect(convertNumber.convert(12)).toBe("    _ \n  | _|\n  ||_ ");
    });
    it('should take number 789 and return LCD 789', () => {
        expect(convertNumber.convert(789)).toBe(" _  _  _ \n  ||_||_|\n  ||_|  |");
    });
});