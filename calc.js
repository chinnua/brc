function calculate(L, B, H, Unit, Ply, GSM) {
    var flute;
    var totalGSM;
    var boardLength;
    var boardBreadth;
    var weight;

    switch (Unit) {
        case "mm":
            L = L * 25.4;
            B = B * 25.4;
            H = H * 25.4;
            break;

        case "cm":
            L = L * 2.54;
            B = B * 2.54;
            H = H * 2.54;
            break;

        default:
            L = L;
            B = B;
            H = H;
            break;
    }

    flute = Math.round((Ply - 1) / 2);
    totalGSM = (Ply * GSM) + (0.4 * GSM) * flute;
    boardLength = B + H + 1;
    boardBreadth = L + B + 2;
    weight = Math.round(((boardLength * boardBreadth * totalGSM) / 1550) * 2);

    return {
        flute: flute,
        totalGSM: totalGSM,
        boardLength: boardLength,
        boardBreadth: boardBreadth,
        weight: weight
    };
}