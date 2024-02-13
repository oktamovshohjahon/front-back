const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("Hello world )");
});

app.get("/users", (req, res) => {
	const users = [
		{
			name: "Sanjar",
			surname: "Hasanboyev",
			job: "Backend developer",
		},
		{
			name: "Shohjahon",
			surname: "Oktamov",
			job: "Learning )",
		},
	];

	res.send(users);
});

app.post("/users", (req, res) => {
	const newUser = {
		name: req.body.name,
		surname: req.body.surname,
		job: req.body.job,
	};

	console.log(newUser);
});

const dev = async () => {
	try {
		const PORT = process.env.PORT || 8080;
		app.listen(PORT, () => {
			console.log(`App has started in http://localhost:${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

dev();
