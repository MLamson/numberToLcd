
export class convertNumber {
    static convert(input: any): string {

        let convertTable: any = {
            1: ["   ",
                "  |",
                "  |"],
            2: [" _ ",
                " _|",
                "|_ "],
            7: [" _ ",
                "  |",
                "  |"],
            8: [" _ ",
                "|_|",
                "|_|"],
            9: [" _ ",
                "|_|",
                "  |"]
        }

        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

            for (let digit of input.toString()) {
                top += convertTable[digit][0];
                middle += convertTable[digit][1];
                bottom += convertTable[digit][2];
            }


        return top + "\n" + middle + "\n" + bottom;

    }
}
