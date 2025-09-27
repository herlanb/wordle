class Wordle {
    constructor() {
        this.words = [
            'PIANO', 'GATOS', 'PERRO', 'CASA', 'LIBRO', 'AGUA', 'FUEGO', 'TIERRA',
            'CIELO', 'NOCHE', 'PLAYA', 'MONTE', 'FLOR', 'ARBOL', 'VERDE', 'AZUL',
            'ROJO', 'NEGRO', 'BLANCO', 'DULCE', 'SALADO', 'FRIO', 'CALOR', 'VIENTO',
            'LLUVIA', 'NIEVE', 'HIELO', 'VAPOR', 'HUMO', 'LLAMA', 'CHISPA', 'RAYO',
            'TRUENO', 'NUBE', 'ESTRELLA', 'LUNA', 'SOL', 'MUNDO', 'VIDA', 'AMOR',
            'FELIZ', 'TRISTE', 'ALEGRE', 'MIEDO', 'VALOR', 'FUERZA', 'PODER', 'MAGIA'
        ];
        
        this.targetWord = this.getRandomWord();
        this.currentRow = 0;
        this.currentTile = 0;
        this.gameOver = false;
        this.guesses = [];
        
        this.initializeGame();
        this.setupEventListeners();
    }
    
    getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
    
    initializeGame() {
        this.createGameBoard();
        this.createKeyboard();
    }
    
    createGameBoard() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            
            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.dataset.row = i;
                tile.dataset.col = j;
                row.appendChild(tile);
            }
            
            gameBoard.appendChild(row);
        }
    }
    
    createKeyboard() {
        const keyboard = document.getElementById('keyboard');
        keyboard.innerHTML = '';
        
        const rows = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BORRAR']
        ];
        
        rows.forEach(row => {
            const keyboardRow = document.createElement('div');
            keyboardRow.className = 'keyboard-row';
            
            row.forEach(key => {
                const keyElement = document.createElement('button');
                keyElement.className = key.length > 1 ? 'key wide' : 'key letter';
                keyElement.textContent = key;
                keyElement.dataset.key = key;
                keyboardRow.appendChild(keyElement);
            });
            
            keyboard.appendChild(keyboardRow);
        });
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        document.getElementById('keyboard').addEventListener('click', (e) => {
            if (e.target.classList.contains('key')) {
                this.handleKeyClick(e.target.dataset.key);
            }
        });
        document.getElementById('new-game').addEventListener('click', () => this.newGame());
    }
    
    handleKeyPress(e) {
        if (this.gameOver) return;
        
        const key = e.key.toUpperCase();
        
        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BACKSPACE') {
            this.deleteLetter();
        } else if (/^[A-ZÑ]$/.test(key)) {
            this.addLetter(key);
        }
    }
    
    handleKeyClick(key) {
        if (this.gameOver) return;
        
        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'BORRAR') {
            this.deleteLetter();
        } else {
            this.addLetter(key);
        }
    }
    
    addLetter(letter) {
        if (this.currentTile < 5) {
            const tile = document.querySelector(`[data-row="${this.currentRow}"][data-col="${this.currentTile}"]`);
            tile.textContent = letter;
            tile.classList.add('filled');
            this.currentTile++;
        }
    }
    
    deleteLetter() {
        if (this.currentTile > 0) {
            this.currentTile--;
            const tile = document.querySelector(`[data-row="${this.currentRow}"][data-col="${this.currentTile}"]`);
            tile.textContent = '';
            tile.classList.remove('filled');
        }
    }
    
    submitGuess() {
        if (this.currentTile !== 5) {
            this.showMessage('Completa la palabra', 'error');
            return;
        }
        
        const guess = this.getCurrentGuess();
        this.guesses.push(guess);
        
        this.checkGuess(guess);
        this.updateKeyboard(guess);
        
        if (guess === this.targetWord) {
            this.showMessage('¡Felicitaciones! Has ganado', 'success');
            this.gameOver = true;
        } else if (this.currentRow === 5) {
            this.showMessage(`Juego terminado. La palabra era: ${this.targetWord}`, 'error');
            this.gameOver = true;
        } else {
            this.currentRow++;
            this.currentTile = 0;
        }
    }
    
    getCurrentGuess() {
        let guess = '';
        for (let i = 0; i < 5; i++) {
            const tile = document.querySelector(`[data-row="${this.currentRow}"][data-col="${i}"]`);
            guess += tile.textContent;
        }
        return guess;
    }
    
    checkGuess(guess) {
        const targetArray = this.targetWord.split('');
        const guessArray = guess.split('');
        const result = new Array(5).fill('absent');
        
        // Marcar letras correctas
        for (let i = 0; i < 5; i++) {
            if (guessArray[i] === targetArray[i]) {
                result[i] = 'correct';
                targetArray[i] = null;
                guessArray[i] = null;
            }
        }
        
        // Marcar letras presentes
        for (let i = 0; i < 5; i++) {
            if (guessArray[i] && targetArray.includes(guessArray[i])) {
                result[i] = 'present';
                targetArray[targetArray.indexOf(guessArray[i])] = null;
            }
        }
        
        // Aplicar estilos a las casillas
        for (let i = 0; i < 5; i++) {
            const tile = document.querySelector(`[data-row="${this.currentRow}"][data-col="${i}"]`);
            setTimeout(() => {
                tile.classList.add(result[i]);
            }, i * 100);
        }
    }
    
    updateKeyboard(guess) {
        const targetArray = this.targetWord.split('');
        const guessArray = guess.split('');
        
        for (let i = 0; i < 5; i++) {
            const letter = guessArray[i];
            const key = document.querySelector(`[data-key="${letter}"]`);
            
            if (!key) continue;
            
            if (letter === targetArray[i]) {
                key.classList.remove('present', 'absent');
                key.classList.add('correct');
            } else if (targetArray.includes(letter) && !key.classList.contains('correct')) {
                key.classList.remove('absent');
                key.classList.add('present');
            } else if (!key.classList.contains('correct') && !key.classList.contains('present')) {
                key.classList.add('absent');
            }
        }
    }
    
    showMessage(text, type) {
        const message = document.getElementById('message');
        message.textContent = text;
        message.className = `message ${type}`;
        message.classList.remove('hidden');
        
        setTimeout(() => {
            message.classList.add('hidden');
        }, 3000);
    }
    
    newGame() {
        this.targetWord = this.getRandomWord();
        this.currentRow = 0;
        this.currentTile = 0;
        this.gameOver = false;
        this.guesses = [];
        
        // Limpiar tablero
        document.querySelectorAll('.tile').forEach(tile => {
            tile.textContent = '';
            tile.className = 'tile';
        });
        
        // Limpiar teclado
        document.querySelectorAll('.key').forEach(key => {
            key.classList.remove('correct', 'present', 'absent');
        });
        
        // Ocultar mensaje
        document.getElementById('message').classList.add('hidden');
    }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new Wordle();
});