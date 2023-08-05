import type ChessMove from "@/classes/Chess/Move/MoveType/ChessMove";
import type FenNumber from "@/classes/Chess/Board/FenNumber";
import type Squares144 from "@/classes/Chess/Board/Squares144";

export default class MadeMove {

    readonly move: ChessMove

    readonly fenAfter: FenNumber

    readonly halfStepIndex: number

    constructor(move: ChessMove, fenAfter: FenNumber) {
        this.move = move
        this.halfStepIndex = fenAfter.halfStepCounter - 1
        this.fenAfter = fenAfter
    }
}