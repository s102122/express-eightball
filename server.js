const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/answer', (req, res) => {	
	var antwoorden = new Array()
	
	antwoorden[0] = 'It is certain.'
	antwoorden[1] = 'It is decidedly so.'
	antwoorden[2] = 'Without a doubt.'
	antwoorden[3] = 'Yes- definitely.'
	antwoorden[4] = 'You may rely on it.'
	antwoorden[5] = 'As I see it, yes.'
	antwoorden[6] = 'Most Likely.'
	antwoorden[7] = 'Outlook good.'
	antwoorden[8] = 'Yes.'
	antwoorden[9] = 'Signs point to yes.'
	antwoorden[10] = 'Reply hazy, try again.'
	antwoorden[11] = 'Ask again later.'
	antwoorden[12] = 'Better not tell you now.'
	antwoorden[13] = 'Cannot predict now.'
	antwoorden[14] = 'Concentrate and ask again.'
	antwoorden[15] = 'Do not count on it.'
	antwoorden[16] = 'My reply is no.'
	antwoorden[17] = 'My sources say no.'
	antwoorden[18] = 'Outlook not so good.'
	antwoorden[19] = 'Very doubtful.'	
	
	result = antwoorden[Math.floor(Math.random() * 20)]
	
	
	res.render('index.ejs', {antwoord: result})
})
