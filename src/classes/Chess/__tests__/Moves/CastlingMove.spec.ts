import { describe, it, expect, vi } from 'vitest'
import Piece from "@/classes/Chess/Piece";
import MoveStep from "@/classes/Chess/Moves/MoveStep";
import ChessMove from "@/classes/Chess/Moves/ChessMove";
import DoublePawnMove from "@/classes/Chess/Moves/DoublePawnMove";
import Square from "@/classes/Chess/Square/Square";
import CastlingMove from "@/classes/Chess/Moves/CastlingMove";
import CastlesType from "@/classes/Chess/Moves/CastlesType";


describe('CastlingMove', () => {
    it('it constructs itself', () => {

        const king = new Piece('king','white')
        const rook = new Piece('rook','white')
        const move = new CastlingMove('e1','c1',king, rook, 'Q')

        expect(move).toHaveProperty('oldSquare','e1')
        expect(move).toHaveProperty('newSquare','c1')
        expect(move.movingPiece).toBe(king)
        expect(move.capturedPiece).toBeNull()
        expect(move.rook).toBe(rook)
        expect(move.castlesType).toBeInstanceOf(CastlesType)
        expect(move.castlesType.rooksOldSquare).toEqual('a1')

    })

    it('it gets move steps', () => {
        const king = new Piece('king','white')
        const rook = new Piece('rook','white')
        const move = new CastlingMove('e1','c1',king, rook, 'Q')

        const steps = move.getMoveSteps()
        expect(steps).toEqual([
            new MoveStep('e1',null),
            new MoveStep('c1', king),
            new MoveStep('a1', null),
            new MoveStep('d1', rook)
        ])
    })

    it('it gets undo steps', () => {
        const king = new Piece('king','white')
        const rook = new Piece('rook','white')
        const move = new CastlingMove('e1','c1',king, rook, 'Q')

        const steps = move.getUndoSteps()
        expect(steps).toEqual([
            new MoveStep('c1',null),
            new MoveStep('e1', king),
            new MoveStep('d1', null),
            new MoveStep('a1', rook)
        ])
    })

})
