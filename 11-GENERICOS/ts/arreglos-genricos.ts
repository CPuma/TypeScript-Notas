// Explicito con Generico
let heroes: Array<string> = ["flash", "Batman", "Superman"];
heroes.push("123")
heroes.push(123) // ERROR pro que heroes es un Array de String

// ES IGUAL QUE ::::>

// implicito
let villanos: string[] = ["Lex Luthor", "FlashReverso"]