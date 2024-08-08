 // 1. Calculadora de BMI
 document.getElementById('heightSlider').addEventListener('input', function() {
    document.getElementById('height').value = this.value;
        });
        function calculateBMI() {

          const weight = parseFloat(document.getElementById('weight').value);
          const height = parseFloat(document.getElementById('height').value);
          if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            document.getElementById('bmiResult').innerText = 'Por favor ingresa valores válidos.';
            return;
          }
          const bmi = weight / (height * height);
          let category = '';
          if (bmi < 18.5) category = 'Bajo peso';
          else if (bmi >= 18.5 && bmi < 24.9) category = 'Normal';
          else if (bmi >= 25 && bmi < 29.9) category = 'Sobrepeso';
          else category = 'Obesidad';
          document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)} - Categoría: ${category}`;
        }
    // 2. Generador de Nombres de Usuario
    function generateUsername() {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          if (!firstName || !lastName) {
            document.getElementById('usernameResult').innerText = 'Por favor ingresa nombre y apellido.';
            return;
          }
          const getRandomPart = (str, length) => str.substring(0, length);
          const firstPartLength = Math.floor(Math.random() * 4) + 1;
          const secondPartLength = Math.floor(Math.random() * 4) + 1;
          const username = getRandomPart(firstName, firstPartLength) + getRandomPart(lastName, secondPartLength) + Math.floor(Math.random() * 100);
          document.getElementById('usernameResult').innerText = `Nombre de Usuario: ${username}`;
        }

    // 5. Agenda Telefónica
    const phonebook = {};

    function addContact() {
      const name = document.getElementById('contactName').value;
      const number = document.getElementById('contactNumber').value;
      phonebook[name] = number;
      document.getElementById('phonebookResult').innerText = `Contacto añadido: ${name} - ${number}`;
    }

    function searchContact() {
      const name = document.getElementById('searchName').value;
      const result = phonebook[name] ? `Número de ${name}: ${phonebook[name]}` : 'Contacto no encontrado.';
      document.getElementById('phonebookResult').innerText = result;
    }

    // 6. Simulador de Lanzamiento de Dados
    function rollDice() {
      const die1 = Math.floor(Math.random() * 6) + 1;
      const die2 = Math.floor(Math.random() * 6) + 1;
      const sum = die1 + die2;
      document.getElementById('diceResult').innerText = `Dados: ${die1} y ${die2}. Suma: ${sum}`;
    }

    // 7. Validador de Dirección de Correo Electrónico
    const existingEmails = ['test@example.com']; // Correos electrónicos ya registrados

function validateEmail() {
  const email = document.getElementById('emailValidator').value;
  const atPos = email.indexOf('@');
  const dotPos = email.lastIndexOf('.');
  const hasNumber = /\d/.test(email);
  const isValid = atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  if (!isValid) {
    document.getElementById('emailValidationResult').innerText = 'Correo no válido: debe tener un @, un punto después del @, y texto válido antes y después.';
  } else if (!hasNumber) {
    document.getElementById('emailValidationResult').innerText = 'Correo no válido: debe contener al menos un número.';
  } else if (existingEmails.includes(email)) {
    document.getElementById('emailValidationResult').innerText = 'Correo ya registrado.';
  } else {
    document.getElementById('emailValidationResult').innerText = 'Correo válido.';
  }
}

    // 8. Calculadora de Propinas
    function calculateTip() {
      const billAmount = parseFloat(document.getElementById('billAmount').value);
      const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
      const tip = (billAmount * tipPercentage) / 100;
      document.getElementById('tipResult').innerText = `Propina: $${tip.toFixed(2)}`;
    }

    // 24. Generador de Contraseñas
    function generatePassword() {
      const length = parseInt(document.getElementById('passwordLength').value);
      const includeUppercase = document.getElementById('includeUppercase').checked;
      const includeNumbers = document.getElementById('includeNumbers').checked;
      const includeSymbols = document.getElementById('includeSymbols').checked;
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
      let characters = lowercase;
      if (includeUppercase) characters += uppercase;
      if (includeNumbers) characters += numbers;
      if (includeSymbols) characters += symbols;
      let password = '';
      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      document.getElementById('passwordResult').innerText = `Contraseña: ${password}`;
    }

    // 26. Piedra, Papel, Tijera, Lagarto, Spock
    function playGame(playerChoice) {
          const choices = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
          const randomChoice = choices[Math.floor(Math.random() * choices.length)];
          if (!playerChoice) {
            playerChoice = choices[Math.floor(Math.random() * choices.length)];
          }
          let result = '';
          if (playerChoice === randomChoice) result = 'Empate';
          else if (
            (playerChoice === 'piedra' && (randomChoice === 'tijera' || randomChoice === 'lagarto')) ||
            (playerChoice === 'papel' && (randomChoice === 'piedra' || randomChoice === 'spock')) ||
            (playerChoice === 'tijera' && (randomChoice === 'papel' || randomChoice === 'lagarto')) ||
            (playerChoice === 'lagarto' && (randomChoice === 'papel' || randomChoice === 'spock')) ||
            (playerChoice === 'spock' && (randomChoice === 'piedra' || randomChoice === 'tijera'))
          ) result = 'Ganaste';
          else result = 'Perdiste';
          document.getElementById('gameResult').innerText = `Elegiste: ${playerChoice}, Computadora eligió: ${randomChoice}. Resultado: ${result}`;
        }

    // 36. Cuenta Atrás
    function startCountdown() {
      let count = parseInt(document.getElementById('countStart').value);
      const interval = parseInt(document.getElementById('countInterval').value) * 1000;
      document.getElementById('countdownResult').innerText = count;
      const countdown = setInterval(() => {
        count--;
        if (count < 0) {
          clearInterval(countdown);
        } else {
          document.getElementById('countdownResult').innerText = count;
        }
      }, interval);
    }

    // 39. La Columna de Excel


    const questions = [
          { question: '¿Cómo prefieres enfrentar los desafíos?', options: ['Con valentía', 'Con astucia', 'Con lealtad', 'Con inteligencia'] },
          { question: '¿Qué valor aprecias más?', options: ['Coraje', 'Ambición', 'Justicia', 'Sabiduría'] },
          // Agrega más preguntas si lo deseas
        ];

        let currentQuestion = 0;
        const answers = [];

        function showQuestion() {
          if (currentQuestion < questions.length) {
            document.getElementById('question').innerText = questions[currentQuestion].question;
            document.querySelectorAll('#sortingHat button').forEach((button, index) => {
              button.innerText = questions[currentQuestion].options[index];
            });
          } else {
            assignHouse();
          }
        }

        function answerQuestion(option) {
          answers.push(option);
          currentQuestion++;
          showQuestion();
        }

        function assignHouse() {
          const houseScores = { Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 };
          // Asigna puntos a las casas según las respuestas (esto es un ejemplo, personalízalo según sea necesario)
          answers.forEach(answer => {
            if (answer === 1) houseScores.Gryffindor += 1;
            if (answer === 2) houseScores.Slytherin += 1;
            if (answer === 3) houseScores.Hufflepuff += 1;
            if (answer === 4) houseScores.Ravenclaw += 1;
          });
          const house = Object.keys(houseScores).reduce((a, b) => houseScores[a] > houseScores[b] ? a : b);
          document.getElementById('sortingResult').innerText = `¡Te ha tocado ${house}!`;
        }

        showQuestion();
    